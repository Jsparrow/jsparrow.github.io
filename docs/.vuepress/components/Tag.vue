<template>
  <div>

    <p>List of rules with this tag:</p>
    <ul>
      <li v-for="page in pagesForTag">
        <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: ["tagName"],
  computed: {
    pagesForTag() {
      let pages = [];
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag === this.tagName) {
            pages.push({ title: page.title, path: page.path });
          }
        }
      }

      function compare(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      }

      return pages.sort(compare);
    }
  },
};
</script>

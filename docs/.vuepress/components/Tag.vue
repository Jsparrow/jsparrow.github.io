<template>
  <div>
    <p>{{ tagName }}</p>

    <ul>
      <li v-for="page in getPagesForTag">
        <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
      </li>
    </ul>

    ---------

    <ul>
      <li v-for="page in getPagesForTagFull">
        <router-link :to="{ path: page.path }">{{ page.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["tagName"],
  computed: {
    getPagesForTag() {
      let pages = [];
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag === this.tagName) {
            pages.push({ title: page.title, path: page.path });
          }
        }
      }
      return pages;
    },
    getPagesForTagFull() {
      let pages = [];
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag === this.tagName) {
            pages.push(page);
          }
        }
      }
      return pages;
    },
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
}
</style>

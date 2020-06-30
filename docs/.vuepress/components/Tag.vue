<template>
  <div>
    <p>{{ tagName }}</p>

    <ul>
      <li v-for="page in getPagesForTag">
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
    }
  }
};
</script>

<style scoped>
button {
  background-color: #4caf50;
}
</style>

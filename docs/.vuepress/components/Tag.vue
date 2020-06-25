<template>
  <div>
    <p>{{ tagName }}</p>

    <ul>
      <li v-for="page in Object.keys(getPagesForTag)">
        <router-link :to="{ path: page.path }">{{ page }}</router-link>
      </li>
    </ul>

    <p>{{ getTags }}</p>
  </div>
</template>

<script>
export default {
  props: ["tagName"],
  computed: {
    getTags() {
      let tags = {};
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];
          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }
      return tags[this.tagName];
    },
    getPagesForTag() {
      let pages = '';
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const currentPage = page.frontmatter.tags[index];
          if (currentPage === this.tagName) {
            pages = page.title
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

<template lang="html">
  <div>
    <span v-for="tag in Object.keys(tags)">
        <router-link :to="{ path: `/tags.html#${tag}`}">{{tag}}</router-link>
        &nbsp;
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {}
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (tag in tags) {
            tags[tag].push(page)
          } else {
            tags[tag] = [page]
          }
        }
      }
      return tags
    }
  }
}
</script>

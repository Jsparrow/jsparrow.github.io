<template lang="html">
  <div>
    <p>
      <router-link
        v-for="(tag, index) in Object.keys(tags)"
        :key="tag"
        :to="{ path: `/tags.html#${tag}`}">
        {{tag}}<span v-if="index+1 < Object.keys(tags).length">, </span>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
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
      return tags;
    }
  }
};
</script>

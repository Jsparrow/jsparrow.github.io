<template lang="html">
  <div>
    <p>
      <router-link
        v-for="(tag, index) in $page.frontmatter.tags"
        :key="tag"
        :to="{ path: '/tags/', hash: findPath(tag)}">
        {{tag}}<span v-if="index+1 < $page.frontmatter.tags.length">, </span>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    findPath : function(tag) {
      // this regex is always used to create a unique id for a tag
      var id = tag.replace(/[^A-Z0-9]+/ig, "-");
      return `#` + id.toLowerCase();
    }
  }
}
</script>

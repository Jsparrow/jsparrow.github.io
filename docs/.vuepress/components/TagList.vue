<template lang="html">
  <div>
    <span v-for="tag in Object.keys(tags)">
      <h2 :id="findTagId(tag)">
        <router-link
          :to="{ path: findPath(tag)}"
          class="header-anchor"
          aria-hidden="true">#</router-link>
        {{tag}}
      </h2>
      <ul>
        <li v-for="page in tags[tag]">
          <router-link
            :to="{ path: page.path}">{{page.title}}</router-link>
        </li>
      </ul>
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
          if(tag != "Rule") {
            if (tag in tags) {
              tags[tag].push(page)
            } else {
              tags[tag] = [page]
            }
          }
        }
      }
      return tags
    }
  }, 

  methods: {
    findTagId : function(tag) {
      // this regex is always used to create a unique id for a tag
      var id = tag.replace(/[^A-Z0-9]+/ig, "_");
      return id;
    }, 
    findPath : function(tag) {
      return `/tags.html#` + this.findTagId(tag);
    }
  }
}
</script>

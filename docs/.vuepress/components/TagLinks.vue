<template lang="html">
  <div>
    <p>
      <router-link
        v-for="(tag, index) in $page.frontmatter.tags"
        :key="tag"
        :to="{ path: `/tags.html#${tag}`}">
        {{tag}}<span v-if="index+1 < $page.frontmatter.tags.length">, </span>
      </router-link>
    </p>
  </div>
</template>

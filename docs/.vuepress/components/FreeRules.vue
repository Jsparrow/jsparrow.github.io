<template>
<div>

    <table>
      <thead>
        <tr>
          <th> </th>
          <th>Rule Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rule, index) in freeRules">
          <td>{{ index + 1 }}</td>
          <td><router-link :to="rule.path"> {{ rule.frontmatter.title }} </router-link></td>
        </tr>
      </tbody>
    </table>

</div>
</template>

<script>
export default {
    computed: {
        freeRules() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/rules/') && !x.frontmatter.rules_index)
                .filter(x => x.frontmatter.tags.includes('Free'))
                .sort((a, b) => b.frontmatter.title < a.frontmatter.title);
        } 
    }, 
}
</script>

<style >

table {
  border: none;
}

th, td {
  border: none;
  text-align: left;
}

</style>



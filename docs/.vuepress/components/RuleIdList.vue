<template>
<v-app>
<div>
   <table>
      <thead>
        <tr>
          <th>Rule Name</th>
          <th>Rule ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rule, index) in rules">
          <td><router-link :to="rule.path">{{ rule.frontmatter.title}} </router-link></td>
          <td>{{ rule.frontmatter.ruleId }}</td>
        </tr>
      </tbody>
    </table>
</div>
</v-app>
</template>

<script>
export default {
   computed: {
        rules() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/rules/') && !x.frontmatter.rules_index)
               // .sort((a, b) => b.frontmatter.title < a.frontmatter.title);
                .sort((a, b) => ('' + a.frontmatter.title).localeCompare(b.frontmatter.title));
        } 
    }
}
</script>

<template>
<ul>
    <div v-for="rule in rules">
        <li>
            <router-link :to="rule.path">{{ rule.frontmatter.title }}</router-link>
        </li>
    </div>
</ul>
</template>

<script>
export default {
    computed: {
        rules() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/rules/') && !x.frontmatter.rules_index && x.frontmatter.defaultConfiguration)
                .sort((a, b) => b.frontmatter.title < a.frontmatter.title);
        } 
    }
}
</script>


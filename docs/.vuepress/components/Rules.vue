<template>
<div>
    <div v-for="rule in rules">
        <h3>
            <router-link :to="rule.path">{{ rule.frontmatter.title }}</router-link>
        </h3>
        
        <p>{{ rule.frontmatter.description }}</p>

        <p><router-link :to="rule.path">Read more</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        rules() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/rules/') && !x.frontmatter.rules_index)
                .sort((a, b) => b.frontmatter.title < a.frontmatter.title);
        }
    }
}
</script>


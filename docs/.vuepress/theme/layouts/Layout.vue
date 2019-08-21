<template>
  <ParentLayout>
    <PageFooter slot="page-bottom" />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import PageFooter from "@theme/components/PageFooter.vue";

export default {
  components: {
    ParentLayout,
    PageFooter
  }
};
</script>
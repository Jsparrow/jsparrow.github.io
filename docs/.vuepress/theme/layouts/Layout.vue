<template>
  <ParentLayout>
    <PageFooter slot="page-bottom" />
    <BuyLink slot="page-bottom" />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import PageFooter from "@theme/components/PageFooter.vue";
import BuyLink from "@theme/components/BuyLink.vue";

export default {
  components: {
    ParentLayout,
    PageFooter,
    BuyLink
  }
};
</script>
<template>
  <v-app>
    <div class="buy-link" id="buy">
      <v-btn color="#00000" href="https://jsparrow.io/report-an-issue" target="_blank" v-on:click="onSupportClick">
        Support
        <v-icon right dark small class=".v-icon--right">help</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>
<script>
  export default {
    methods: {
      onSupportClick($event) {
        gtag("event", "support_btn_clicked", {
          event_location: window.location.href,
        });
      },
      tryFreeClick($event) {
        gtag("event", "trial_btn_clicked", {
          trial_key: "interested",
          event_location: window.location.href,
        });
      },
    },
  };
</script>
<style lang="stylus">
@import '../../../../node_modules/vuetify/src/stylus/components/_buttons.styl';
@import '../../../../node_modules/vuetify/src/stylus/components/_icons.styl';
@import '../../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';

.buy-link {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
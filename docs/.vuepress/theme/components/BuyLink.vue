<template>
  <v-app>
    <div class="buy-link" id="buy">
      <v-btn color="info" href="https://jsparrow.eu/schedule-demo/" target="_blank" v-on:click="scheduleDemoFunction">
        Schedule Demo
        <v-icon right dark small class=".v-icon--right">apps</v-icon>
      </v-btn>
      <v-btn
        color="success"
        href="https://order.shareit.com/cart/new?vendorid=200267175&PRODUCT%5B300770603%5D=1"
        target="_blank"
        v-on:click="buyNowFunction"
      >
        Buy Now
        <v-icon right dark small class=".v-icon--right">add_shopping_cart</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>
<script>
  export default {
    methods: {
      scheduleDemoFunction($event) {
        gtag("event", "schedule demo", {
          event_label: "button",
          event_category: window.location.href,
        });
      },
      buyNowFunction($event) {
        gtag("event", "buy now", {
          event_label: "button",
          event_category: window.location.href,
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
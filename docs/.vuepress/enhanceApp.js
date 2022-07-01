import Vuetify from 'vuetify';
import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify)
}

Vue.use(VueGtag, { config: { id: "G-B39Q6TLDBR" } });
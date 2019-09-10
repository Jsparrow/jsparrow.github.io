import Vuetify from 'vuetify';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);

  // routes for redirecting to the correct page after getting rid of /github/
  router.addRoutes([
    { path: '/github/statistics.html', redirect: '/statistics/statistics.html' },
    { path: '/github/mdm-statistics.html', redirect: '/statistics/mdm-statistics.html' },
    { path: '/github/jenkins-statistics.html', redirect: '/statistics/jenkins-statistics.html' },
    { path: '/github/neo4j-statistics.html', redirect: '/statistics/neo4j-statistics.html' },
    { path: '/github/', redirect: '/cloud/getting-started.html' }
  ])
}
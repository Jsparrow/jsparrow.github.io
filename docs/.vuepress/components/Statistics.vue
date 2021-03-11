<template>
<div>

  <div class="tab" v-on:load="openFirstProject()">
    <button class="tablinks" v-for="(project, index) in statistics" v-bind:id="project.projectName" v-on:click="openProject(index, project.projectName)"> {{project.projectName}}
            </button>
  </div>

  <div v-for="(project, index) in statistics" v-bind:id="index" class="tabcontent">

    <h2>jSparrow results for {{project.projectName}}</h2>

    <p>Metrics for {{project.projectName}} (created on {{timestampToDate(project.timestampGitHubStart)}}):</p>

    <template>
      <StatisticsSummaryTable v-bind:project="project" />
    </template>

    <h3 id="per-rule">Per Rule Statistics</h3>

    This table contains the list of rules that were applied on {{project.projectName}}.

    <template>
      <StatisticsTable v-bind:project="project" />
    </template>

    <hr/>
    <br/>
  </div>
</div>
</template>

<style lang="stylus">
@import '../../../node_modules/vuetify/src/stylus/components/_data-table.styl';
@import '../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';


.theme--light.application {
  background: #ffffff;
}
/* Style the tab */

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */

.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */

.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */

.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>

<script>
export default {

  name: 'Statistics',

  components: {
    StatisticsSummaryTable: () => import('./StatisticsSummaryTable.vue'),
    StatisticsTable: () => import('./StatisticsTable.vue')
  },

  props: {
    statistics: Array
  },
  
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
    },

    rules() {
      return this.$site.pages
          .filter(x => x.path.startsWith('/rules/') && !x.frontmatter.rules_index);
    }
  },

  methods: {
    openProject: function(index, project) {
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(index).style.display = "block";
      document.getElementById(project).className += " active";

      this.updateAddressBar(project);
    },

    updateAddressBar: function(project) {
      // Clear all query strings on the address bar
      var uri = window.location.toString();
      var index = uri.length;
      if (uri.indexOf("?") > 0) {
        index =  uri.indexOf("?");
      }
      var clean_uri = uri.substring(0, index) + "?p=" + project;
      window.history.replaceState({}, document.title, clean_uri);
    },

    openFirstProject: function() {
      var urlParams = new URLSearchParams(window.location.search);
      var id = urlParams.get('p');
      if(id == null || !this.statistics.some(item => item.projectName === id)) {
        id = this.statistics[0].projectName;
      }

      document.getElementById(id).click();
      this.updateAddressBar(id);
    },

    secondsToHms: function (d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      // always show minutes, add comma and seconds if they are not 0
      var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

      var text = [hDisplay, mDisplay, sDisplay].filter(Boolean).join(", ");
      return text;
    },

    timestampToDate: function(timestamp) {
      var d = new Date(timestamp*1000);
      return d.getDate() + "." + (d.getMonth() + 1) + "." + (d.getYear() + 1900);
    },
  },

  mounted() {
    this.openFirstProject();
  }
};
</script>

<template>
  <div>
    <template>
      <StatisticsSummaryTable
        v-bind:project="aggregatedProject"
        v-bind:isSummary="true"
      />
    </template>
  </div>
</template>

<script>
export default {

  name: 'StatisticsSummary',

  components: { 
    StatisticsSummaryTable: () => import('./StatisticsSummaryTable.vue') 
  }, 

  data() {
    return {
      statistics: require("../statistics.js"),
    };
  },

  computed: {
    aggregatedProject: function () {
      var totalTimeSaved = 0,
        totalIssuesFixed = 0,
        totalFilesChanged = 0,
        totalFilesCount = 0,
        totalRunTime = 0;

      for (var i = 0; i < this.statistics.length; i++) {
        totalTimeSaved += this.statistics[i].totalTimeSaved;
        totalIssuesFixed += this.statistics[i].totalIssuesFixed;
        totalFilesChanged += this.statistics[i].totalFilesChanged;
        totalFilesCount += this.statistics[i].totalFilesCount;
        totalRunTime +=
          this.statistics[i].timestampJSparrowFinish -
          this.statistics[i].timestampGitHubStart;
      }

      var project = new Object();
      project.totalTimeSaved = totalTimeSaved;
      project.totalIssuesFixed = totalIssuesFixed;
      project.totalFilesChanged = totalFilesChanged;
      project.totalFilesCount = totalFilesCount;
      project.timestampGitHubStart = 0;
      project.timestampJSparrowFinish = totalRunTime;
      return project;
    },
  }
};
</script>
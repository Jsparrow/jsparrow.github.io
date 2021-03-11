<template>
  <div>
    <h2>Combined Results</h2>

    <template>
      <StatisticsTable v-bind:project="aggregatedRules" />
    </template>

  </div>
</template>

<script>
export default {

  name: 'StatisticsSummaryAll',

  components: {
    StatisticsTable: () => import('./StatisticsTable.vue')
  },

  data() {
    return {
      statistics: require("../statistics.js"),
      headers: [
        { text: "Rule Name", value: "ruleId", align: "center" },
        { text: "Issues Fixed", value: "issuesFixedCount", align: "center" },
        { text: "Files Changed", value: "fileCount", align: "center" },
        { text: "Time saved", value: "remediationCost", align: "center" },
      ],
      ruleCache: {},
    };
  },

  computed: {
    aggregatedRules: function () {
      var uniqueRules = [];

      for (var i = 0; i < this.statistics.length; i++) {
        for (var j = 0; j < this.statistics[i].rules.length; j++) {
          const currentRule = this.statistics[i].rules[j];
          const ruleIndex = uniqueRules.findIndex(
            (x) => x.ruleId == currentRule.ruleId
          );
          if (ruleIndex === -1) {
            uniqueRules.push(currentRule);
          } else {
            uniqueRules[ruleIndex].fileCount += currentRule.fileCount;
            uniqueRules[ruleIndex].issuesFixedCount +=
              currentRule.issuesFixedCount;
            uniqueRules[ruleIndex].remediationCost +=
              currentRule.remediationCost;
          }
        }
      }
      var project = new Object();
      project.rules = uniqueRules;
      return project;
    }
  }
};
</script>
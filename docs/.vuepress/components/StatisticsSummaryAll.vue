<template>
  <div>
    <template>
      <StatisticsTable v-bind:rules="aggregatedRules" />
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
          var ruleId = this.statistics[i].rules[j].ruleId;
          var issuesFixedCount = this.statistics[i].rules[j].issuesFixedCount;
          var remediationCost = this.statistics[i].rules[j].remediationCost;
          var fileCount = this.statistics[i].rules[j].fileCount;
          
          var ruleIndex = uniqueRules.findIndex(
            (x) => x.ruleId == ruleId
          );
          if (ruleIndex === -1) {
            var rule = new Object();
            rule.ruleId = ruleId;
            rule.issuesFixedCount = issuesFixedCount;
            rule.remediationCost = remediationCost;
            rule.fileCount = fileCount;
            uniqueRules.push(rule);
          } else {
            uniqueRules[ruleIndex].fileCount += fileCount;
            uniqueRules[ruleIndex].issuesFixedCount += issuesFixedCount;
            uniqueRules[ruleIndex].remediationCost += remediationCost;
          }
        }
      }

      return uniqueRules;
    }
  }
};
</script>
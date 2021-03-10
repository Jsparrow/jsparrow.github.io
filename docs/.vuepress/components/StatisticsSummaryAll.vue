<template>
  <div>
    <h2>Testing Ground Start</h2>
    <div>
      <v-data-table
        :headers="headers"
        :items="aggregatedRules"
        class=""
        hide-actions=""
        :custom-sort="customSort"
        :must-sort="true"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">
            <a v-bind:href="findRuleLink(props.item.ruleId)" target="_blank">
              {{ findRuleName(props.item.ruleId) }}
            </a>
          </td>
          <td class="text-xs-right">{{ props.item.issuesFixedCount }}</td>
          <td class="text-xs-right">{{ props.item.fileCount }}</td>
          <td class="text-xs-right">
            {{
              secondsToHms(
                props.item.remediationCost * props.item.issuesFixedCount * 60
              )
            }}
          </td>
        </template>
      </v-data-table>
    </div>
    <h2>Testing Ground End</h2>
  </div>
</template>

<script>
export default {
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
      console.log(this.statistics);

      for (var i = 0; i < this.statistics.length; i++) {
        console.log(this.statistics[i].rules.length);
        for (var j = 0; j < this.statistics[i].rules.length; j++) {
          const currentRule = this.statistics[i].rules[j];
          console.log(currentRule.ruleId);
          const ruleIndex = uniqueRules.findIndex(
            (x) => x.ruleId == currentRule.ruleId
          );
          if (ruleIndex === -1) {
            uniqueRules.push(currentRule);
            console.log("new rule: " + currentRule.ruleId);
          } else {
            console.log("ooooold stuff: " + currentRule.ruleId);
            console.log("old: ");
            console.log(uniqueRules[ruleIndex]);
            console.log("adding: ");
            console.log(currentRule);
            uniqueRules[ruleIndex].fileCount += currentRule.fileCount;
            uniqueRules[ruleIndex].issuesFixedCount +=
              currentRule.issuesFixedCount;
            uniqueRules[ruleIndex].remediationCost +=
              currentRule.remediationCost;
            console.log("new: ");
            console.log(uniqueRules[ruleIndex]);
          }

          console.log(uniqueRules);
        }
      }
      return uniqueRules;
    },

    rules() {
      return this.$site.pages.filter(
        (x) => x.path.startsWith("/rules/") && !x.frontmatter.rules_index
      );
    },
  },

  methods: {
    totalTimeSaved: function (data) {
      var i,
        totalTimeSaved = 0;
      for (i = 0; i < data.length; i++) {
        totalTimeSaved += data[i].totalTimeSaved;
      }
      return totalTimeSaved;
    },

    totalIssuesFixed: function (data) {
      var i,
        totalIssuesFixed = 0;
      for (i = 0; i < data.length; i++) {
        totalIssuesFixed += data[i].totalIssuesFixed;
      }
      return totalIssuesFixed;
    },

    totalFilesChanged: function (data) {
      var i,
        totalFilesChanged = 0;
      for (i = 0; i < data.length; i++) {
        totalFilesChanged += data[i].totalFilesChanged;
      }
      return totalFilesChanged;
    },

    totalFilesCount: function (data) {
      var i,
        totalFilesCount = 0;
      for (i = 0; i < data.length; i++) {
        totalFilesCount += data[i].totalFilesCount;
      }
      return totalFilesCount;
    },

    totalRunTime: function (data) {
      var i,
        totalRunTime = 0;
      for (i = 0; i < data.length; i++) {
        //console.log(data[i].timestampJSparrowFinish - data[i].timestampGitHubStart)
        totalRunTime +=
          data[i].timestampJSparrowFinish - data[i].timestampGitHubStart;
      }
      return totalRunTime;
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

    findRuleName: function (id) {
      var rule = this.findRule(id);
      return rule.frontmatter.title;
    },

    findRuleLink: function (id) {
      var rule = this.findRule(id);
      return rule.path;
    },

    findRule: function (id) {
      if (id in this.ruleCache) {
        return this.ruleCache[id];
      }

      for (var i = 0; i < this.rules.length; i++) {
        var element = this.rules[i];
        if (element.frontmatter.ruleId == id) {
          this.ruleCache[id] = element;
          return element;
        }
      }
    },

    customSort: function (items, index, isDescending) {
      items.sort((a, b) => {
        if (index === "ruleId") {
          if (isDescending) {
            return this.findRuleName(b.ruleId).localeCompare(
              this.findRuleName(a.ruleId)
            );
          } else {
            return this.findRuleName(a.ruleId).localeCompare(
              this.findRuleName(b.ruleId)
            );
          }
        } else if (index === "issuesFixedCount") {
          if (isDescending) {
            return a.issuesFixedCount - b.issuesFixedCount;
          } else {
            return b.issuesFixedCount - a.issuesFixedCount;
          }
        } else if (index === "fileCount") {
          if (isDescending) {
            return a.fileCount - b.fileCount;
          } else {
            return b.fileCount - a.fileCount;
          }
        } else if (index === "remediationCost") {
          if (isDescending) {
            return (
              a.remediationCost * a.issuesFixedCount -
              b.remediationCost * b.issuesFixedCount
            );
          } else {
            return (
              b.remediationCost * b.issuesFixedCount -
              a.remediationCost * a.issuesFixedCount
            );
          }
        }
      });

      return items;
    },
  },
};
</script>
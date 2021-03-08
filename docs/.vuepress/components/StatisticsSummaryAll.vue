<template>
  <div>
    <h2>Testing ground</h2>
    <div>
      <ul>
        <li v-for="n in aggregatedRules">{{ n }}</li>
      </ul>
      <p />
      {{ statistics }}
      <p />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statistics: require("../statistics.js"),
    };
  },

  computed: {
    aggregatedRules: function () {
      var uniqueRules = []
      console.log(this.statistics)

      for (var i = 0; i < this.statistics.length; i++) {
        console.log(this.statistics[i].rules.length)
        for (var j = 0; j < this.statistics[i].rules.length; j++) {
          const currentObj = this.statistics[i].rules[j];
          console.log(currentObj.ruleId)
          const objIndex = uniqueRules.findIndex((x => x.ruleId == currentObj.ruleId));
          if (objIndex === -1) {
          	uniqueRules.push(currentObj);
          	console.log("new rule: " + currentObj.ruleId);
          } else {
          	console.log("ooooold stuff: " + currentObj.ruleId);
            console.log("old: ")
            console.log(uniqueRules[objIndex])
            console.log("adding: ")
            console.log(currentObj)
            uniqueRules[objIndex].fileCount += currentObj.fileCount;
            uniqueRules[objIndex].issuesFixedCount += currentObj.issuesFixedCount;
            uniqueRules[objIndex].remediationCost += currentObj.remediationCost;
            console.log("new: ")
            console.log(uniqueRules[objIndex])
          }
          
          console.log(uniqueRules)
        }
      }
      return uniqueRules
    }
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
        totalRunTime += data[i].timestampJSparrowFinish - data[i].timestampGitHubStart;
      }
      return totalRunTime;
    },

    secondsToHms: function(d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      // always show minutes, add comma and seconds if they are not 0
      var hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

      var text = [hDisplay, mDisplay, sDisplay].filter(Boolean).join(", ")
      return text;
    }
  }
};
</script>
<template>
  <div>
    <h2>Summary of All {{ statistics.length }} Statistics Below</h2>
    <div>
      <table class="table-hover">
        <tbody>
          <tr>
            <td>Total Java file* count</td>
            <td>{{ totalFilesCount(statistics) }}</td>
          </tr>
          <tr>
            <td>Number of files changed</td>
            <td>{{ totalFilesChanged(statistics) }}</td>
          </tr>
          <tr>
            <td>Total number of issues fixed</td>
            <td>{{ totalIssuesFixed(statistics) }}</td>
          </tr>
          <tr>
            <td>Total time saved</td>
            <td>{{ secondsToHms(totalTimeSaved(statistics) * 60) }}</td>
          </tr>
        </tbody>
      </table>

      * One Java file could contain more than one Java class.
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

    secondsToHms: function (d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor((d % 3600) / 60);
      var s = Math.floor((d % 3600) % 60);

      // always show minutes, add comma and seconds if they are not 0
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      var mDisplay = m + (m == 1 ? " minute" : " minutes");
      var sDisplay = s > 0 ? ", " + s + (s == 1 ? " second" : " seconds") : "";
      return hDisplay + mDisplay + sDisplay;
    },
  },
};
</script>
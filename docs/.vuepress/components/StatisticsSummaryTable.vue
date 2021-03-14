<template>
  <div>
    <table class="table-hover">
      <tbody>
        <tr>
          <td>Total Java file* count</td>
          <td>{{project.totalFilesCount}}</td>
        </tr>
        <tr>
          <td>Number of files changed</td>
          <td>{{project.totalFilesChanged}}</td>
        </tr>
        <tr>
          <td>Total number of issues fixed</td>
          <td>{{project.totalIssuesFixed}}</td>
        </tr>
        <tr>
          <td>Total time saved</td>
          <td>{{secondsToHms(project.totalTimeSaved*60)}}</td>
        </tr>
        <tr>
          <td v-if="isSummary">Total jSparrow run time</td>
          <td v-else>jSparrow run time</td>
          <td>{{secondsToHms(totalRunTime(project))}}</td>
        </tr> 
      </tbody>
    </table>

    * One Java file could contain more than one Java class.
  </div>
</template>

<script>
export default {

  name: 'StatisticsSummaryTable',

  props: {
    project: Object, 
    isSummary: Boolean
  },

  methods: {
    totalRunTime: function (project) {
      var totalRunTime = 0;
      //console.log(project.timestampJSparrowFinish - project.timestampGitHubStart)
      totalRunTime =
        project.timestampJSparrowFinish - project.timestampGitHubStart;
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
  }
};
</script>
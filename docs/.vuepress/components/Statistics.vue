<template>
<div>

  <div class="tab" v-on:load="openFirstProject()">
    <button class="tablinks" v-for="(project, index) in statistics" v-bind:id="index" v-on:click="openProject(index, project.projectName)"> {{project.projectName}}
            </button>
  </div>

  <div v-for="(project, index) in statistics" v-bind:id="project.projectName" class="tabcontent">

    <h2> General Data of {{project.projectName}}</h2>
    <ul>
      <li>
        File Count: {{project.totalFilesCount}}
      </li>
      <li>
        Files Changed: {{project.totalFilesChanged}}
      </li>
      <li>
        Total Issues Fixed: {{project.totalIssuesFixed}}
      </li>

      <li>
        Total duration: {{ secondsToHms(project.timestampJSparrowFinish - project.timestampGitHubStart) }}
      </li>
      <li>
        Total time saved: {{secondsToHms(project.totalTimeSaved*60)}}
      </li>
    </ul>
    <h3 id="per-rule">
                Per Rule
            </h3>
    <table border="1|0" class="table-hover">
      <thead>
        <tr>
          <th>Rule ID</th>
          <th>Remediation Cost</th>
          <th>Files Changed</th>
          <th>Issues Fixed</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in project.rules">
          <td>{{ item.ruleId }}</td>
          <td>{{ item.remediationCost }}</td>
          <td>{{ item.fileCount }}</td>
          <td>{{ item.issuesFixedCount }}</td>
        </tr>
      </tbody>
    </table>
    <hr/>
    <br/>
  </div>
</div>
</template>


<style>
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
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
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
      document.getElementById(project).style.display = "block";
      document.getElementById(index).className += " active";
    },
    openFirstProject: function() {
      document.getElementById("0").click();
    },
    secondsToHms: function(d) {
      d = Number(d);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      var sDisplay = s > -1 ? s + (s == 1 ? " second" : " seconds") : "";
      return hDisplay + mDisplay + sDisplay;
    }
  },

  mounted() {
    this.openFirstProject();
  },



  data() {
    return {
      statistics: 
        require('../statistics.js')
    };
  }
};
</script>

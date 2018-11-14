<template>
    <div>

        <div class="tab" v-on:load="openFirstProject()">            
            <button class="tablinks" 
                v-for="(project, index) in statistics" 
                v-bind:id="index" 
                v-on:click="openProject(event, project.projectName)"> {{project.projectName}}
            </button>
        </div>

        <div 
            v-for="(project, index) in statistics" 
            v-bind:id="project.projectName" 
            class="tabcontent">

            <h2> General Data of {{project.projectName}}</h2>
            <ul>
                <li>
                    File Count :{{project.totalFilesCount}}
                </li>
                <li>
                    Files Changed :{{project.totalFilesChanged}}
                </li>
                <li>
                    Total Issues Fixed : {{project.totalIssuesFixed}}
                </li>
                <li>
                    Total time saved [min] : {{project.totalTimeSaved}}
                </li>
                <li>
                    Total duration [min] : {{project.timestampJSparrowFinish - project.timestampGitHubStart}}
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




<script>
export default {
  computed: {
    currentTabComponent() {
      return "tab-" + this.currentTab.toLowerCase();
    }
  },

  methods: {
    openProject: function(evt, project) {
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
      evt.currentTarget.className += " active";
    }, 
    openFirstProject : function() {
        document.getElementById("0").click();
    }
  },

  mounted() {
    this.openFirstProject();
  },

  data() {
    return {
      statistics: [
        {
          projectName: "ABC",
          timestampGitHubStart: 33,
          timestampJSparrowFinish: 63,
          totalFilesChanged: 9,
          totalFilesCount: 10,
          totalIssuesFixed: 10,
          totalTimeSaved: 15,
          rules: [
            {
              ruleId: "fistrule",
              remediationCost: 1,
              fileCount: 2,
              issuesFixedCount: 5
            }
          ]
        },
        {
          projectName: "123",
          timestampGitHubStart: 12,
          timestampJSparrowFinish: 30,
          totalFilesChanged: 9,
          totalFilesCount: 10,
          totalIssuesFixed: 10,
          totalTimeSaved: 15,
          rules: [
            {
              ruleId: "fistrule",
              remediationCost: 5,
              fileCount: 21,
              issuesFixedCount: 123
            },
            {
              ruleId: "secondrule",
              remediationCost: 2,
              fileCount: 4,
              issuesFixedCount: 13
            }
          ]
        },
        {
          projectName: "jSparrow",
          timestampGitHubStart: 23,
          timestampJSparrowFinish: 75,
          totalFilesChanged: 9,
          totalFilesCount: 10,
          totalIssuesFixed: 10,
          totalTimeSaved: 15,
          rules: [
            {
              ruleId: "fistrule",
              remediationCost: 10,
              fileCount: 15,
              issuesFixedCount: 35
            }
          ]
        },
        {
          projectName: "jSparrow2",
          duration: 10,
          totalFilesCount: 5,
          totalIssuesFixed: 5,
          rules: []
        }
      ]
    };
  }
};
</script>


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

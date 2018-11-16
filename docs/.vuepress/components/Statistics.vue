<template>
    <div>

        <div class="tab" v-on:load="openFirstProject()">            
            <button class="tablinks" 
                v-for="(project, index) in statistics" 
                v-bind:id="index" 
                v-on:click="openProject(index, project.projectName)"> {{project.projectName}}
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
                    Total duration [min] : {{ (project.timestampJSparrowFinish - project.timestampGitHubStart)/60 }}
                </li>
                                <li>
                    Total time saved [min] : {{project.totalTimeSaved}}
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
        projectName : "citrus",
        timestampGitHubStart : 1542379811,
        timestampJSparrowFinish : 1542380629,
        totalFilesChanged : 191,
        totalFilesCount : 1020,
        totalIssuesFixed : 351,
        totalTimeSaved : 740,
        rules : [
             {
                ruleId : "GuardCondition",
                remediationCost : 5,
                fileCount : 2,
                issuesFixedCount : 2
            },        	 {
                ruleId : "EnhancedForLoopToStreamForEach",
                remediationCost : 15,
                fileCount : 4,
                issuesFixedCount : 5
            },        	 {
                ruleId : "StatementLambdaToExpression",
                remediationCost : 5,
                fileCount : 4,
                issuesFixedCount : 4
            },        	 {
                ruleId : "StringLiteralEqualityCheck",
                remediationCost : 10,
                fileCount : 3,
                issuesFixedCount : 6
            },        	 {
                ruleId : "ArithmethicAssignment",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "ForToForEach",
                remediationCost : 5,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "RearrangeClassMembers",
                remediationCost : 5,
                fileCount : 7,
                issuesFixedCount : 7
            },        	 {
                ruleId : "EnumsWithoutEquals",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 6
            },        	 {
                ruleId : "OverrideAnnotation",
                remediationCost : 5,
                fileCount : 23,
                issuesFixedCount : 33
            },        	 {
                ruleId : "CodeFormatter",
                remediationCost : 1,
                fileCount : 191,
                issuesFixedCount : 191
            },        	 {
                ruleId : "BracketsToControl",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "UseStringBuilderAppend",
                remediationCost : 2,
                fileCount : 28,
                issuesFixedCount : 40
            },        	 {
                ruleId : "RemoveUnnecessaryThrows",
                remediationCost : 2,
                fileCount : 21,
                issuesFixedCount : 21
            },        	 {
                ruleId : "StringBufferToBuilder",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "LambdaToMethodReference",
                remediationCost : 2,
                fileCount : 3,
                issuesFixedCount : 3
            },        	 {
                ruleId : "RemoveExplicitCallToSuper",
                remediationCost : 1,
                fileCount : 17,
                issuesFixedCount : 19
            },        	 {
                ruleId : "MultiCatch",
                remediationCost : 5,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "DiamondOperator",
                remediationCost : 1,
                fileCount : 8,
                issuesFixedCount : 9
            }        	        ]
    },	 {
        projectName : "HL7Receiver",
        timestampGitHubStart : 1542378461,
        timestampJSparrowFinish : 1542378872,
        totalFilesChanged : 161,
        totalFilesCount : 161,
        totalIssuesFixed : 1094,
        totalTimeSaved : 3697,
        rules : [
             {
                ruleId : "EnhancedForLoopToStreamForEach",
                remediationCost : 15,
                fileCount : 14,
                issuesFixedCount : 29
            },        	 {
                ruleId : "StandardLogger",
                remediationCost : 10,
                fileCount : 7,
                issuesFixedCount : 19
            },        	 {
                ruleId : "GuardCondition",
                remediationCost : 5,
                fileCount : 7,
                issuesFixedCount : 13
            },        	 {
                ruleId : "LambdaForEachCollect",
                remediationCost : 15,
                fileCount : 2,
                issuesFixedCount : 2
            },        	 {
                ruleId : "FieldRenaming",
                remediationCost : 15,
                fileCount : 2,
                issuesFixedCount : 12
            },        	 {
                ruleId : "UseIsEmptyOnCollections",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 2
            },        	 {
                ruleId : "StatementLambdaToExpression",
                remediationCost : 5,
                fileCount : 13,
                issuesFixedCount : 26
            },        	 {
                ruleId : "StringLiteralEqualityCheck",
                remediationCost : 10,
                fileCount : 5,
                issuesFixedCount : 6
            },        	 {
                ruleId : "FunctionalInterface",
                remediationCost : 5,
                fileCount : 1,
                issuesFixedCount : 4
            },        	 {
                ruleId : "ForToForEach",
                remediationCost : 5,
                fileCount : 2,
                issuesFixedCount : 2
            },        	 {
                ruleId : "RearrangeClassMembers",
                remediationCost : 5,
                fileCount : 10,
                issuesFixedCount : 10
            },        	 {
                ruleId : "EnumsWithoutEquals",
                remediationCost : 2,
                fileCount : 2,
                issuesFixedCount : 9
            },        	 {
                ruleId : "OverrideAnnotation",
                remediationCost : 5,
                fileCount : 13,
                issuesFixedCount : 50
            },        	 {
                ruleId : "BracketsToControl",
                remediationCost : 2,
                fileCount : 72,
                issuesFixedCount : 501
            },        	 {
                ruleId : "CodeFormatter",
                remediationCost : 1,
                fileCount : 161,
                issuesFixedCount : 161
            },        	 {
                ruleId : "UseStringBuilderAppend",
                remediationCost : 2,
                fileCount : 42,
                issuesFixedCount : 106
            },        	 {
                ruleId : "RemoveUnnecessaryThrows",
                remediationCost : 2,
                fileCount : 2,
                issuesFixedCount : 3
            },        	 {
                ruleId : "LambdaToMethodReference",
                remediationCost : 2,
                fileCount : 16,
                issuesFixedCount : 48
            },        	 {
                ruleId : "RemoveExplicitCallToSuper",
                remediationCost : 1,
                fileCount : 9,
                issuesFixedCount : 9
            },        	 {
                ruleId : "StringUtils",
                remediationCost : 10,
                fileCount : 30,
                issuesFixedCount : 71
            },        	 {
                ruleId : "TryWithResource",
                remediationCost : 15,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "IndexOfToContains",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "PrimitiveObjectUseEquals",
                remediationCost : 2,
                fileCount : 1,
                issuesFixedCount : 1
            },        	 {
                ruleId : "LambdaForEachIfWrapperToFilter",
                remediationCost : 5,
                fileCount : 7,
                issuesFixedCount : 8
            }        	        ]
    } ]
    };
  }
};

</script>
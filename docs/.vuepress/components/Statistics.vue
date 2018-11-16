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
          projectName : "philadelphia",
          timestampGitHubStart : 1542378016,
          timestampJSparrowFinish : 1542378380,
          totalFilesChanged : 66,
          totalFilesCount : 75,
          totalIssuesFixed : 171,
          totalTimeSaved : 337,
          rules : [
               {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 66,
                  issuesFixedCount : 66
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 20,
                  issuesFixedCount : 78
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 8,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              }        	        ]
      },	 {
          projectName : "kapua",
          timestampGitHubStart : 1542382512,
          timestampJSparrowFinish : 1542383426,
          totalFilesChanged : 1018,
          totalFilesCount : 1503,
          totalIssuesFixed : 1741,
          totalTimeSaved : 4794,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 17,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 3,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "RemoveToStringOnString",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 14,
                  issuesFixedCount : 47
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 57,
                  issuesFixedCount : 57
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 31,
                  issuesFixedCount : 84
              },        	 {
                  ruleId : "StringConcatToPlus",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 20,
                  issuesFixedCount : 35
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 18,
                  issuesFixedCount : 26
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 20,
                  issuesFixedCount : 39
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 6,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "ImmutableStaticFinalCollections",
                  remediationCost : 10,
                  fileCount : 8,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 95,
                  issuesFixedCount : 96
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 15,
                  issuesFixedCount : 33
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 42,
                  issuesFixedCount : 153
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 1018,
                  issuesFixedCount : 1018
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 18,
                  issuesFixedCount : 29
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 13,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 20,
                  issuesFixedCount : 32
              },        	 {
                  ruleId : "StringBuildingLoop",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              }        	        ]
      },	 {
          projectName : "jsprit",
          timestampGitHubStart : 1542375972,
          timestampJSparrowFinish : 1542376402,
          totalFilesChanged : 346,
          totalFilesCount : 355,
          totalIssuesFixed : 2314,
          totalTimeSaved : 8222,
          rules : [
               {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 32,
                  issuesFixedCount : 118
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 24,
                  issuesFixedCount : 34
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 8,
                  issuesFixedCount : 161
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 12,
                  issuesFixedCount : 61
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 4,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 89,
                  issuesFixedCount : 108
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 21,
                  issuesFixedCount : 72
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 26,
                  issuesFixedCount : 53
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 136,
                  issuesFixedCount : 797
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 346,
                  issuesFixedCount : 346
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 73,
                  issuesFixedCount : 248
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 95,
                  issuesFixedCount : 119
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 69,
                  issuesFixedCount : 156
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 10,
                  issuesFixedCount : 21
              }        	        ]
      },	 {
          projectName : "lance",
          timestampGitHubStart : 1542381959,
          timestampJSparrowFinish : 1542382393,
          totalFilesChanged : 216,
          totalFilesCount : 219,
          totalIssuesFixed : 724,
          totalTimeSaved : 2504,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 4,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RemoveToStringOnString",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 53,
                  issuesFixedCount : 153
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 11,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 18,
                  issuesFixedCount : 30
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 16,
                  issuesFixedCount : 26
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 23
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 15,
                  issuesFixedCount : 27
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 7,
                  issuesFixedCount : 29
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 42,
                  issuesFixedCount : 44
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 211,
                  issuesFixedCount : 211
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 54,
                  issuesFixedCount : 108
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 6,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              }        	        ]
      },	 {
          projectName : "openmrs-core",
          timestampGitHubStart : 1542379123,
          timestampJSparrowFinish : 1542380374,
          totalFilesChanged : 726,
          totalFilesCount : 728,
          totalIssuesFixed : 4477,
          totalTimeSaved : 18779,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 82,
                  issuesFixedCount : 117
              },        	 {
                  ruleId : "LambdaForEachCollect",
                  remediationCost : 15,
                  fileCount : 14,
                  issuesFixedCount : 18
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 11,
                  issuesFixedCount : 18
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PutIfAbsent",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 13,
                  issuesFixedCount : 24
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "FlatMapInsteadOfNestedLoops",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 152,
                  issuesFixedCount : 1650
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 19,
                  issuesFixedCount : 19
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 75,
                  issuesFixedCount : 375
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 5,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "StringConcatToPlus",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 69,
                  issuesFixedCount : 159
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 102,
                  issuesFixedCount : 299
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 24
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 15,
                  issuesFixedCount : 25
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 88,
                  issuesFixedCount : 185
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 76,
                  issuesFixedCount : 81
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 726,
                  issuesFixedCount : 726
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 153,
                  issuesFixedCount : 502
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 37,
                  issuesFixedCount : 38
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 37,
                  issuesFixedCount : 58
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 11,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 7,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 46,
                  issuesFixedCount : 83
              }        	        ]
      },	 {
          projectName : "orson-charts",
          timestampGitHubStart : 1542378632,
          timestampJSparrowFinish : 1542378955,
          totalFilesChanged : 245,
          totalFilesCount : 251,
          totalIssuesFixed : 552,
          totalTimeSaved : 1248,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 23,
                  issuesFixedCount : 46
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 12,
                  issuesFixedCount : 32
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 19
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 16
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 11,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 18,
                  issuesFixedCount : 76
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 245,
                  issuesFixedCount : 245
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 19,
                  issuesFixedCount : 45
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 23,
                  issuesFixedCount : 25
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 10,
                  issuesFixedCount : 10
              }        	        ]
      },	 {
          projectName : "ratel",
          timestampGitHubStart : 1542379714,
          timestampJSparrowFinish : 1542379962,
          totalFilesChanged : 90,
          totalFilesCount : 92,
          totalIssuesFixed : 347,
          totalTimeSaved : 2126,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 9,
                  issuesFixedCount : 28
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 10,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 2,
                  issuesFixedCount : 66
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 7,
                  issuesFixedCount : 15
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 25
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 90,
                  issuesFixedCount : 90
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 19
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 23,
                  issuesFixedCount : 34
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 3,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 5
              }        	        ]
      },	 {
          projectName : "jfreechart-fse",
          timestampGitHubStart : 1542380966,
          timestampJSparrowFinish : 1542381532,
          totalFilesChanged : 690,
          totalFilesCount : 732,
          totalIssuesFixed : 2736,
          totalTimeSaved : 9007,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 117,
                  issuesFixedCount : 241
              },        	 {
                  ruleId : "LambdaForEachCollect",
                  remediationCost : 15,
                  fileCount : 2,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 13,
                  issuesFixedCount : 32
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 24,
                  issuesFixedCount : 56
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 9,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 26,
                  issuesFixedCount : 44
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 85,
                  issuesFixedCount : 85
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 7,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 47,
                  issuesFixedCount : 165
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 24
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 7,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 30,
                  issuesFixedCount : 113
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 47,
                  issuesFixedCount : 138
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 49,
                  issuesFixedCount : 49
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 39,
                  issuesFixedCount : 137
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 25,
                  issuesFixedCount : 39
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 690,
                  issuesFixedCount : 690
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 58,
                  issuesFixedCount : 90
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 162,
                  issuesFixedCount : 305
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 16,
                  issuesFixedCount : 47
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 115,
                  issuesFixedCount : 365
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 11,
                  issuesFixedCount : 63
              }        	        ]
      },	 {
          projectName : "primefaces",
          timestampGitHubStart : 1542383464,
          timestampJSparrowFinish : 1542384186,
          totalFilesChanged : 1036,
          totalFilesCount : 1049,
          totalIssuesFixed : 2757,
          totalTimeSaved : 9581,
          rules : [
               {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 18,
                  issuesFixedCount : 57
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 121,
                  issuesFixedCount : 171
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 53
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 103,
                  issuesFixedCount : 332
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 37,
                  issuesFixedCount : 73
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 175,
                  issuesFixedCount : 175
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 22
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 1036,
                  issuesFixedCount : 1036
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 59,
                  issuesFixedCount : 153
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 209,
                  issuesFixedCount : 608
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 13,
                  issuesFixedCount : 13
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 16,
                  issuesFixedCount : 21
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 3
              }        	        ]
      },	 {
          projectName : "BroadleafCommerce",
          timestampGitHubStart : 1542381392,
          timestampJSparrowFinish : 1542382975,
          totalFilesChanged : 2648,
          totalFilesCount : 2652,
          totalIssuesFixed : 8449,
          totalTimeSaved : 29247,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 202,
                  issuesFixedCount : 267
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 10,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 44,
                  issuesFixedCount : 120
              },        	 {
                  ruleId : "RemoveToStringOnString",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 15,
                  issuesFixedCount : 25
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 10,
                  issuesFixedCount : 17
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 178,
                  issuesFixedCount : 1127
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 110,
                  issuesFixedCount : 177
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 56,
                  issuesFixedCount : 56
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 183,
                  issuesFixedCount : 719
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 29,
                  issuesFixedCount : 38
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 131,
                  issuesFixedCount : 238
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 29,
                  issuesFixedCount : 271
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 18
              },        	 {
                  ruleId : "RemoveNewStringConstructor",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "ImmutableStaticFinalCollections",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 215,
                  issuesFixedCount : 217
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 46,
                  issuesFixedCount : 111
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 258,
                  issuesFixedCount : 690
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 2648,
                  issuesFixedCount : 2648
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 282,
                  issuesFixedCount : 723
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 17,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 412,
                  issuesFixedCount : 906
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 7
              }        	        ]
      },	 {
          projectName : "metatron-discovery",
          timestampGitHubStart : 1542379275,
          timestampJSparrowFinish : 1542380668,
          totalFilesChanged : 254,
          totalFilesCount : 1224,
          totalIssuesFixed : 386,
          totalTimeSaved : 639,
          rules : [
               {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 8,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 6,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 11,
                  issuesFixedCount : 28
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 254,
                  issuesFixedCount : 254
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 42,
                  issuesFixedCount : 59
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 5,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 3,
                  issuesFixedCount : 3
              }        	        ]
      },	 {
          projectName : "Amy",
          timestampGitHubStart : 1542379505,
          timestampJSparrowFinish : 1542380000,
          totalFilesChanged : 353,
          totalFilesCount : 411,
          totalIssuesFixed : 1027,
          totalTimeSaved : 4094,
          rules : [
               {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 36,
                  issuesFixedCount : 63
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 36,
                  issuesFixedCount : 62
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 15,
                  issuesFixedCount : 19
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 29,
                  issuesFixedCount : 37
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 13,
                  issuesFixedCount : 36
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 36,
                  issuesFixedCount : 36
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 6,
                  issuesFixedCount : 33
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 59,
                  issuesFixedCount : 148
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 343,
                  issuesFixedCount : 343
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 58,
                  issuesFixedCount : 133
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 10,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 29,
                  issuesFixedCount : 59
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringConcatToPlus",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 16
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 6,
                  issuesFixedCount : 6
              }        	        ]
      },	 {
          projectName : "morpheus-core",
          timestampGitHubStart : 1542378214,
          timestampJSparrowFinish : 1542378758,
          totalFilesChanged : 282,
          totalFilesCount : 293,
          totalIssuesFixed : 1400,
          totalTimeSaved : 6898,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 8,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 4,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 11,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 49,
                  issuesFixedCount : 122
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 22,
                  issuesFixedCount : 110
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 30,
                  issuesFixedCount : 30
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 7,
                  issuesFixedCount : 237
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 7,
                  issuesFixedCount : 13
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 22
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "ImmutableStaticFinalCollections",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 26,
                  issuesFixedCount : 27
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 70,
                  issuesFixedCount : 312
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 282,
                  issuesFixedCount : 282
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 40,
                  issuesFixedCount : 167
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              }        	        ]
      },	 {
          projectName : "symphony",
          timestampGitHubStart : 1542380952,
          timestampJSparrowFinish : 1542382380,
          totalFilesChanged : 223,
          totalFilesCount : 223,
          totalIssuesFixed : 1047,
          totalTimeSaved : 4487,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 7,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "LambdaForEachCollect",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 8,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "FlatMapInsteadOfNestedLoops",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 3,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 27,
                  issuesFixedCount : 45
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 7,
                  issuesFixedCount : 124
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 22,
                  issuesFixedCount : 34
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 25,
                  issuesFixedCount : 25
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 223,
                  issuesFixedCount : 223
              },        	 {
                  ruleId : "StringFormatLineSeparator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 104,
                  issuesFixedCount : 503
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 13
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 7,
                  issuesFixedCount : 8
              }        	        ]
      },	 {
          projectName : "incubator-dubbo",
          timestampGitHubStart : 1542381474,
          timestampJSparrowFinish : 1542382752,
          totalFilesChanged : 738,
          totalFilesCount : 769,
          totalIssuesFixed : 3003,
          totalTimeSaved : 9898,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 46,
                  issuesFixedCount : 62
              },        	 {
                  ruleId : "LambdaForEachCollect",
                  remediationCost : 15,
                  fileCount : 9,
                  issuesFixedCount : 16
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 54,
                  issuesFixedCount : 179
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 8,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "RemoveToStringOnString",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PutIfAbsent",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 10,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 4,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 10,
                  issuesFixedCount : 24
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 19,
                  issuesFixedCount : 47
              },        	 {
                  ruleId : "FlatMapInsteadOfNestedLoops",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 108,
                  issuesFixedCount : 182
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 11,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 9,
                  issuesFixedCount : 20
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 69,
                  issuesFixedCount : 173
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 16,
                  issuesFixedCount : 47
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 13,
                  issuesFixedCount : 62
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 48,
                  issuesFixedCount : 94
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 33,
                  issuesFixedCount : 71
              },        	 {
                  ruleId : "ImmutableStaticFinalCollections",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 22,
                  issuesFixedCount : 23
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 738,
                  issuesFixedCount : 738
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 173,
                  issuesFixedCount : 634
              },        	 {
                  ruleId : "StringFormatLineSeparator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 32,
                  issuesFixedCount : 52
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 165,
                  issuesFixedCount : 432
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 20,
                  issuesFixedCount : 38
              }        	        ]
      },	 {
          projectName : "HealthPlus",
          timestampGitHubStart : 1542378514,
          timestampJSparrowFinish : 1542378738,
          totalFilesChanged : 10,
          totalFilesCount : 55,
          totalIssuesFixed : 411,
          totalTimeSaved : 862,
          rules : [
               {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 9,
                  issuesFixedCount : 45
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 10,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 272
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 4,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 8,
                  issuesFixedCount : 62
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 5
              }        	        ]
      },	 {
          projectName : "stringtemplate4",
          timestampGitHubStart : 1542381105,
          timestampJSparrowFinish : 1542381317,
          totalFilesChanged : 50,
          totalFilesCount : 59,
          totalIssuesFixed : 218,
          totalTimeSaved : 511,
          rules : [
               {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 21,
                  issuesFixedCount : 90
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 49,
                  issuesFixedCount : 49
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "StringFormatLineSeparator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 16,
                  issuesFixedCount : 41
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 12
              }        	        ]
      },	 {
          projectName : "killbill",
          timestampGitHubStart : 1542376462,
          timestampJSparrowFinish : 1542377693,
          totalFilesChanged : 842,
          totalFilesCount : 981,
          totalIssuesFixed : 2494,
          totalTimeSaved : 8222,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 32,
                  issuesFixedCount : 54
              },        	 {
                  ruleId : "LambdaForEachCollect",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PutIfAbsent",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 9,
                  issuesFixedCount : 10
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 7,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 27,
                  issuesFixedCount : 27
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 30,
                  issuesFixedCount : 39
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringConcatToPlus",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 63,
                  issuesFixedCount : 135
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 41,
                  issuesFixedCount : 61
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 7
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 64,
                  issuesFixedCount : 152
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 66,
                  issuesFixedCount : 274
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 52,
                  issuesFixedCount : 54
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 41,
                  issuesFixedCount : 135
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 35,
                  issuesFixedCount : 59
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 842,
                  issuesFixedCount : 842
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 53,
                  issuesFixedCount : 88
              },        	 {
                  ruleId : "StringFormatLineSeparator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 21,
                  issuesFixedCount : 42
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 15,
                  issuesFixedCount : 16
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 131,
                  issuesFixedCount : 411
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 13,
                  issuesFixedCount : 15
              }        	        ]
      },	 {
          projectName : "spring-boot",
          timestampGitHubStart : 1542382276,
          timestampJSparrowFinish : 1542382893,
          totalFilesChanged : 275,
          totalFilesCount : 2306,
          totalIssuesFixed : 481,
          totalTimeSaved : 1403,
          rules : [
               {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 17,
                  issuesFixedCount : 36
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 15,
                  issuesFixedCount : 18
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 13,
                  issuesFixedCount : 23
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 5,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "PutIfAbsent",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "ImmutableStaticFinalCollections",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 275,
                  issuesFixedCount : 275
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 37,
                  issuesFixedCount : 76
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 7,
                  issuesFixedCount : 13
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 4
              }        	        ]
      },	 {
          projectName : "marytts",
          timestampGitHubStart : 1542378150,
          timestampJSparrowFinish : 1542378629,
          totalFilesChanged : 407,
          totalFilesCount : 903,
          totalIssuesFixed : 4317,
          totalTimeSaved : 14556,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 26,
                  issuesFixedCount : 41
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 14
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 17,
                  issuesFixedCount : 265
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 33,
                  issuesFixedCount : 104
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 8,
                  issuesFixedCount : 93
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 10,
                  issuesFixedCount : 22
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 67,
                  issuesFixedCount : 111
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 53,
                  issuesFixedCount : 127
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 61,
                  issuesFixedCount : 62
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 161,
                  issuesFixedCount : 439
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 221,
                  issuesFixedCount : 2074
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 369,
                  issuesFixedCount : 369
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 13,
                  issuesFixedCount : 35
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 136,
                  issuesFixedCount : 389
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 41,
                  issuesFixedCount : 45
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 37,
                  issuesFixedCount : 92
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 12,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 4
              }        	        ]
      },	 {
          projectName : "iextrading4j",
          timestampGitHubStart : 1542377261,
          timestampJSparrowFinish : 1542377601,
          totalFilesChanged : 261,
          totalFilesCount : 263,
          totalIssuesFixed : 482,
          totalTimeSaved : 1482,
          rules : [
               {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 70,
                  issuesFixedCount : 147
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 261,
                  issuesFixedCount : 261
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 6,
                  issuesFixedCount : 57
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 10,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              }        	        ]
      },	 {
          projectName : "tablesaw",
          timestampGitHubStart : 1542378717,
          timestampJSparrowFinish : 1542379232,
          totalFilesChanged : 200,
          totalFilesCount : 200,
          totalIssuesFixed : 930,
          totalTimeSaved : 4495,
          rules : [
               {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 46,
                  issuesFixedCount : 50
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 32,
                  issuesFixedCount : 104
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 30,
                  issuesFixedCount : 81
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 22,
                  issuesFixedCount : 24
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 5,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 46,
                  issuesFixedCount : 122
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 17,
                  issuesFixedCount : 95
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 200,
                  issuesFixedCount : 200
              },        	 {
                  ruleId : "StringFormatLineSeparator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 40,
                  issuesFixedCount : 130
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 23,
                  issuesFixedCount : 43
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 10,
                  issuesFixedCount : 30
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              }        	        ]
      },	 {
          projectName : "game-server",
          timestampGitHubStart : 1542376001,
          timestampJSparrowFinish : 1542376794,
          totalFilesChanged : 378,
          totalFilesCount : 381,
          totalIssuesFixed : 6264,
          totalTimeSaved : 49855,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 45,
                  issuesFixedCount : 134
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PutIfAbsent",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 21,
                  issuesFixedCount : 70
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 9,
                  issuesFixedCount : 22
              },        	 {
                  ruleId : "FlatMapInsteadOfNestedLoops",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 45,
                  issuesFixedCount : 435
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 13,
                  issuesFixedCount : 15
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 4,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 20,
                  issuesFixedCount : 63
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 19,
                  issuesFixedCount : 41
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 18,
                  issuesFixedCount : 2165
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 31,
                  issuesFixedCount : 52
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 21,
                  issuesFixedCount : 42
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 44,
                  issuesFixedCount : 176
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 44,
                  issuesFixedCount : 2375
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 377,
                  issuesFixedCount : 377
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 63,
                  issuesFixedCount : 118
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 18,
                  issuesFixedCount : 33
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 28,
                  issuesFixedCount : 113
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 6
              }        	        ]
      },	 {
          projectName : "JCSprout",
          timestampGitHubStart : 1542379316,
          timestampJSparrowFinish : 1542379557,
          totalFilesChanged : 74,
          totalFilesCount : 74,
          totalIssuesFixed : 228,
          totalTimeSaved : 1291,
          rules : [
               {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 29,
                  issuesFixedCount : 79
              },        	 {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 1,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 5
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
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 5,
                  issuesFixedCount : 18
              },        	 {
                  ruleId : "RemoveNewStringConstructor",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 6,
                  issuesFixedCount : 6
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 74,
                  issuesFixedCount : 74
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 2,
                  issuesFixedCount : 3
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 12,
                  issuesFixedCount : 16
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringUtils",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 2
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "EnhancedForLoopToStreamSum",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 1,
                  issuesFixedCount : 2
              }        	        ]
      },	 {
          projectName : "biojava",
          timestampGitHubStart : 1542376566,
          timestampJSparrowFinish : 1542377716,
          totalFilesChanged : 1082,
          totalFilesCount : 1117,
          totalIssuesFixed : 11865,
          totalTimeSaved : 62491,
          rules : [
               {
                  ruleId : "GuardCondition",
                  remediationCost : 5,
                  fileCount : 89,
                  issuesFixedCount : 129
              },        	 {
                  ruleId : "LambdaForEachCollect",
                  remediationCost : 15,
                  fileCount : 10,
                  issuesFixedCount : 12
              },        	 {
                  ruleId : "UseIsEmptyOnCollections",
                  remediationCost : 2,
                  fileCount : 20,
                  issuesFixedCount : 37
              },        	 {
                  ruleId : "StringLiteralEqualityCheck",
                  remediationCost : 10,
                  fileCount : 111,
                  issuesFixedCount : 604
              },        	 {
                  ruleId : "PutIfAbsent",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 9
              },        	 {
                  ruleId : "InefficientConstructor",
                  remediationCost : 5,
                  fileCount : 19,
                  issuesFixedCount : 133
              },        	 {
                  ruleId : "LambdaForEachMap",
                  remediationCost : 15,
                  fileCount : 37,
                  issuesFixedCount : 47
              },        	 {
                  ruleId : "ForToForEach",
                  remediationCost : 5,
                  fileCount : 38,
                  issuesFixedCount : 64
              },        	 {
                  ruleId : "MultiVariableDeclarationLine",
                  remediationCost : 2,
                  fileCount : 78,
                  issuesFixedCount : 205
              },        	 {
                  ruleId : "RemoveEmptyStatement",
                  remediationCost : 1,
                  fileCount : 9,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "FlatMapInsteadOfNestedLoops",
                  remediationCost : 15,
                  fileCount : 5,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "BracketsToControl",
                  remediationCost : 2,
                  fileCount : 387,
                  issuesFixedCount : 2804
              },        	 {
                  ruleId : "RemoveUnnecessaryThrows",
                  remediationCost : 2,
                  fileCount : 28,
                  issuesFixedCount : 82
              },        	 {
                  ruleId : "RemoveExplicitCallToSuper",
                  remediationCost : 1,
                  fileCount : 69,
                  issuesFixedCount : 71
              },        	 {
                  ruleId : "WhileToForEach",
                  remediationCost : 5,
                  fileCount : 6,
                  issuesFixedCount : 11
              },        	 {
                  ruleId : "TryWithResource",
                  remediationCost : 15,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "MultiCatch",
                  remediationCost : 5,
                  fileCount : 26,
                  issuesFixedCount : 32
              },        	 {
                  ruleId : "StringConcatToPlus",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 13
              },        	 {
                  ruleId : "StandardLogger",
                  remediationCost : 10,
                  fileCount : 226,
                  issuesFixedCount : 982
              },        	 {
                  ruleId : "EnhancedForLoopToStreamForEach",
                  remediationCost : 15,
                  fileCount : 195,
                  issuesFixedCount : 563
              },        	 {
                  ruleId : "FieldRenaming",
                  remediationCost : 15,
                  fileCount : 44,
                  issuesFixedCount : 1318
              },        	 {
                  ruleId : "EnhancedForLoopToStreamFindFirst",
                  remediationCost : 2,
                  fileCount : 18,
                  issuesFixedCount : 28
              },        	 {
                  ruleId : "StatementLambdaToExpression",
                  remediationCost : 5,
                  fileCount : 150,
                  issuesFixedCount : 353
              },        	 {
                  ruleId : "ArithmethicAssignment",
                  remediationCost : 2,
                  fileCount : 30,
                  issuesFixedCount : 74
              },        	 {
                  ruleId : "FunctionalInterface",
                  remediationCost : 5,
                  fileCount : 28,
                  issuesFixedCount : 62
              },        	 {
                  ruleId : "ImmutableStaticFinalCollections",
                  remediationCost : 10,
                  fileCount : 2,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "RemoveNewStringConstructor",
                  remediationCost : 5,
                  fileCount : 3,
                  issuesFixedCount : 5
              },        	 {
                  ruleId : "RearrangeClassMembers",
                  remediationCost : 5,
                  fileCount : 208,
                  issuesFixedCount : 215
              },        	 {
                  ruleId : "EnumsWithoutEquals",
                  remediationCost : 2,
                  fileCount : 22,
                  issuesFixedCount : 53
              },        	 {
                  ruleId : "OverrideAnnotation",
                  remediationCost : 5,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "CodeFormatter",
                  remediationCost : 1,
                  fileCount : 1075,
                  issuesFixedCount : 1075
              },        	 {
                  ruleId : "StringFormatLineSeparator",
                  remediationCost : 1,
                  fileCount : 15,
                  issuesFixedCount : 28
              },        	 {
                  ruleId : "UseStringBuilderAppend",
                  remediationCost : 2,
                  fileCount : 349,
                  issuesFixedCount : 1103
              },        	 {
                  ruleId : "ReImplementingInterface",
                  remediationCost : 2,
                  fileCount : 4,
                  issuesFixedCount : 4
              },        	 {
                  ruleId : "StringBufferToBuilder",
                  remediationCost : 2,
                  fileCount : 42,
                  issuesFixedCount : 60
              },        	 {
                  ruleId : "LambdaToMethodReference",
                  remediationCost : 2,
                  fileCount : 72,
                  issuesFixedCount : 126
              },        	 {
                  ruleId : "EnhancedForLoopToStreamAnyMatch",
                  remediationCost : 2,
                  fileCount : 12,
                  issuesFixedCount : 18
              },        	 {
                  ruleId : "DiamondOperator",
                  remediationCost : 1,
                  fileCount : 381,
                  issuesFixedCount : 1412
              },        	 {
                  ruleId : "PrimitiveBoxedForString",
                  remediationCost : 5,
                  fileCount : 8,
                  issuesFixedCount : 22
              },        	 {
                  ruleId : "EnhancedForLoopToStreamSum",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "StringBuildingLoop",
                  remediationCost : 10,
                  fileCount : 1,
                  issuesFixedCount : 1
              },        	 {
                  ruleId : "IndexOfToContains",
                  remediationCost : 2,
                  fileCount : 6,
                  issuesFixedCount : 8
              },        	 {
                  ruleId : "PrimitiveObjectUseEquals",
                  remediationCost : 2,
                  fileCount : 12,
                  issuesFixedCount : 21
              },        	 {
                  ruleId : "LambdaForEachIfWrapperToFilter",
                  remediationCost : 5,
                  fileCount : 30,
                  issuesFixedCount : 55
              }        	        ]
      },	 {
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
      }	    ]
  };
  }
  };

</script>

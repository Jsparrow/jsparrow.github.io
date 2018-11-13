<template>


    <div>
        <div v-for="(project, idx) in statistics">

            <h2> <a href="#" aria-hidden="true" class="header-anchor"> # </a>General Data of {{project.projectName}} </h2>
            <ul>
                <li>
                    File Count :{{project.totalFilesCount}}
                </li>
                <li>
                    Files Changed :{{project.totalFilesCount}} <!-- TODO:  total files count is different from files changed -->
                </li>
                <li>
                    Total Issues Fixed : {{project.totalIssuesFixed}}
                </li>
                <li>
                    Total time saved [min] : {{project.totalIssuesFixed}} <!-- TODO:  total issyes fixed is different from total files changed -->
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
                        <th>Iussues Fixed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, idx) in project.rules">
                        <td>{{ item.ruleId }}</td>
                        <td>{{ item.remediationCost }}</td>
                        <td>{{ item.filesChanged }}</td>
                        <td>{{ item.issuesFixed }}</td>
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
  data() {
    return {
        statistics: [
        {
          projectName: "123",
          duration: 2,
          totalFilesCount: 10,
          totalIssuesFixed: 7,
          rules: [
            {
              ruleId: "fistrule",
              remediationCost: 5,
              filesChanged: 5,
              issuesFixed: 4
            },
            {
              ruleId: "secondrule",
              remediationCost: 2,
              filesChanged: 5,
              issuesFixed: 3
            }
          ]
        },
        {
          projectName: "jSparrow",
          duration: 10,
          totalFilesCount: 5,
          totalIssuesFixed: 5,
          rules: []
        },
        {
          projectName: "ABC",
          duration: 33,
          totalFilesCount: 10,
          totalIssuesFixed: 10,
          rules: [
            {
              ruleId: "fistrule",
              remediationCost: 1,
              filesChanged: 2,
              issuesFixed: 4
            }
          ]
        }
      ]
    };
  }
};
</script>
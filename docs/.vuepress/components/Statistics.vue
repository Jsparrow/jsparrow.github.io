<template>
    <div>
           <h1> General Data of {{ProjectName}}
           </h1>
            <ul>
                <li>
                    File Count :{{Data.fileCount}}
                </li>
                <li>
                    Files Changed :{{Data.filesChanged}}
                </li>
                <li>
                    Total Issues Fixed : {{Data.totalIssuesFixed}}
                </li>
                <li>
                    Total time saved [min] : {{Data.totalTimeSaved}}
                </li>
            </ul>
            <h1>
                Per Rule
            </h1>
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
                    <tr v-for="(item, idx) in Data.rulesData">
                        <td>{{ item.ruleId }}</td>
                        <td>{{ item.remediationCost }}</td>
                        <td>{{ item.filesChanged }}</td>
                        <td>{{ item.issuesFixed }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                Data: 
{
                            "durationOfCalculation": 100,
                            "fileCount": 5,
                            "filesChanged": 2,
                            "rulesData": [{
                                    "filesChanged": 2,
                                    "issuesFixed": 2,
                                    "remediationCost": 2,
                                    "ruleId": "RuleID1"
                                },
                                {
                                    "filesChanged": 23,
                                    "issuesFixed": 56,
                                    "remediationCost": 3,
                                    "ruleId": "RuleID2"
                                }
                            ],
                            "totalIssuesFixed": 5,
                            "totalTimeSaved": 1000
                        },
                        "MetricTimestamp": "0",
                        "MetricUUID": "1337",
                        "ProjectName": "Project A"
                
            }
        }
    }
</script>
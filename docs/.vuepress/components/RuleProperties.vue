<template>
  <div>
    <table>
      <thead>
        <tr>
          <th style="text-align: left;">Property</th>
          <th style="text-align: left;">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align: left;">Rule ID</td>
          <td style="text-align: left;">{{ $page.frontmatter.ruleId }}</td>
        </tr>
        <tr>
          <td style="text-align: left;">First seen in jSparrow version</td>
          <td style="text-align: left;">
            <router-link
              :to="getRouteToReleaseNotes($page.frontmatter.since)"
            >{{ $page.frontmatter.since }}</router-link>
          </td>
        </tr>
        <tr>
          <td style="text-align: left;">Minimum Java version</td>
          <td style="text-align: left;">{{ $page.frontmatter.minJavaVersion }}</td>
        </tr>
        <tr>
          <td style="text-align: left;">Remediation cost</td>
          <td style="text-align: left;">{{ $page.frontmatter.remediationCost }} min</td>
        </tr>
        <tr v-if="$page.frontmatter.links != null">
          <td style="text-align: left;">Links</td>
          <td style="text-align: left;">
            <div v-for="(link, index) in $page.frontmatter.links">
              <a :href="link.url" target="_blank">
                <span>{{ link.displayName }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  width="15"
                  height="15"
                  class="icon outbound"
                >
                  <path
                    fill="currentColor"
                    d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
                  />
                  <polygon
                    fill="currentColor"
                    points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
                  />
                </svg>
              </a>
              <span v-if="index + 1 < $page.frontmatter.links.length">, </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    convertToDashedVersion: function(version) {
      var dashedVersion = version.replace(/\./g, "-");
      return dashedVersion;
    },
    getRouteToReleaseNotes: function(since) {
      return "/eclipse/release-notes.html#_" + this.convertToDashedVersion(since);
    }
  }
};
</script>

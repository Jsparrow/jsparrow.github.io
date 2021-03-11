<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="project.rules"
      class=""
      hide-actions=""
      :custom-sort="customSort"
      :must-sort="true"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          <a v-bind:href="findRuleLink(props.item.ruleId)" target="_blank">
            {{ findRuleName(props.item.ruleId) }}
          </a>
        </td>
        <td class="text-xs-right">{{ props.item.issuesFixedCount }}</td>
        <td class="text-xs-right">{{ props.item.fileCount }}</td>
        <td class="text-xs-right">
          {{
            secondsToHms(
              props.item.remediationCost * props.item.issuesFixedCount * 60
            )
          }}
        </td>
      </template>
    </v-data-table>

    * One Java file could contain more than one Java class.
  </div>
</template>

<script>
export default {

  data() {
    return {
      headers: [
        { text: 'Rule Name', value: 'ruleId', align: 'center' },
        { text: 'Issues Fixed', value: 'issuesFixedCount', align: 'center' },
        { text: 'Files Changed', value: 'fileCount', align: 'center' },
        { text: 'Time saved', value: 'remediationCost', align: 'center' }
      ],
      ruleCache: {}
    };
  },

  props: {
    project: Object
  },

  computed: {
    rules() {
      return this.$site.pages.filter(
        (x) => x.path.startsWith("/rules/") && !x.frontmatter.rules_index
      );
    }
  },

  methods: {
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

    findRuleName: function (id) {
      var rule = this.findRule(id);
      return rule.frontmatter.title;
    },

    findRuleLink: function (id) {
      var rule = this.findRule(id);
      return rule.path;
    },

    findRule: function (id) {
      if (id in this.ruleCache) {
        return this.ruleCache[id];
      }

      for (var i = 0; i < this.rules.length; i++) {
        var element = this.rules[i];
        if (element.frontmatter.ruleId == id) {
          this.ruleCache[id] = element;
          return element;
        }
      }
    },

    customSort: function (items, index, isDescending) {
      items.sort((a, b) => {
        if (index === "ruleId") {
          if (isDescending) {
            return this.findRuleName(b.ruleId).localeCompare(
              this.findRuleName(a.ruleId)
            );
          } else {
            return this.findRuleName(a.ruleId).localeCompare(
              this.findRuleName(b.ruleId)
            );
          }
        } else if (index === "issuesFixedCount") {
          if (isDescending) {
            return a.issuesFixedCount - b.issuesFixedCount;
          } else {
            return b.issuesFixedCount - a.issuesFixedCount;
          }
        } else if (index === "fileCount") {
          if (isDescending) {
            return a.fileCount - b.fileCount;
          } else {
            return b.fileCount - a.fileCount;
          }
        } else if (index === "remediationCost") {
          if (isDescending) {
            return (
              a.remediationCost * a.issuesFixedCount -
              b.remediationCost * b.issuesFixedCount
            );
          } else {
            return (
              b.remediationCost * b.issuesFixedCount -
              a.remediationCost * a.issuesFixedCount
            );
          }
        }
      });

      return items;
    },
  }
};
</script>

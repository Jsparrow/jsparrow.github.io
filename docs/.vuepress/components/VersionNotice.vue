<template>
  <div>
    <h2>You Want To Have Those Changes Done Automatically?</h2>
    <div v-if="$page.frontmatter.tags.includes('Free')">
      The automatic application of this rule is supported in the following jSparrow versions:
      <ul>
        <li><a href="/eclipse/starter-registration.html">jSparrow Starter</a></li>
        <li><a href="https://jsparrow.io/get-jsparrow/">jSparrow Basic</a></li>
        <li><a href="https://jsparrow.io/contact">jSparrow Enterprise</a></li>
      </ul>
    </div>
    <div v-else>
      The automatic application of this rule is supported in the following jSparrow version:
      <ul>
        <li><a href="https://jsparrow.io/get-jsparrow/">jSparrow Basic</a></li>
        <li><a href="https://jsparrow.io/contact">jSparrow Enterprise</a></li>
      </ul>
    </div>
  </div>
</template>


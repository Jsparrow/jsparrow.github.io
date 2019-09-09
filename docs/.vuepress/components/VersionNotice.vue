<template>
  <div>
    <h2>Automatic Application of This Rule</h2>
    <div v-if="$page.frontmatter.tags.includes('Free')">
      The automatic application of this rule is supported in the following jSparrow versions:
      <ul>
        <li><a href="/eclipse/starter-registration.html">jSparrow Starter version</a></li>
        <li><a href="https://order.shareit.com/cart/new?vendorid=200267175&PRODUCT%5B300770603%5D=1">jSparrow Pro version</a></li>
      </ul>
    </div>
    <div v-else>
      The automatic application of this rule is supported in the following jSparrow version:
      <ul>
        <li><a href="https://order.shareit.com/cart/new?vendorid=200267175&PRODUCT%5B300770603%5D=1">jSparrow Pro version</a></li>
      </ul>
    </div>
  </div>
</template>


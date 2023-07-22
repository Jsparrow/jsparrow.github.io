<template>
  <div>
    <h2>🛠️ Auto-refactor Available</h2>
    
    <div v-if="$page.frontmatter.tags.includes('Marker')">
      <div style=""><p>You can auto-refactor this with jSparrow. <br> Drop this button to your Eclipse IDE workspace to install jSparrow for free: </p> <a href="https://marketplace.eclipse.org/marketplace-client-intro?mpc_install=3503691" class="drag" title="Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client"><img style="width:80px;" typeof="foaf:Image" class="img-responsive" src="https://marketplace.eclipse.org/sites/all/themes/solstice/public/images/marketplace/btn-install.svg" alt="Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client" /></a><p>Need help? Check out our <a href="/eclipse/installation-guide.html#requirements" class="">installation guide</a>.</p></div>
    </div>
    <div v-else>
      <div style=""><p>You can auto refactor this with jSparrow. <br> Drop this button to your Eclipse IDE workspace to install jSparrow for free: </p> <a href="https://marketplace.eclipse.org/marketplace-client-intro?mpc_install=3503691" class="drag" title="Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client"><img style="width:80px;" typeof="foaf:Image" class="img-responsive" src="https://marketplace.eclipse.org/sites/all/themes/solstice/public/images/marketplace/btn-install.svg" alt="Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client" /></a><p>Need help? Check out our <a href="/eclipse/installation-guide.html#requirements" class="">installation guide</a>.</p></div>
    </div>
  </div>
</template>


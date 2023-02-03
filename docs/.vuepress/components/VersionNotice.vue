<template>
  <div>
    <h2>Use a Java Refactoring Tool</h2>
    
    <div v-if="$page.frontmatter.tags.includes('Free')">
    <div style="border: 2px dashed rgb(189 255 176);padding: 2rem;margin-bottom:1rem;">
        <h3>Automate this Refactoring system-wide</h3>   
        <p>
          You can apply this refactoring for <em>free</em> with the jSparrow Eclipse IDE plug-in.
          <br>
          Install the plug-in for Eclipse IDE: <a href="https://marketplace.eclipse.org/content/jsparrow" target="_blank" rel="noopener noreferrer">Eclipse Marketplace</a>.
        </p>
        <img src="/jsparrow-comic-pointing-at-a-graph.PNG" width="200" alt="a drawn cute bird pointing at a graph that shows positive results">
      </div>
    </div>
    <div v-else>
      <div style="border: 2px dashed rgb(189 255 176);padding: 2rem;margin-bottom:1rem;">
        <h3>No license required</h3>   
        <p>
          You can <em>review</em> this refactoring on your code <strong>without a license</strong> by installing jSparrow to your Eclipse IDE.
        Install the plug-in from Eclipse IDE: <a href="https://marketplace.eclipse.org/content/jsparrow" target="_blank" rel="noopener noreferrer">Eclipse Marketplace</a>.
        </p>
      </div>
      <div style="border: 2px dashed #83b9ff;padding: 2rem;">
        <h3>System-wide Refactoring</h3>
        <p>
        <em>
          Do you want to automate this refactoring (and many more) to your system-wide code?
        </em>
          The automatic application of this system-wide refactoring can be unlocked by acquiring 
          <strong><a href="https://jsparrow.io/pricing/" target="_blank" rel="noopener noreferrer">your jSparrow license</a></strong>.
        </p>   
        <img src="/jsparrow-comic-pointing-at-a-graph.PNG" width="200" alt="a drawn cute bird pointing at a graph that shows positive results">
      </div>
    </div>
  </div>
</template>


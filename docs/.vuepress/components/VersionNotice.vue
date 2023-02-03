<template>
  <div>
    <h2>Use a Java Refactoring Tool</h2>
    
    <div v-if="$page.frontmatter.tags.includes('Free')">
    <h3>Automate this Refactoring system-wide</h3>   
    <p>
      You can apply this refactoring for <em>free</em> with the jSparrow Eclipse IDE plug-in.
      <br>
        Install the plug-in for Eclipse IDE: <a href="https://marketplace.eclipse.org/content/jsparrow" target="_blank" rel="noopener noreferrer">Eclipse Marketplace</a>.
      </p>
    </div>
    <div v-else>
    <h3>No license required</h3>   
      <p>
        You can <em>review</em> this refactoring on your code <strong>without a license</strong> by installing jSparrow to your Eclipse IDE.
       Install the plug-in from Eclipse IDE: <a href="https://marketplace.eclipse.org/content/jsparrow" target="_blank" rel="noopener noreferrer">Eclipse Marketplace</a>.
      </p>
      <h3>System-wide Refactoring</h3>
      <p>
      <em>
        Do you want to automate this refactoring (and many more) to your system-wide code?
      </em>
        The automatic application of this system-wide refactoring can be unlocked by acquiring 
        <strong><a href="https://jsparrow.io/pricing/" target="_blank" rel="noopener noreferrer">your jSparrow license</a></strong>.
      </p>   
    </div>
  </div>
</template>


# Build Integration

Integrating the jSparrow Maven plugin into a build process has the advantage of automatically applying selected jSparrow rules in an already automated process. 
The configuration is highly customizable and depends very much on the environment. 
Here it will be described how Jenkins builds are able to trigger jSparrow Maven plugin builds, depending on the Git branch of the commit. In this example, all builds on a feature branch will trigger jSparrow. 

## Requirements

This description assumes that the following components are available and correctly setup. 

* Jenkins (https://hub.docker.com/r/jenkins/jenkins)
  * Pipeline Maven Integration plugin (https://plugins.jenkins.io/pipeline-maven/)
  * Bitbucket Server Notifier plugin (https://github.com/jenkinsci/stashnotifier-plugin/blob/release/1.x/readme.md)
  * (Declarative) Multibranch Pipeline (https://www.jenkins.io/doc/book/pipeline/multibranch/)
* Bitbucket (https://hub.docker.com/r/atlassian/bitbucket-server/)

## Jenkins configuration

A jSparrow build requires a license key and a config file (jsparrow.yml) to be present. Both can be kept securely within Jenkins and then referenced by the pipeline. 

### License key as secret text

The jSparrow license key can be provided using the `-Dlicense=<license-key>` parameter, as described in the [Plugin Goals](/maven/getting-started.html#plugin-goals). However, it might not be desirable to provide the key in plain text.  
With the help of Jenkins "secret text" credentials, it is possible to never have the license key appear in the pipeline. Even in log statements the "secret text" will only appear as asterisks. 

Jenkins lets users add credentials either globally, or build pipeline specific. For one pipeline, there is no practical difference between one or the other. 

1. Navigate to the "Add Credentials" either global or pipeline specific
    * Global: *Manage Jenkins* -> *Manage Credentials* -> *System* (click on "Store") -> *Global credentials (unrestricted)*
    * Pipeline specific: [Your Pipeline] -> *Credentials* -> *Stores scoped to [Your Pipeline]* -> *Global credentials (unrestricted)*
1. This is a description of the fields of the following screen:  
  [ ![jSparrow license](/img/maven/jenkins-jsparrow-license.png) ](/img/maven/jenkins-jsparrow-license.png)
    * Kind: Select "Secret text"
    * Scope: This needs to be "Global", otherwise the pipeline will not have access
    * Secret: This is where the jSparrow license key has to be provided.  
    Note: The content of this variable cannot be viewed anymore after putting it here and it will not appear in logs or echo statements.
    * ID: This is the key with which the secret text can be referenced in the pipeline
    * Description: It is always a good practice to provide a description

### jSparrow config file

Customization about which rules to apply or which resources to skip are done in a config file (`jsparrow.yml`), as described in detail in [Plugin Configuration](/maven/getting-started.html#plugin-configuration).

By default, this configuration file is expected to reside in the project's root directory. Alternatively, there is the option to fully manage the jSparrow configuration in Jenkins. This might have the following advantages:
* The `jsparrow.yml` does not need to be committed to the project's SCM repository
* Jenkins administrators can manage the configuration globally

The config file can be added as follows:

1. Navigate to *Manage Jenkins* -> *Managed files* and click "Add a new Config"
1. Add a new "Custom file" and provide a meaningful ID
1. This is a description of the fields of the following screen:  
  [ ![jsparrow.yml](/img/maven/jenkins-jsparrow-yml-content.png) ](/img/maven/jenkins-jsparrow-yml-content.png)
    * ID: The key with which the file will be referenced within the pipeline
    * Name: The file name
    * Comment: An optional description
    * Content: The configuration according to the [Plugin Configuration](/maven/getting-started.html#plugin-configuration)

## Project configuration

## Pipeline configuration

### Pipeline Maven Integration plugin


---
title: Getting started
sidebarDepth: 2
---

# Getting started

[[toc]]

The jSparrow Maven plugin (JMP) is a continuous integration tool to apply automatic refactorings. It supplies similar rules as the jSparrow Eclipse plugin, but works without user input.

## Installation
### Requirements

* Maven 2.2.1+ (3.5.0+ for Java 11)
* Java 8 or 11
* Linux or Windows operating system

Maven projects themselves may have their Java source version set to an older version than 1.8 or 11 - this is not a problem. However, in this case, all rules requiring a newer source level will be ignored.

### Using the jSparrow Plugin Repository

::: tip URL
[https://download.jsparrow.eu/maven2](https://download.jsparrow.eu/maven2)
:::

In order to access jSparrow from the jSparrow plugin repository, you need to add it to Maven's `settings.xml` or to the `pom.xml` of the project you are using it. Both configuration options are listed below.

#### Configuration via pom.xml

The `pluginRepository` configuration via `pom.xml`:

```XML
<project>
  ...
  <pluginRepositories>
    <pluginRepository>
      <id>jsparrow-plugin-repository</id>
      <name>jSparrow Plugin Repository</name>
      <url>https://download.jsparrow.eu/maven2/</url>
    </pluginRepository>
  </pluginRepositories>
  ...
</project>
```

#### Configuration via settings.xml

Maven has two locations for the `settings.xml`:
* Global Maven settings: `${maven.home}/conf/settings.xml`
* User Maven settings: `${user.home}/.m2/settings.xml`

If both exist, the contents are getting merged, with the user settings being dominant (have a look at the [Maven Settings Reference](https://maven.apache.org/settings.html) for more information.).

In contrast to the `pom.xml` configuration, the configuration in `settings.xml` needs additional `profile` configuration, as seen below:

```XML
<settings>
  ...
  <profiles>
    ...
    <profile>
      <id>default</id>
      <pluginRepositories>
        <pluginRepository>
          <id>jsparrow-plugin-repository</id>
          <name>jSparrow Plugin Repository</name>
          <url>https://download.jsparrow.eu/maven2/</url>
        </pluginRepository>
      </pluginRepositories>
    </profile>
  </profiles>
  ...
  <activeProfiles>
    ...
    <activeProfile>default</activeProfile>
    ...
  </activeProfiles>
  ...
</settings>
```

### Increasing Java Heap Space
Especially with larger projects, a `java.lang.OutOfMemoryError: Java heap space` could occur.
This means, as the error message suggests, that the allocated heap space is too small.
To increase your Java heap space set the following environment variable:
```bash
$ export MAVEN_OPTS="-Xmx3000m"
```
This option sets the maximum heap space (`-Xmx`) to 3000 MB (`3000m`).

::: tip
Depending on your project you might need a smaller or bigger heap space. The default for modern Java Virtual Machines is smaller than 1/4th of the physical memory or 1 GB.
:::

## Usage
This section describes how to set up a project to use the jSparrow Maven plugin and how to use it.

### Feature Overview
* Fully automatic execution of jSparrow rules for a Maven project.
* Refactorings can be applied using the command line.
* For an overview over the supplied rules, use the `list-rules` goal (see further below).
* Easy installation, no additional downloads required.
* Configuration using command line options, profiles or configuration files possible.

### Project Setup
To use the jsparrow-maven-plugin on a project, add the following code snippet to the project's `pom.xml`:

```XML
<build>
  <plugins>
    <plugin>
      <groupId>eu.jsparrow</groupId>
      <artifactId>jsparrow-maven-plugin</artifactId>
      <version>2.0.1</version>
    </plugin>
  </plugins>
</build>  
```

### Plugin Configuration

To configure which rules should be applied, use the configuration file (`jsparrow.yml`). Place this file in your project's root directory.
The child projects will inherit the parent's configuration, unless another `jsparrow.yml` is placed in their base directory. In this case, the parent's configuration is ignored completely. If the configuration file is not present, has errors or isn't inherited from a parent, an exception will be thrown and the JMP will terminate. If the `-DconfigFile` option is specified, it will override all other configuration files.

The `jsparrow.yml` file consists of three optional sections.
The first section contains the profiles definition.
To define a profile you should specify its name, the list of rules included in the profile and their configuration if any applies (e.g., configuration for [LoggerRule](/rules/standard-logger.html) and [RenamingRule](/rules/field-renaming.html)).
Any number of profiles can be defined. The profile to be used for refactoring should be designated with the `selectedProfile` key.

The second section contains a list of rules which will be used for refactoring if no profile is designated as `selectedProfile`.
Similarly as in profile definition, the list of rules can be followed by the rule configuration if any is required.

The third section under `excludes` node consists of the modules, packages and classes that shall not be refactored by JMP. If no `excludes` are defined, JMP will refactor the entire main resources of the project.
This section will only be recognized in the `yml` file in the root project, i.e., in any `yml` file placed in child projects the `excludes` section will be discarded.

The following is an example of a `jsparrow.yml` configuration file:


```yaml
# Specify one of the profiles declared below as the selected profile.
# If the selectedProfile is not specified the rules in the “rules:” section
# will be applied  
selectedProfile: profile1  

# define profiles here  
profiles:  
 - name: profile1  
   rules:  
    - TryWithResource
    - MultiCatch
    - FieldRenaming
    - StandardLogger

# The configuration for LoggerRule and RenamingRule can be placed together
# with the profile in which the rules are included. If the configuration
# within the profile is missing, then the default values are used. The
# following is a configuration sample with default values  
  loggerRule:  
    systemOutReplaceOption: INFO  
    systemErrReplaceOption: ERROR  
    printStacktraceReplaceOption: ERROR  
    systemOutPrintExceptionReplaceOption: INFO  
    systemErrPrintExceptionReplaceOption: ERROR  
    addMissingLoggingStatement: ERROR  
    attachExceptionObject: true  
  renamingRule:  
    fieldTypes:  
      - private
      - protected
      - package-protected
      - public
    underscoreReplacementOption: Upper  
    dollarReplacementOption: Leave  

# The rules in this section will be executed, if no profile has been
# specified as selectedProfile or via maven. To deactivate rules, they can be
# commented with the #-sign. The configuration for RenamingRule and LoggerRule
# in this section can be done the same way as in the configuration
# in profiles, under the rules section.
rules:
  - TryWithResource
  - MultiCatch
  - FieldRenaming
  - StandardLogger  
loggerRule:  
  systemOutReplaceOption: INFO  
  systemErrReplaceOption: ERROR  
  printStacktraceReplaceOption: ERROR  
  systemOutPrintExceptionReplaceOption: INFO  
  systemErrPrintExceptionReplaceOption: ERROR  
  addMissingLoggingStatement: ERROR  
  attachExceptionObject: true  
renamingRule:  
  fieldTypes:  
    - private
    - protected
    - package-protected
    - public
  underscoreReplacementOption: Upper  
  dollarReplacementOption: Leave  

# Define modules, classes and packages that you don't want to apply refactoring
# to. Excluded modules can only be defined on the parent project and those modules
# are then entirely ignored. If the module project has it's own yml file, it
# overrides the entire configuration inherited from the yml configuration of
# the parent project, unless it is an excluded module.
excludes:    
    excludeModules:  
      - eu.jsparrow.core  
    excludePackages:  
      - eu.jsparrow.core  
      - eu.jsparrow.core.rule  
    excludeClasses:  
      - eu.jsparrow.core.Activator.java  
```

::: warning NOTE
Any configuration options in the YML file are case sensitive. Be careful how you type out things!
:::
::: tip
The rule IDs can be viewed using the [list-rules-short-goal](#list-rules-short) of the jsparrow-maven-plugin.
:::


## Plugin Goals
The following plugin goals are supported:

### Refactor
This goal starts the refactoring process.

```bash
$ mvn jsparrow:refactor
```
You may add the following parameters:

| Parameter	| Description |
|:----------|:-------------|
| `-DconfigFile=<config-file-path>`	| The specified configuration file will be used instead of the default (`jsparrow.yml`). |
| `-Dprofile=<selected-profile-id>`	| The specified profile will be used. Make sure that either a `jsparrow.yml` is in the root directory or `-DconfigFile=<config-file-path>` is specified. The given profile ID will be compared to the declared profiles in the configuration file. If the given profile ID is not declared, an error will be thrown. |
| `-DdefaultConfiguration`	| The built-in default configuration will be used for refactoring. If this parameter is set, the configuration in the root of the project will be ignored. |
| `-Dlicense=<license-key>`	| Specify the license key to be used. This takes priority over a configuration via config file. In "Machine Configuration" the config file approach is described. |
| `-Durl=<url>`	| Specify the licensing server URL to use in case a [local server](/maven/local-license-server.html) should be used. |

### List Rules
This goal lists rules with their IDs, names and descriptions.

```bash
$ mvn jsparrow:list-rules
```
You may add the following parameters:

| Parameter	| Description |
|:----------|:-------------|
| `-Drules=<rule1,rule2...>`	| The rules with the given IDs will be listed. list-of-rule-ids is a comma-separated (,) list of rule ids. |

Per default all available rules will be listed.

### List Rules Short
This goal lists all rules in a table with ID and name

```bash
$ mvn jsparrow:list-rules-short
```

### License Info
This goal shows the licensing information.

```bash
$ mvn jsparrow:license-info
```
You may add the following parameters:

| Parameter	| Description |
|:----------|-------------|
| `-Dlicense=<license-key>`	| The license key to be used |
| `-Durl=<url>`	| The licensing server to contact |

If the license key is not provided as a parameter, JMP will search for it in `~/.config/jsparrow-standalone/config.yml`.

### Help
This goal provides the plugin help.

```bash
$ mvn jsparrow:help
```

## Machine Configuration
It is possible to specify certain parameters using a configuration file in the users home directory, so it is not necessary to specify them using the command line for each run.

Currently only passing the license key and license server location using the configuration file is possible.

To pass the properties using the configuration file, create a file with the following contents in `$HOME/.config/jsparrow-standalone/config.yml`:

```yaml
key: <license-key>
url: <http://somelocation.loc/>
```

## Limitations
In case of multi-module maven projects, the Field Renaming rule is limited to private fields only. The jSparrow Maven plugin will detect whether the project being refactored is part of a multi-module maven project and restrict the Field Renaming rule to be executed only on private fields.

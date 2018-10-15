# Getting started

[[toc]]

The jSparrow Maven Plugin (JMP) is a continuous integration tool to apply automatic refactorings. It supplies similar rules as the jSparrow Eclipse Plugin, but works without user input.

## Installation
### Requirements
* Maven 2.2.1 or later
* Java 8

Maven projects themselves may have their Java source version set to an older version than 1.8 - this is not a problem. However, in this case, all rules requiring a newer source level will be ignored.

### Using the Jar and Pom Files
Download the JAR file and the `pom.xml`. Navigate to the download location and execute this command:

```bash
$ mvn install:install-file \
    -Dfile=jsparrow-maven-plugin-<VERSION>.jar \
    -DpomFile=pom.xml
```

## Usage
This section describes how to set up a project to use the jSparrow Maven Plugin and how to use it.

### Feature Overview
* Fully automatic execution of jSparrow rules for a Maven project.
* Refactorings can be applied using the command line.
* For an overview over the supplied rules, use the `list-rules` goal (see further below).
* Easy installation, no additional downloads required.
* Configuration using command line options, profiles or configuration files possible.

### Project Setup
To use the jsparrow-maven-plugin on a project, add the following code snippet to the project's `pom.xml` (in build/plugins):

```XML
<plugin>
    <groupId>eu.jsparrow</groupId>
    <artifactId>jsparrow-maven-plugin</artifactId>
    <version>${VERSION}</version>
</plugin>
```

To configure which rules should be applied, use the configuration file (`jsparrow.yml`). Place this file in your project's root directory. If the configuration file is not present there, the JMP will use the default configuration. If the configuration file has errors, an exception will be thrown and the JMP will be terminated.

```yaml
# specify one of the profiles declared below as the selected profile.  
# if the selectedProfile is not specified the rules in the “rules:” section will be applied  
selectedProfile: profile1  

# define profiles here  
profiles:  
 - name: profile1  
 rules:  
   - TryWithResource
   - MultiCatch
   - FieldRenaming
   - StandardLogger

# configuration for LoggerRule and RenamingRule can be placed together with profile in which rules are included.   
# if there is no additional configuration for those rules when they are included in the list of rules for the profile, default values are used.   
# following is the configuration sample with default values set  
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

# rules in this section will be executed, if no profile has been specified as selectedProfile or via maven.  
# to deactivate rules, they could be commented with the #-sign  
# configuration for RenamingRule and LoggerRule in this section can be made same way as in the configuration in profiles, under the rules section.   
# this configuration is used if no profile is selected and rules are listed in rules section  
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

# define modules, classes and packages that you don't want to apply refactoring to  
# excluded modules could only be defined on parent project and those modules are then entirely ignored  
# if module project has it's own yaml file, it overrides entire configuration from parent project yaml configuration if module wasn't excluded in parent yaml  
excludes:    
    excludeModules:  
      - eu.jsparrow.core  
    excludePackages:  
      - eu.jsparrow.core  
      - eu.jsparrow.core.rule  
    excludeClasses:  
      - eu.jsparrow.core.Activator.java  
```

Any configuration options in the YAML file are case sensitive. Be careful how you type out things!
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
| `-Durl=<url>`	| Specify the licensing server URL to use in case a local server should be used. |

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

If the license key is not provided as a parameter, JMP will search for it in `~/.config/jsparrow-standalone/config.yaml`.

### Help
This goal provides the plugin help.

```bash
$ mvn jsparrow:help
```

## Machine Configuration
It is possible to specify certain parameters using a configuration file in the users home directory, so it is not necessary to specify them using the command line for each run.

Currently only passing the license key and license server location using the configuration file is possible.

To pass the properties using the configuration file, create a file with the following contents in `$HOME/.config/jsparrow-standalone/config.yaml`:

```yaml
key: <license-key>
url: <http://somelocation.loc/>
```



## Limitations
In case of multi-module maven projects, the Field Renaming rule is limited to private fields only. The jSparrow Maven Plugin will detect whether the project being refactored is part of a multi-module maven project and restrict the Field Renaming rule to be executed only on private fields.

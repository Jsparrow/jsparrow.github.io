---
title: Remove Unused Types
ruleId: RemoveUnusedTypes
since: 4.10.0
minJavaVersion: 1.1
remediationCost: 2

description:
    Finds and removes classes that are never used in main sources.
tags: ["Java 1.1", "Readability", "Coding Conventions"]
---

# Remove Unused Types

## Description

This rule finds the type declarations that are never used and removes them. 
It provides options for removing types that are only used in tests sources. 
In case the  unused type is the single top-level class, then the rule would delete the entire compilation unit (i.e., the Java file). 

::: warning Save the API
Users are advised to be cautious when removing non-private types from the source base. 
The public API defined in the project can be used by third parties that may not be present in the current workspace. 
:::

## Benefits

Some benefits of removing unused code, and in particular unused types, are:
* Reduces maintenance costs.
* Reduces the build time.
* Prevents the risk of accidentally using faulty code.  


## Configuration

This rule, together with [Remove Unused Fields](remove-unused-fields.html) and [Remove Unused Methods](remove-unused-methods.html), provides a dedicated configuration wizard that allows users to:
* choose which types to remove based on their access modifier. By default only the `private` modifier is selected.
* choose the search scope for type references. It can either be set to *'Project'* or to *'Workspace'*.
* choose whether to remove types that are only used in unit tests. In this case, the corresponding test cases are also removed. 
Users are advised to be cautions with this option as the test cases may cover more than the type being removed.

The following is a shot of the configuration wizard:

[ ![Remove unused code wizard](/img/eclipse/remove_unused_code_wizard_003.png) ](/img/eclipse/remove_unused_code_wizard_003.png)

When clicking Finish, jSparrow will search for unused fields, methods, and types (as described above), find and analyze their references, and compute the code changes.  
The changes are shown in a Dif-View and users can choose to accept the computed changes for each of the unused fields, methods, or types:

[ ![Remove unused code preview wizard](/img/eclipse/remove_unused_public_types_preview_wizard.png) ](/img/eclipse/remove_unused_public_types_preview_wizard.png)


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Top Level Package-Private Types

__Pre__
```java
public class User {

}
class UnusedType {

}
```

__Post__
```java
public class User {

}
```

### Inner Types

__Pre__
```java
public class User {

    private class UnusedType {

    }
}

```

__Post__
```java
public class User {

}
```

### Local Types 

__Pre__
```java
public class User {

    public void foo() {
        class UnusedLocalType {

        }
        //...
    }

}
```

__Post__
```java
public class User {

    public void foo() {
        //...
    }
}
```

## Limitations 

If the compilation unit contains more than one top-level type declaration, the rule suggests removing only one top-level type at a time. 
Additionally, if the only top-level unused type is the 'main' top type (i.e., the type whose name matches the compilation unit's name) and all other (at least one) top-level classes are actually used, then the rule does not suggest removing the 'main' top level class. 

<VersionNotice />

## Properties

<RuleProperties />

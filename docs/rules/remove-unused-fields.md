---
title: Remove Unused Fields
ruleId: RemoveUnusedFields
since: 4.8.0
minJavaVersion: 1.1
remediationCost: 2

    
description:
    Finds and remove fields that are never used actively.
tags: ["Java 1.1", "Readability", "Coding Conventions"]
---

# Remove Unused Fields

## Description

This rule finds the field declarations that are never used and removes them. 
Reassignments in the same or in external Java files are not counted as active usages. 
A configuration wizard allows users to choose whether to remove fields whose initializers may cause side effects (see [Configuration](#configuration)). 
Any annotation except for `@Deprecated` and `@SuppressWarnings` prevents the field declaration from being considered as unused. 

### Avoiding Side Effects

In general, any method or constructor invocation may cause side effects that may be necessary for the correct behavior of the program. 
Therefore, the initializers in field declarations or the right hand sides of the field reassignments that may cause side effects are preventing the field from being removed by this rule. 
Some exceptions are made for popular Java builtin constructors and methods. For example: 
* constructors of collections, maps, sets, and other popular Java classes, e.g., `new ArrayList<>()`, `new HashMap<>()`, `new Object()`, etc...
* methods for retrieving information about a collection without modifying it, e.g., `contains()`, `isEmpty()`, `size()`, `lastIndexOf()`, etc...
* factory methods for collections, e.g., `List.of()`, `Set.of()`, etc...

## Benefits

Some benefits of removing unused code, and in particular unused fields, are:
* Reduces maintenance costs.
* Reduces the compilation time.
* May potentially eliminate unnecessary computations for unwanted side effects. 


## Configuration

This rule provides a dedicated configuration wizard that allows users to:
* choose the fields to remove by their access modifier. By default only the `private` modifier is selected.
* choose the search scope for field references. It can either be set to `Project` or `Workspace`.
* choose whether to deliberately remove the fields whose initializers may cause side effects. By default this option is not checked. Users are advised to be cautions with this option as the side effects may be necessary for a correct behavior of the program. 

The following is a shot of the configuration wizard:

[ ![Remove unused code wizard](/img/eclipse/remove_unused_code_wizard.png) ](/img/eclipse/remove_unused_code_wizard.png)

When clicking Finish, jSparrow will search for unused fields (as described above), find and analyse their references, compute the code changes.
The changes are shown in a Dif-View and users can choose to accept the computed changes for each field:

[ ![Remove unused code preview wizard](/img/eclipse/remove_unused_code_preview_wizard.png) ](/img/eclipse/remove_unused_code_preview_wizard.png)


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
public class UnusedFieldsSample {
	
	public String publicUsedField = "";
	public String publicUnusedReassignedField = "";
	
	private String privateUsedField = "";
	
	void foo() {
		publicUnusedReassignedField = "";
		BlackHole blackHole = new BlackHole();
		blackHole.use(publicUsedField);
		blackHole.use(privateUsedField);
	}
}

```

__Post__
```java
public class UnusedFieldsSample {
	
	public String publicUsedField = "";
	
	private String privateUsedField = "";
	
	void foo() {
		BlackHole blackHole = new BlackHole();
		blackHole.use(publicUsedField);
		blackHole.use(privateUsedField);
	}
}
```


## Limitations

At most one field at a time can be removed from the field declarations with multiple declaration fragments.

<VersionNotice />


## Properties

<RuleProperties />

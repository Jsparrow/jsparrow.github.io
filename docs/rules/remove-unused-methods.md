---
title: Remove Unused Methods
ruleId: RemoveUnusedMethods
since: 4.9.0
minJavaVersion: 1.1
remediationCost: 2

description:
    Finds and removes methods that are never used in main sources.
tags: ["Java 1.1", "Readability", "Coding Conventions"]
---

# Remove Unused Methods

## Description

This rule finds the method declarations that are never used and removes them. 
Provides options for removing methods that are only used in tests sources. 

::: warning Save the API
Users are advised to be cautious when removing non-private methods from the source base. 
The public API defined in the project can be used by third parties that may not be present in the current workspace. 
:::

## Benefits

Some benefits of removing unused code, and in particular unused methods, are:
* Reduces maintenance costs.
* Reduces the build time.


## Configuration

This rule, together with [Remove Unused Fields](remove-unused-fields.html) and [Remove Unused Types](remove-unused-types.html), provides a dedicated configuration wizard that allows users to:
* choose which methods to remove based on their access modifier. By default only the `private` modifier is selected.
* choose the search scope for method references. It can either be set to `Project` or `Workspace`.
* choose whether to remove methods that are only used in unit tests. In this case, the corresponding test cases are also removed. 
Users are advised to be cautions with this option as the test cases may cover more than the method being removed.

The following is a shot of the configuration wizard:

[ ![Remove unused code wizard](/img/eclipse/remove_unused_code_wizard_003.png) ](/img/eclipse/remove_unused_code_wizard_003.png)

When clicking Finish, jSparrow will search for unused fields and methods (as described above), find and analyse their references, and compute the code changes.  
The changes are shown in a Dif-View and users can choose to accept the computed changes for each unused method or field:

[ ![Remove unused code preview wizard](/img/eclipse/remove_unused_methods_preview_wizard.png) ](/img/eclipse/remove_unused_methods_preview_wizard.png)


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
public class UnusedMethodsSample {

	private void unusedPrivateMethod() {}

	private void run() {
		System.out.println("Running...");
	}

	public static void main() {
		UnusedMethodsSample instance = new UnusedMethodsSample();
		instance.run();
	}

}
```

__Post__
```java
public class UnusedMethodsSample {

	private void run() {
		System.out.println("Running...");
	}

	public static void main() {
		UnusedMethodsSample instance = new UnusedMethodsSample();
		instance.run();
	}

}
```

## Limitations

The method declarations that either override or are overridden by another method are not removed, even if they are never used. 

<VersionNotice />

## Properties

<RuleProperties />

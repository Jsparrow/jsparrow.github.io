---
title: Remove Inherited Interfaces from Class Declaration
ruleId: ReImplementingInterface
since: 2.2.0
minJavaVersion: 1
remediationCost: 2
links:
    - displayName: "FindBugs:RedundantInterface"
      url: "http://findbugs.sourceforge.net/bugDescriptions.html#RI_REDUNDANT_INTERFACES"
    
description:
    This rule removes interfaces from class declaration, which are already implemented by a super class. These interfaces are inherited from the super class.
tags: ["Java 1.1", "Coding Conventions"]
---

# Remove Inherited Interfaces from Class Declaration

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.2.0](/eclipse/release-notes.html#_2-2-0) |
| Minimum Java version            | 1     |
| Remediation cost                | 2 min |
| Links                           | [FindBugs:RedundantInterface](http://findbugs.sourceforge.net/bugDescriptions.html#RI_REDUNDANT_INTERFACES) |

## Description
This rule removes interfaces from class declaration, which are already implemented by a super class.
These interfaces are inherited from the super class.

## Benefits

Removing redundant syntax improves readability.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
class Child extends Parent implements Observer {
	@Override
	public void update(Observable o, Object arg) {
		// do nothing
	}
}

class Parent implements Observer {
	@Override
	public void update(Observable o, Object arg) {
		// do nothing
	}
}
```

__Post__
```java
class Child extends Parent {
	@Override
	public void update(Observable o, Object arg) {
		// do nothing
	}

}

class Parent implements Observer {
	@Override
	public void update(Observable o, Object arg) {
		// do nothing
	}
}
```

<VersionNotice />


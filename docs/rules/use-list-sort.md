---
title: Use List Sort
description:
    Replace static invocations of 'Collections.sort(List, Comparator)' with 'List.sort(Comparator)'.

tags: ["Java 1.8", "Old Language Constructs", "Coding Conventions", "Readability"]
---

# Use List Sort

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 3.6.0 |
| Minimum Java version            | 8     |
| Remediation cost                | 2 min |
| Links                           |  |

## Description

Replace static invocations of `Collections.sort(List, Comparator)` with `List.sort(Comparator)`.

## Benefits

Improves the readability by utilizing the Java 8 extensions of `List` API. 

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Static Sort Invocation
__Pre__
```java
	public void sortUsersById(List<User> users) {
		Collections.sort(users, (User o1, User o2) -> o1.getId() - o2.getId());
	}
```
__Post__
```java
	public void sortUsersById(List<User> users) {
		users.sort((User o1, User o2) -> o1.getId() - o2.getId());
	}
```


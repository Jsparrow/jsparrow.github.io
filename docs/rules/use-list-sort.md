---
title: Replace Collection.sort with List.sort
ruleId: UseListSort
since: 3.6.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    Replace static invocations of 'Collections.sort(List, Comparator)' with 'List.sort(Comparator)'.

tags: ["Java 8", "Old Language Constructs", "Coding Conventions", "Readability"]
---

# Replace Collection.sort with List.sort

[[toc]]

## Properties

<RuleProperties />


## Description

Replace static invocations of `Collections.sort(List, Comparator)` with `List.sort(Comparator)`.

## Benefits

Improves the readability by utilizing the Java 8 extensions of the `List` API. 

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

### Inline Comparator Implementation

__Pre__
```java
public void sortUsersById(List<User> users) {
	Collections.sort(users, new Comparator<User>() {
		@Override
		public int compare(User o1, User o2) {
			return o1.getId() - o2.getId();
		}
	});
}
```

__Post__
```java
public void sortUsersById(List<User> users) {
	users.sort(new Comparator<User>() {
		@Override
		public int compare(User o1, User o2) {
			return o1.getId() - o2.getId();
		}
	});
}
```

### Comparator Reference

__Pre__
```java
public void sortUsersById(List<User> users) {
	Comparator<User> comparator = (User o1, User o2) -> o1.getId() - o2.getId();
	Collections.sort(users, comparator);
}
```

__Post__
```java
public void sortUsersById(List<User> users) {
	Comparator<User> comparator = (User o1, User o2) -> o1.getId() - o2.getId();
	users.sort(comparator);
}
```


<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::
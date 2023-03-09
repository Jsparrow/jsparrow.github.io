---
title: Remove Collection::addAll
ruleId: RemoveCollectionAddAll
since: 3.15.0
minJavaVersion: 1.2
remediationCost: 2
links:

    
description:
    Calling collection constructors with arguments in order to avoid calls of addAll.

tags: ["Java 1.2", "Readability", "Marker"]
---

# Remove Collection::addAll

## Description

In order to apply the rule, the following two statements must occur:

* A declaration of a local variable storing an instance of `java.util.Collection` which is initialized with the default constructor.
* An invocation of `java.util.Collection#addAll` immediately following the variable declaration.

## Benefits

Reducing lines of code and improving readability.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
List<String> list = new ArrayList<>();
list.addAll(Arrays.asList("value1", "value2"));
```

__Post__
```java
List<String> list = new ArrayList<>(Arrays.asList("value1", "value2"));
```
<VersionNotice />


## Properties

<RuleProperties />

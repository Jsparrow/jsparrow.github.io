---
title: Use Collections Singleton List
ruleId: UseCollectionsSingletonList
since: 3.8.0
minJavaVersion: 1.3
remediationCost: 2
links:
description:
    Replaces Arrays.asList with 0 or 1 parameters respectively with Collections.emptyList() or Collections.singletonList(..)

tags: ["Java 1.3", "Old Language Constructs", "Performance"]
---

# Use Collections Singleton List

[[toc]]

## Properties

<RuleProperties />


## Description

Replaces [`Arrays.asList`](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-) with 0 or 1 parameters respectively with [`Collections.emptyList()`](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#emptyList--) or [`Collections.singletonList(..)`](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#singletonList-T-).

::: warning Note
`Arrays.asList` creates a fixed size list while `Collections.singletonList` creates an immutable list and therefore does not allow operations like [`set(int index, E element)`](https://docs.oracle.com/javase/10/docs/api/java/util/List.html#set(int,E)). 
:::

## Benefits

Improves the efficiency of creating short lists. 

## Requirement & Tags

::: warning Requirements
Java 1.3
:::

::: tip Tags
<TagLinks />
:::

## Code Changes


### List with one element

__Pre__
```java
List<String> list = Arrays.asList("value");

```
__After__
```java
List<String> list = Collections.singletonList("value");
```

### Empty List

__Pre__
```java
List<String> list = Arrays.asList();

```
__After__
```java
List<String> list = Collections.emptyList();
```

### Static import to Arrays.asList

__Pre__
```java
import static java.util.Arrays.asList;

class MyClass {
    List<String> emptyList = asList();
    List<String> singletonList = asList("value");
}


```
__After__
```java
import java.util.Collections;

class MyClass {
    List<String> emptyList = Collections.emptyList();
    List<String> singletonList = Collections.singletonList("value");
}
```
<VersionNotice />


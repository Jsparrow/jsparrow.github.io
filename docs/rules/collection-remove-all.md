---
title: Replace removeAll() with clear()
description:
    Simplifies the code by replacing all occurrences of removeAll() which have the current collection as parameter with clear().
tags: ["Java 1.2", "Coding Conventions"]
---

# Replace removeAll() with clear()

[[toc]]

## Properties


| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0) |
| Minimum Java version            | 1.2   |
| Remediation cost                | 2 min |
| Links                           | [FindBugs](http://findbugs.sourceforge.net/bugDescriptions.html#DMI_USING_REMOVEALL_TO_CLEAR_COLLECTION) |

## Description

Simplifies the code by replacing all occurrences of removeAll() which have the current collection as parameter with clear(). Calling c.removeAll(c) to clear a collection is less clear, susceptible to errors from typos, less efficient and for some collections, might throw a ConcurrentModificationException.   

## Benefits

Calling clear() instead of removeAll() makes code more clear and efficient, when at the same time less error prone.

## Requirement & Tags

::: warning Requirements
Java 1.2
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

```java
public String testIfCollectionIsEmpty(String input){
    List<String> resultList = generateList(input);

    resultList.removeAll(resultList);

    StringBuilder sb = new StringBuilder();

    resultList.stream().forEach((s)->sb.append(s));

    return sb.toString();
}
```

__Post__

```java
public String testIfCollectionIsEmpty(String input){
    List<String> resultList = generateList(input);

    resultList.clear();

    StringBuilder sb = new StringBuilder();

    resultList.stream().forEach((s)->sb.append(s));

    return sb.toString();
}
```

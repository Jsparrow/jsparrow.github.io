---
title: Replace While-Loop with Enhanced For-Loop
description:
    While-loops over Iterators which could be expressed with a for-loop, are transformed to an equivalent for-loop.
---

# Replace While-Loop with Enhanced For-Loop

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9.2   |
| Minimum Java version            | 1.5   |
| Remediation cost                | 5 min |
| Links                           |  |

## Description

Applying this rule replaces While-loops over iterators with an equivalent for-loop.     

## Benefits

Applying this rule leads to more simplicity in the code base by using new language constructs.  

## Requirement & Tags

::: warning Requirements
Java 1.5
:::

::: tip Tags
Java 1.5, Loop, Old Language Constructs
:::

## Code Changes

__Pre__

``` java
public String testWhileToFor(String input) {
    List<String> l = generateList(input);
    StringBuilder sb = new StringBuilder();
    Iterator<String> iterator = l.iterator();
    while (iterator.hasNext()) {
        String s = iterator.next();
        sb.append(s);
    }
    return sb.toString();
}
```

__Post__

``` java
public String testWhileToFor(String input) {
    List<String> l = generateList(input);
    StringBuilder sb = new StringBuilder();
    for (String s : l) {
        sb.append(s);
    }
    return sb.toString();
}
```

## Limitations

Loops where the body modifies the iterator in some way will not be transformed.

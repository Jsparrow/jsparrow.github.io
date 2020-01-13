---
title: Replace While-Loop with Enhanced For-Loop
ruleId: WhileToForEach
since: 1.0.0
minJavaVersion: 5
remediationCost: 5
links: ""
description:
    While-loops over Iterators which could be expressed with a for-loop, are transformed to an equivalent for-loop.
tags: ["Java 5", "Loop", "Old Language Constructs"]
defaultConfiguration: true
---

# Replace While-Loop with Enhanced For-Loop

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0)   |
| Minimum Java version            | 5   |
| Remediation cost                | 5 min |

## Description

Applying this rule replaces While-loops over iterators with an equivalent for-loop.     

## Benefits

Applying this rule leads to more simplicity in the code base by using new language constructs.  

## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
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

<VersionNotice />


---
title: Replace For-Loop with Enhanced-For-Loop
description:
    Transforms all possible for loops with iterators to a ForEach loop
---

# Replace For-Loop with Enhanced-For-Loop

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9.2   |
| Minimum Java version            | 1.5   |
| Remediation cost                | 5 min |
| Links                           |  |

## Description

Since Java 1.5 enhanced for-loops can be used to iterate over collections. This rule replaces old for-loops utilizing iterators with enhanced for-loops in order to improve readability.       

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
	
public String testConvertIteratorToForEach(String input) {
    List<String> foo = generateList(input);
    StringBuilder sb = new StringBuilder();
    for (Iterator<String> iterator = foo.iterator(); iterator.hasNext();) {
        String s = iterator.next();
        sb.append(s);
    }
        return sb.toString();
}
```

__Post__

``` java
public String testConvertIteratorToForEach(String input) {
    List<String> foo = generateList(input);
    StringBuilder sb = new StringBuilder();
        for (String s : foo) {
        sb.append(s);
    }
    return sb.toString();
}
```

## Limitations

Loops where the body modifies the iterator in some way will not be transformed.

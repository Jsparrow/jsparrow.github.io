---
title: Use Stream::map
description:
    Extracts a block from the body of the consumer of the Stream::forEach method and introduces Stream::map instead. 
    This makes complicated code blocks easier to read and reuse.
---

# Use Stream::map

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 1.2.0 |
| Minimum Java version            | 8     |
| Remediation cost                | 15 min |
| Links                           |       |

## Description

Extracts a block from the body of the consumer of the Stream::forEach method and introduces Stream::map instead. 
This makes complicated code blocks easier to read and reuse.

## Benefits
Arguably the lambda expression is easier to read and can be combined with other stream operations.

## Requirement & Tags

::: warning Requirements
Java 1.8
:::

::: tip Tags
Java 1.8, Lambda, Loop
:::

## Code Changes

### Unwrapping single statement

__Pre__
```java
list.stream()
    .filter(s -> !s.isEmpty())
    .forEach(s -> {
        String subString = s.substring(1);
        sb.append(subString);
    });
```

__Post__
```java
list.stream()
    .filter(s -> !s.isEmpty())
    .map(s -> s.substring(1))
    .forEach(subString -> sb.append(subString));
```
---
title: Use Stream::map
description:
    Extracts a block from the body of the consumer of the 'Stream::forEach' method and introduces 'Stream::map' instead.
    This makes complicated code blocks easier to read and reuse.
tags: ["Java 8", "Lambda", "Loop"]
---

# Use Stream::map

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 15 min |
| Links                           |       |

## Description

Extracts a block from the body of the consumer of the `Stream::forEach` method and introduces `Stream::map` instead.
This makes complicated code blocks easier to read and reuse.

## Benefits
Arguably the lambda expression is easier to read and can be combined with other stream operations.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
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

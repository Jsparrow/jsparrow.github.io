---
title: Use Stream::filter
description:
    This rule transforms an if-Statement (without an else statement), which wraps the whole execution block of a Stream::forEach method into a call to Stream::filter with a lambda expression (Predicate) as parameter. This lambda is constructed using the expression from the if-Statement.
tags: ["rule"]
---

# Use Stream::filter

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 8 |
| Remediation cost                | 5 min |
| Links                           | |

## Description

This rule transforms an if-Statement (without an else statement), which wraps the whole execution block of a Stream::forEach method into a call to Stream::filter with a lambda expression (Predicate) as parameter. This lambda is constructed using the expression from the if-Statement.

## Benefits

This rule provides an easier-to read alternative to filter items in a list.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Lambda, Loop
:::

## Code Changes

__Pre__

```java
public List<String> list = Arrays.asList("foo", "bar");

list.stream().forEach(s -> {
    if (s.length() > 3) {
        System.out.println(s);
        System.out.println(s + s);
    }
});
```

__Post__

```java
public List<String> list = Arrays.asList("foo", "bar");

list.stream().filter((s)-> s.length() > 3).forEach((s)-> {
            System.out.println(s);
            System.out.println(s + s);
});
```

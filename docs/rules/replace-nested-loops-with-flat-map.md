---
title: Replace Nested Loops with flatMap
description:
    Nested For-Loops or invocations of forEach commonly used to iterate over all elements of a collection of collections, can be avoided by using flatMap().
    Using flatMap() makes code much more readable and can be combined with other stream functions.
tags: ["rule"]
---

# Replace Nested Loops with flatMap

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.2.0](/eclipse/release-notes.html#_2-2-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 15 min |
| Links                           |       |

## Description

Nested For-Loops or invocations of `forEach` commonly used to iterate over all elements of a collection of collections, can be avoided by using `flatMap()`.
Using `flatMap()` makes code much more readable and can be combined with other stream functions.

## Benefits
Arguably, the lambda expression is easier to read.

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
    matrix3.stream().filter(row -> !row.isEmpty()).forEach(row -> {
        row.stream().filter(col -> !col.isEmpty()).forEach(col -> {
            col.stream().filter(cell -> !cell.isEmpty()).forEach(cell -> {
                cell.stream().filter(element -> !element.isEmpty()).map(element -> element.substring(0, 1)).forEach(element -> {
                    System.out.print(element);
                });
            });
        });
    });
```

__Post__
```java
matrix3.stream().filter(row -> !row.isEmpty()).flatMap(row -> row.stream())
    .filter(col -> !col.isEmpty())
    .flatMap(col -> col.stream())
    .filter(cell -> !cell.isEmpty())
    .flatMap(cell -> cell.stream())
    .filter(element -> !element.isEmpty())
    .map(element -> element.substring(0, 1))
    .forEach(element -> {
        System.out.print(element);
    });
```

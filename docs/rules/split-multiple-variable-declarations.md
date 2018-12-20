---
title: Split Multiple Variable Declarations
description:
    Multiple field or variable declarations on the same line could cause confusion about their types and initial values. That also makes it harder to read and to understand the code.
    In order to improve readability, each field or variable should be declared on a separate line.
    This is recommended by the Code Conventions for the Java Programming Language.
tags: ["Rule", "Free", "Java 1.1", "Readability", "Coding Conventions"]
---

# Split Multiple Variable Declarations

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 1.1     |
| Remediation cost                | 2 min |
| Links                           | [S1659](https://sonarcloud.io/organizations/default/rules#rule_key=squid%3AS1659)|

## Description

Multiple field or variable declarations on the same line could cause confusion about their types and initial values. That also makes it harder to read and to understand the code.

In order to improve readability, each field or variable should be declared on a separate line.

This is recommended by the Code Conventions for the Java Programming Language.

## Benefits

Applying this rule makes the code easier to read.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

``` java
private int a, b;
@TestAnnotation List<Integer> list = new LinkedList<>(), list2;
list.stream().map(element -> {
        int x, y = -20;

        return element;
});
enum Foo {
    ASD, DFG;

    int a, b, c;
}
```

__Post__

``` java
private int a;
private int b;
@TestAnnotation List<Integer> list = new LinkedList<>();
@TestAnnotation List<Integer> list2;
list.stream().map(element -> {
    int x;
    int y = -20;

    return element;
});
enum Foo {
    ASD, DFG;

    int a;
    int b;
    int c;
}
```

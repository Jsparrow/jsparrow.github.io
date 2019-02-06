---
title: Remove Lambda Expression Parenthesis
description:
    If the body of the lambda statement contains only a single expression, the braces are optional. It can be reduced to a lambda expression.
    This is comparable to if-statements or loops with a single expression inside their body, where braces are also optional.
tags: ["Java 8", "Lambda"]
---

# Remove Lambda Expression Parenthesis

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.0.0](/eclipse/release-notes.html#_2-0-0) |
| Minimum Java version            | 8     |
| Remediation cost                | 5 min |
| Links                           | [S1602](https://sonarcloud.io/organizations/default/rules#rule_key=squid%3AS1602)|

## Description

If the body of the lambda statement contains only a single expression, the braces are optional. It can be reduced to a lambda expression.

This is comparable to if-statements or loops with a single expression inside their body, where braces are also optional.

## Benefits

This rule provides an easier-to read alternative to filter items in a list.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

```java
public Function<Function, Function> f = (Function function) -> {
    return function.compose(function);
};
```

__Post__

```java
public Function<Function, Function> f = (Function function) -> function.compose(function);
```

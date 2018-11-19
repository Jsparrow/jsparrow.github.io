---
title: Remove Double Negations
description:
    Removes multiple negations from boolean expressions.
---

# Remove Double Negations

[[TOC]]

## Description

Removes pairs of negations from boolean expressions until only zero or one negation is left.

## Benefits

Improves the readability of the code, by removing cascaded negations of boolean expressions.

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | 2.7.0 |
| Minimum Java version            | 1.1   |
| Remediation cost                | 2 min |
| Links                           | [S2761](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2761&rule_key=squid%3AS2761) |


## Requirement & Tags

::: warning Requirements
None.
:::

::: tip Tags
Java 1.1, Coding Conventions
:::

## Code Changes

Example is based on an odd number of negations

__Pre__

``` java
boolean a = !!true; // 2 times
```

__Post__

``` java
boolean a = true; // removed negations completely
```



__Pre__

``` java
boolean a = !!!true; // 3 times
```

__Post__

``` java
boolean a = !true; // reduced to one time
```
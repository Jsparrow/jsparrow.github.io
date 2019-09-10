---
title: Collapse If Statements
description:
    Collapses, when possible, the nested if-statements into a single one by concatenating the conditions with the infix operator &&.
    
tags: ["Java 1.1", "Coding Conventions", "Readability"]
---

# Collapse If Statements

[[toc]]

## Properties

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | [3.2.0](/eclipse/release-notes.html#_3-2-0)   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           | [S1066](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1066&q=squid%3AS1066) |

## Description

Collapses, when possible, the nested if-statements into a single one by concatenating their conditions with the infix operator `&&`. 
If the concatenation results to an infix expression with more than two components, then a new local variable is introduced to store the condition.


## Benefits

Improves the readability by reducing the number of the nested language constructs. 

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::


## Code Changes

### Simple collapse
__Pre__
```java
    if (a) {
        if (b) {
            System.out.println("Ok");
        }
    }
```
__Post__
```java
    if (a && b) {
        System.out.println("Ok");
    }
```

#### Collapsing more than two statements
__Pre__
```java
    if (a) {
        if (b) {
            if (c) {					
                System.out.println("Ok");
            }
        }
    }
```
__Post__
```java
    boolean condition = a && b && c;
    if (condition) {
        System.out.println("Ok");
    }
```

#### Compound conditions
__Pre__
```java
    if (a) {
        if (b || c) {					
            System.out.println("Ok");
        }
    }
```
__Post__
```java
    boolean condition = a && (b || c);
    if (condition) {
        System.out.println("Ok");
    }
```
<VersionNotice />


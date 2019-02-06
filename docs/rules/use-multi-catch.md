---
title: Use Multi Catch
description:
    Java 7 introduced the possibility to merge multiple catch clauses into a single multi-catch clause. Merging is only possible if the catch statements are identical.
tags: ["Java 7", "Old Language Constructs", "Readability"]
---

# Use Multi Catch

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0) |
| Minimum Java version            | 7     |
| Remediation cost                | 5 min |
| Links                           | [S2147](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2147&q=Catches+should+be+combined.) |

## Description

Java 7 introduced the possibility to merge multiple catch clauses into a single multi-catch clause. Merging is only possible if the catch statements are identical.

## Benefits

Using this rule reduces clutter and improves readability.

## Requirement & Tags

::: warning Requirements
Java 7
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Merge and reduce subtype exceptions.
__Pre__
```java
public int cornerCaseInheritance(int i) {
    try {
        throwSomething(i);
    } catch (SecondChildChildException e) {
        e.printStackTrace();
    } catch (SecondChildException e) {
        e.printStackTrace();
    } catch (SecondChildSecondException e) {
        e.printStackTrace();
    } catch (FirstException e) {
        e.printStackTrace();
    } catch (SecondException e) {
        e.printStackTrace();
    }
    return i;
}
```

__Post__
```java
public int cornerCaseInheritance(int i) {
    try {
        throwSomething(i);
    } catch (FirstException | SecondException e) {
        e.printStackTrace();
    }
    return i;
}
```


### Merge identical catch clauses with different exception names
__Pre__
```java
public int cornerCaseDifferentExceptionNames(int i) {
    try {
        throwSomething(i);
    } catch (SecondChildChildException e) {
        e.printStackTrace();
    } catch (SecondChildException e2) {
        e2.printStackTrace();
    } catch (SecondChildSecondException e3) {
        e3.printStackTrace();
    } catch (FirstException e4) {
        e4.printStackTrace();
    } catch (SecondException e5) {
        e5.printStackTrace();
    }
    return i;
}
```

__Post__
```java
public int cornerCaseDifferentExceptionNames(int i) {
    try {
        throwSomething(i);
    } catch (FirstException | SecondException e) {
        e.printStackTrace();
    }
    return i;
}
```

### Merging identical catch clauses only

__Pre__
```java
public int cornerCaseDifferentBodies(int i) {
    try {
        throwSomething(i);
    } catch (FirstException e) {
        log.log(Level.TRACE, e.getMessage());   // A
    } catch (SecondException e) {
        log.log(Level.TRACE, e.getMessage());   // A
    } catch (ThirdException e) {
        log.log(Level.TRACE, e);                // B
    } catch (FourthException e) {
        log.log(Level.TRACE, e.getCause());     // C
    } catch (FifthException e) {
        log.log(Level.TRACE, e.getCause());     // C
    } catch (SixthException e) {
        log.log(Level.TRACE, e.toString());     // D
    }
    return i;
}
```

__Post__
```java
public int cornerCaseDifferentBodies(int i) {
    try {
        throwSomething(i);
    } catch (FirstException | SecondException e) {
        log.log(Level.TRACE, e.getMessage());   // A
    } catch (ThirdException e) {
        log.log(Level.TRACE, e);                // B
    } catch (FourthException | FifthException e) {
        log.log(Level.TRACE, e.getCause());     // C
    } catch (SixthException e) {
        log.log(Level.TRACE, e.toString());     // D
    }
    return i;
}
```

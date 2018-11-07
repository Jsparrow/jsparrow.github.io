---
title: Remove Unnecessary Semicolons
description:
    Removes the unnecessary semicolons from the code blocks
---

# Remove Unnecessary Semicolons

[[toc]]

## Description
Finds and removes the unnecessary semicolons from the code blocks. 

## Benefits
Improves the readability, by removing code that do not produce any computation steps.

| Property      | Value |
| ------------- |:-------------:|
| Remediation cost      | 1 |
| Links |  |
| Since | 2.7.0 |

## Requirement & Tags

::: warning Requirements
None.
:::

::: tip Tags
Java 1.1, Coding Conventions
::: 

## Code Changes

### Unnecessary semicolon in method body

__Pre__

```java
public void unnecessarySemiColon() {
    ;
    int a = 0;
}
```

__Post__
```java
public void unnecessarySemiColon() {
    int a = 0;
}
```

### Multiple unnecessary semicolons

__Pre__

```java
public void unnecessarySemiColon() {
    ;;;;
    int a = 0;;;
    ;;;;
}
```

__Post__
```java
public void unnecessarySemiColon() {
    int a = 0;
}
```

## Limitations 

### Unnecessary semicolons in class' body
```java
class Foo {
    ;
    private String foo;
}
```


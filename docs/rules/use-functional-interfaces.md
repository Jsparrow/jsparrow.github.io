---
title: Use Functional Interfaces 
description:
    Converts anonymous inner classes to equivalent lambda expressions.
---

# Use Functional Interfaces

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9.0 |
| Minimum Java version            | 8     |
| Remediation cost                | 5 min |
| Links                           | [Squid:S1604](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1604&rule_key=squid%3AS1604) |

## Description

Converts anonymous inner classes to equivalent lambda expressions.

## Benefits

Increases the performance, because lesser objects need to be created. Improves readability because a lot of boilerplate code will be removed.

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Old Language Constructs, Lambda
:::

## Code Changes

### Remove anonymous instantiation of functional interface

__Pre__

```java
Runnable runnable = new Runnable() {
    @Override
    public void run() {
        System.out.println("xx");
    }
};
```

__Post__

```java
Runnable runnable = () -> {
    System.out.println("xx");
};
```

### Rename variables if they are present in the scope outside of the inner class

__Pre__

```java
int a = 5;
    
AFunctionalInterface foo = new AFunctionalInterface() {
    @Override
    public void method(int a) {
        int b = a;
    }
};
```

__Post__

```java
int a = 5;
 
AFunctionalInterface foo = (int a1) -> {
    int b = a1;
};
```

## Limitations

Variables that are used inside the anonymous class must be effectively final.
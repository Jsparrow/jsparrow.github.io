---
title: Remove Boxing for String Conversions
description:
    When calling toString() on a boxed primitive no new instance of that primitive has to be created. 
    This rule replaces occurrences of such code with a static method
---

# Remove Boxing for String Conversions

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 1.0.0 |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           | [squid:S2131](https://sonarcloud.io/organizations/default/rules?languages=java&open=squid%3AS2131&q=squid%3AS2131) |

## Description

When calling toString() on a boxed primitive no new instance of that primitive has to be created. 
This rule replaces occurrences of such code with a static method. 

## Benefits

This rule has performance benefits. 
As described above boxing the object simply to use the static `toString` method is a waste of memory and CPU cycles.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, String Manipulation, Performance
:::

## Code Changes

### Boolean
__Pre__ 
```java
new Boolean(true).toString();
```
__Post__
```java
Boolean.toString(true);
```

### Byte
__Pre__ 
```java
new Byte(1).toString();
```
__Post__
```java
Byte.toString(1);
```

### Double
__Pre__ 
```java
new Double(1.0).toString();
```
__Post__
```java
Double.toString(1.0);
```

### Float
__Pre__ 
```java
new Float(1.0).toString();
```
__Post__
```java
Float.toString(1.0);
```

### Integer
__Pre__ 
```java
new Integer(1).toString();
```
__Post__
```java
Integer.toString(1);
```

### Long
__Pre__ 
```java
new Long(1).toString();
```
__Post__
```java
Long.toString(1);
```

### Short
__Pre__ 
```java
new Short(1).toString();
```
__Post__
```java
Short.toString(1);
```
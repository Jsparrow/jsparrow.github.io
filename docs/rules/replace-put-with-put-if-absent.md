---
title: Replace put(..) with putIfAbsent(..)
description:
    If map.put(..) is wrapped with a condition verifying the existence of an element one can use map.putIfAbsent(...) instead.
---

# Replace put(..) with putIfAbsent(..)

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 2.3.0 |
| Minimum Java version            | 8 |
| Remediation cost                | 2 min |
| Links                           | |

## Description

If `map.put(..)` is wrapped with a condition verifying the existence of an element, one can use `map.putIfAbsent(...)` instead.

## Benefits

Makes the code more readable, by using Java 8 extensions of Map interface. 

## Requirement & Tags

::: warning Requirements
Java 8
:::

::: tip Tags
Java 8, Old Language Constructs
:::

## Code Changes

### Default

__Pre__

```java
if (!map.containsKey(aKey)){
    map.put(aKey, aValue);
}
```

__Post__
```java
map.putIfAbsent(aKey, aValue);
```

### No Block present

__Pre__

```java
if (!map.containsKey(aKey))u
    map.put(aKey, aValue);
```

__Post__
```java
map.putIfAbsent(aKey, aValue);
```

### Including Null Checks

__Pre__

```java
V v = map.get(key);
if (v == null) {
     v = map.put(key, value);
}
return v;
```

__Post__
```java
map.putIfAbsent(key, value);
return v;
```

## Limitations

The rule can be applied if a map type is present, a call to map.put(..) is present, and that call is wrapped in an if-Statement.

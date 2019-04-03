---
title: Replace Map::get by Map::getOrDefault
description:
    Java 8 introduced 'Map::getOrDefault' which offers the possibility to return a default value if the map does not contain a mapping for the given key. This rule replaces the invocations of 'Map::get' followed by a null-check with 'Map::getOrDefault'. 

tags: ["Java 8", "Old Language Constructs"]
---

# Replace Map::get by Map::getOrDefault

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 3.4.0 |
| Minimum Java version            | 8     |
| Remediation cost                | 2 min |
| Links                           |  |

## Description
Java 8 introduced [`Map::getOrDefault`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#getOrDefault-java.lang.Object-V-) which offers the possibility to return a default value if the map does not contain a mapping for the given key. 
This rule replaces the invocations of `Map::get` followed by a null-check with `Map::getOrDefault`. 

## Benefits

Makes the code more readable, by using Java 8 extensions of Map interface.

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
String value = map.get(key);
if(value == null) {
    value = defaultValue;
}
```

__Post__
```java
String value = map.getOrDefault(key, defaultValue);
```

---
title: Replace Map::get by Map::getOrDefault
ruleId: MapGetOrDefault
since: 3.5.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    Java 8 introduced 'Map::getOrDefault' which offers the possibility to return a default value if the map does not contain a mapping for the given key. This rule replaces the invocations of 'Map::get' followed by a null-check with 'Map::getOrDefault'. 

tags: ["Java 8", "Old Language Constructs"]
---

# Replace Map::get by Map::getOrDefault

## Description
Java 8 introduced [`Map::getOrDefault`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#getOrDefault-java.lang.Object-V-) which offers the possibility to return a default value if the map does not contain a mapping for the given key. 
This rule replaces the invocations of `Map::get` followed by a null-check with `Map::getOrDefault`. 

## Benefits

Makes the code more readable, by using Java 8 extensions of Map interface.


## Code Changes

__Pre__

```java
String value = concurrentHashMap.get(key);
if(value == null) {
    value = defaultValue;
}
```

__Post__
```java
String value = concurrentHashMap.getOrDefault(key, defaultValue);
```

## Limitations

The rule applies only on map implementations that do not allow `null` values, namely: 

* [`Attributes`](https://docs.oracle.com/javase/8/docs/api/java/util/jar/Attributes.html) 
* [`ConcurrentHashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)
* [`ConcurrentSkipListMap`](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html) 
* [`Hashtable`](https://docs.oracle.com/javase/8/docs/api/java/util/Hashtable.html) 
* [`Properties`](https://docs.oracle.com/javase/8/docs/api/java/util/Properties.html). 

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::
---
title: Use Factory Methods for Collections
ruleId: CollectionsFactoryMethods
since: 3.6.0
minJavaVersion: 9
remediationCost: 5
links:
description:
    Replaces the invocations of 'Collections.unmodifiableList/Set/Map' with the corresponding factory method 'List.of', 'Set.of' and 'Map.ofEntries' introduced in Java 9. 

tags: ["Java 9", "Old Language Constructs", "Readability"]
---

# Use Factory Methods for Collections

## Description

Java 9 introduced factory methods for creating immutable collections. 
This rule replaces the invocations of ```Collections.unmodifiable{List|Set|Map}``` with the corresponding factory method [```List.of```](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of-E...-), [```Set.of```](https://docs.oracle.com/javase/9/docs/api/java/util/Set.html#of-E...-) and [```Map.ofEntries```](https://docs.oracle.com/javase/9/docs/api/java/util/Map.html#ofEntries-java.util.Map.Entry...-) accordingly.

::: warning Requirements
Java 9
:::

## Benefits
Remove verbosity and avoid creating intermediate collections only for the sake of initialization.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Creating immutable List
__Pre__
```java
    List<String> list = new ArrayList<>();
    list.add("a");
    list.add("b");
    list.add("c");
    list = Collections.unmodifiableList(list);
```

__Post__
```java
    List<String> list = List.of("a", "b", "c");
```

### Creating immutable List with anonymous class

__Pre__
```java
    List<String> list = Collections.unmodifiableList(new ArrayList<String>() {{
        add("a");
        add("b");
        add("c");
    }});
```

__Post__
```java
    List<String> list = List.of("a", "b", "c");
```


### Creating immutable List form array

__Pre__
```java
	List<String> list = Collections.unmodifiableList(Arrays.asList("a", "b", "c"));
```

__Post__
```java
    List<String> list = List.of("a", "b", "c");
```

### Creating immutable Set
__Pre__
```java
    Set<String> set = new HashSet<>();
    set.add("a");
    set.add("b");
    set.add("c");
    set = Collections.unmodifiableSet(set);
```

__Post__
```java
    Set<String> set = Set.of("a", "b", "c");
```

### Creating immutable Map
__Pre__
```java
    Map<String, String> map = new HashMap<>();
    map.put("1", "one");
    map.put("2", "two");
    map.put("3", "three");
    map = Collections.unmodifiableMap(map);
```

__Post__
```java
    Map<String, String> map = Map.ofEntries(entry("1", "one"), entry("2", "two"), entry("3", "three"));
```
<VersionNotice />


## Properties

<RuleProperties />

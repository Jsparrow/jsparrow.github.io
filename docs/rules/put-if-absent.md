---
title: Replace put(..) with putIfAbsent(..)
ruleId: PutIfAbsent
since: 2.3.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    If 'map.put(..)' is wrapped with a condition verifying the existence of an element one can use 'map.putIfAbsent(...)' instead.
tags: ["Java 8", "Old Language Constructs"]
---

# Replace put(..) with putIfAbsent(..)

[[toc]]

## Properties

<RuleProperties />


## Description

If `map.put(..)` is wrapped with a condition verifying the existence of an element, one can use `map.putIfAbsent(...)` instead.

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

### Default

__Pre__

```java
if (!map.containsKey(aKey)) {
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
if (!map.containsKey(aKey))
    map.put(aKey, aValue);
```

__Post__
```java
map.putIfAbsent(aKey, aValue);
```

### Including Null-Checks

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

### Bytecode JDK 1.8 

__Pre__
```java
public void original(Map<String, String> map, String newKey, String newValue) {
    if(!map.containsKey(newKey)) {
        map.put(newKey, newValue);
    }
}
```

```
 0 aload_1
 1 aload_2
 2 invokeinterface #2 <java/util/Map.containsKey> count 2
 7 ifne 19 (+12)
10 aload_1
11 aload_2
12 aload_3
13 invokeinterface #3 <java/util/Map.put> count 3
18 pop
19 return

```

__Post__
```java
public void transformed(Map<String, String> map, String newKey, String newValue) {
    map.putIfAbsent(newKey, newValue);
}
```

```
0 aload_1
1 aload_2
2 aload_3
3 invokeinterface #4 <java/util/Map.putIfAbsent> count 3
8 pop
9 return
```

## Limitations

The rule can be applied if a map type is present, a call to map.put(..) is present, and that call is wrapped in an if-Statement.

<VersionNotice />


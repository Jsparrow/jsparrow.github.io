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

## Limitations

The rule can be applied if a map type is present, a call to map.put(..) is present, and that call is wrapped in an if-Statement.

<VersionNotice />


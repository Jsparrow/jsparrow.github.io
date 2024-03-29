---
title: Replace For-Loop with Stream::takeWhile
ruleId: EnhancedForLoopToStreamTakeWhile
since: 3.7.0
minJavaVersion: 9
remediationCost: 2
links:
description:
    The Stream API in Java 9 is extended with the 'takeWhile' method to get the prefix of a stream. 
    This rule replaces the enhanced for-loops with a stream iterating over the prefix of a collection with 'Stream::takeWhile'. 

tags: ["Java 9", "Loop", "Lambda", "Marker"]
---

# Replace For-Loop with Stream::takeWhile

## Description

The Stream API in Java 9 is extended with the [`takeWhile`](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html#takeWhile-java.util.function.Predicate-) method to get the prefix of a stream. 
This rule replaces the enhanced for-loops iterating over the prefix of a collection with `Stream::takeWhile`. 

::: warning Requirements
Java 9
:::

## Benefits
Applying this rule results in better readability and more compact code. 


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Iterating over a `List`
__Pre__
```java
List<User> users = findAllSorted();
for(User user : users) {
    if(!isImportantCustomer(user)) {
        break;
    }
    attachDiscount(user);
}
```

__Post__
```java
List<User> users = findAllSorted();
users.stream()
    .takeWhile(user -> isImportantCustomer(user))
    .forEach(user -> applyDiscount(user));
```

### Iterating over a `Map`
__Pre__
```java
Map<Integer, User> users = findAllSorted();
for(Map.Entry<Integer, User> entry : users.entrySet()) {
    if(!isEarlyCustomerId(entry.getKey())) {
        break;
    }
    User user = entry.getValue();
    attachDiscount(user);
}
```

__Post__
```java
Map<Integer, User> users = findAllSorted();
users.entrySet()
    .stream()
    .takeWhile(entry -> isEarlyCustomerId(entry.getKey()))
    .forEach(entry -> {
        User user = entry.getValue();
        attachDiscount(user);
    });
```
<VersionNotice />


## Properties

<RuleProperties />

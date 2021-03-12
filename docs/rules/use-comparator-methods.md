---
title: Use Comparator Methods
ruleId: UseComparatorMethods
since: 3.23.0
minJavaVersion: 1.8
remediationCost: 5
    
description:
    This rule replaces complex lambda expressions that serve as instances of 'java.util.Comparator' by simple invocations of factory methods introduced in the 'java.util.Comparator' interface.
tags: ["Java 1.8", "Lambda", "Readability", "Coding Conventions"]
---

# Use Comparator Methods

## Description

In Java 8, new factory methods have been introduced on the [`Comparator`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) interface to simplify the creation of `Comparator` objects:

* [`Comparator.naturalOrder()`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#naturalOrder--) 
* [`Comparator.reverseOrder()`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#reverseOrder--) 
* [`Comparator.comparing(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparing-java.util.function.Function-) 
* [`Comparator.comparingInt(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparingInt-java.util.function.ToIntFunction-) 
* [`Comparator.comparingLong(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparingLong-java.util.function.ToLongFunction-) 
* [`Comparator.comparingDouble(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparingDouble-java.util.function.ToDoubleFunction-) 

This rule replaces complex lambda expressions which represent `Comparator` instances by simple invocations of one of the methods listed above. 

## Benefits

Reduces the code clutter and improves the readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes


### Natural Order Comparator

__Pre__
```java
Comparator<User> comparator = (user1, user2) -> user1.compareTo(user2);
```

__Post__
```java
Comparator<User> comparator = Comparator.naturalOrder();
```

### Reversed Order Comparator

__Pre__
```java
Comparator<User> comparator = (user1, user2) -> user2.compareTo(user1);
```

__Post__
```java
Comparator<Integer> comparator = Comparator.reverseOrder();
```


### Comparing by a Long Property

__Pre__
```java
Comparator<User> comparator = (user1, user2) -> user1.getUserId().compareTo(user2.getUserId());
```

__Post__
```java
Comparator<User> comparator = Comparator.comparingLong(User::getUserId);
```

### Comparing by a Double Property

__Pre__
```java
Comparator<User> comparator = (user1, user2) -> user1.getSalary().compareTo(user2.getSalary());
```

__Post__
```java
Comparator<User> comparator = Comparator.comparingDouble(User::getSalary);
```

### Comparing by a Comparable Property

__Pre__
```java
Comparator<User> comparator = (user1, user2) -> user1.getEmail().compareTo(user2.getEmail());
```

__Post__
```java
Comparator<User> comparator = Comparator.comparing(User::getEmail);
```


### Creating Reversed Comparator by Property

__Pre__
```java
Comparator<User> comparator = (user1, user2) -> user2.getAge().compareTo(user1.getAge());
```

__Post__
```java
Comparator<User> comparator = Comparator.comparingInt(User::getAge).reversed();
```

### Sorting Collections of Comparables

__Pre__
```java
users.sort((user1, user2) -> user1.getUserId().compareTo(user2.getUserId()));
```

__Post__
```java
users.sort(Comparator.comparingLong(User::getUserId));
```


<VersionNotice />
## Properties

<RuleProperties />

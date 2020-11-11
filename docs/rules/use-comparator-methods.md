---
title: Use Comparator Methods
ruleId: UseComparatorMethods
since: 3.22.0
minJavaVersion: 1.8
remediationCost: 15
links:
    - displayName: "Use Comparator methods"
      url: ""
    
description:
    This rule replaces complex lambda expressions which create instances of 'java.util.Comparator' by expressions of less complexity. This can be accomplished with the help of static method invocations of the class 'java.util.Comparator'.
tags: ["Java 1.8", "Lambda", "Coding Conventions"]
---

# Use SecureRandom

[[toc]]

## Properties

<RuleProperties />

## Description

In Java 8, new static methods have been introduced for the class  [`Comparator`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) in order to create comparator objects: 
[`Comparator.naturalOrder()`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#naturalOrder--) 
[`Comparator.reverseOrder()`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#reverseOrder--) 
[`Comparator.comparing(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparing-java.util.function.Function-) 
[`Comparator.comparingInt(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparingInt-java.util.function.ToIntFunction-) 
[`Comparator.comparingLong(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparingLong-java.util.function.ToLongFunction-) 
[`Comparator.comparingDouble(keyExtractor)`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#comparingDouble-java.util.function.ToDoubleFunction-) 
This rule can replace a complex lambda expression which represents a comparator by transforming it to an invocation expression of one of the methods listed above. This way the complexity of source code is reduced.

## Benefits

Increases readability of code.

## Code Changes


### Creating a compartor of Integer objects

__Pre__
```java

```

__Post__
```java

```

### Creating a compartor of Integer objects with reversed order

__Pre__
```java

```

__Post__
```java

```


### Creating a comparator comparing users by user id

__Pre__
```java

```

__Post__
```java

```

### Creating a comparator comparing users by salary

__Pre__
```java

```

__Post__
```java

```

### Creating a comparator comparing users by e-mail

__Pre__
```java

```

__Post__
```java

```


### Creating a comparator comparing users by age with reversed order

__Pre__
```java

```

__Post__
```java

```




<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::
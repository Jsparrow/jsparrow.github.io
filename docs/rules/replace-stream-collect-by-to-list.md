---
title: Replace Stream Collect By ToList
ruleId: ReplaceStreamCollectByToList
since: 4.4.0
minJavaVersion: 16
remediationCost: 2
    
description:
    Java 16 introduced Stream.toList() for simplifying the conversion of a stream into a list. For example, stream.collect(Collectors.toUnmodifiableList()) can be transformed to stream.toList().
tags: ["Java 16", "Old Language Constructs", "Readability"]
---

# Replace Stream Collect By ToList

## Description

Java 16 introduced a new method [`Stream.toList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Stream.html#toList()) to convert a stream into a list. 

This rule replaces invocations of [`Stream.collect​(Collector)`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Stream.html#collect(java.util.stream.Collector)) by invocations of the new method described above if the argument passed to the `collect` invocation is a list collector retrieved by the invocation of [`Collectors.toList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Collectors.html#toList()) or [`Collectors.toUnmodifiableList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Collectors.html#toUnmodifiableList()).

Thus code is simplified and readability is improved.

::: warning Requirements
* Java 16
:::

## Benefits

Removes code clutter. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Using `Collectors.toUnmodifiableList()`

__Pre__
```java
		List<String> List = collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toUnmodifiableList());
```

__Post__
```java
		List<String> List = collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList();
```

### Using `Collectors.toList()`

__Pre__
```java
		List<String> list = collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toList());
```

__Post__
```java
		List<String> list = collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList();
```

### Argument of `Collections.unmodifiableList(...)`

__Pre__
```java
		return Collections.unmodifiableList(collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toList()));
```

__Post__
```java
		return Collections.unmodifiableList(collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList());
```

### Argument of `Collections.min(...)`

__Pre__
```java
		int min = Collections.min(collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toList()));
```

__Post__
```java
		int min = Collections.min(collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList());
```

### Argument of `List.copyOf(...)`

__Pre__
```java
		return List.copyOf(collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toList()));
```

__Post__
```java
		return List.copyOf(collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList());
```

### Argument of `list.addAll(...)`

__Pre__
```java
		list.addAll(collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toList()));
```

__Post__
```java
		list.addAll(collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList());
```

### Enhanced For Loop with `Stream.collect(...)`

__Pre__
```java
		for (String s : collection
				.stream()
				.map(function)
				.filter(predicate)
				.collect(Collectors.toList())) {
			//...
		}
```

__Post__
```java
		for (String s : collection
				.stream()
				.map(function)
				.filter(predicate)
				.toList()) {
			//...
		}
```

<VersionNotice />

## Properties

<RuleProperties />

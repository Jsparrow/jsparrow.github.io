---
title: Replace Stream Collect By ToList
ruleId: ReplaceStreamCollectByToList
since: 4.4.0
minJavaVersion: 16
remediationCost: 2
    
description:
    Java 16 introduced 'Stream.toList()' as a shorthand method for converting a Stream into an unmodifiable List. This rule replaces invocations of `collect(Collectors.toUnmodifiableList())` on a stream by the new method `stream.toList()`. 
tags: ["Java 16", "Old Language Constructs", "Readability", "Marker"]
---

# Replace Stream Collect By ToList

## Description

Java 16 introduced [`Stream.toList()`](https://docs.oracle.com/en/java/javase/16/docs/api/java.base/java/util/stream/Stream.html#toList()) as a shorthand method for converting a Stream into an unmodifiable List.  
This rule replaces invocations of `collect(Collectors.toUnmodifiableList())` on streams by invocations of the new method `stream.toList()`. 
In case `Collectors.toList()` is used as a collector, the rule makes additional verifications whether the generated list is modified by the context or not. 
In the latter case, invocations of `collect(Collectors.toList())` on streams are also replaced by invocations of `toList()`.

Thus the code is simplified and readability is improved.

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

### Using `Collectors.toList()`

__Pre__
```java
void sendMails(List<User>users) {
	List<String> emails = users.stream()
		.map(User::getMail)
		.collect(Collectors.toList());
	for (String email : emails) {
		validate(email);
		send(email);
	}
}
```

__Post__
```java
void sendMails(List<User>users) {
	List<String> emails = users.stream()
		.map(User::getMail)
		.toList();
	for (String email : emails) {
		validate(email);
		send(email);
	}
}
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

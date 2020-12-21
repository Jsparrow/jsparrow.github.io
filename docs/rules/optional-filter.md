---
title: Use Optional::filter
ruleId: OptionalFilter
since: 3.14.0
minJavaVersion: 8
remediationCost: 2
links:
description:
    Extracts an Optional::filter from the consumer used in Optional::ifPresent. 
    This simplifies the lambda expression used with Optional operations. 

tags: ["Free", "Java 8", "Coding Conventions", "Lambda", "Readability"]
---

# Use Optional::filter

[[toc]]

## Properties

<RuleProperties />

## Description

Extracts an [`Optional::filter`](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html#filter-java.util.function.Predicate-) from the consumer used in [`Optional::ifPresent`](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html#ifPresent-java.util.function.Consumer-). 
Hence, simplifying the lambda expressions used with `Optional` operations. 
This transformation is feasible only if the entire consumer's body is wrapped into an if-statement.

## Benefits

Arguably, the lambda expression is easier to read and can be combined with other `Optional` operations.


## Code Changes

__Pre__
```java
Optional<User> oUser = findById(userId);
oUser.ifPresent(user -> {
	if (isSpecial(user)) {
		sendMail(user.getMail());
	}
});
```

__Post__
```java
Optional<User> oUser = findById(userId);
oUser.filter(user -> isSpecial(user)).ifPresent(user -> {
	sendMail(user.getMail());
});
```

## Limitations

Multiple Statements in Lambda Body - no transformation is feasible. 

__Pre__
```java
Optional<User> oUser = findById(userId);
oUser.ifPresent(user -> {
	if (isSpecial(user)) {
		sendPresent(user);
	}
	sendMail(user.getMail());
});
```

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::
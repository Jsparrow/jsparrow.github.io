---
title: Use Optional::ifPresentOrElse
ruleId: OptionalIfPresentOrElse
since: 3.10.0
minJavaVersion: 9
remediationCost: 2
links:
description:
    It is common to have an else-statement following an Optional.isPresent check. One of the extensions of the Optional API in Java 9 is Optional.ifPresentOrElse, which performs either a Consumer or a Runnable depending on the presence of the value. This rule replaces an 'isPresent' check followed by an else-statement with a single 'ifPresentOrElse' invocation.
tags: ["Java 9", "Old Language Constructs", "Lambda"]
---

# Use Optional::ifPresentOrElse

## Description

It is common to have an else-statement following an Optional.isPresent check. 
One of the extensions of the Optional API in Java 9 is [`Optional.ifPresentOrElse`](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html#ifPresentOrElse-java.util.function.Consumer-java.lang.Runnable-), which performs either a Consumer or a Runnable depending on the presence of the value. 
This rule replaces an `isPresent` check followed by an else-statement with a single `ifPresentOrElse` invocation. 

::: warning Requirements
Java 9
:::

## Benefits

Improves readability and enables the use of higher order funtions on `Optional`.


## Code Changes

### Default

__Pre__

```java
		if(optional.isPresent()) {
			String value = optional.get();
			consume(value);
		} else {
			consume("No value");
		}
```

__Post__

```java
		optional.ifPresentOrElse(value -> consume(value), () -> consume("No value"));
```

### Multiple Statements Lambda Body

__Pre__

```java
		Optional<User> optional = findById(id);
		if(optional.isPresent()) {
			User user = optional.get();
			consume(user);
			consume(user);
		} else {
			System.out.println();
			noUserFound();
		}
```

__Post__

```java
		Optional<User> optional = findById(id);
		optional.ifPresentOrElse(user -> {
			consume(user);
			consume(user);
		}, () -> {
			System.out.println();
			noUserFound();
		});
```


## Limitations

Can not be applied if the __then__ path of the branch contains a non-effectively final variable or contains unhandled exceptions. E.g.:

```java
		int i = 0;
		i++;
		if(optional.isPresent()) {
			String value = optional.get();
			consume(value);
			i++;
		} else {
			consume("No value");
		}
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::

## Properties

<RuleProperties />

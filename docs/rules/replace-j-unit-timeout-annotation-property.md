---
title: Replace JUnit Timeout Annotation Property with assertTimeout
ruleId: ReplaceJUnitTimeoutAnnotationProperty
since: 3.26.0
minJavaVersion: 8
remediationCost: 5
    
description:
    This rule aims to replace the @Test(timeout=...) annotation property with 'assertTimeout' in JUnit Jupiter.
tags: ["Java 8", "Testing", "Lambda", "Readability"]
---

# Replace JUnit Timeout Annotation Property with assertTimeout

[[toc]]

## Properties

<RuleProperties />

## Description

JUnit [Jupiter API](https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/Assertions.html) provides timeout assertions, i.e., assertions that execution of some code completes before a timeout exceeds. 
In JUnit 4 this is achieved by using the [`timeout`](https://junit.org/junit4/javadoc/latest/org/junit/Test.html#timeout()) property of `@Test(timeout=...)` annotation.

This rule removes the `timeout` annotation property and inserts an  [`assertTimeout`](https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/Assertions.html#assertTimeout-java.time.Duration-org.junit.jupiter.api.function.Executable-) instead.


::: warning Requirements
This rule requires the following library to be present:
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits

Improves the tests readability. Helps with migrating to JUnit 5. 

## Code Changes


### Removing `timeout` Property

__Pre__
```java
@Test(timeout=100)
public void timeoutTest() throws PersistenceException {
	userRepository.save(new User("10", "John", "Snow"));
}
```

__Post__
```java
@Test
public void timeoutTest() throws PersistenceException {
	assertTimeout(ofMillis(100), () -> userRepository.save(new User("10", "John", "Snow")));
}
```


### Multiple Statements

__Pre__
```java
@Test(timeout=100)
public void multipleStatements() throws PersistenceException {
	User user = new User("10", "John", "Snow");
	userRepository.save(user);
}
```

__Post__
```java
@Test
public void multipleStatements() throws PersistenceException {
	assertTimeout(ofMillis(100), () -> {
		User user = new User("10", "John", "Snow");
		userRepository.save(user);
	});
}
```

### Multiple Annotation Properties Properties

__Pre__
```java
@Test(expected=PersistenceException.class, timeout=100)
public void multipleAnnotationProperties() throws PersistenceException {
	userRepository.save(new User("10", "John", "Stark"));
}
```

__Post__
```java
@Test(expected=PersistenceException.class)
public void multipleAnnotationProperties() throws PersistenceException {
	assertTimeout(ofMillis(100), () -> userRepository.save(new User("10", "John", "Stark")));
}
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::
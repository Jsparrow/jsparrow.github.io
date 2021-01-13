---
title: Replace JUnit Expected Annotation Property with assertThrows
ruleId: ReplaceJUnitExpectedAnnotationProperty
since: 3.24.0
minJavaVersion: 8
remediationCost: 5
links:
    - displayName: "S5777"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5777&q=S5777"
    
description:
    This rule aims to replace the @Test(expected=...) annotation property with 'assertThrows' introduced in JUnit 4.13.
tags: ["Java 8", "Testing", "Lambda", "Readability"]
---

# Replace JUnit Expected Annotation Property with assertThrows

[[toc]]

## Properties

<RuleProperties />

## Description

Using the [`expected`](https://junit.org/junit4/javadoc/latest/org/junit/Test.html#expected()) annotation property for testing the thrown exceptions is rather misleading. 
Often it becomes unclear which part of the test code is responsible for throwing the exception. 
This rule aims to overcome this problem by replacing the `expected` annotation property with [`assertThrows`](https://junit.org/junit4/javadoc/latest/org/junit/Assert.html#assertThrows(java.lang.Class,%20org.junit.function.ThrowingRunnable)) introduced in JUnit 4.13.

::: warning Requirements
This rule requires one of the following libraries to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits

Improves the tests readability. Helps with migrating to JUnit 5. 

## Code Changes


### Removing `expected` Property

__Pre__
```java
@Test(expected = PersistenceException.class)
public void invalidRepo_shouldThrowPersistenceException() throws PersistenceException {
    User user = new User("10", "John", "wolf");
    invalidUserRepository.save(user);
}
```

__Post__
```java
@Test
public void invalidRepo_shouldThrowPersistenceException() {
    User user = new User("10", "John", "wolf");
    assertThrows(PersistenceException.class, () -> invalidUserRepository.save(user));
}
```


### Multiple Annotation Properties

__Pre__
```java
@Test(expected = PersistenceException.class, timeout = 500L)
public void timeoutInvalidRepo_shouldThrowPersistenceException() throws PersistenceException {
    User user = new User("10", "John", "wolf");
    invalidUserRepository.save(user);
}
```

__Post__
```java
@Test(timeout = 500L)
public void timeoutInvalidRepo_shouldThrowPersistenceException() {
    User user = new User("10", "John", "wolf");
    assertThrows(PersistenceException.class, () -> invalidUserRepository.save(user));
}
```

## Limitations

* Expected [RuntimeExceptions](https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html) are not supported unless it can be explicitly inferred that only the last statements throws the expected exception. 

```java
@Test(expected=NullPointerException.class)
public void expectingRuntimeException() {
    User user = userRepository.findById("10");
    user.setName("John")
    userRepository.save(user);
    throwRuntimeException();
}
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::
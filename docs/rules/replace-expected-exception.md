---
title: Replace ExpectedException JUnit Rule with assertThrows
ruleId: ReplaceExpectedException
since: 3.24.0
minJavaVersion: 8
remediationCost: 5
    
description:
    Short rule description (this is shown on the [summary page](https://jsparrow.github.io/rules/#summary)).
tags: ["Java 8", "JUnit", "Lambda", "Readability"]
---

# Replace ExpectedException JUnit Rule with assertThrows

[[toc]]

## Properties

<RuleProperties />

## Description

The [`ExpectedException.none()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#none()) is deprecated since deprecated since JUnit 4.13. 
The recommended alternative is to use [`assertThrows()`](). 
This makes JUnit tests easier to understand and prevents the scenarios where some parts the test code is unreachable. 

The goal of this rule is to replace `expectedException.expect()` with `assertThrows`. 
Additionally, new assertions are added for each invocation of [`expectMessage()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#expectMessage(org.hamcrest.Matcher)) and [`expectCause()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#expectCause(org.hamcrest.Matcher)).
See more examples in the section [below](#code-changes). 

::: warning Requirements
This rule works on the following types and implementations of them:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-engine:5.0.0
:::

## Benefits
Improves the tests readability. Helps with migrating to JUnit 5. 

## Code Changes

### Testing the Exception Type

__Pre__
```java

@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void expectIOException() throws IOException {
    expectedException.expect(IOException.class);
    throwsIOException("Throw an IOException");
}
```

__Post__
```java
@Test
public void expectIOException() {
    assertThrows(IOException.class, () -> throwsIOException("Throw an IOException"));
}
```

### Testing the Exception Message

__Pre__
```java
@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void expectIOException() throws IOException {
    expectedException.expect(IOException.class);
    expectedException.expectMessage("IO");
    throwsIOException("Throw an IOException");
}
```

__Post__
```java
@Test
public void expectIOException() {
    IOException exception = assertThrows(IOException.class, 
        () -> throwsIOException("Throw an IOException"));
    assertTrue(exception.getMessage().contains("IO"));
}
```

### Using Hamcrest Matchers

__Pre__
```java
@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void expectIOException() throws IOException {
    expectedException.expect(IOException.class);
    expectedException.expectMessage(containsString("IO"));
    throwsIOException("Throw an IOException");
}
```

__Post__
```java
@Test
public void expectIOException() {
    IOException exception = assertThrows(IOException.class, 
        () -> throwsIOException("Throw an IOException"));
    assertThat(exception.getMessage(), containsString("IO"));
}
```

### Testing Expected Cause

__Pre__
```java
@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void testingExceptionCause() throws IOException {
    Matcher<Throwable> isNotFileNotFoundException = not(is(new FileNotFoundException()));
    expectedException.expect(IOException.class);
    expectedException.expectCause(isNotFileNotFoundException);
    throwIOException();
}
```

__Post__
```java
@Test
public void testingExceptionCause() {
    Matcher<Throwable> isNotFileNotFoundException = not(is(new FileNotFoundException()));
    IOException exception = assertThrows(IOException.class, () -> throwIOException());
    assertThat(exception.getCause(), isNotFileNotFoundException);
}
```

### Throwing Runtime Exceptions Explicitly
__Pre__
```java
@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void explicitlyThrowingRuntimeException() {
    expectedException.expect(NullPointerException.class);
    throw new NullPointerException();
}
```

__Post__
```java
@Test
public void explicitlyThrowingRuntimeException() {
    assertThrows(NullPointerException.class, () -> {
        throw new NullPointerException();
    });
}
```

## Limitations (Optional)

* Expected Runtime exceptions are not supported unless it can be explicitly derived that the last statements throws the expected exception. 

```java
@Test
public void expectingRuntimeException() {
    expectedException.expect(NullPointerException.class);
    User user = userRepository.findById("10");
    setName("John")
    save(user);
    throwRuntimeException();
}
```

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::
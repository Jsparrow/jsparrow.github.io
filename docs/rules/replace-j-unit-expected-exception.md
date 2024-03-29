---
title: Replace JUnit ExpectedException with assertThrows
ruleId: ReplaceJUnitExpectedException
since: 3.24.0
minJavaVersion: 8
remediationCost: 5
    
description:
    The goal of this rule is to replace the JUnit ExpectedException with 'assertThrows'. 
tags: ["Java 8", "Testing", "JUnit", "Lambda", "Readability", "Marker"]
---

# Replace JUnit ExpectedException with assertThrows

## Description

The [`ExpectedException.none()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#none()) rule is deprecated since JUnit 4.13. 
The recommended alternative is to use [`assertThrows()`](https://junit.org/junit4/javadoc/latest/org/junit/Assert.html#assertThrows(java.lang.Class,%20org.junit.function.ThrowingRunnable)).
This makes JUnit tests easier to understand and prevents scenarios where some parts of the test code are unreachable. 

The goal of this rule is to replace `expectedException.expect()` with `assertThrows`. 
Additionally, new assertions are added for each invocation of [`expectMessage()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#expectMessage(org.hamcrest.Matcher)) and [`expectCause()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#expectCause(org.hamcrest.Matcher)).
See more examples in the section [below](#code-changes). 

::: warning Requirements
This rule requires one of the following libraries to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits
Improves the tests readability. Helps migrating to JUnit 5. 

## Tags

::: tip Tags
<TagLinks />
:::

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

## Limitations

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

## Properties

<RuleProperties />

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

The org.junit.rule.ExpectedException Test Rule is deprecated since deprecated since JUnit 4.13. 
The recommended alternative is to use assertThrows. 
This makes JUnit tests easier to understand and prevents scenarios where some parts the test code is unreachable. 
The goal of this rule is to replace expectedException.expect() with assertThrows. 
Additionally, new assertions are added for each invocation of expectMessage and expectCause.

Longer description of the rule.

::: warning Requirements
This rule works on the following types and implementations of them:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-engine:5.0.0
:::

## Benefits
Improves the tests readability. Helps with migrating to JUnit 5. 

## Code Changes

### Case description

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

### Case description

__Pre__
```java
@Rule
public ExpectedException expectedException = ExpectedException.none();

@Test
public void expectIOException() throws IOException {
    expectedException.expect(IOException.class);
    expectedException.expectMessage("IO");
    expectedException.expectMessage(CoreMatchers.containsString("IO"));
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
    assertThat(exception.getMessage(), CoreMatchers.containsString("IO"));
}
```

## Limitations (Optional)

* Runtime exceptions are not supported.

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::
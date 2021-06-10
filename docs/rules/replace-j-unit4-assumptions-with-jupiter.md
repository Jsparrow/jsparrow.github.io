---
title: Replace JUnit 4 Assumptions with JUnit Jupiter
ruleId: ReplaceJUnit4AssumptionsWithJupiter
since: 3.30.0
minJavaVersion: 8
remediationCost: 2
    
description:
    This rule contributes to the stepwise transition from JUnit 4 to JUnit 5 by replacing the assumption methods defined in the JUnit 4 class 'org.junit.Assume' by equivalent assumption methods defined in the JUnit 5 class 'org.junit.jupiter.api.Assumptions'.
tags: ["Java 8", "Testing"]
---

# Replace JUnit 4 Assumptions with JUnit Jupiter

## Description

This rule contributes to a stepwise transition to JUnit 5 by replacing the JUnit 4 assumption methods by the equivalent JUnit 5 ones.
In JUnit 5, all methods used to carry out assumptions are declared in [`org.junit.jupiter.api.Assumptions`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assumptions.html), while in JUnit 4 the equivalent methods are declared in [`org.junit.Assume`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html). 
This rule looks for invocations of overloaded methods of the JUnit 4 class `Assume` and replaces them with the invocations of equivalent overloaded alternatives declared in the JUnit 5 class `Assumptions`:


| Assertions in Junit 4 `org.junit.Assume` | Assertions in JUnit 5 `org.junit.jupiter.api.Assumptions` | 
| ------------- | ------------- |
| [`Assume.assumeFalse`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeFalse(boolean)) | [`Assumptions.assumeFalse`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assumptions.html#assumeFalse(boolean)) |
| [`Assume.assumeTrue`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeTrue(boolean)) | [`Assumptions.assumeTrue`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assumptions.html#assumeTrue(boolean)) |   

By replacing each of these JUnit 4 Assume methods by the corresponding Jupiter alternative, this rule promotes a stepwise transition to JUnit 5.

::: warning Requirements
This rule requires the following libraries to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.4.0
:::

## Benefits

Migrates JUnit 4 tests to JUnit 5.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes


### Replacing Imports

__Pre__
```java
import static org.junit.Assume.assumeTrue;
//...
public class OrderTest {
	//...
	@Test
	public void testService() {
		assumeTrue(orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

__Post__
```java
import static org.junit.jupiter.api.Assumptions.assumeTrue;
//...
public class OrderTest {
	//...
	@Test
	public void testService() {
		assumeTrue(orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

### Replacing Invocations with a Message

__Pre__
```java
import static org.junit.Assume.assumeTrue;
//...
public class OrderTest {
	//...
	@Test
	public void testService() {
		assumeTrue("If product 1 is available", orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

__Post__
```java
import static org.junit.jupiter.api.Assumptions.assumeTrue;
//...
public class OrderTest {
	//...
	@Test
	public void testService() {
		assumeTrue(orderService.isAvailableInStock("1", 5), "If product 1 is available");
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

### Replacing the Assume Qualifier

__Pre__
```java
import static org.assumeMethods.AssumeMethods.assumeTrue;
import org.junit.Assume;
//...
public class OrderTest {
	//...
	@Test
	public void testService() {
		Assume.assumeTrue(orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

__Post__
```java
import static org.assumeMethods.AssumeMethods.assumeTrue;
import org.junit.jupiter.api.Assumptions;
//...
public class OrderTest {
	//...
	@Test
	public void testService() {
		Assumptions.assumeTrue(orderService.isAvailableInStock("1", 5));
		Order order = orderService.book("1", 5, "user-id");
		assertNotNull(order);
	}
}
```

<VersionNotice />

## Properties

<RuleProperties />

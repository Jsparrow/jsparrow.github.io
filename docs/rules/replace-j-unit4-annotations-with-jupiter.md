---
title: Replace JUnit 4 Annotations with JUnit Jupiter
ruleId: ReplaceJUnit4AnnotationsWithJupiter
since: 3.27.0
minJavaVersion: 8
remediationCost: 15
    
description:
    This rule offers a stepwise transition to JUnit 5 by replacing JUnit 4 annotations @Test, @Ignore, @Before, @BeforeClass, @After, and @AfterClass with their corresponding Jupiter alternatives.
tags: ["Java 8", "Testing"]
---

# Replace JUnit 4 Annotations with JUnit Jupiter

## Description

In JUnit Jupiter, annotations reside in [`org.junit.jupiter.api`](https://junit.org/junit5/docs/5.0.1/api/org/junit/jupiter/api/package-summary.html), while in JUnit 4 annotations reside in [`org.junit`](https://junit.org/junit4/javadoc/latest/).
This rule, replaces the following JUnit 4 annotations:
* [@Test](https://junit.org/junit4/javadoc/latest/org/junit/Test.html)
* [@Ignore](https://junit.org/junit4/javadoc/latest/org/junit/Ignore.html)
* [@Before](https://junit.org/junit4/javadoc/latest/org/junit/Before.html)
* [@BeforeClass](https://junit.org/junit4/javadoc/latest/org/junit/BeforeClass.html)
* [@After](https://junit.org/junit4/javadoc/latest/org/junit/After.html)
* [@AfterClass](https://junit.org/junit4/javadoc/latest/org/junit/AfterClass.html)

respectively with the JUnit [Jupiter API](https://junit.org/junit5/docs/current/user-guide/#overview) alternatives: 

* [@Test](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Test.html)
* [@Disable](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Disabled.html)
* [@BeforeEach](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeEach.html)
* [@BeforeAll](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html)
* [@AfterEach](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterEach.html)
* [@AfterAll](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html)

By replacing each of these JUnit 4 annotations by the corresponding Jupiter alternatives, this rule promotes a stepwise transition to JUnit Jupiter.

::: warning Requirements
This rule requires the following library to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits

Migrates JUnit 4 tests to JUnit 5.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes


### Replacing Imports and Annotations

__Pre__
```java
package test.examples;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

public class ExampleTest {

	@Before
	public void beforeTestMethod() {
		// ..
	}

	@After
	public void afterTestMethod() {
		// ..
	}

	@BeforeClass
	public void beforeTestClass() {
		// ..
	}

	@AfterClass
	public void afterTestClass() {
		// ..
	}

	@Ignore
	@Test
	public void test() {
		// ..
	}
}
```

__Post__
```java
package test.examples;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

public class ExampleTest {

	@BeforeEach
	public void beforeTestMethod() {
		// ..
	}

	@AfterEach
	public void afterTestMethod() {
		// ..
	}

	@BeforeAll
	public void beforeTestClass() {
		// ..
	}

	@AfterAll
	public void afterTestClass() {
		// ..
	}

	@Disabled
	@Test
	public void test() {
		// ..
	}
}
```

## Limitations 

The transformation cannot be performed automatically if: 
* Any of the `@Test` annotations contains properties, e.g., `@Test(timeout=...)` or `@Test(expected=...)`.
* Any other JUnit 4 annotation, which is not mentioned above, is used explicitly or implicitly in the test class. 

<VersionNotice />

## Properties

<RuleProperties />

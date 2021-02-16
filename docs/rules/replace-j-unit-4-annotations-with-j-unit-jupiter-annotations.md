---
title: Replace JUnit 4 Annotations with JUnit Jupiter Annotations
ruleId: MigrateJUnit4ToJupiter
since: 3.27.0
minJavaVersion: 8
remediationCost: 15
    
description:
    By replacing JUnit 4 annotations @Test, @Ignore, @Before, @BeforeClass, @After and @AfterClass with their corresponding Jupiter alternatives, this rule offers a stepwise transition to JUnit Jupiter.
tags: ["Java 8", "Testing"]
---

# Replace JUnit 4 Annotations with JUnit Jupiter Annotations

[[toc]]

## Properties

<RuleProperties />

## Description

For the JUnit 4 annotations @Test, @Ignore, @Before, @BeforeClass, @After and @AfterClass, the JUnit [Jupiter API](https://junit.org/junit5/docs/current/user-guide/#overview) provides the alternatives @Test, @Disable, @BeforeEach, @BeforeAll, @AfterEach, @AfterAll. By replacing eaxch of these JUnit 4 annotations by the corresponding Jupiter alternatives, this rule promotes a stepwise transition to JUnit Jupiter.

::: warning Requirements
This rule requires the following library to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits

Helps migrating to JUnit 5. 

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

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::
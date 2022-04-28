---
title: Replace JUnit 3 Tests
ruleId: ReplaceJUnit3TestCases
since: 4.1.0
minJavaVersion: 5
remediationCost: 15
    
description:
    This rule migrates JUnit 3 tests to either JUnit Jupiter or JUnit 4 depending on the most up-to-date JUnit version available in the classpath. 
tags: ["Java 8", "Testing", "JUnit"]
---

# Replace JUnit 3 Test Cases

## Description

This rule migrates JUnit 3 tests to either JUnit Jupiter or JUnit 4 depending on the most up-to-date JUnit version available in the classpath. 
The migration is achieved by: 
* inserting the annotations to the test cases and life cycle methods accordingly 
* inserting the correct import statements to the assertions or assumptions 
* removing the extension to the JUnit 3 TestCase class
* and removing the main methods that used to serve as entry points for executing tests. 

The migration of a test class is atomic, i.e., either all test cases and life cycle methods within the test class are migrated or the class is left intact. 

::: warning Requirements
This rule requires either of the following libraries to be present:
* JUnit 4
* JUnit Jupiter
:::

## Benefits

Migrates JUnit 3 tests.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Migrate to JUnit 4

__Pre__
```java
import junit.framework.TestCase;

public class ReplaceJUnit3TestCasesWithJUnit4Rule extends TestCase {

	@Override
	protected void setUp() {
	}

	@Override
	protected void tearDown() {
	}

	public void test() throws Exception {
		assertEquals(0x7fffffff, Integer.MAX_VALUE);
	}

	public void testAssertEqualsWithMessage() throws Exception {
		assertEquals("Expected to be {0x7fffffff}.", 0x7fffffff, Integer.MAX_VALUE);
	}

	public static void main(String[] args) {
		TestRunner.run(ReplaceJUnit3TestCasesWithJUnit4Rule.class);
	}
}
```

__Post__
```java
import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Test;
import org.junit.Before;

public class ReplaceJUnit3TestCasesWithJUnit4Rule {

	@Before
	protected void setUp() {
	}

	@After
	protected void tearDown() {
	}

	@Test
	public void test() throws Exception {
		assertEquals(0x7fffffff, Integer.MAX_VALUE);
	}

	@Test
	public void testAssertEqualsWithMessage() throws Exception {
		assertEquals("Expected to be {0x7fffffff}.", 0x7fffffff, Integer.MAX_VALUE);
	}
}
```

### Migrate to JUnit Jupiter

__Pre__
```java
import junit.textui.TestRunner;
import junit.framework.TestCase;

public class ReplaceJUnit3TestCasesWithJupiterRule extends TestCase {

	@Override
	protected void setUp() {
	}

	@Override
	protected void tearDown() {
	}

	public void test() throws Exception {
		assertEquals(0x7fffffff, Integer.MAX_VALUE);
	}

	public void testAssertEqualsWithMessage() throws Exception {
		assertEquals("Expected to be {0x7fffffff}.", 0x7fffffff, Integer.MAX_VALUE);
	}

	public static void main(String[] args) {
		TestRunner.run(ReplaceJUnit3TestCasesWithJupiterRule.class);
	}
}
```

__Post__
```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;

public class ReplaceJUnit3TestCasesWithJupiterRule {

	@BeforeEach
	protected void setUp() {
	}

	@AfterEach
	protected void tearDown() {
	}

	@Test
	public void test() throws Exception {
		assertEquals(0x7fffffff, Integer.MAX_VALUE);
	}

	@Test
	public void testAssertEqualsWithMessage() throws Exception {
		assertEquals(0x7fffffff, Integer.MAX_VALUE, "Expected to be {0x7fffffff}.");
	}
}
```

<VersionNotice />

## Properties

<RuleProperties />

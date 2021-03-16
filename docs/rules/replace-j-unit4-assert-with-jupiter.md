---
title: Replace JUnit 4 Assert with JUnit Jupiter
ruleId: ReplaceJUnit4AssertWithJupiter
since: 3.28.0
minJavaVersion: 8
remediationCost: 15
    
description:
    This rule contributes to the stepwise transition from JUnit 4 to JUnit 5 by replacing invocations of Methods declared in the JUnit 4 class `org.junit.Assert` by the corresponding invocations of methods declared in the JUnit 5 class `org.junit.jupiter.api.Assertions`.
tags: ["Java 8", "Testing"]
---

# Replace JUnit 4 Assert with JUnit Jupiter

## Description

In JUnit Jupiter, all methods used to carry out assertions are declared by the class [`org.junit.jupiter.api.Assertions`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html), while in JUnit 4 annthe corresponding methods are declared by the class [`org.junit.Assert`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html).

This rule looks for invocations of overloaded methods of the class JUnit 4 Assert, see the following examples:
* [`assertArrayEquals`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertArrayEquals(java.lang.Object[],%20java.lang.Object[]))
* [`assertEquals`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertEquals(java.lang.Object,%20java.lang.Object))
* [`assertFalse`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertFalse(boolean))
* [`assertNotEquals`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertNotEquals(java.lang.Object,%20java.lang.Object))
* [`assertNotNull`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertNotNull(java.lang.Object))
* [`assertNotSame`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertNotSame(java.lang.Object,%20java.lang.Object))
* [`assertNull`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertNotNull(java.lang.Object))
* [`assertSame`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertSame(java.lang.Object,%20java.lang.Object))
* [`assertTrue`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#assertTrue(boolean))
* [`fail`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html#fail())

and replaces them with the invocations of the corresponding - also overloaded - alternatives declared in the JUnit 5 class Assertions:

* [`assertArrayEquals`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertArrayEquals(java.lang.Object%5B%5D,java.lang.Object%5B%5D))
* [`assertEquals`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertEquals(java.lang.Object,java.lang.Object))
* [`assertFalse`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertFalse(boolean))
* [`assertNotEquals`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertNotEquals(java.lang.Object,java.lang.Object))
* [`assertNotNull`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertNotNull(java.lang.Object))
* [`assertNotSame`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertNotSame(java.lang.Object,java.lang.Object))
* [`assertNull`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertNull(java.lang.Object))
* [`assertSame`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertSame(java.lang.Object,java.lang.Object))
* [`assertTrue`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#assertTrue(boolean))
* [`fail`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html#fail())

By replacing each of these JUnit 4 Assert method invocations by the corresponding Jupiter alternatives, this rule promotes a stepwise transition to JUnit Jupiter.

::: warning Requirements
This rule requires the following library to be present:
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
package sim1892.junit.jupiter.githubdoc.replacingimport;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

public class TestExample {
	@Test
	void test() {
		assertEquals(0L, 0L);
	}
}
```

__Post__
```java
package sim1892.junit.jupiter.githubdoc.replacingimport;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestExample {
	@Test
	void test() {
		assertEquals(0L, 0L);
	}
}
```

### Replacing Invocations with a Message

__Pre__
```java
package sim1892.junit.jupiter.githubdoc.usingmessage;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

public class TestExample {
	@Test
	void test() {
		assertEquals("Expecting that 0L equals 0L.", 0L, 0L);
	}
}
```

__Post__
```java
package sim1892.junit.jupiter.githubdoc.usingmessage;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestExample {
	@Test
	void test() {
		assertEquals(0L, 0L, "Expecting that 0L equals 0L.");
	}
}
```

### Replacing the Assert Qualifier

__Pre__
```java
package sim1892.junit.jupiter.githubdoc.replacequalifier;

import static org.assertmethods.AssertMethods.assertEquals;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

public class TestExample {
	@Test
	void test() {
		Assert.assertEquals(0L, 0L);
		assertEquals(0L, 0L);
	}
}
```

__Post__
```java
package sim1892.junit.jupiter.githubdoc.replacequalifier;

import static org.assertmethods.AssertMethods.assertEquals;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class TestExample {
	@Test
	void test() {
		Assertions.assertEquals(0L, 0L);
		assertEquals(0L, 0L);
	}
}
```

## Limitations 

The transformation cannot be performed automatically if: 
* Any JUnit 4 annotation like `@Test` or `@Ignore` is used explicitly or implicitly within the given compilation unit. 

<VersionNotice />

## Properties

<RuleProperties />

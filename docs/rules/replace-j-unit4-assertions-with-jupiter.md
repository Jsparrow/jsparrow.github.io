---
title: Replace JUnit 4 Assertions with JUnit Jupiter
ruleId: ReplaceJUnit4AssertionsWithJupiter
since: 3.28.0
minJavaVersion: 8
remediationCost: 15
    
description:
    This rule contributes to the stepwise transition from JUnit 4 to JUnit 5 by replacing the assertions methods defined in JUnit 4 class 'org.junit.Assert' by equivalent assertion methods defined in the JUnit 5 class 'org.junit.jupiter.api.Assertions'.
tags: ["Java 8", "Testing"]
---

# Replace JUnit 4 Assertions with JUnit Jupiter

## Description

This rule contributes to a stepwise transition to JUnit 5 by replacing the JUnit 4 assertion methods by the equivalent JUnit 5 ones.
In JUnit 5, all methods used to carry out assertions are declared in [`org.junit.jupiter.api.Assertions`](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Assertions.html), while in JUnit 4 the equivalent assertion methods are declared in [`org.junit.Assert`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assert.html).

This rule looks for invocations of overloaded methods of the JUnit 4 class `Assert`, see the following examples:
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

and replaces them with the invocations of equivalent - also overloaded - assertion alternatives declared in the JUnit 5 class `Assertions`:

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

By replacing each of these JUnit 4 Assert methods by the corresponding Jupiter alternatives, this rule promotes a stepwise transition to JUnit 5.

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
package eu.jsparrow.junit.jupiter.samples;

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
package eu.jsparrow.junit.jupiter.samples;

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
package eu.jsparrow.junit.jupiter.samples.usingmessage;

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
package eu.jsparrow.junit.jupiter.samples.usingmessage;

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
package eu.jsparrow.junit.jupiter.samples.replacequalifier;

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
package eu.jsparrow.junit.jupiter.samples.replacequalifier;

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

<VersionNotice />

## Properties

<RuleProperties />

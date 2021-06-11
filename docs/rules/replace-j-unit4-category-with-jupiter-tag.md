---
title: Replace JUnit 4 Category with JUnit Jupiter Tag
ruleId: ReplaceJUnit4CategoryWithJupiterTag
since: 3.30.0
minJavaVersion: 8
remediationCost: 5
    
description:
    This rule offers a stepwise transition to JUnit 5 by replacing JUnit 4 @Category annotations with JUnit Jupiter @Tag annotations.
tags: ["Java 8", "Testing"]
---

# Replace JUnit 4 Category with JUnit Jupiter Tag

## Description

This rule replaces each JUnit 4 [@Category](https://junit.org/junit4/javadoc/latest/org/junit/experimental/categories/Category.html) annotation with one or more JUnit Jupiter [@Tag](https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/Tag.html) annotations. 
These replacements are a further step towards a transition from JUnit 4 to JUnit Jupiter.

::: warning Requirements
This rule requires the following library to be present:
* junit:junit:4.13
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

::: warning
In order to run the test suites, some further refactorings may be necessary.
For example, the following suite:
```java
import org.junit.experimental.categories.Categories;
import org.junit.experimental.categories.Categories.IncludeCategory;
import org.junit.runner.RunWith;
import org.junit.runners.Suite.SuiteClasses;

import org.test.jsparrow.examples.FirstCategory;
import org.test.jsparrow.examples.SecondCategory;
import org.test.jsparrow.examples.ClassATest;
import org.test.jsparrow.examples.ClassBTest;

@RunWith(Categories.class)
@IncludeCategory({FirstCategory.class, SecondCategory.class})
@SuiteClasses({ClassATest.class, ClassBTest.class})
public class TestSuiteJUnit4 {

}
```
should be refactored to
```java
import org.junit.platform.runner.JUnitPlatform;
import org.junit.platform.suite.api.IncludeTags;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.runner.RunWith;

import org.test.jsparrow.examples.ClassATest;
import org.test.jsparrow.examples.ClassBTest;

@RunWith(JUnitPlatform.class)
@IncludeTags({ 
		"org.test.jsparrow.examples.FirstCategory",
		"org.test.jsparrow.examples.SecondCategory" })
@SelectClasses({ClassATest.class, ClassBTest.class})
public class TestSuiteJupiter {
}
```
Additionally, the following libraries may by required for running the refactored tests:
* junit-platform-runner:1.7.1 for compilation
* junit-platform-engine:1.7.1 for running
* junit-jupiter-engine:5.5.2 for running
:::

## Benefits

Migrates JUnit 4 tests to JUnit 5.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Replacing Category with Tag Annotation

__Pre__
```java
@Category(FirstCategory.class)
@Test
public void test() {
	//...
}
```

__Post__
```java
@Tag("org.test.jsparrow.examples.FirstCategory")
@Test
public void test() {
	//...
}
```

### Replacing Multiple Categories with Tag Annotations

__Pre__
```java
@Category({ FirstCategory.class, SecondCategory.class })
@Test
public void test() {
	// ...
}
```

__Post__
```java
@Tag("org.test.jsparrow.examples.FirstCategory")
@Tag("org.test.jsparrow.examples.SecondCategory")
@Test
public void test() {
	// ...
}
```

### Category Annotation on a Class

__Pre__
```java
@Category(ExampleCategory.class)
public class ExampleTest {
	//...
}
```

__Post__
```java
@Tag("org.test.jsparrow.examples.ExampleCategory")
public class ExampleTest {
	//...
}
```

<VersionNotice />

## Properties

<RuleProperties />

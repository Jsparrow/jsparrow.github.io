---
title: Replace JUnit Assumptions with Hamcrest Junit
ruleId: ReplaceJUnit4AssumptionsWithHamcrestJUnit
since: 3.30.0
minJavaVersion: 5
remediationCost: 2
    
description:
    This rule replaces invocations of the JUnit 4 methods Assume.assumeThat, Assume.assumeNoException and Assume.assumeNotNull with invocations of the hamcrest-junit method MatcherAssume.assumeThat. Thus the use of JUnit 4 methods is replaced by the use of methods of a third party library. 
tags: ["Java 5", "Testing"]
---

# Replace JUnit Assumptions with Hamcrest JUnit

## Description

This rule replaces invocations of methods like [`Assume.assumeThat`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeThat(java.lang.String,%20T,%20org.hamcrest.Matcher)), [`Assume.assumeNoException`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeNoException(java.lang.String,%20java.lang.Throwable)) or [`Assume.assumeNotNull`](https://javadoc.io/doc/junit/junit/latest/org/junit/Assume.html#assumeNotNull(java.lang.Object...)) by equivalent invocations of methods like [`MatcherAssume.assumeThat`](https://www.javadoc.io/doc/org.hamcrest/hamcrest-junit/1.0.0.0/org/hamcrest/junit/MatcherAssume.html#assumeThat(java.lang.String,%20T,%20org.hamcrest.Matcher)) which belong to the third party Hamcrest JUnit library. 
Since JUnit 5 contains no equivalent assumption methods, this rule eliminates an obstacle for migration to JUnit 5. 

::: warning Requirements
This rule requires the following library to be present:
* org.hamcrest:hamcrest-core:1.3
* org.hamcrest:hamcrest-junit:1.0.0.0
:::

## Benefits

Helps migrating to JUnit 5 by removing references to JUnit 4 methods.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Invocation of `assumeThat` without Message

__Pre__
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.junit.Assume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	@Test
	public void test() {
		assumeThat(stringvalue, equalToIgnoringCase("value"));
		//...
	}
	//...
}
```

__Post__
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.hamcrest.junit.MatcherAssume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	@Test
	public void test() {
		assumeThat(stringvalue, equalToIgnoringCase("value"));
		//...
	}
	//...
}
```

### Invocation of `assumeThat` with Message

__Pre__
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.junit.Assume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	@Test
	public void test() {
		assumeThat("Assumed that stringvalue is equal to \"value\", ignoring upper/lower case.", stringvalue,
				equalToIgnoringCase("value"));
		//...
	}
	//...
}
```

__Post__
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.hamcrest.junit.MatcherAssume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	@Test
	public void test() {
		assumeThat("Assumed that stringvalue is equal to \"value\", ignoring upper/lower case.", stringvalue,
				equalToIgnoringCase("value"));
		//...
	}
	//...
}
```

### Invocation of `assumeThat` with changing Qualifier

__Pre__
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;

import org.hamcrest.Matcher;
import org.junit.Assume;
import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	static <T> void assumeThat(T actual, Matcher<T> matcher) {
		//...
	}
	//...
	@Test
	public void test() {
		Assume.assumeThat(stringvalue, equalToIgnoringCase("value"));
		//...
	}
	//...
}
```

__Post__
```java
import static org.hamcrest.Matchers.equalToIgnoringCase;

import org.hamcrest.Matcher;
import org.hamcrest.junit.MatcherAssume;
import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	static <T> void assumeThat(T actual, Matcher<T> matcher) {
		//...
	}
	//...
	@Test
	public void test() {
		MatcherAssume.assumeThat(stringvalue, equalToIgnoringCase("value"));
		//...
	}
	//...
}
```

### Invocation of `assumeNoException` with Message

__Pre__
```java
import static org.junit.Assume.assumeNoException;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	@Test
	public void test() {
		assumeNoException("Assuming that not any exception has been thrown.", exception);
		//...
	}
	//...
}
```

__Post__
```java
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.junit.MatcherAssume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	//...
	@Test
	public void test() {
		assumeThat("Assuming that not any exception has been thrown.", exception, nullValue());
		//...
	}
	//...
}

```


### Invocation of `assumeNotNull` with Multiple Objects

__Pre__
```java
import static org.junit.Assume.assumeNotNull;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	Object o1;
	Object o2;
	//...
	@Test
	public void test() {
		assumeNotNull(o1, o2);
		//...
	}
	//...
}
```

__Post__
```java
import static java.util.Arrays.asList;
import static org.hamcrest.CoreMatchers.everyItem;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.junit.MatcherAssume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	Object o1;
	Object o2;
	//...
	@Test
	public void test() {
		assumeThat(asList(o1, o1), everyItem(notNullValue()));
		//...
	}
	//...
}
```

###  Invocation of `assumeNotNull` with Single Object

__Pre__
```java
import static org.junit.Assume.assumeNotNull;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	Object o;
	//...
	@Test
	public void test() {
		assumeNotNull(o);
		//...
	}
	//...
}
```

__Post__
```java
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.junit.MatcherAssume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	Object o;
	//...
	@Test
	public void test() {
		assumeThat(o, notNullValue());
		//...
	}
	//...
}
```

###  Invocation of `assumeNotNull` with Object Array Variable

__Pre__
```java
import static org.junit.Assume.assumeNotNull;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	Object[] objects;
	//...
	@Test
	public void test() {
		assumeNotNull(objects);
		//...
	}
	//...
}
```

__Post__
```java
import static java.util.Arrays.asList;
import static org.hamcrest.CoreMatchers.everyItem;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.junit.MatcherAssume.assumeThat;

import org.junit.jupiter.api.Test;

public class AssumptionExampleTest {
	Object[] objects;
	//...
	@Test
	public void test() {
		assumeThat(objects, notNullValue());
		assumeThat(asList(objects), everyItem(notNullValue()));
		//...
	}
	//...
}
```

<VersionNotice />

## Properties

<RuleProperties />

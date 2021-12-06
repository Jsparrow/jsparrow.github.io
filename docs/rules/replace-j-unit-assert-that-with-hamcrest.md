---
title: Replace JUnit assertThat with Hamcrest
ruleId: ReplaceJUnitAssertThatWithHamcrest
since: 3.29.0
minJavaVersion: 5
remediationCost: 2
    
description:
    The JUnit Assert.assertThat method is deprecated. Its sole purpose is to forward the call to the MatcherAssert.assertThat method defined in Hamcrest 1.3. Therefore, it is recommended to directly use the equivalent assertion defined in the third party Hamcrest library.
tags: ["Java 5", "Testing", "JUnit"]
---

# Replace JUnit assertThat with Hamcrest

## Description

The JUnit [`Assert.assertThat`](https://junit.org/junit4/javadoc/4.13/org/junit/Assert.html#assertThat(T,%20org.hamcrest.Matcher)) method is deprecated. Its sole purpose is to forward the call to the [`MatcherAssert.assertThat`](http://hamcrest.org/JavaHamcrest/javadoc/1.3/org/hamcrest/MatcherAssert.html#assertThat(T,%20org.hamcrest.Matcher)) method defined in Hamcrest 1.3. 
Therefore, it is recommended to directly use the equivalent assertion defined in the third party Hamcrest library.  
This rule finds the deprecated usages of `Assert.assertThat` and automatically replaces them with `MatcherAssert.assertThat`.
Since JUnit 5 contains no equivalent assertion for `assertThat`, this rule eliminates an obstacle for migration to JUnit 5. 

::: warning Requirements
This rule requires the following library to be present:
* org.hamcrest:hamcrest-core:1.3
:::

## Benefits

Removes deprecated code. Helps migrating to JUnit 5. 

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes


### Simple `assertThat` Invocation

__Pre__
```java
import static org.junit.Assert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
        User user = userRepo.findById("0");
		assertThat(user, equalTo(new User("John", "Snow")));
	}
}
```

__Post__
```java
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
        User user = userRepo.findById("0");
		assertThat(user, equalTo(new User("John", "Snow")));
	}
}
```


### `assertThat` with Reason

__Pre__
```java
import static org.junit.Assert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
        User user = userRepo.findById("0");
		assertThat("Expecting to find user John with id '0'", user, equalTo(new User("John", "Snow")));
	}
}
```

__Post__
```java
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
        User user = userRepo.findById("0");
		assertThat("Expecting to find user John with id '0'", user, equalTo(new User("John", "Snow")));
	}
}
```

### Replacing `assertThat` Qualifier

__Pre__
```java
import static org.hamcrest.Matchers.equalTo;

import org.junit.Assert;
import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
        User user = userRepo.findById("0");
		Assert.assertThat(user, equalTo(new User("John", "Snow")));
	}
}
```

__Post__
```java
import static org.hamcrest.Matchers.equalTo;

import org.hamcrest.MatcherAssert;
import org.junit.Test;

public class UserRepositoryTest {
	@Test
	public void replacingAssertThat() {
        User user = userRepo.findById("0");
		MatcherAssert.assertThat(user, equalTo(new User("John", "Snow")));
	}
}
```

<VersionNotice />

## Properties

<RuleProperties />

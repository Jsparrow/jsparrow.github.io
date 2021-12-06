---
title: Use Dedicated Assertions
ruleId: UseDedicatedAssertions
since: 4.0.0
minJavaVersion: 5
remediationCost: 2
links:
    - displayName: "S5785"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS5785&q=S5785"
    
description:
    Replaces boolean assertions e.g., assertTrue and assertFalse with the corresponding dedicated assertions when testing for equality or null values. 
tags: ["Java 5", "Testing", "JUnit", "Coding Conventions"]
---

# Use Dedicated Assertions

## Description

Testing for equality or *null* values using `assertTrue` or `assertFalse` makes the test code and the assertion failure messages harder to read and understand. 
The dedicated assertions should be used instead.  
This rule replaces the following boolean assertions:
* `assertTrue` 
* `assertFalse` 

with the corresponding dedicated assertions: 
* `assertEquals`
* `assertNotEquals`
* `assertNull`
* `assertNotNull`
* `assertSame`
* `assertNotSame` 

See the section [below](#code-changes) for more code examples.

::: warning Requirements
This rule requires one of the following libraries to be present:
* junit:junit:4.0
* org.junit.jupiter:junit-jupiter-api:5.0.0
:::

## Benefits

Improves the readability of both, the test code and the assertion failure messages. 

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Testing Equality

__Pre__
```java
@Test
void equalityTesting() {
    User expected = new User(0, "John", "Snow");
    User other = new User(37, "John", "Snow");
    User actual = userRepo.findById(0);
    assertTrue(expected.equals(actual));
    assertFalse(other.equals(actual));
}
```

__Post__
```java
@Test
void equalityTesting() {
    User expected = new User(0, "John", "Snow");
    User other = new User(37, "John", "Snow");
    User actual = userRepo.findById(0);
    assertEquals(expected, actual);
    assertNotEquals(other, actual);
}
```

### Testing Null Values

__Pre__
```java
@Test
void nullnessTesting() {
    User user = userRepo.findById(0);
    User nullUser = userRepo.findById(-1);
    assertTrue(user != null);
    assertTrue(nullUser == null);
}
```

__Post__
```java
@Test
void nullnessTesting() {
    User user = userRepo.findById(0);
    User nullUser = userRepo.findById(-1);
    assertNotNull(user);
    assertNull(nullUser);
}
```

### Constants as Expected Values

__Pre__
```java
@Test
void usingConstantsAsExpectedValues() {
    User user = userRepo.findById(0);
    assertTrue(user.getFirstName().equals("John"));
}
```

__Post__
```java
@Test
void usingConstantsAsExpectedValues() {
    User user = userRepo.findById(0);
    assertEquals("John", user.getFirstName());
}
```

### Comparing Primitives

__Pre__
```java
@Test
void comparingPrimitives() {
    User user = userRepo.findById("0");
    assertTrue(0 == user.getId());
}
```

__Post__
```java
@Test
void comparingPrimitives() {
    User user = userRepo.findById("0");
    assertEquals(0, user.getId());
}
```

### Comparing Same Objects

__Pre__
```java
@Test
void compareSame() {
    User user = userRepo.findById("0");
    User actual = userRepo.save(user);
    assertTrue(user == actual);
}
```

__Post__
```java
@Test
void compareSame() {
    User user = userRepo.findById("0");
    User actual = userRepo.save(user);
    assertSame(user, actual);
}
```

<VersionNotice />

## Properties

<RuleProperties />
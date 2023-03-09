---
title: Remove Unnecessary Thrown Exceptions on Method Signatures
ruleId: RemoveUnnecessaryThrows
since: 2.7.0
minJavaVersion: 1.1
remediationCost: 2
links:
    - displayName: "S1130"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1130&q=S1130"
    
description:
    Removes the RuntimeExceptions, duplications and exceptions which are subtypes of already thrown exceptions on the method signatures.
tags: ["Free", "Java 1.1", "Readability", "Marker"]
---

# Remove Unnecessary Thrown Exceptions on Method Signatures

## Description

Removes the following exceptions on method signatures:

 1. Exceptions that are subtypes of already thrown exceptions
 2. Exceptions that are thrown more than once
 3. Exceptions that are inheriting from `RuntimeException`

## Benefits

Improves the readability by removing code that adds no information on the method signature.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Declaring a throws exception whose parent type is already thrown

__Pre__
```java
public void throwingChildAndParent() throws ChildException, ParentException {
	...
}
```

__Post__
```java
public void throwingChildAndParent() throws ParentException {
	...
}
```

### Declaring a throws exceptions more than once

__Pre__
```java
public void throwingTheSameExceptionTwice() throws Exception, Exception {
	...
}
```

__Post__
```java
public void throwingTheSameExceptionTwice() throws Exception {
	...
}
```

### Declaring a throws Unchecked exception

__Pre__
```java
public void throwingRuntimeException() throws ArrayIndexOutOfBoundsException {
	...
}
```

__Post__
```java
public void throwingRuntimeException() {
	...
}
```

<VersionNotice />


## Properties

<RuleProperties />

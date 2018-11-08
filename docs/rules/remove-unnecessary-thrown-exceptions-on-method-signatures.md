---
title: Unnecessary Thrown Exceptions on Method Signature
description:
    description
---

# Remove Unnecessary Thrown Exceptions on Method Signatures

[[toc]]

## Description

Removes the following exceptions on method signatures:

 1. Exceptions that are subtypes of already thrown exceptions
 2. Exceptions that are thrown more than once
 3. Exceptions that are inheriting from `RuntimeException`

## Benefits

Improves the readability by removing code that adds no information on the method signature.

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | 2.7.0 |
| Minimum Java version            | 1.1   |
| Remediation cost                | 2 min |
| Links                           |  |

## Requirement & Tags

::: warning Requirements
None.
:::

::: tip Tags
Java 1.1, Coding Conventions
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
public void throwingTheSameExceptionTwice_() throws Exception, Exception {
	...
}
```

__Post__
```java
public void throwingTheSameExceptionTwice_() throws Exception {
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

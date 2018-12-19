---
title: Use Guard Condition
description:
    Replaces the last statement of a method with a guard condition.
tags: ["rule"]
---

# Use Guard Condition

[[toc]]

## Properties

<TagLinks />

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | [2.7.0](/eclipse/release-notes.html#_2-7-0)   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           | [S3776](https://sonarcloud.io/organizations/default/rules?open=squid%3AS3776&rule_key=squid%3AS3776) |

## Description

Replaces, when possible, the last if-statement of a method body with a guard-if and unwraps its body.

## Benefits

Reduces the cognitive complexity of a method.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, Coding Conventions
:::

## Code Changes

### Void method ending with an if statement

__Pre__
```java
	public void voidMethod() {
		doSomething("what ever");
		if(numericCondition() > 0) {
			doSomething("Should create guard condition with less");
			doSomething("Should transform");
		}
	}
```

__Post__
```java
	public void voidMethod() {
		doSomething("what ever");
		if (numericCondition() <= 0) {
			return;
		}
		doSomething("Should create guard condition with less");
		doSomething("Should transform");
	}
```

### Method with return type

__Pre__
```java
	public int methodWithReturnType() {
		doSomething("what ever");
		if(condition()) {
			doSomething("Should be moved out of the if");
			doSomething("should transform");
			return 1;
		}
		return 0;
	}
```

__Post__
```java
	public int methodWithReturnType() {
		doSomething("what ever");
		if (!condition()) {
			return 0;
		}
		doSomething("Should be moved out of the if");
		doSomething("should transform");
		return 1;
	}
```

## Limitations

### Multiple if-then-else branches

__Pre__
```java
	public void multipleElseBranches() {
		if(numericCondition() > 0) {
			doSomething("Should create guard condition with less");
			doSomething("Should not transform");
		} else if(numericCondition() == 0) {
			doSomething("on else-if branch");
		} else {
			doSomething("Else branch");
		}
	}
```

__Post__
```java
	public void multipleElseBranches() {
		if(numericCondition() > 0) {
			doSomething("Should create guard condition with less");
			doSomething("Should not transform");
		} else if(numericCondition() == 0) {
			doSomething("on else-if branch");
		} else {
			doSomething("Else branch");
		}
	}
```

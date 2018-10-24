---
title: Guard Condition
description:
    Replaces the last statement of a method with a guard condition.
---

# Use Guard Condition

[[toc]]

## Description

Replaces, when possible, the last if-statement of a method body with a guard-if and unwraps its body. 

## Benefits & Remediation & SonarLint

Reduces the cognitive complexity of a method. 

| Property      | Value |
| ------------- |:-------------:|
| Remediation cost      | 2 |
| Links |  |

## Requirement & Tags

::: warning Requirements
None.
:::

::: tip Tags
Java 1.1, Coding Conventions
::: 

## Code Changes

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


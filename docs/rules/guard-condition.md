---
title: Use Guard Condition
ruleId: GuardCondition
since: 2.7.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S3776"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS3776&q=S3776"
    
description:
    Replaces the last statement of a method with a guard condition.
tags: ["Java 1.1", "Coding Conventions"]
---

# Use Guard Condition

[[toc]]

## Properties

<RuleProperties />


## Description

Replaces, when possible, the last if-statement of a method body with a guard-if and unwraps its body.

## Benefits

Reduces the cognitive complexity of a method.


## Code Changes

### Void method ending with an if statement

__Pre__
```java
	public void voidMethod() {
		doSomething("whatever");
		if(numericCondition() > 0) {
			doSomething("Should create guard condition with less");
			doSomething("Should transform");
		}
	}
```

__Post__
```java
	public void voidMethod() {
		doSomething("whatever");
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
		doSomething("whatever");
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
		doSomething("whatever");
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

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::
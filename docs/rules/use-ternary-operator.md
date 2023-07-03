---
title: Use Ternary Operator
ruleId: UseTernaryOperator
since: 4.18.0
minJavaVersion: 1.1
remediationCost: 5
    
description:
    This rule replaces if-statements by equivalent statements using the ternary operator in cases where such a replacement is reasonable.

tags: ["Readability"]
---

# Use Ternary Operator

## Description
This rule replaces if-statements by equivalent statements using the ternary operator in cases where such a replacement is reasonable. For example, the statement 'x = condition ? 1 : 0;' is shorter and better readable than the equivalent construct using an if-statement.




## Benefits

Code can be made shorter.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Transforming To Initializer With Ternary Expression

__Pre__
```java
	int x;
	if (condition) {
		x = 1;
	} else {
		x = 0;
	}
```

__Post__
```java
	int x = condition ? 1 : 0;
```

### Transforming To Assignment With Ternary Expression

__Pre__
```java
	int x;
	System.out.println();
	if (condition) {
		x = 1;
	} else {
		x = 0;
	}
```

__Post__
```java
	int x;
	System.out.println();
	x = condition ? 1 : 0;	
```

### Transforming To Return Of Ternary Expression


__Pre__
```java
	if (condition) {
		return 1;
	} else {
		return 0;
	}
```

__Post__
```java
	return condition ? 1 : 0;
```


### Return Immediately After If

__Pre__
```java
	if (condition) {
		return 1;
	}
	return 0;
```

__Post__
```java
	return condition ? 1 : 0;
```


<VersionNotice />

## Properties

<RuleProperties />

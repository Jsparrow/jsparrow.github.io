---
title: Inline Local Variables
ruleId: InlineLocalVariables
since: 4.19.0
minJavaVersion: 1.1
remediationCost: 2
links:
    - displayName: "S1488"
      url: "https://sonarcloud.io/organizations/default/rules?open=java%3AS1488&q=S1488"
description:
    This rule scans for local variables which are declared and then immediately returned or thrown and in-lines them if this is possible.

tags: ["Java 1.1", "Coding Conventions", "Marker"]
---

# Inline Local Variables

## Description

 According to the rule [`S1488`](https://sonarcloud.io/organizations/default/rules?open=java%3AS1488&q=S1488) on the web site 'sonarcloud.io', local variables should not be declared and then immediately returned or thrown. Therefore this rule scans for local variables which are exclusively used in one single return- or throw statement and in-lines them if this is possible.

## Benefits

Simplifies code by removing unnecessary variable declarations.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Variables In Return Statements

__Pre__
```java
	int x = 1;
	return x;
```

__Post__
```java
    return 1;
```

### Variables In Throw Statements

__Pre__
```java
	RuntimeException x = new RuntimeException();
	throw x;
```

__Post__
```java
    throw new RuntimeException();
```


<VersionNotice />

## Properties

<RuleProperties />

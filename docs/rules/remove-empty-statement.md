---
title: Remove Unnecessary Semicolons
ruleId: RemoveEmptyStatement
since: 2.7.0
minJavaVersion: 1.1
remediationCost: 1
links:
    - displayName: "EmptyStatementUsageCheck"
      url: "https://sonarcloud.io/organizations/default/rules?open=squid%3AEmptyStatementUsageCheck&rule_key=squid%3AEmptyStatementUsageCheck"
    
description:
    Removes the unnecessary semicolons from the code blocks.
tags: ["Free", "Java 1.1", "Coding Conventions"]
---

# Remove Unnecessary Semicolons

[[toc]]

## Properties

| Property                        | Value |
| ------------------------------- | ----- |
| First seen in jSparrow version  | [2.7.0](/eclipse/release-notes.html#_2-7-0) |
| Minimum Java version            | 1.1   |
| Remediation cost                | 1 min |
| Links                           | [EmptyStatementUsageCheck](https://sonarcloud.io/organizations/default/rules?open=squid%3AEmptyStatementUsageCheck&rule_key=squid%3AEmptyStatementUsageCheck) |

## Description

Finds and removes the unnecessary semicolons from the code blocks.

## Benefits

Improves the readability, by removing code that do not produce any computation steps.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Unnecessary semicolon in method body

__Pre__

```java
public void unnecessarySemiColon() {
    ;
    int a = 0;
}
```

__Post__
```java
public void unnecessarySemiColon() {
    int a = 0;
}
```

### Multiple unnecessary semicolons

__Pre__

```java
public void unnecessarySemiColon() {
    ;;;;
    int a = 0;;;
    ;;;;
}
```

__Post__
```java
public void unnecessarySemiColon() {
    int a = 0;
}
```

## Limitations

### Unnecessary semicolons in class' body
```java
class Foo {
    ;
    private String foo;
}
```

<VersionNotice />


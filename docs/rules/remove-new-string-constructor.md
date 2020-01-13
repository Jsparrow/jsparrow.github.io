---
title: Use String Literals
ruleId: RemoveNewStringConstructor
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 5
links: "[S2129](https://sonarcloud.io/organizations/default/rules?rule_key=squid%3AS2129)"
description:
    Removes all class instantiations from 'String' if its parameter is empty or a 'String'.
tags: ["Java 1.1", "String Manipulation", "Performance"]
---

# Use String Literals

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0)   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 5 min |
| Links                           | [S2129](https://sonarcloud.io/organizations/default/rules?rule_key=squid%3AS2129) |

## Description

Removes all class instantiations from String if its parameter is empty or a String. An empty parameter is replaced with the empty String and the construction of a String or String-literal removes the constructor.   

## Benefits

Avoiding the constructor call has performance benefits as it reduces memory usage and improves readability.   
Furthermore, these constructors are deprecated in Java 9, which is an indication that they will eventually be removed from the language altogether.   

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

``` java
public String testNewStringOfLiteral() {
    return new String("StringLiteral");
}
public String testNewStringOfLiteralWithParentheses() {
    return new String(("StringLiteral"));
}
public String testNewStringOfOtherString(String s) {
    return new String(s);
}
public String testNewStringOnNonStringElement(StringBuilder sb) {
    return new String(sb);
}
```

__Post__

``` java
public String testNewStringOfLiteral() {
    return "StringLiteral";
}
public String testNewStringOfLiteralWithParentheses() {
    return "StringLiteral";
}
public String testNewStringOfOtherString(String s) {
    return s;
}
public String testNewStringOnNonStringElement(StringBuilder sb) {
    return new String(sb);
}
```

<VersionNotice />


---
title: Use Portable Newline
description:
    It is generally preferable better to use %n, which will produce the platform-specific line separator.
tags: ["Java 5", "String Manipulation"]
---

# Use Portable Newline

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0)   |
| Minimum Java version            | 5   |
| Remediation cost                | 1 min |
| Links                           | [FindBugs](http://findbugs.sourceforge.net/bugDescriptions.html#VA_FORMAT_STRING_USES_NEWLINE) |

## Description

This rule replaces any occurrences of '\n' with '%n'.  
For example 'String.format("\n\n")' is replaced by 'String.format("%n%n")'.  

## Benefits

The benefit of this approach is that '%n' is portable across platforms.  

## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

``` java
public class TestStringFormatLineSeparatorRule {
    public String testStringFormatLineSeparator01() {
        return String.format("\n\n");
    }
    public String testStringFormatLineSeparator02() {
        return String.format(Locale.GERMAN, "\n\n");
    }
    public String testStringFormatLineSeparator03() {
        return String.format("\r\n\r\n");
    }
    public String testStringFormatLineSeparator04() {
        return String.format(Locale.GERMAN, "\r\n\r\n%n");
    }
}
```

__Post__

``` java

public class TestStringFormatLineSeparatorRule {
    public String testStringFormatLineSeparator01() {
        return String.format("%n%n");
    }
    public String testStringFormatLineSeparator02() {
        return String.format(Locale.GERMAN, "%n%n");
    }
    public String testStringFormatLineSeparator03() {
        return String.format("%n%n");
    }
    public String testStringFormatLineSeparator04() {
        return String.format(Locale.GERMAN, "%n%n%n");
    }
}
```

---
title: Use Portable Newline
ruleId: StringFormatLineSeparator
since: 1.0.0
minJavaVersion: 5
remediationCost: 1
links:
    - displayName: "FindBugs"
      url: "http://findbugs.sourceforge.net/bugDescriptions.html#VA_FORMAT_STRING_USES_NEWLINE"
    
description:
    It is generally preferable better to use "%n", which will produce the platform-specific line separator.
tags: ["Java 5", "String Manipulation", "Marker"]
---

# Use Portable Newline

## Description

This rule replaces any occurrences of '\n' with '%n'.  
For example 'String.format("\n\n")' is replaced by 'String.format("%n%n")'.  

## Benefits

The benefit of this approach is that '%n' is portable across platforms.  


## Tags

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

<VersionNotice />


## Properties

<RuleProperties />

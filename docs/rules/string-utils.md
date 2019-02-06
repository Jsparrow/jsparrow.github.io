---
title: Use StringUtils Methods
description:
    Replaces various String methods with their null-safe counterparts from StringUtils.
tags: ["Java 1.1", "String Manipulation"]
---

# Use StringUtils Methods

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [1.0.0](/eclipse/release-notes.html#_1-0-0)   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 10 min |
| Links                           |  |

## Description

This rule replaces various String methods with their null-safe counterparts from StringUtils.
For example, '"String".trim()' becomes 'StringUtils.trim("String")'.   

## Benefits

Using StringUtils helps avoid a number of issues, such as null pointer exceptions. Depending on the specific methods readability, performance and others may also be improved. In short: StringUtils is just generally better.   

## Requirement & Tags

::: warning Requirements
Libraries: org.apache.commons.lang3.StringUtils
:::

::: tip Tags
<TagLinks />
:::

## Implemented Methods

### isEmpty

__Pre String API__

``` java
public boolean isEmpty()
```

__Post StringUtils API__

``` java
public static boolean isEmpty(CharSequence cs)
```

### trim

__Pre String API__

``` java
public String trim()
```

__Post StringUtils API__

``` java
public static String trim(String str)
```

### equalsIgnoreCase

__Pre String API__

``` java
public boolean equalsIgnoreCase(String anotherString)
```

__Post StringUtils API__

``` java
public static boolean equalsIgnoreCase(CharSequence str1, CharSequence str2)
```

### endsWith

__Pre String API__

``` java
public boolean endsWith(String suffix)
```

__Post StringUtils API__

``` java
public static boolean endsWith(CharSequence str, CharSequence suffix)
```

### indexOf

__Pre String API__

``` java
public int indexOf(String str)
```

__Post StringUtils API__

``` java
public static int indexOf(CharSequence seq, CharSequence searchSeq)
```

### contains

__Pre String API__

``` java
public boolean contains(CharSequence s)
```

__Post StringUtils API__

``` java
public static boolean contains(CharSequence seq, CharSequence searchSeq)
```

### substring

__Pre String API__

``` java
public String substring(int beginIndex)
```

__Post StringUtils API__

``` java
public static String substring(String str, int start)
```

### startsWith

__Pre String API__

``` java
public boolean startsWith(String prefix)
```

__Post StringUtils API__

``` java
public static boolean startsWith(CharSequence str, CharSequence prefix)
```

### toUpperCase

__Pre String API__

``` java
public String toUpperCase()
public String toUpperCase(Locale locale)
```

__Post StringUtils API__

``` java
public static String upperCase(String str)
public static String upperCase(String str, Locale locale)
```

### toLowerCase

__Pre String API__

``` java
public String toLowerCase()
public String toLowerCase(Locale locale)
```

__Post StringUtils API__

``` java
public static String lowerCase(String str)
public static String lowerCase(String str, Locale locale)
```

## Code Changes

__Pre__

```java
public boolean testEmpty(String testString) {
    return  /* test */ testString // save me
            .isEmpty() /* trailing comment */;
}

public String testTrim(String testString) {
    String val = /* test */testString.trim();
    return testString.trim();
}

public boolean testEqualsIgnoreCase(String testString) {
    String sometimesExpectedString = testString.replaceAll("a", "b");

    return testString.equalsIgnoreCase(sometimesExpectedString);
}
```

__Post__

```java
public boolean testEmpty(String testString) {
    // save me
    return /* test */ StringUtils.isEmpty(testString) /* trailing comment */;
}

public String testTrim(String testString) {
    String val = /* test */StringUtils.trim(testString);
    return StringUtils.trim(testString);
}

public boolean testEqualsIgnoreCase(String testString) {
    String sometimesExpectedString = testString.replaceAll("a", "b");

    return StringUtils.equalsIgnoreCase(testString, sometimesExpectedString);
}
```

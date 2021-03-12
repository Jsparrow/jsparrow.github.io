---
title: Use StringUtils Methods
ruleId: StringUtils
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 10
links:
description:
    Replaces various 'String' methods with their null-safe counterparts from 'StringUtils'.
tags: ["Java 1.1", "String Manipulation"]
---

# Use StringUtils Methods

## Description

This rule replaces various String methods with their null-safe counterparts from StringUtils.
For example, `"String".trim()` becomes `StringUtils.trim("String")`.

::: warning Requirements
Activation of this rule requires the following classpath entry to be present:
* org.apache.commons.lang3.StringUtils
:::

## Benefits

Using StringUtils helps avoid a number of issues, such as null pointer exceptions. Depending on the specific methods readability, performance and others may also be improved. In short: StringUtils is just generally better.   


## Supported API

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

### Checking for Empty Strings
__Pre__

```java
value.isEmpty();
```

__Post__

```java
StringUtils.isEmpty(value);
```

### Dropping Surrounding Spaces

__Pre__

```java
value.trim();
```

__Post__

```java
StringUtils.trim(value);
```

### Comparing Equals

__Pre__

```java
String email = user.getMail();
String username = user.getUsername();

username.equals(expectedUsername);
email.equalsIgnoreCase(expectedEmail);
```

__Post__

```java
String email = user.getMail();
String username = user.getUsername();

StringUtils.equals(username, expectedUsername);
StringUtils.equalsIgnoreCase(email, expectedEmail);
```

### Finding a Substring

__Pre__

```java
value.substring(index);
```

__Post__

```java
StringUtils.substring(value, index);
```

### Finding the Index of a Substring

__Pre__

```java
value.indexOf(sequence);
```

__Post__

```java
StringUtils.indexOf(value, sequence);
```

### Comparing the Suffix

__Pre__

```java
value.endsWith(suffix);
```

__Post__

```java
StringUtils.endsWith(value, suffix);
```

### Comparing the Prefix

__Pre__

```java
value.startsWith(prefix);
```

__Post__

```java
StringUtils.startsWith(value, prefix);
```

### Searching for a Sequence

__Pre__

```java
value.contains(sequence);
```

__Post__

```java
StringUtils.contains(value, sequence);
```

### Changing Capitalization

__Pre__

```java
String upper = value.toUpperCase();
String lower = value.toLowerCase();
```

__Post__

```java
String upper = StringUtils.upperCase(value);
String lower = StringUtils.lowerCase(value);
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::
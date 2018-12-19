---
title: Remove Deprecated Date Constructs
description:
   Some java.util.Date constructors like new Date(int year, int month, int day), new Date(int year, int month, int date, int hrs, int min) and new Date(int year, int month, int date, int hrs, int min, int sec) are deprecated and the Calendar should be used instead.  This rule searches for deprecated calendar instances, introduces calendar instances and sets the time corresponding to the parameters in the deprecated constructor, and replaces the latter with an invocation of Calendar.getTime().
tags: ["rule"]
---

# Remove Deprecated Date Constructs

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.5.0](/eclipse/release-notes.html#_2-5-0) |
| Minimum Java version            | 1.1 |
| Remediation cost                | 1 min |
| Links                           | |

## Description

Some java.util.Date constructors like new Date(int year, int month, int day), new Date(int year, int month, int date, int hrs, int min) and new Date(int year, int month, int date, int hrs, int min, int sec) are deprecated and the Calendar should be used instead.  This rule searches for deprecated calendar instances, introduces calendar instances and sets the time corresponding to the parameters in the deprecated constructor, and replaces the latter with an invocation of Calendar.getTime().

Note that the date constructor is implicitly adding 1900 to the first argument (i.e. year), whereas Calendar.set is expecting the exact year value. Therefore, the rule takes care of preparing the parameters of the Calendar.set properly.

If the deprecated constructor is used in a field initialization, then an initializer block is introduced for creating the calendar and initializing the field properly. See the before/after table.

## Benefits

The major advantage of this rule is that you get rid of the long deprecated Date constructors.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, Formatting, Readability
:::

## Code Changes

### Year, Month, Day

__Pre__
```java
Date date = new Date(99, 1, 1);
```

__Post__
```java
Calendar calendar = Calendar.getInstance();
calendar.set(1999, 1, 1);
Date date = calendar.getTime();
```

### Year, Month, Day, Hour, Minutes

__Pre__
```java
Date date = new Date(99, 2, 3, 4, 5);
```

__Post__
```java
Calendar calendar = Calendar.getInstance();
calendar.set(1999, 2, 3, 4, 5);
Date date = calendar.getTime();
```

### Year, Month, Day, Hour, Minutes, Seconds

__Pre__
```java
Date date = new Date(99, 2, 3, 4, 5, 6);
```

__Post__
```java
Calendar calendar = Calendar.getInstance();
calendar.set(1999, 2, 3, 4, 5, 6);
Date date = calendar.getTime();
```

### Class Fields

__Pre__
```java
class Foo {
    Date date = new Date(99, 1, 1);
}
```

__Post__
```java
class Foo {
    Date date;
    {
        Calendar calendar = Calendar.getInstance();
        calendar.set(1999, 1, 1);
        date = calendar.getTime();
    }

}
```

## Limitations

Another deprecated java.util.Date constructor is new Date(String s) and is not handled by this rule.

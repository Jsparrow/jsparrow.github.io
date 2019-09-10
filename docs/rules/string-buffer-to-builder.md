---
title: StringBuffer() to StringBuilder()
description:
    This rule changes the type of local variables from 'StringBuffer()' to 'StringBuilder()'.
tags: ["Java 5", "String Manipulation", "Performance"]
---

# StringBuffer() to StringBuilder()

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | [2.2.0](/eclipse/release-notes.html#_2-2-0) |
| Minimum Java version            | 5     |
| Remediation cost                | 2 min |
| Links                           | [S1149](https://sonarcloud.io/organizations/default/rules?open=squid%3AS1149&q=squid%3AS1149) |

## Description

This rule changes the type of local variables from StringBuffer() to StringBuilder(). The `java.lang.StringBuilder` and the `java.lang.StringBuffer` have exactly the same API and functionality, so it could just be replaced without any effort. The only difference is, that `StringBuffer` uses synchronized methods, which doesn't automatically result in thread safety. In almost all cases, it is recommended to use StringBuilder because no locking and syncing is done. Hence, it's faster. Also the java compiler optimizes strings, which are altered, and replaces them with `StringBuilder`.

## Benefits

When running programs in a single thread, which is generally the case, `StringBuilder` offers performance benefits over StringBuffer. This is due to the fact that `StringBuffer` is synchronized and `StringBuilder` is not. For a reference see [here](https://docs.oracle.com/javase/8/docs/api/index.html?java/lang/StringBuilder.html).



## Requirement & Tags

::: warning Requirements
Java 5
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
StringBuffer localStringBuffer = new StringBuffer();
```

__Post__
```java
StringBuilder localStringBuffer = new StringBuilder();
```

<VersionNotice />


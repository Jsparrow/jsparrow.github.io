---
title: Use Predefined Standard Charset
ruleId: UsePredefinedStandardCharset
since: 3.21.0
minJavaVersion: 1.7
remediationCost: 2
links:
    - displayName: "S4719"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS4719&q=S4719"


description:
    This rule replaces invocations of 'java.nio.charset.Charset.forName(String)' by references to the respective constants declared in 'java.nio.charset.StandardCharsets'.
tags: ["Java 1.7", "Performance"]
---

# Use Predefined Standard Charset

## Description

This rule replaces invocations of [`Charset.forName(String)`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html#forName(java.lang.String)) by constants defined in [`StandardCharsets`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/StandardCharsets.html).


## Benefits

Avoids creating new objects that are already predefined.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes


### Using Charset forName with "UTF-8"

__Pre__
```java
Charset c = Charset.forName("UTF-8");
```

__Post__
```java
Charset c = StandardCharsets.UTF_8;
```

### Using Charset forName with "US-ASCII"

__Pre__
```java
Charset c = Charset.forName("US-ASCII");
```

__Post__
```java
Charset c = StandardCharsets.US_ASCII;
```

### Using Charset forName with "ISO-8859-1"
__Pre__
```java
Charset c1 = Charset.forName("ISO-8859-1");
```

__Post__
```java
Charset c1 = StandardCharsets.ISO_8859_1;
```

### Using Charset forName with "UTF-16"
__Pre__
```java
Charset c3 = Charset.forName("UTF-16");
```

__Post__
```java
Charset c3 = StandardCharsets.UTF_16;
```

### Using Charset forName with "UTF-16BE"
__Pre__
```java
Charset c4 = Charset.forName("UTF-16BE");
```

__Post__
```java
Charset c4 = StandardCharsets.UTF_16BE;
```

### Using Charset forName with "UTF-16LE"
__Pre__
```java
Charset c5 = Charset.forName("UTF-16LE");
```

__Post__
```java
Charset c5 = StandardCharsets.UTF_16LE;
```

<VersionNotice />
## Properties

<RuleProperties />

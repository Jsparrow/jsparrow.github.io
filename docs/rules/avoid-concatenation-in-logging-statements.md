---
title: Avoid Concatenation in Logging Statements
ruleId: AvoidConcatenationInLoggingStatements
since: 3.18.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S2629"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2629&q=S2629"
    
description:
    Avoid always evaluating concatenated logging messages by introducing parameters, which only evaluate when the logging level is active.
tags: ["Java 1.1", "Performance", "Readability", "Coding Conventions", "Logging"]
---

# Avoid Concatenation in Logging Statements

[[toc]]

## Properties

<RuleProperties />

## Description

Concatenated arguments in a logging message lead to concatenation and therefore an evaluation, even if the logging level is too low to show a message. This leads to a needless performance reduction and is classified as a "Major" code smell by SonarCloud [S2629](https://sonarcloud.io/organizations/default/rules?open=java%3AS2629&q=S2629).

By using the built-in string formatting of loggers, an evaluation will only happen if the logging level permits the message to be displayed.

This rule transforms logger statements where the message uses concatenation by introducing string formatting placeholders `{}` and moving the concatenated parts to be parameters.

::: warning Requirements
This rule works on the following types and implementations of them:
* [`org.slf4j.Logger`](http://www.slf4j.org/apidocs/org/slf4j/Logger.html) (includes [`ch.qos.logback.classic.Logger`](http://logback.qos.ch/apidocs/ch/qos/logback/classic/Logger.html))
* [`org.apache.logging.log4j.Logger`](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/Logger.html) 
:::

## Benefits

Improved performance, especially in cases where concatenation is used at low logging levels, such as `debug`. 

## Code Changes

### Introducing Parameters and Merging Strings

__Pre__
```java
Object o = ...;
logger.debug("o = '" + o + "', ONE = '" + BigDecimal.ONE + "', 1 = '" + 1 + "'");
```

__Post__
```java
Object o = ...;
logger.debug("o = '{}', ONE = '{}', 1 = '{}'", o, BigDecimal.ONE, 1);
```

### No Merging of Consecutive Strings

Consecutive string literals do not get merged. Since the compiler already merges such cases, that does not make sense from a performance standpoint.  

__Pre__
```java
int i;
logger.info("String: " + "FooBar" + ", i: " + i);
```

__Post__
```java
int i;
logger.info("String: " + "FooBar" + ", i: {}", i);
```

### Throwable Types as Parameter

Types inheriting from `java.lang.Throwable` (e.g., any `java.lang.Exception`) may already be present as a parameter in a concatenated message. Such cases simply introduce new parameters for the concatenated items, while, of course, not changing the behavior of `Throwable` logging.

__Pre__
```java
try {
    // code
} catch (Exception e) {
    logger.info("Concatenated items: " + BigDecimal.ZERO + 1, e);
}
```

__Post__
```java
try {
    // code
} catch (Exception e) {
    logger.info("Concatenated items: {}{}", BigDecimal.ZERO, 1, e);
}
```

## Limitations

This rule does not apply to logging messages that use concatenation but already contain parameters (other than a `Throwable` parameter). In such cases, it is assumed that a deliberate decision has been made. See examples below:

```java
// this will not transform
logger.info("A " + 1 + " B {}", 2);
```

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::
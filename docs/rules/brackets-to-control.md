---
title: Add Parenthesis to Control Statements
description:
    Checks if parenthesis are used to encapsulate control statements and adds them if they aren't present.
---

# Add Parenthesis to Control Statements

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 0.9   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 2 min |
| Links                           | [S00121](https://sonarcloud.io/organizations/default/rules?open=squid%3AS00121&rule_key=squid%3AS00121) |

## Description

Checks if parenthesis are used to encapsulate control statements and adds them if they aren't present.

## Benefits

While not technically incorrect, the omission of curly braces can be misleading, and may lead to the introduction of errors during maintenance. Applying this read helps avoid such errors and improves readability.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
Java 1.1, Formatting, Readability
:::

## Code Changes

### if

__Pre__

``` java
if (a < b) foo();
```

__Post__

``` java
if (a < b) { foo(); }
```

### else

__Pre__

``` java
else bar();
```
__Post__

``` java
else {
    bar();
}
```
### else if

__Pre__

``` java
else if (a &gt;= b) bar();
```
__Post__

``` java
else if (a &gt;= b) {
    bar();
}
```

### for

__Pre__
``` java
boolean petal = true;
for (int i = 0; i &lt; 10; i++) petal = !petal;
```
__Post__
``` java
boolean petal = true;
for (int i = 0; i &lt; 10; i++) {
    petal = !petal;
}
```

### while

__Pre__
``` java
int cnt = 0;
while (cnt &lt; 10) cnt++;
```
__Post__
``` java
int cnt = 0;
while (cnt &lt; 10) {
    cnt++;
}
```
### do while

__Pre__
``` java
int cnt = 0;
do cnt++; while (cnt &lt; 10);
```
__Post__
``` java
int cnt = 0;
do {
    cnt++;
} while (cnt &lt; 10);
```

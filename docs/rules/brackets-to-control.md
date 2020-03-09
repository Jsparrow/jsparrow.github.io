---
title: Add Braces to Control Statements
ruleId: BracketsToControl
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 2
links:
    - displayName: "S121"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS121&q=s121"
    
description:
    Checks if braces are used to encapsulate control statements and adds them if they aren't present.
tags: ["Java 1.1", "Formatting", "Readability"]
---

# Add Braces to Control Statements

[[toc]]

## Properties

<RuleProperties />


## Description

Checks if braces are used to encapsulate control statements and adds them if they aren't present.

## Benefits

While not technically incorrect, the omission of curly braces can be misleading, and may lead to the introduction of errors during maintenance. Applying this read helps avoid such errors and improves readability.

## Requirement & Tags

::: warning Requirements
None
:::

::: tip Tags
<TagLinks />
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
else if (a >= b) bar();
```
__Post__

``` java
else if (a >= b) {
    bar();
}
```

### for

__Pre__
``` java
boolean petal = true;
for (int i = 0; i < 10; i++) petal = !petal;
```
__Post__
``` java
boolean petal = true;
for (int i = 0; i < 10; i++) {
    petal = !petal;
}
```

### while

__Pre__
``` java
int cnt = 0;
while (cnt < 10) cnt++;
```
__Post__
``` java
int cnt = 0;
while (cnt < 10) {
    cnt++;
}
```
### do while

__Pre__
``` java
int cnt = 0;
do cnt++; while (cnt < 10);
```
__Post__
``` java
int cnt = 0;
do {
    cnt++;
} while (cnt < 10);
```

<VersionNotice />


---
title: Remove Lambda Expression Braces
ruleId: StatementLambdaToExpression
since: 2.0.0
minJavaVersion: 8
remediationCost: 5
links:
description:
    If the body of the lambda statement contains only a single expression, the braces are optional. It can be reduced to a lambda expression.
    This is comparable to if-statements or loops with a single expression inside their body, where braces are also optional.
tags: ["Java 8", "Lambda"]
---

# Remove Lambda Expression Braces

## Description

If the body of the lambda statement contains only a single expression, the braces are optional. It can be reduced to a lambda expression.

This is comparable to if-statements or loops with a single expression inside their body, where braces are also optional.

## Benefits

This rule provides an easier-to read alternative to filter items in a list.


## Code Changes

__Pre__

```java
public Function<Function, Function> f = (Function function) -> {
    return function.compose(function);
};
```

__Post__

```java
public Function<Function, Function> f = (Function function) -> function.compose(function);
```

<VersionNotice />


## Tags

::: tip Tags
<TagLinks />
:::
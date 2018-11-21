---
title: Use Try-With-Resource
description:
    This rule adds the try-with-resources statement introduced in Java 7. Closing statements are removed as the construct takes care of that. 
---

# Use Try-With-Resource

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 1.0.0 |
| Minimum Java version            | 7     |
| Remediation cost                | 15 min |
| Links                           | [squid:S2093](https://sonarcloud.io/organizations/default/rules?open=squid%3AS2093&q=Resources+should+be+closed) |

## Description

This rule adds the try-with-resources statement introduced in Java 7. Closing statements are removed as 
the construct takes care of that. 

## Benefits

Applying this rule makes the code safer and more readable.

## Requirement & Tags

::: warning Requirements
Java 7
:::

::: tip Tags
Java 7, Old Language Constructs, Readability
:::

## Code Changes

### Moving resource to the try header

__Pre__
```java
try {
    BufferedReader br = new BufferedReader(new FileReader(path));
    br.readLine();
    br.readLine();
    br.close();
    
} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```

__Post__
```java
try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    br.readLine();
    br.readLine();

} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```


### Moving multiple resources to the try header

__Pre__

```java
try {
    BufferedReader br = new BufferedReader(new FileReader(path)); 
    BufferedReader br2 = new BufferedReader(new FileReader(path));
    br.readLine();
    br2.readLine();
    br.close();
    br2.close();
    
} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```

__Post__
```java
try (BufferedReader br = new BufferedReader(new FileReader(path)); 
        BufferedReader br2 = new BufferedReader(new FileReader(path))) {
    br.readLine();
    br2.readLine();
} catch (IOException e) {
    logger.error(e.getMessage(), e);
}
```
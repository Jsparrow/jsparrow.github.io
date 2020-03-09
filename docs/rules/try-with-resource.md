---
title: Use Try-With-Resource
ruleId: TryWithResource
since: 1.0.0
minJavaVersion: 7
remediationCost: 15
links:
    - displayName: "S2093"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2093&q=S2093"
    
description:
    This rule adds the try-with-resources statement introduced in Java 7. Closing statements are removed as the construct takes care of that.
tags: ["Free", "Java 7", "Old Language Constructs", "Readability"]
defaultConfiguration: true
---

# Use Try-With-Resource

[[toc]]

## Properties

<RuleProperties />


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
<TagLinks />
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

<VersionNotice />


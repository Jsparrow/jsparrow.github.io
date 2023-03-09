---
title: Remove Unused Parameters in Private Methods
ruleId: RemoveUnusedParameter
since: 3.4.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S1172"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1172&q=S1172"
    
description:
    Finds and removes unused parameters in private method declarations. Updates the affected method invocations accordingly.

tags: ["Java 1.1", "Readability", "Coding Conventions", "Marker"]
---

# Remove Unused Parameters in Private Methods

## Description
This rule finds and removes unused parameters in private method declarations.
Consequently, all the invocations of the affected methods are updated accordingly.

## Benefits
Removes the clutter and simplifies the method declarations.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__
```java
/**
 * Java doc for the affected method
 *
 * @param first  discarded parameter
 * @param second used parameter
 * @param third  discarded parameter
 */
private void discardedParameters(String first, String second, String third) {
    consume(second);
}

void invocationSample() {
    discardedParameters("first", "second", "third");
}
```

__Post__
```java
/**
 * Java doc for the affected method
 *
 * @param second used parameter
 */
private void discardedParameters(String second) {
    consume(second);
}

void invocationSample() {
    discardedParameters("second");
}
```


## Limitations

The non-private methods are not modified by this rule because they could be invoked or overridden in locations that are not reachable by jSparrow.

<VersionNotice />


## Properties

<RuleProperties />

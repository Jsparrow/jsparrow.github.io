---
title: RULE_NAME
ruleId: RULE_ID
since: [e.g. 3.18.0]
minJavaVersion: [e.g.: 1.1, 1.2, 1.3, 1.4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ....]
remediationCost: [e.g.: 1, 2, 5, 10, 15]
links:
    - displayName: "[sid, rule_name, ...]"
      url: "[URL]"
    
description:
    Short rule description (this is shown on the [summary page](https://jsparrow.github.io/rules/#summary)).
tags: ["Java 1.1", "Java 1.2", "Java 1.3", "Java 1.4", "Java 5", "Java 7", "Java 8", "Java 9", "Java 10", "String Manipulation", "Performance", "Lambda", "Old Language Constructs", "Loop", "Readability", "Formatting", "Coding Conventions", "Logging", "Free", "Security", "Testing", "IO Operations"]
---

# Rulename

[[toc]]

## Properties

<RuleProperties />

## Description

Longer description of the rule.

::: warning Requirements (Optional)
(optional) Java 9 (only add Java version 9 or above here)

(optional) Are classpath entries required? -> Specify which one. See example below:
Activation of this rule requires the following classpath entries to be present:
* (fully qualified name)

(optional) Does the rule only work with a specific type on a third-party library (e.g., it only works on org.slf4j.Logger and no other Logger)? -> state that as a requirement! See example below:
This rule works on the following types and implementations of them:
* (fully qualified name)
:::

## Benefits

## Configuration (Optional)

## Code Changes


### Case description

__Pre__
```java
sampleCode();
```

__Post__
```java
sampleCode();
```

### Bytecode JDK 1.8 (Optional)

__Pre__
```java
```

```
```

__Post__
```java
```

```
```

## Limitations (Optional)

Limitations are use cases that are not covered by the requirements. Example reasons: 
* API not supporting a use case 
* It becomes exceptionally hard to cover uncommon use cases and therefore a relaxed implementation of the rule is acceptable (see [Avoid Concatenation in Logging Statements](https://jsparrow.github.io/rules/avoid-concatenation-in-logging-statements.html#limitations))

An example code snippet could make sense. 

<VersionNotice />

## Tags

::: tip Tags
<TagLinks />
:::
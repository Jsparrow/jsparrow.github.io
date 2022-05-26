---
title: Replace Request Mapping Annotation
ruleId: ReplaceRequestMappingAnnotation
since: 4.12.0
minJavaVersion: 5
remediationCost: 2
links:
    - displayName: "S4488"
      url: "https://sonarcloud.io/organizations/default/rules?open=java%3AS4488&rule_key=java%3AS4488"
    
description:
    Version 4.3 of the Spring Framework introduced annotations like '@GetMapping' or '@PostMapping' to be used instead of '@RequestMapping' when a certain request method is specified. Accordingly, this rule tries to replace annotations. For example,  '@RequestMapping(value = "/hello", method = RequestMethod.GET)' can be replaced by '@GetMapping(value = "/hello")'.
tags: ["Java 5", "Coding Conventions", "Readability"]
defaultConfiguration: true
---

# Replace Request Mapping Annotation

## Description
Spring framework 4.3 introduced variants of the '@RequestMapping' annotation to represent the semantics of the annotated methods in a more specific way. This rule looks for [`@RequestMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html) annotations on methods and tries to replace them by one of the following annotations which specify a certain [`RequestMethod`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMethod.html):

| Annotation | Request Method |
| ----------- | ----------- |
| [`@GetMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/GetMapping.html)  | RequestMethod.GET |
| [`@PostMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/PostMapping.html)  | RequestMethod.POST |
| [`@PutMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/PutMapping.html)  | RequestMethod.PUT |
| [`@PatchMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/PatchMapping.html)  | RequestMethod.PATCH |
| [`@DeleteMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/DeleteMapping.html)  | RequestMethod.DELETE |

In Java, the try-with-resource statements are able to automatically close the resources which are defined in the try-with-resource header.
Thus, any explicit [`close()`](https://docs.oracle.com/en/java/javase/18/docs/api/java.base/java/lang/AutoCloseable.html#close()) invocation in the try block is redundant and potentially confusing. 
This rule eliminates redundant resource `close()` invocations.

## Benefits

Applying this rule removes unnecessary code.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Replacement by @GetMapping 

__Pre__
```java

```

__Post__
```java

```

### Replacement by @GetMapping 

__Pre__
```java

```

__Post__
```java

```

### Replacement by @GetMapping

__Pre__

```java

```

__Post__
```java

```

### Replacement by @GetMapping

__Pre__

```java

```

__Post__
```java

```
### Replacement by @GetMapping

__Pre__

```java

```

__Post__
```java

```


<VersionNotice />


## Properties

<RuleProperties />

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
    The Spring Framework 4.3 introduced some composed annotations like '@GetMapping', '@PostMapping', etc, as an alternative of '@RequestMapping(method=...)' for annotating HTTP request handlers. Accordingly, this rule replaces the '@RequestMapping' annotations with their equivalent dedicated alternatives, for example, '@RequestMapping(value = "/hello", method = RequestMethod.GET)' is replaced by '@GetMapping(value = "/hello")'.

tags: ["Java 5", "Spring", "Coding Conventions", "Readability", "Marker"]
defaultConfiguration: true
---

# Replace Request Mapping Annotation

## Description
The Spring Framework 4.3 introduced some composed annotations like `@GetMapping`, `@PostMapping`, etc... as an alternative of [`@RequestMapping(method=...)`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html) for annotating HTTP request handlers. 
Accordingly, this rule replaces the `@RequestMapping` annotations with their equivalent dedicated alternatives, for example, `@RequestMapping(value = "/hello", method = RequestMethod.GET)` is replaced by `@GetMapping(value = "/hello")`.

| Annotation | Request Method |
| ----------- | ----------- |
| [`@GetMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/GetMapping.html)  | RequestMethod.GET |
| [`@PostMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/PostMapping.html)  | RequestMethod.POST |
| [`@PutMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/PutMapping.html)  | RequestMethod.PUT |
| [`@PatchMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/PatchMapping.html)  | RequestMethod.PATCH |
| [`@DeleteMapping`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/DeleteMapping.html)  | RequestMethod.DELETE |

::: warning Requirements
This rule requires the following library to be present:
* Spring Web 4.3.5 or later
:::

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
@RequestMapping(value = "/users/get/{userId}", method = RequestMethod.GET)
public @ResponseBody ResourceBean getUser(@PathVariable String userId,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

__Post__
```java
@GetMapping(value = "/users/get/{userId}")
public @ResponseBody ResourceBean getUser(@PathVariable String userId,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

### Replacement by @PostMapping 

__Pre__
```java
@RequestMapping(value = "/users", method = RequestMethod.POST)
public @ResponseBody ResourceBean addUser(@RequestBody UserBean userBean,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

__Post__
```java
@PostMapping(value = "/users")
public @ResponseBody ResourceBean addUser(@RequestBody UserBean userBean,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

### Replacement by @PutMapping

__Pre__

```java
@RequestMapping(value = "/users", method = RequestMethod.PUT)
public @ResponseBody ResourceBean updateUser(@RequestBody UserBean userBean,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

__Post__
```java
@PutMapping(value = "/users")
public @ResponseBody ResourceBean updateUser(@RequestBody UserBean userBean,
    HttpServletRequest request) {
	
    ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

### Replacement by @PatchMapping

__Pre__

```java
@RequestMapping(value = "/users", method = RequestMethod.PATCH)
public @ResponseBody ResourceBean updateUser(@RequestBody UserBean userBean,
    HttpServletRequest request) {
        
	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

__Post__
```java
@PatchMapping(value = "/users")
public @ResponseBody ResourceBean updateUser(@RequestBody UserBean userBean,
    HttpServletRequest request) {
    
    ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```
### Replacement by @DeleteMapping

__Pre__

```java
@RequestMapping(value = "/users/{userId}", method = RequestMethod.DELETE)
public @ResponseBody ResourceBean deleteUser(@PathVariable String userId,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```

__Post__
```java
@DeleteMapping(value = "/users/{userId}")
public @ResponseBody ResourceBean deleteUser(@PathVariable String userId,
    HttpServletRequest request) {

	ResourceBean responseBean;
	// determine responseBean...

	return responseBean;
}
```


<VersionNotice />


## Properties

<RuleProperties />

---
title: Use Parameterized LDAP Query
ruleId: UseParameterizedLDAPQuery
since: 3.19.0
minJavaVersion: 1.3
remediationCost: 30
links:
    - displayName: "S2078"
      url: "https://sonarcloud.io/organizations/default/rules?open=javasecurity%3AS2078&rule_key=javasecurity%3AS2078"
    
description:
    This rule prevents LDAP injections by parameterizing vulnerable concats of LDAP search filters. Thus, vulnerable fragments of an LDAP search filter can only be considered as data and not as code.
tags: ["Java 1.3", "Security"]
---

# Use Parameterized LDAP Query

## Description

Similar to SQL queries, the [LDAP](https://ldap.com/) search filters are also vulnerable to injection attacks.
This rule parameterizes all potential user supplied input that are concatenated into an LDAP search filter. 
For example, the invocations of [DirContext::search(Name name, **String filter**, SearchControls cons)](https://docs.oracle.com/javase/7/docs/api/javax/naming/directory/DirContext.html#search(javax.naming.Name,%20java.lang.String,%20javax.naming.directory.SearchControls)) 
are replaced by [DirContext::search(Name name, **String filter**, **Object[] args**, SearchControls cons)](https://docs.oracle.com/javase/7/docs/api/javax/naming/directory/DirContext.html#search(javax.naming.Name,%20java.lang.String,%20java.lang.Object[],%20javax.naming.directory.SearchControls)) where the filter concatenation fragments are extracted into an Object array.

## Benefits

Prevents injections when using Lightweight Directory Access Protocol (LDAP).

## Code Changes

### Using a String variable as filter

__Pre__
```java
String userId = "*)(uid=*))(|(uid=*";
String userPassword = "password";
DirContext ctx = getDirContext();
String filter = "(&(uid=" + userId + ")(userPassword=" + userPassword + "))";
NamingEnumeration<SearchResult> results = ctx.search(
		"ou=system", 
		filter, 
		new SearchControls());
```

__Post__
```java
String userId = "*)(uid=*))(|(uid=*";
String userPassword = "password";
DirContext ctx = getDirContext();
String filter = "(&(uid={0}" + ")(userPassword={1}" + "))";
NamingEnumeration<SearchResult> results = ctx.search(
		"ou=system", 
		filter, 
		new Object[] { userId, userPassword }, 
		new SearchControls());
```


### Using a String concatenation expression as filter

__Pre__
```java
String userId = "*)(uid=*))(|(uid=*";
String userPassword = "password";
DirContext ctx = getDirContext();
NamingEnumeration<SearchResult> results = ctx.search(
		"ou=system", 
		"(&(uid=" + userId + ")(userPassword=" + userPassword + "))", 
		new SearchControls());
```

__Post__
```java
String userId = "*)(uid=*))(|(uid=*";
String userPassword = "password";
DirContext ctx = getDirContext();
NamingEnumeration<SearchResult> results = ctx.search(
		"ou=system", 
		"(&(uid={0}" + ")(userPassword={1}" + "))", 
		new Object[] { userId, userPassword }, 
		new SearchControls());
```


<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::

## Properties

<RuleProperties />

---
title: Use Parameterized LDAP Query
ruleId: UseParameterizedLDAPQuery
since: 3.19.0
minJavaVersion: 1.3
remediationCost: 30
links:
    - displayName: "LDAP queries should not be vulnerable to injection attacks"
      url: "https://sonarcloud.io/organizations/default/rules?open=javasecurity%3AS2078&rule_key=javasecurity%3AS2078"
    
description:
    This rule prevents LDAP injections by parameterizing vulnerable concats of LDAP search filters. Thus, vulnerable fragments of an LDAP search filter can only be considered as data and not as code.
tags: ["Java 1.3", "Security"]
---

# Use Parameterized JPA Query

[[toc]]

## Properties

<RuleProperties />

## Description

Lightweight Directory Access Protocol (LDAP) allows to define search filters represented by String values. Like SQL query strings, also LDAP search filter strings can be vulnerable to injection as soon as the corresponding String is constructed by concatenating String literals with user defined expressions (e.g., variables, method invocations, user input, etc).  
This rule looks for invocations of [DirContext::search(Name name, String filter, SearchControls cons)](https://docs.oracle.com/javase/7/docs/api/javax/naming/directory/DirContext.html#search(javax.naming.Name,%20java.lang.String,%20javax.naming.directory.SearchControls)) or [DirContext::search(String name, String filter, SearchControls cons)](https://docs.oracle.com/javase/7/docs/api/javax/naming/directory/DirContext.html#search(java.lang.String,%20java.lang.String,%20javax.naming.directory.SearchControls)) which are both declared by the interface [javax.naming.directory.DirContext](https://docs.oracle.com/javase/7/docs/api/javax/naming/directory/DirContext.html).  
The vulnerable concats of the LDAP search filter strings are parameterized, so that they can only be considered as data and not as code.

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
	try {
		NamingEnumeration<SearchResult> results = ctx.search("ou=system", filter, new SearchControls());
	} catch (NamingException e) {
		e.printStackTrace();
	}

```

__Post__
```java
	String userId = "*)(uid=*))(|(uid=*";
	String userPassword = "password";
	DirContext ctx = getDirContext();
	String filter = "(&(uid={0}" + ")(userPassword={1}" + "))";
	try {
		NamingEnumeration<SearchResult> results = ctx.search("ou=system", filter, new Object[] { userId, userPassword }, new SearchControls());
	} catch (NamingException e) {
		e.printStackTrace();
	}

```


### Using a String concatenation expression as filter

__Pre__
```java
	String userId = "*)(uid=*))(|(uid=*";
	String userPassword = "password";
	DirContext ctx = getDirContext();
	try {
		NamingEnumeration<SearchResult> results = ctx.search("ou=system", "(&(uid=" + userId + ")(userPassword=" + userPassword + "))", new SearchControls());
	} catch (NamingException e) {
		e.printStackTrace();
	}
```

__Post__
```java
    String userId = "*)(uid=*))(|(uid=*";
	String userPassword = "password";
	DirContext ctx = getDirContext();
	try {
		NamingEnumeration<SearchResult> results = ctx.search("ou=system", "(&(uid={0}" + ")(userPassword={1}" + "))", new Object[] { userId, userPassword }, new SearchControls());
	} catch (NamingException e) {
		e.printStackTrace();
	}

```


<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::
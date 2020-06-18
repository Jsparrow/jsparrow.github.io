---
title: Use Parameterized JPA Query
ruleId: UseParameterizedJPAQuery
since: 3.18.0
minJavaVersion: 1.1
remediationCost: 10
links:
    - displayName: "How To Fix SQL Injection: JPA"
      url: "https://software-security.sans.org/developer-how-to/fix-sql-injection-in-java-persistence-api-jpa"
    
description:
    This rule prevents SQL injections by parameterizing vulnerable concats of a JPQL query string. Thus, vulnerable fragments of JPQL query string can only be considered as data and not as code.
tags: ["Java 1.1", "Security"]
---

# Use Parameterized JPA Query

[[toc]]

## Properties

<RuleProperties />

## Description

JPA defines the [Java Persistence Query Language (JPQL)](https://docs.oracle.com/javaee/7/tutorial/persistence-querylanguage005.htm#BNBUF).
A JPQL query string may be constructed by concatenating string literals with user defined expressions (e.g., variables, method invocations, user input, etc). 
Such a query string concatenation in JPQL may cause the same kind of vulnerability to injection attacks as a native SQL query string because the user input may contain fragments that can be interpreted as JPQL code.  
This rule looks for queries of type [javax.persistence.Query](https://docs.oracle.com/javaee/7/api/javax/persistence/Query.html) which are created by [EntityManager::createQuery](https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#createQuery-java.lang.String-).
The vulnerable concats of the JPQL query strings are parameterized, so that they can only be considered as data and not as code.

::: warning Requirements
Activation of this rule requires the following classpath entries to be present:

* [`javax.persistence.Query`](https://docs.oracle.com/javaee/7/api/javax/persistence/Query.html)
* [`javax.persistence.EntityManager`](https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html)
:::

## Benefits

Prevents SQL injections when using the Java Persistence API (JPA).


## Code Changes

### Using Query get single result

__Pre__
```java
String orderId = "1 OR 1 = 1";
EntityManager entityManager = getEntityManager();
Query jpqlQuery = entityManager.createQuery("Select order from Orders order where order.id = " + orderId);
Object singleResult = jpqlQuery.getSingleResult();
```

__Post__
```java
String orderId = "1 OR 1 = 1";
EntityManager entityManager = getEntityManager();
Query jpqlQuery = entityManager.createQuery("Select order from Orders order where order.id =  ?1");
jpqlQuery.setParameter(1, orderId);
Object singleResult = jpqlQuery.getSingleResult();
```


### Using Query get result list

__Pre__
```java
String orderId1 = "1000000000";
String orderId2 = "1 OR 1 = 1";
EntityManager entityManager = getEntityManager();
Query jpqlQuery = entityManager.createQuery(
		"Select order from Orders order where order.id = " + orderId1 + " or order.id = " + orderId2);
List resultList = jpqlQuery.getResultList();
```

__Post__
```java
String orderId1 = "1000000000";
String orderId2 = "1 OR 1 = 1";
EntityManager entityManager = getEntityManager();
Query jpqlQuery = entityManager
		.createQuery("Select order from Orders order where order.id =  ?1" + " or order.id =  ?2");
jpqlQuery.setParameter(1, orderId1);
jpqlQuery.setParameter(2, orderId2);
List resultList = jpqlQuery.getResultList();
```


<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::
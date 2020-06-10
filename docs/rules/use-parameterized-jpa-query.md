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
    Rule description.
tags: ["Security"]
---

# Use Parameterized JPA Query

[[toc]]

## Properties

<RuleProperties />

## Description

JPA defines the query language JPQL (Java Persistence Query Language). A JPQL query string may be constructed by concatenating string literals with user defined expressions (e.g. variables, method invocations, user input, etc). Such a query string concatenation in JPQL may cause the same kind of vulnerability to injection attacks as a native SQL query string because the user input may be interpreted as JPQL code.  
This rule looks for queries of the type [javax.persistence.Query](https://docs.oracle.com/javaee/7/api/javax/persistence/Query.html) which are created by the ```createQuery``` method of [javax.persistence.EntityManager](https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html). Vulnerable components of the JPQL query string concatenation are replaced by parametrizing, using the ```setParameter``` method of ```javax.persistence.Query```.

## Benefits

Prevents SQL injections when using the Java Persistence API (JPA)

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

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
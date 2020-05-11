---
title: Escape User Inputs in SQL Queries
ruleId: EscapeUserInputsInSQLQueries
since: 3.17.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "Prepared Statements (with Parameterized Queries)"
      url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html#defense-option-4-escaping-all-user-supplied-input"
    
description:
    Rule description.
tags: ["Security"]
---

# Escape User Inputs in SQL Queries

[[toc]]

## Properties

<RuleProperties />

## Description

This rule is applied in connection with an ORACLE DBMS and prevents injection by the escaping of user input before putting it in a SQL-query. The following classes are required:  
[OracleCodec](https://javadoc.io/static/org.owasp.esapi/esapi/2.2.0.0/org/owasp/esapi/codecs/OracleCodec.html)  
[Codec](https://javadoc.io/static/org.owasp.esapi/esapi/2.2.0.0/org/owasp/esapi/codecs/Codec.html)  
[ESAPI](https://javadoc.io/doc/org.owasp.esapi/esapi/latest/org/owasp/esapi/ESAPI.html)  
User input may be done by an attacker and contain fragments of SQL code which change the intent of SQL-queries. A good Example is an input like ```1' or '1'='1``` when a user-id is required. To protect the system against this, the class ```ESAPI``` provides an ```Encoder``` with the method ```encodeForSQL```. This way the input is wrapped into an expression which cannot be interpreted as SQL code any more.  

## Benefits

Prevents SQL injections.

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

## Code Changes


### Using Statement execute

__Pre__
```java
HttpServletRequest req = getRequest();
String query = "SELECT first_name FROM employee WHERE department_id ='" +  req.getParameter("departmentId") + "' ORDER BY last_name";
Statement statement = connection.createStatement();
statement.execute(query);
ResultSet resultSet = statement.getResultSet();
```

__Post__
```java
HttpServletRequest req = getRequest();
Codec<Character> oracleCodec = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE department_id ='" +  ESAPI.encoder().encodeForSQL(oracleCodec, req.getParameter("departmentId")) + "' ORDER BY last_name";
Statement statement = connection.createStatement();
statement.execute(query);
ResultSet resultSet = statement.getResultSet();
```

### Using Statement executeQuery

__Pre__
```java
HttpServletRequest req = getRequest();
String query = "SELECT first_name FROM employee WHERE department_id ='" + req.getParameter("departmentId") + "' ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

__Post__
```java
HttpServletRequest req = getRequest();
Codec<Character> oracleCodec = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE department_id ='" + ESAPI.encoder().encodeForSQL(oracleCodec, req.getParameter("departmentId")) + "' ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

### Multiple Concatenation Lines

__Pre__
```java
HttpServletRequest req = getRequest();
String query = "SELECT first_name FROM employee WHERE";
query += " id > '" + req.getParameter("id") + "'";
query += " AND department_id ='" + req.getParameter("departmentId") + "'";
query += " ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

__Post__
```java
HttpServletRequest req = getRequest();
Codec<Character> oracleCodec = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE";
query += " id > '" + ESAPI.encoder().encodeForSQL(oracleCodec, req.getParameter("id")) + "'";
query += " AND department_id ='" + ESAPI.encoder().encodeForSQL(oracleCodec, req.getParameter("departmentId")) + "'";
query += " ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

<VersionNotice />
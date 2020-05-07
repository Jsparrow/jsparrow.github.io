---
title: Escape User Inputs in SQL Queries
ruleId: EscapeUserInputsInSQLQueries
since: 3.17.0
minJavaVersion: 1.1
remediationCost: 10
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

This rule prevents Injection by escaping user input before putting it in a SQL-query. It can be applied when an ORACLE-database management system is used. 

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
Codec<Character> ORACLE_CODEC = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE department_id ='" +  ESAPI.encoder().encodeForSQL(ORACLE_CODEC, req.getParameter("departmentId")) + "' ORDER BY last_name";
Statement statement = connection.createStatement();
statement.execute(query);
ResultSet resultSet = statement.getResultSet();
```

__Pre__
```java
String departmentId = "40 OR '1'='1";
String query = "SELECT first_name FROM employee WHERE department_id ='" + departmentId + "' ORDER BY last_name";		
Statement statement = connection.createStatement();
statement.execute(query);
ResultSet resultSet = statement.getResultSet();
```

__Post__
```java
String departmentId = "40 OR '1'='1";
Codec<Character> ORACLE_CODEC = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE department_id ='" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, departmentId) + "' ORDER BY last_name";		
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
Codec<Character> ORACLE_CODEC = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE department_id ='" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, req.getParameter("departmentId")) + "' ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

__Pre__
```java
String departmentId = "40 OR '1'='1";
String query = "SELECT first_name FROM employee WHERE department_id ='" + departmentId + "' ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

__Post__
```java
String departmentId = "40 OR '1'='1";
Codec<Character> ORACLE_CODEC = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE department_id ='" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, departmentId) + "' ORDER BY last_name";
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
Codec<Character> ORACLE_CODEC = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE";
query += " id > '" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, req.getParameter("id")) + "'";
query += " AND department_id ='" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, req.getParameter("departmentId")) + "'";
query += " ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

__Pre__
```java
String departmentId = "40 OR '1'='1";
String id = "10";
String query = "SELECT first_name FROM employee WHERE";
query += " id > '" + id + "'";
query += " AND department_id ='" + departmentId + "'";
query += " ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```

__Post__
```java
String departmentId = "40 OR '1'='1";
String id = "10";
Codec<Character> ORACLE_CODEC = new OracleCodec();
String query = "SELECT first_name FROM employee WHERE";
query += " id > '" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, id) + "'";
query += " AND department_id ='" + ESAPI.encoder().encodeForSQL(ORACLE_CODEC, departmentId) + "'";
query += " ORDER BY last_name";
Statement statement = connection.createStatement();
ResultSet resultSet = statement.executeQuery(query);
```
<VersionNotice />
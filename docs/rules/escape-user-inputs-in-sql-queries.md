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
tags: ["Java 1.1", "Security"]
---

# Escape User Inputs in SQL Queries

[[toc]]

## Properties

<RuleProperties />

## Description

This rule detects potential user inputs that are concatenated with Oracle SQL queries and wraps them in [`ESAPI.encoder().encodeForSql(codec, input)`](https://javadoc.io/doc/org.owasp.esapi/esapi/latest/org/owasp/esapi/Encoder.html). 
In this way, the contents of the user input will only be considered as values and not as code, thus preventing the SQL Injection vulnerabilities.  
A typical example of a malicious user input containing fragments that can change the intent of the SQL query is `1' or '1'='1`. 
When wrapped by `encodeForSql(...)`, no part of the user input will be considered as code. For more details, see the examples below. 

::: warning Requirements
Activation of this rule requires the following classpath entries to be present:
* org.owasp.esapi.codecs.OracleCodec 
* org.owasp.esapi.codecs.Codec 
* org.owasp.esapi.ESAPI
:::

## Benefits

Prevents SQL injections.

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

## Limitations

This technique of escaping user supplied input is database specific and supports Oracle DBMS. 

<VersionNotice />
## Tags

::: tip Tags
<TagLinks />
:::
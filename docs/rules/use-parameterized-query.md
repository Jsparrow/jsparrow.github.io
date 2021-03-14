---
title: Use Parameterized Query
ruleId: UseParameterizedQuery
since: 3.16.0
minJavaVersion: 1.1
remediationCost: 20
links:
    - displayName: "Prepared Statements (with Parameterized Queries)"
      url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html#defense-option-1-prepared-statements-with-parameterized-queries"
    - displayName: "S2077"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS2077&q=S2077"
    
description:
    Rule description.
tags: ["Java 1.1", "Security"]
---

# Use Parameterized Query

## Description

Replaces [`java.sql.Statement`](https://docs.oracle.com/javase/8/docs/api/java/sql/Statement.html) with [`java.sql.PreparedStatement`](https://docs.oracle.com/javase/8/docs/api/java/sql/PreparedStatement.html) (aka parameterized queries) if the SQL query is constructed by concatenating string literals with user defined expressions (e.g. variables, method invocations, user input, etc). 
Parameterized queries enforce a distinction between the SQL code and the data passed through parameters.

## Benefits

Prevents SQL injections.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes


### Using Statement execute

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
String query = "SELECT first_name FROM employee WHERE department_id = ?" + " ORDER BY last_name";
PreparedStatement statement = connection.prepareStatement(query);
statement.setString(1, departmentId);
ResultSet resultSet = statement.executeQuery();
```

### Using Statement executeQuery

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
String query = "SELECT first_name FROM employee WHERE department_id = ?" + " ORDER BY last_name";
PreparedStatement statement = connection.prepareStatement(query);
statement.setString(1, departmentId);
ResultSet resultSet = statement.executeQuery();
```

### Multiple Concatenation Lines

__Pre__
```java
String departmentId = "40 OR '1'='1";
int id = 10;
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
int id = 10;
String query = "SELECT first_name FROM employee WHERE";
query += " id >  ?" + "";
query += " AND department_id = ?" + "";
query += " ORDER BY last_name";
PreparedStatement statement = connection.prepareStatement(query);
statement.setInt(1, id);
statement.setString(2, departmentId);
ResultSet resultSet = statement.executeQuery();
```

<VersionNotice />
## Properties

<RuleProperties />

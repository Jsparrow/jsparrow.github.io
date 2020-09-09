---
title: Use Predefined Standard Charset
ruleId: UsePredefinedStandardCharset
since: 3.21.0
minJavaVersion: 1.7
remediationCost: 5
links:
    - displayName: "Use Predefined Standard Charset"


description:
    This rule replaces invocations of 'java.nio.charset.Charset.forName(String)' by a reference to the respective constant in 'java.nio.charset.StandardCharsets'.
tags: ["Java 1.7", "Performance"]
---

# Use Parameterized Query

[[toc]]

## Properties

<RuleProperties />

## Description

This rule replaces invocations of[`java.nio.charset.Charset.forName(stringLiteral)`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html#forName(java.lang.String)) which accept a String literal specifying one of the contants in[`java.nio.charset.StandardCharsets`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/StandardCharsets.html) by the respective Charset constant references.

## Benefits

Improvement of performance by referencing a constant instead of calling a method.


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
## Tags

::: tip Tags
<TagLinks />
:::
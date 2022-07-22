---
title: Replace Wrong Class for Logger
ruleId: ReplaceWrongClassForLogger
since: 4.13.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S3416"
      url: "https://sonarcloud.io/organizations/default/rules?q=+logger&open=java%3AS3416"
    
description:
    If a given logger is initialized with a class which is different from the class where it is declared, then this rule will replace the wrong initialization argument by the correct one. For example, if a logger for the class 'Employee' is initialized with 'User.class', then the argument of the initialization will be replaced by 'Employee.class'.

tags: ["Java 1.1", "Readability", "Logging"]
defaultConfiguration: true
---

# Replace Wrong Class for Logger

## Description

A conventional way of initializing a logger for a certain class is the use of a factory method. Examples for common factory methods are:

* [`org.slf4j.LoggerFactory.getLogger(Class<?>)`](https://www.slf4j.org/api/org/slf4j/LoggerFactory.html#getLogger-java.lang.Class-)
 to create a [`org.slf4j.Logger`](https://www.slf4j.org/api/org/slf4j/Logger.html).
* [`org.apache.logging.log4j.LogManager.getLogger(Class<?>)`](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/LogManager.html#getLogger-java.lang.Class-) to initialize a [`org.apache.logging.log4j.Logger`](https://logging.apache.org/log4j/2.x/log4j-api/apidocs/org/apache/logging/log4j/Logger.html)
*  [`java.util.logging.Logger.getLogger(String)`](https://docs.oracle.com/en/java/javase/17/docs/api/java.logging/java/util/logging/Logger.html#getLogger(java.lang.String))
 returning a [`java.util.logging.Logger`](https://docs.oracle.com/en/java/javase/17/docs/api/java.logging/java/util/logging/Logger.html).

If a given logger is initialized with a class which is different from the class where it is declared, then this rule will replace the wrong initialization argument by the correct one. For example, if a logger for the class `Employee` is initialized with `User.class`, then the argument of the initialization will be replaced by `Employee.class`.

## Benefits

This rule removes misleading logging messages.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Using org.slf4j.Logger

__Pre__
```java
//...
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//...
public class Employee extends User {
	static final Logger LOGGER = LoggerFactory.getLogger(User.class);
	// ...
}
```

__Post__
```java
//...
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

//...
public class Employee extends User {
	static final Logger LOGGER = LoggerFactory.getLogger(Employee.class);
	// ...
}
```

### Using org.apache.logging.log4j.Logger

__Pre__
```java
//...
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

//...
public class Employee extends User {
	static final Logger LOGGER = LogManager.getLogger(User.class);
	// ...
}
```

__Post__
```java
//...
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

//...
public class Employee extends User {
	static final Logger LOGGER = LogManager.getLogger(Employee.class);
	// ...
}
```

### Calling Logging Method on java.util.logging.Logger.getLogger

__Pre__
```java
//...
import java.util.logging.Logger;
import java.util.logging.Level;

//...
public class Employee extends User {
	// ...
	void logInfo(String message) {
		Logger.getLogger(User.class.getName()).log(Level.INFO, message);
	}
	// ...
}
```

__Post__
```java
//...
import java.util.logging.Logger;
import java.util.logging.Level;

//...
public class Employee extends User {
	// ...
	void logInfo(String message) {
		Logger.getLogger(Employee.class.getName()).log(Level.INFO, message);
	}
	// ...
}
```

<VersionNotice />


## Properties

<RuleProperties />

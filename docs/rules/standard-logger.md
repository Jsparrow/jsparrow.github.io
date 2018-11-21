---
title: System Out To Logging
description:
    Replaces the standard output statements with logger statements when possible.
---

# System Out To Logging

[[toc]]

## Properties

| Property                        | Value |
|:------------------------------- |:----- |
| First seen in jSparrow version  | 1.2   |
| Minimum Java version            | 1.1   |
| Remediation cost                | 10 min |
| Links                           | [S106](https://sonarcloud.io/organizations/default/rules?rule_key=squid%3AS106) |

## Description

This rule replaces the standard output statements with logger statements when possible. As a precondition, either SLF4J or LOG4J should be present on the classpath of the project. Then, the user is asked to choose the replacing options for the standard output statements.     
  
The following standard output methods are supported for replacing:  
System.out.print(String)  
System.out.println(String)  
System.err.print(String)  
System.err.println(String)  
Throwable.printStackTrace()  
  
If the preconditions of the rule is met, and a standard output method which can be replaced is found in the project, then a new logger object is introduced as the first statement of the type declaration together with the necessary import statements. In particular, if SLF4J is found in the classpath of the project, then the logger object is created as follows:
``` java
....
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
...
 
class TopLevelClass {
 
    private static final Logger logger = LoggerFactory.getLogger(TopLevelClass.class);
....
 
}
```

## Benefits

When logging a message there are several important requirements which must be fulfilled:   
* The user must be able to easily retrieve the logs  
* The format of all logged message must be uniform to allow the user to easily read the log  
* Logged data must actually be recorded  
* Sensitive data must only be logged securely  
If a program directly writes to the standard outputs, there is absolutely no way to comply with those requirements. Using this rule satisfies the requirements.  
  
## Requirement & Tags

::: warning Requirements
Java 1.1  
Libraries (one of the following): org.slf4j | ch.qos.logback | org.apache.log4j
:::

::: tip Tags
Java 1.1, String Manipulation
:::

## Configuration

Configuration wizard contains three parts. Every part is named after the method which is going to be replaced in the existing code. Drop-downs contain possible choices for severity level which would replace mentioned method calls.  

As a replacement option, the user can chose either of the logger methods provided by api-s of both of the supported loggers. In particular:  
Logger.trace(String)  
Logger.debug(String)  
Logger.info(String)  
Logger.warn(String)  
Logger.error(String)  

There is also an option in each of the drop-downs to "Leave as is", which skips making changes for the selected method.  
  
![[Configuration](/rules/images/logger_configuration.png)](/img/rules_config/logger_configuration.png)

The bottom of the wizard contains additional configuration. It allows you to choose if you want to add logger statements where they are missing, like empty catch blocks. Also, there you can choose whether you want to always add the exception as a parameter in the logger statements and always use the selected severity level for logging exceptions.  

## Code Changes

__Pre__

```java
public void replaceSystemOutPrint(String input) {
    System.out.print(input);
}
 
public void replaceSystemErrPrintln(String input) {
    System.err.println(input);
}
 
public void replacePrintStackTrace(String input) {
    try {
        input.substring(5);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

__Post__

```java
public void replaceSystemOutPrint(String input) {
    logger.info(input);
}
 
public void replaceSystemErrPrintln(String input) {
    logger.info(input);
}
 
public void replacePrintStackTrace(String input) {
    try {
        StringUtils.substring(input, 5);
    } catch (Exception e) {
        logger.error(e.getMessage(), e);
    }
}
```


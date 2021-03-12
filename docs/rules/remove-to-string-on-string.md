---
title: Remove toString() on String
ruleId: RemoveToStringOnString
since: 1.0.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S1858"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1858&q=S1858"
    
description:
    Removes all invocations of 'toString()' method used on a 'String' element.
tags: ["Free", "Java 1.1", "String Manipulation", "Performance"]
---

# Remove toString() on String

## Description

All method invocations of `toString()` are tested as to whether they are used on a String element. If this is the case, the method call is removed, because it is not necessary.  
For example, `"string".toString()` becomes `"string"`.    

## Benefits

As the Java compiler will get rid of the redundant method call, there are no performance benefits.  However, removing the call improves readability of the code.  


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

``` java
public String testToStringOnStringLiteral() {
    return "anStringLiteral".toString();
}
public String testToStringOnStringVariable() {
    String s = "theStringS";
    return s.toString();
}
public String testToStringOnStringFunctionThatReturnsString() {
    return StringUtils.abbreviate("makeMeShorter", 4).toString();
    }
public String testToStringOnParenthesizeString(String s) {
    return (s).toString();
}
public String testToStringOnParenthesizePlusString(String s) {
    return (s + "abc").toString();
}
```

__Post__

``` java

public String testToStringOnStringLiteral() {
    return "anStringLiteral";
}
public String testToStringOnStringVariable() {
    String s = "theStringS";
    return s;
}
public String testToStringOnStringFunctionThatReturnsString() {
    return StringUtils.abbreviate("makeMeShorter", 4);
}
public String testToStringOnParenthesizeString(String s) {
    return s;
}
public String testToStringOnParenthesizePlusString(String s) {
    return s + "abc";
}
```

### Bytecode JDK 1.8 

__Pre__
```java
public void original(String value) {
    String newValue = value.toString();
}
```

```
0 aload_1
1 invokevirtual #2 <java/lang/String.toString>
4 astore_2
5 return
```

__Post__
```java
public void transformed(String value) {
    String newValue = value;
}
```

```
0 aload_1
1 astore_2
2 return
```

<VersionNotice />


## Properties

<RuleProperties />

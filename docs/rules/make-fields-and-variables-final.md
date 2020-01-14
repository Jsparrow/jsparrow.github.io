---
title: Make Fields And Variables Final
ruleId: MakeFieldsAndVariablesFinal
since: 3.12.0
minJavaVersion: 1.1
remediationCost: 5
links:
description:
    This rule declares private fields and local variables final, if they are effectively final

tags: ["Java 1.1", "Readability"]
---

# Make Fields And Variables Final

[[toc]]

## Properties

<RuleProperties />


## Description

This rule declares `private` fields and local variables `final`, if they are effectively `final`.  

The criteria for being effectively `final` are as follows:
- The variable or field is not assigned after its initialisation
- Initialisation of non-`static` fields:
  - At the declaration OR
  - In a non-`static` class initialiser OR
  - In ALL constructors of the class
- Initialisation of `static` fields:
  - At the declaration OR
  - In a `static` initialiser


## Benefits

Readability and maintainability of code is improved and accidental reassignments are prevented for affected fields and variables.

## Requirement & Tags

::: warning Requirements
Java 1.1
:::

::: tip Tags
<TagLinks />
:::

## Code Changes

### Assignments

__Pre__

```java
public class MakeFinal {
    private String nonStaticField = "nonStaticField";
    private String nonStaticFieldEffectivelyFinal ="nonStaticFieldEffectivelyFinal";
    private static String staticField = "staticField";
    private static String staticFieldEffectivelyFinal = "staticFieldEffectivelyFinal";

    public void localVariables() {
        int i = 0;
        int j = 0;
        System.out.println(i);
        System.out.println(j++);
    }

    public void nonStaticFields() {
        nonStaticField += "Altered";
        System.out.println(nonStaticField);
        System.out.println(nonStaticFieldEffectivelyFinal);
    }

    public static void staticFields() {
        staticField = staticField + "Altered";
        System.out.println(staticField);
        System.out.println(staticFieldEffectivelyFinal);
    }
}
```

__Post__

```java
public class MakeFinal {
    private String nonStaticField ="nonStaticField";
    private final String nonStaticFieldEffectivelyFinal ="nonStaticFieldEffectivelyFinal";
    private static String staticField = "staticField";
    private static final String staticFieldEffectivelyFinal = "staticFieldEffectivelyFinal";

    public void localVariables() {
        final int i = 0;
        int j = 0;
        System.out.println(i);
        System.out.println(j++);
    }

    public void nonStaticFields() {
        nonStaticField += "Altered";
        System.out.println(nonStaticField);
        System.out.println(nonStaticFieldEffectivelyFinal);
    }

    public static void staticFields() {
        staticField = staticField + "Altered";
        System.out.println(staticField);
        System.out.println(staticFieldEffectivelyFinal);
    }
}
```

### `static` Field Initialisation

__Pre__

```java
public class MakeFinal {
    private static String initInDeclaration = "initInDeclaration";
    private static String initInStaticInitialiser;
    private static String initInDeclarationAndStaticInitialiser = "initInDeclarationAndStaticInitialiser";
    private static String noInit;

    static {
        initInStaticInitialiser = "initInStaticInitialiser";
        initInDeclarationAndStaticInitialiser = "initInDeclarationAndStaticInitialiser";
    }

    ...
}
```

__Post__

```java
public class MakeFinal {
    private static final String initInDeclaration = "initInDeclaration";
    private static final String initInStaticInitialiser;
    private static String initInDeclarationAndStaticInitialiser = "initInDeclarationAndStaticInitialiser";
    private static String noInit;

    static {
        initInStaticInitialiser = "initInStaticInitialiser";
        initInDeclarationAndStaticInitialiser = "initInDeclarationAndStaticInitialiser";
    }

    ...
}
```

### Non-`static` Field Initialisation

__Pre__

```java
public class MakeFinal {
    private String initInDeclaration = "initInDeclaration";
    private String initInClassInitialiser;
    private String initInAllConstructors;
    private String initInOneConstructorOnly;
    private String initInDeclarationAndClassInitialiser = "initInDeclarationAndClassInitialiser";
    private String noInit;

    {
        initInClassInitialiser = "initInClassInitialiser";
        initInDeclarationAndClassInitialiser = "initInDeclarationAndClassInitialiser";
    }

    public MakeFinal()  {
        initInAllConstructors = "initInAllConstructors";
        initInOneConstructorOnly = "initInOneConstructorOnly";
    }

    public MakeFinal(String arg1) {
        initInAllConstructors = "initInAllConstructors";
    }

    ...
}
```

__Post__

```java
public class MakeFinal {
    private final String initInDeclaration = "initInDeclaration";
    private final String initInClassInitialiser;
    private final String initInAllConstructors;
    private String initInOneConstructorOnly;
    private String initInDeclarationAndClassInitialiser = "initInDeclarationAndClassInitialiser";
    private String noInit;

    {
        initInClassInitialiser = "initInClassInitialiser";
        initInDeclarationAndClassInitialiser = "initInDeclarationAndClassInitialiser";
    }

    public MakeFinal()  {
        initInAllConstructors = "initInAllConstructors";
        initInOneConstructorOnly = "initInOneConstructorOnly";
    }

    public MakeFinal(String arg1) {
        initInAllConstructors = "initInAllConstructors";
    }

    ...
}
```

## Limitations

This rule only affects `private` fields and local variables at the moment. `public`, `protected` or package-private fields as well as method parameters are not considered yet.

---
title: Hide Default Constructor In Utility Classes
ruleId: HideDefaultConstructorInUtilityClasses
since: 3.11.0
minJavaVersion: 1.1
remediationCost: 5
links:
    - displayName: "S1118"
      url: "https://sonarcloud.io/organizations/default/rules?languages=java&open=java%3AS1118&q=S1118"
    
description:
    Hides the default constructor of utility classes by adding a private constructor.

tags: ["Java 1.1", "Coding Conventions"]
---

# Hide Default Constructor In Utility Classes

## Description

Utility classes are classes containing `static` properties only. Those classes should not be instantiated. A private constructor, which throws an `IllegalStateException`, is introduced to utility classes by this rule, if the following criteria are met:
- Only `static` methods and fields are present
- No constructor is declared
- No main method is defined
- The default constructor isn't invoked anywhere in the current workspace

This hides the default public constructor and thus prevents the instantiation of such a class.

## Benefits

Prevents the bad practice of unnecessary instatiation of utility classes.


## Code Changes

__Pre__

```java
    public class UtilityClass {
        public static void doSomething() {
            //...
            System.out.println("did something");
        }

        public static void doSomethingElse() {
            //...
            System.out.println("did something else");
        }
    }
```

__Post__

```java
    public class UtilityClass {
        private UtilityClass() {
            throw new IllegalStateException("Utility class");
        }

        public static void doSomething() {
            //...
            System.out.println("did something");
        }

        public static void doSomethingElse() {
            //...
            System.out.println("did something else");
        }
    }
```

<VersionNotice />
## Properties

<RuleProperties />

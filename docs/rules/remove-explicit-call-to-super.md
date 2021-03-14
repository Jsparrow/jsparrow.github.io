---
title: Remove Explicit Call To super()
ruleId: RemoveExplicitCallToSuper
since: 2.7.0
minJavaVersion: 1.1
remediationCost: 1
links:
description:
    Removes unnecessary explicit call to the default constructor of the super class.
tags: ["Java 1.1", "Readability"]
---

# Remove Explicit Call To super()

## Description

If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. Hence, there is no need to explicitly call the default constructor of the super class.  

## Benefits

Improves the readability by removing unnecessary lines of code.


## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

__Pre__

```java
class Parent {
     public Parent() {
         initParent();
     }
}

class Child extends Parent {
     public Child() {
           super();
           initChild();
     }
}
```

__Post__

```java
class Parent {
     public Parent() {
         initParent();
     }
}

class Child extends Parent {
     public Child() {
           initChild();
     }
}
```

<VersionNotice />


## Properties

<RuleProperties />

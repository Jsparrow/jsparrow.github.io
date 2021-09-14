---
title: Use Switch Expression
ruleId: UseSwitchExpression
since: 4.3.0
minJavaVersion: 14
remediationCost: 5
    
description:
    In Java 14, the switch expressions turned into a standard feature. 
    This rule replaces the traditional switch-case statements with switch-case expressions. 
    Thus, avoiding the fall-through semantics of control flow and at the same time, removing some boilerplate code.

tags: ["Java 14", "Old Language Constructs", "Readability"]
---

# Use Switch Expression

## Description

In Java 14, the switch expressions turned into a standard feature. 
This rule replaces the traditional switch-case statements with switch-case expressions. 
Thus, avoiding the fall-through semantics of control flow and at the same time, removing some boilerplate code.



::: warning Requirements
* Java 16
:::

## Benefits

Removes code clutter. Improves readability.

## Tags

::: tip Tags
<TagLinks />
:::

## Code Changes

### Initializing Variable

__Pre__
```java
String medal;
switch(finished) {
case 1 : 
    medal = "Gold";
    break;
case 2: 
    medal = "Silver";
    break;
case 3: 
    medal = "Bronze";
    break;
default:
    medal = "None";
}
```

__Post__
```java
String medal = switch (finished) {
    case 1 -> "Gold";
    case 2 -> "Silver";
    case 3 -> "Bronze";
    default -> "None";
};
```

### Computing the Returned Value

__Pre__
```java
String findMedal(int finished) {
    switch(finished) {
    case 1 : 
        return "Gold";
    case 2: 
        return "Silver";
    case 3: 
        return "Bronze";
    default:
        return "None";
    }
}
```

__Post__
```java
String findMedal(int finished) {
    return switch (finished) {
        case 1 -> "Gold";
        case 2 -> "Silver";
        case 3 -> "Bronze";
        default -> "None";
    };
}
```

### Labeled Cases Switch Statement

__Pre__
```java
switch(finished) {
case 1 : 
    sendMedal("Gold", athlete);
    break;
case 2: 
    sendMedal("Silver", athlete);
    break;
case 3: 
    sendMedal("Bronze", athlete);
    break;
default:
    sendGratitude(athlete);
}
```

__Post__
```java
switch (finished) {
    case 1 -> sendMedal("Gold", athlete);
    case 2 -> sendMedal("Silver", athlete);
    case 3 -> sendMedal("Bronze", athlete);
    default -> sendGratitude(athlete);
}
```

### Combine Switch Cases

__Pre__
```java
switch(sport) {
case "diving":
case "swimming":
case "water polo": 
    cleanUpPool(now());
    break;
case "weightlifting":
case "gymnastic":
    cleanUpGym(now());
    break;
default: 
    cleanUpStadium(now());
}
```

__Post__
```java
switch (sport) {
case "diving", "swimming", "water polo" -> cleanUpPool(now());
case "weightlifting", "gymnastic" -> cleanUpGym(now());
default -> cleanUpStadium(now());
}
```

<VersionNotice />

## Properties

<RuleProperties />

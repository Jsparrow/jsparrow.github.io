---
title: Replace Multi Branch If By Switch
ruleId: ReplaceMultiBranchIfBySwitch
since: 4.13.0
minJavaVersion: 14
remediationCost: 15
    
description:
    In Java 14, the switch expressions turned into a standard feature. 
    This rule replaces multi-branch if statements by corresponding switch expressions or switch statements with a switch labeled rules. 
    Because this rule removes a lot of redundant parts of code, readability is improved.

tags: ["Java 14", "Old Language Constructs", "Readability"]
---

# Replace Multi Branch If By Switch

## Description

In Java 14, the [switch expressions](https://openjdk.java.net/jeps/361) turned into a standard feature. 
This rule replaces multi-branch if statements by corresponding switch expressions or switch statements with a switch labeled rules. 
Because this rule removes a lot of redundant parts of code, readability is improved.


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

### Initializing a Variable

__Pre__
```java
		String weekDayName;
		if (weekDay == 1) {
			weekDayName = "Monday";
		} else if (weekDay == 2) {
			weekDayName = "Tuesday";
		} else if (weekDay == 3) {
			weekDayName = "Wednesday";
		} else if (weekDay == 4) {
			weekDayName = "Thursday";
		} else if (weekDay == 5) {
			weekDayName = "Friday";
		} else if (weekDay == 6) {
			weekDayName = "Saturday";
		} else if (weekDay == 7) {
    		weekDayName = "Sunday";
		} else {
			weekDayName = "";
		}
```

__Post__
```java
		String weekDayName = switch (weekDay) {
		case 1 -> "Monday";
		case 2 -> "Tuesday";
		case 3 -> "Wednesday";
		case 4 -> "Thursday";
		case 5 -> "Friday";
		case 6 -> "Saturday";
		case 7 -> "Sunday";
		default -> "";
		};
```

### Computing a Returned Value

__Pre__
```java
	String getWeekDayName(int weekDay) {
		if (weekDay == 1) {
			return "Monday";
		} else if (weekDay == 2) {
			return "Tuesday";
		} else if (weekDay == 3) {
			return "Wednesday";
		} else if (weekDay == 4) {
			return "Thursday";
		} else if (weekDay == 5) {
			return "Friday";
		} else if (weekDay == 6) {
			return "Saturday";
		} else if (weekDay == 7) {
			return "Sunday";
		} else {
			return "";
		}			
	}
```

__Post__
```java
	String getWeekDayName(int weekDay) {
		return switch (weekDay) {
		case 1 -> "Monday";
		case 2 -> "Tuesday";
		case 3 -> "Wednesday";
		case 4 -> "Thursday";
		case 5 -> "Friday";
		case 6 -> "Saturday";
		case 7 -> "Sunday";
		default -> "";
		};			
	}
```

### Switch Expression with Throw Statement


__Pre__
```java
	String getWeekDayName(int weekDay) {
		if (weekDay == 1) {
			return "Monday";
		} else if (weekDay == 2) {
			return "Tuesday";
		} else if (weekDay == 3) {
			return "Wednesday";
		} else if (weekDay == 4) {
			return "Thursday";
		} else if (weekDay == 5) {
			return "Friday";
		} else if (weekDay == 6) {
			return "Saturday";
		} else if (weekDay == 7) {
			return "Sunday";
		} else {
			throw new IllegalArgumentException("Invalid number for weekday");
		}			
	}
```

__Post__
```java
	String getWeekDayName(int weekDay) {
		return switch (weekDay) {
		case 1 -> "Monday";
		case 2 -> "Tuesday";
		case 3 -> "Wednesday";
		case 4 -> "Thursday";
		case 5 -> "Friday";
		case 6 -> "Saturday";
		case 7 -> "Sunday";
		default -> throw new IllegalArgumentException("Invalid number for weekday");
		};			
	}
```

### Combining Cases

__Pre__
```java
	String getTitle(int weekDay) {
		if (weekDay == 1 || weekDay == 3 || weekDay == 5) {
			return "Timetable For Monday, Wednesday, Friday";
		} else if (weekDay == 2 || weekDay == 4 || weekDay == 6) {
			return "Timetable For Tuesday, Thursday, Saturday";
		} else {
			return "Timetable For Sunday Or Holiday";
		}
	}
```

__Post__
```java
	String getTitle(int weekDay) {
		return switch (weekDay) {
		case 1, 3, 5 -> "Timetable For Monday, Wednesday, Friday";
		case 2, 4, 6 -> "Timetable For Tuesday, Thursday, Saturday";
		default -> "Timetable For Sunday Or Holiday";
		};
	}
```


### Switch Statement with Switch Labeled Rules

__Pre__
```java
		if (weekDay == 1 || weekDay == 3 || weekDay == 5) {
			setTitle("Timetable For Monday, Wednesday, Friday");
		} else if (weekDay == 2 || weekDay == 4 || weekDay == 6) {
			setTitle("Timetable For Tuesday, Thursday, Saturday");
		} else {
			setTitle("Timetable For Sunday Or Holiday");
		}
```

__Post__
```java
		switch (weekDay) {
		case 1, 3, 5 -> setTitle("Timetable For Monday, Wednesday, Friday");
		case 2, 4, 6 -> setTitle("Timetable For Tuesday, Thursday, Saturday");
		default -> setTitle("Timetable For Sunday Or Holiday");
		}
```

<VersionNotice />

## Properties

<RuleProperties />

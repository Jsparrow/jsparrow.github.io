---
title: Release Notes
---
# Release Notes

Here you will find the latest information about releases of the jSparrow Eclipse Plugin.

## 2.7.0

_21. 11. 2018_

This release brings 6 new rules and a news dashboard.

### News dashboard

A news dashboard has been added to jSparrow.
Make sure to visit the dashboard regularly to get news on upcoming updates!

[ ![Open the dashboard](/img/eclipse/release_notes/2_7_0_open_dashboard.gif) ](/img/eclipse/release_notes/2_7_0_open_dashboard.gif)

### New rules

#### Remove unnecessary thrown exceptions on method signatures

The following exceptions on method signatures are removed:

* Exceptions that are subtypes of already thrown exceptions
* Exceptions that are thrown more than once
* Exceptions that are inheriting from RuntimeException

See official documentation for more information: [Remove Unnecessary Thrown Exceptions on Method Signatures](rules/remove-unnecessary-thrown-exceptions-on-method-signatures.html)

#### Remove double negations

Removes pairs of negations from boolean expressions until only zero or one negation is left.

See official documentation for more information: [Remove Double Negations](rules/remove-double-negation.html)

#### Remove explicit call to super()

If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. Hence, there is no need to explicitly call the default constructor of the super class.

See official documentation for more information: [Remove Explicit Call To super()](rules/remove-explicit-call-to-super.html)

#### Remove unnecessary semicolons

Finds and removes the unnecessary semicolons from the code blocks.

See official documentation for more information: [Remove Unnecessary Semicolons](rules/remove-unnecessary-semicolons.html)

#### Use StringBuilder::append

Replaces the infix operator _+_ over _String_ concatenations with at least three operands by _StringBuilder::append_. When possible, unwraps the parenthesized expressions.

See official documentation for more information: [Use StringBuilder::append](rules/use-stringbuilder-append.html)

#### Use guard condition

Replaces, when possible, the last if-statement of a method body with a guard-if and unwraps its body.

See official documentation for more information: [Use Guard Condition](rules/guard-condition.html)

## 2.6.0

## 2.5.3

## 2.5.2

## 2.5.0

## 2.4.5

## 2.4.4

## 2.4.3

## 2.4.2

## 2.4.1

## 2.4.0

## 2.3.1

## 2.3.0

## 2.2.1

## 2.2.0

## 2.1.0

## 2.0.2

## 2.0.0

## 1.1.0

## 1.0.0

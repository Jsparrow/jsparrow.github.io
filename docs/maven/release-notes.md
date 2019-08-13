---
title: Release Notes
---
# Release Notes

Here you will find the latest information about releases of the jSparrow Maven plugin.

## 2.5.0 <Badge vertical="middle" text="14.08.2019"/>

Release 2.5.0 of the jSparrow Maven Plugin contains two new rules:

* [Use Collections Singleton List](/rules/use-collections-singleton-list.html)
* [Remove Null-Checks Before Instanceof](/rules/remove-null-check-before-instanceof.html)

## 2.4.0 <Badge vertical="middle" text="18.07.2019"/>

The jSparrow Maven Plugin 2.4.0 introduces two new rules for Java 9 and above: 
* [Replace For-Loop with Stream::takeWhile](/rules/enhanced-for-loop-to-stream-take-while-rule.html).
* [Use Factory Methods for Collections](/rules/collections-factory-methods.html).

## 2.3.0 <Badge vertical="middle" text="19.06.2019"/>

The jSparrow Maven Plugin 2.3.0 introduces two new rules: 
* [Reorder Modifiers](/rules/reorder-modifiers.html).
* [Use List Sort](/rules/use-list-sort.html).

## 2.2.0 <Badge vertical="middle" text="16.05.2019"/>

This release provides a new rule:

* [Replace Map::get by Map::getOrDefault](/rules/map-get-or-default.html)

## 2.1.0 <Badge vertical="middle" text="18.04.2019"/>

The jSparrow Maven Plugin release 2.1.0 includes:

* A new rule for [Removing Unused Parameters in Private Methods](/rules/remove-unused-parameter.html)
* Stability improvements for [StringBuilder() to StringBuffer()](/rules/string-buffer-to-builder.html) rule. 

## 2.0.1 <Badge vertical="middle" text="03.04.2019"/>

This version adds proxy support for the jSparrow Maven plugin. See [Setup Proxy](/maven/additional-configuration.html#setup-proxy) for more information. 

## 2.0.0 <Badge vertical="middle" text="28.03.2019"/>

Version 2.0.0 brings a lot of new rules, better performance and a lot of general improvements.

### New Ruleset

This release contains [55 automatic refactoring rules](/rules/):

* All rules of the jSparrow Eclipse plugin 3.3.0 are included in this release, except for the [Organize Imports](/rules/organize-imports.html) rule.
* The previously excluded rules [System Out To Logging](/rules/standard-logger.html) and [Rename Fields](/rules/field-renaming.html) have now been added!

### Performance Improvements

* By using an improved dependency mechanism the start time of the jSparrow Maven plugin has been improved significantly.

### Java 11 Support

* The jSparrow Maven plugin can now be executed with a Maven version using Java 11.

### Usability and General Improvements

* A [help mojo](/maven/getting-started.html#help) has been added.
* The YAML parsing has been improved in regards to functionality and user feedback (e.g., warnings for non-existing packages or classes).
* Error messages have been improved.

### Source and Module Discovery

The Maven module handling has been improved.

* Maven modules defined in profiles can now be located.
* Non-default source folders can now be used (e.g., folders not following the `src/main/java` schema).
* Supported packaging types are now `jar` and `war`.

### Installation

Have a look at the [installation instructions](/maven/getting-started.html#installation) for more information!

## 1.0.0 <Badge vertical="middle" text="25.06.2018"/>

This version contains all the features and all the rules of the [jSparrow Eclipse plugin 2.5.0](/eclipse/release-notes.html#_2-5-0) except [Organize Imports](/rules/organize-imports.html), [System Out To Logging](/rules/standard-logger.html), and [Rename Fields](/rules/field-renaming.html).

The download can be found at [jSparrow Maven plugin](https://download.jsparrow.eu/)

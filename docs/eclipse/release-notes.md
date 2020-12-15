---
title: Release Notes
---
# Release Notes

Here you will find the latest information about releases of the jSparrow Eclipse plugin.

## 3.24.0 <Badge vertical="middle" text="17.12.2020"/>

The midwinter jSparrow 3.24.0 release extends the rule set with three new refactoring rules. 

### New Rules 

#### [**Replace JUnit ExpectedException with assertThrows**](/rules/replace-j-unit-expected-exception.html)

The [`ExpectedException.none()`](https://junit.org/junit4/javadoc/latest/org/junit/rules/ExpectedException.html#none()) rule is deprecated since JUnit 4.13. 
The recommended alternative is to use [`assertThrows()`](https://junit.org/junit4/javadoc/latest/org/junit/Assert.html#assertThrows(java.lang.Class,%20org.junit.function.ThrowingRunnable)). 
This makes JUnit tests easier to understand and prevents scenarios where some parts of the test code are unreachable. 

The goal of this rule is to make a transition from `ExpectedException` to testing exceptions with `assertThrows`. 

#### [**Replace JUnit Expected Annotation Property with assertThrows**](/rules/replace-j-unit-expected-annotation-property.html)

Using the [`expected`](https://junit.org/junit4/javadoc/latest/org/junit/Test.html#expected()) annotation property for testing the thrown exceptions is rather misleading. 
Often it becomes unclear which part of the test code is responsible for throwing the exception. 
This rule aims to overcome this problem by replacing the `expected` annotation property with [`assertThrows`](https://junit.org/junit4/javadoc/latest/org/junit/Assert.html#assertThrows(java.lang.Class,%20org.junit.function.ThrowingRunnable)) introduced in JUnit 4.13.

#### [**Use Files.writeString**](/rules/use-files-write-string.html)

Java 11 introduced [`Files.writeString(Path, CharSequence, Charset, OpenOption...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#writeString(java.nio.file.Path,java.lang.CharSequence,java.nio.charset.Charset,java.nio.file.OpenOption...)) and [`Files.writeString(Path, CharSequence, OpenOption...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#writeString(java.nio.file.Path,java.lang.CharSequence,java.nio.file.OpenOption...)) for writing text into a file by one single invocation and in an efficient non-blocking manner. 

This rule replaces `BufferedWriter`s that are used to write a single value into a file, with `Files.write(...)`.
Thus, achieving better performance when writing small files and improving the readability by removing code clutter. 

### Fixed Bugs 

#### Support for macOS 11 
* Fixes a bug that prevents the jSparrow License Check in [macOS 11 Big Sur](https://www.apple.com/macos/big-sur/). 

## 3.23.0 <Badge vertical="middle" text="19.11.2020"/>

The [87<sup>th</sup> refactoring rule](/rules/) is shipped with jSparrow 3.23.0. The new rule simplifies `Comparator` usages by making use of convenience methods added to the API in Java 8.

### New Rule

#### [**Use Comparator Methods**](/rules/use-comparator-methods.html)

Java 8 introduced new factory methods in the [`Comparator`](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) interface for simplifying the creation of `Comparator` instances. 
This rule replaces lambda expressions representing comparators with simple invocations of `Comparator` factory methods, hence removing some code clutter and improving readability.   

### Fixed Bugs

#### New Imports Name Conflicts
* Prevents some conflicts that may arise when the name of a newly imported type coincides with the name of a local variable.

## 3.22.0 <Badge vertical="middle" text="15.10.2020"/>

The [86<sup>th</sup> refactoring rule](/rules/) is shipped with jSparrow 3.22.0. It makes use of the [`Files.newBufferedWriter`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#newBufferedWriter(java.nio.file.Path,%20java.nio.charset.Charset,%20java.nio.file.OpenOption...)) method for initializing BufferedWriter objects for writing to text to files.

### New Rule

#### [**Use Files.newBufferedWriter**](/rules/use-files-buffered-writer.html)

Java 7 introduced the [`Files`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html) class that contains convenience methods for operating on files. 
This rule makes use of the [`Files.newBufferedWriter`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#newBufferedWriter(java.nio.file.Path,%20java.nio.charset.Charset,%20java.nio.file.OpenOption...)) method for initializing [`BufferedWriter`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedWriter.html) objects to write text files in an efficient non-blocking manner.

### Fixed Bugs

#### [**Remove Unused Parameters in Private Methods**](/rules/remove-unused-parameter.html)
* Keeps the unused parameters that are annotated for DI or other purposes.
* Keeps the unused parameters if the method is pointed by a method reference. 

#### [**Use StringUtils Methods**](/rules/string-utils.html)
* Fixes a bug related to identifying the version of the [`apache.commons.lang`](https://commons.apache.org/proper/commons-lang/) library that is available in the project's classpath. 

#### **Finding the Supported JLS Level**
* Fixes a bug related to finding the latest JLS level supported by the Eclipse instance where jSparrow is running in.  

## 3.21.0 <Badge vertical="middle" text="17.09.2020"/>

The autumn release of jSparrow 3.21.0 introduces [4 refactoring rules](/rules/). This extends the total number of jSparrow rules to 85. Some improvements and bugfixes are also included.

### New Rules 

#### [**Create Temp Files Using Java NIO**](/rules/create-temp-files-using-java-nio.html)

A suitable alternative for creating temporary files in security-sensitive applications is to use [`java.nio.file.Files.createTempFile(String, String, FileAttribute<?>...)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/Files.html#createTempFile(java.lang.String,java.lang.String,java.nio.file.attribute.FileAttribute...)) instead of [`java.io.File.createTempFile(String, String)`](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/File.html#createTempFile(java.lang.String,java.lang.String)). The reason behind it is that files created by the former have more restrictive access permissions. This rule replaces the temporary file creation using `java.io.File` by the alternative methods defined in `java.nio.file.Files`.

#### [**Use Files.newBufferedReader**](/rules/use-files-buffered-reader.html)
Java 7 introduced the Files class that contains convenience methods for operating on files. This rule makes use of the [`Files.newBufferedReader`](https://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#newBufferedReader(java.nio.file.Path,%20java.nio.charset.Charset)) method for initializing BufferedReader objects to read text files in an efficient non-blocking manner.

#### [**Use Offset Based String Methods**](/rules/use-offset-based-string-methods.html)
This rule avoids creating intermediate String instances by making use of the overloaded offset based methods in the String API.

#### [**Use Predefined Standard Charset**](/rules/use-predefined-standard-charset.html)
In order to avoid creating new objects, this rule replaces invocations of [`Charset.forName(String)`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html#forName(java.lang.String)) by constants defined in [`StandardCharsets`](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/StandardCharsets.html).

### Fixed Bugs

#### [**Escape User Input in SQL Queries**](/rules/escape-user-inputs-in-sql-queries.html)
* Extends the scope of the rule by analyzing the variable holding the SQL query.

#### Clean Up Third Party Dependencies 
* Using some third party dependencies directly in the OSGi bundle classpath.

## 3.20.0 <Badge vertical="middle" text="20.08.2020"/>

The [80<sup>th</sup> and 81<sup>st</sup> refactoring rules](/rules/) are shipped with jSparrow 3.20.0. The goal of the new rules is to improve the unpredictability of random number generators. Some bugfixes and UI changes are also included. 

### New Rules 

#### [**Reuse Random Objects**](/rules/reuse-random-objects.html)
This rule extracts reusable `java.util.Random` objects from local variables to class or instance fields. 
The goal is to improve the unpredictability of the generated values. Moreover, the rule reduces the number of objects created by the program.


#### [**Use SecureRandom**](/rules/use-secure-random.html)
This rule replaces pseudo-random number generators (PRNG), i.e., instances of [`Random`](https://docs.oracle.com/javase/8/docs/api/java/util/Random.html) with cryptographically strong random number generators (RNG), i.e., instances of [`SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html).

### UI Changes

#### Summary Page 

The jSparrow Summary page is redesigned to show which rules have been applied for each Java file.  

#### Preview Wizard

The jSparrow Preview wizard is updated to allow scrolling and source code selection in case the *"Finish"* button is enabled (this applies to the [Free](/tags/#free) rules in [jSparrow Starter](/rules/#free-rules-in-jsparrow-starter) and to all rules in [jSparrow Pro](https://jsparrow.eu/get-jsparrow/) and [jSparrow Student](https://jsparrow.eu/get-jsparrow/)).
Otherwise, the changes in all files can be previewed through the *"Change Navigation"* controls, as highlighted in the animation below. 

[ ![Change Navigation](/img/eclipse/release_notes/3-20-0-change-navigation.gif) ](/img/eclipse/release_notes/3-20-0-change-navigation.gif)

### Fixed bugs

#### [**Use Parameterized JPA Query**](/rules/use-parameterized-jpa-query.html) 
* This fix allows the parameterization of the JPQL when the query string is stored in a local variable.

#### [**Remove toString() on String**](/rules/remove-to-string-on-string.html) 
* Avoids removing `toString()` in case it serves as the body of a [`Consumer<T>`](https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html).

#### [**Use StringBuilder::append**](/rules/use-string-builder-append.html.html) 
* Avoids the StackOverflow errors thrown while refactoring string concatenations with an extremely large number of operands.

#### **Creating jSparrow Profiles**
* This fix prevents creating or importing profiles named 'Custom'. This name is reserved for any arbitrary selection of jSparrow rules. 

#### [**Use Functional Interfaces**](/rules/functional-interface.html) 
* Prevents refactoring in case the lambda expression candidate contains a reference to the field being currently initialized. 


## 3.19.0 <Badge vertical="middle" text="16.07.2020"/>

The [79<sup>th</sup> refactoring rule](/rules/) is shipped with jSparrow 3.19.0. It reduces security flaws by parameterizing the LDAP search filters.

### New Rule

#### [**Use Parameterized LDAP Query**](/rules/use-parameterized-ldap-query.html)

Similar to SQL queries, the [LDAP](https://ldap.com/) search filters are also vulnerable to injection attacks.
This rule parameterizes all potential user supplied input that are concatenated into an LDAP search filter.

### Fixed Bugs

#### [**Make Fields And Variables Final**](/rules/make-fields-and-variables-final.html)

* Avoids throwing runtime exceptions in some cases when a field is initialized with a lambda expression.

## 3.18.0 <Badge vertical="middle" text="18.06.2020"/>

The midsummer release of jSparrow 3.18.0 adds three new rules to the ruleset and includes a few bugfixes. 

### New Rules

#### [**Use Parameterized JPA Query**](/rules/use-parameterized-jpa-query.html)

It is a common misconception that JPA queries are immune to SQL injections, however, there are ways to secure them. 
This rule finds [JPQL](https://docs.oracle.com/javaee/7/tutorial/persistence-querylanguage005.htm#BNBUF) queries that are built by dynamically concatenating query fragments with potential user inputs and replaces them with parameterized JPQL queries. 
With this measure, the JDBC driver will escape input data before it is executed and therefore prevent SQL injection. 

#### [**Avoid Concatenation in Logging Statements**](/rules/avoid-concatenation-in-logging-statements.html)

Replaces string concatenations passed in logging statements with built-in string formatting. 
This spares some needless computation in case the logging level is not low enough to show the message. 
Additionally, a built-in formatted string message improves the readability, too. 

#### [**Use Arrays Stream**](/rules/use-arrays-stream.html)

Transforms `Arrays.asList(T..values).stream()` into an un-boxed specialized stream (i.e., [`IntStream`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/IntStream.html), [`LongStream`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/DoubleStream.html),
 or [`DoubleStream`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/DoubleStream.html)) whenever possible. 
Otherwise, the same stream generation is replaced with the shorthand method [`Stream.of(T... values)`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#of-T...-).

### Fixed Bugs

#### [**Make Fields And Variables Final**](/rules/make-fields-and-variables-final.html)

* Avoids converting a field to `final` if it is reassigned in the constructors or initializers of inner classes. 

#### [**Use Functional Interfaces**](/rules/functional-interface.html)

* Prevents transforming an anonymous class into a lambda expression in some cases where occurrences of the `this` keyword refers to the instance of the anonymous class. 

#### [**StringBuffer() to StringBuilder()**](/rules/string-buffer-to-builder.html)

* Prevents replacing a `StringBuffer` with a `StringBuilder` in case the original `StringBuffer` variable implicitly determines the type of the returned value. 

#### [**Replace For-Loop with Stream::forEach**](/rules/enhanced-for-loop-to-stream-for-each.html)

* Fixes a corner case where the type boundaries of a generic lambda parameter could no longer be derived after the transformation. 

## 3.17.0 <Badge vertical="middle" text="20.05.2020"/>

The [75<sup>th</sup> refactoring rule](/rules/) is shipped with jSparrow 3.17.0. It reduces security flaws by escaping user supplied inputs concatenated with SQL queries.

### New Rule
#### [**Escape User Inputs in SQL Queries**](/rules/escape-user-inputs-in-sql-queries.html)

This rule detects potential user inputs that are concatenated with Oracle SQL queries and wraps them in [`ESAPI.encoder().encodeForSql(codec, input)`](https://javadoc.io/doc/org.owasp.esapi/esapi/latest/org/owasp/esapi/Encoder.html). 
In this way, the contents of the user input will only be considered as values and not as code, thus preventing the SQL injection vulnerabilities.  


### Fixed Bugs
#### [**Use Functional Interfaces**](/rules/functional-interface.html)
* This fix relates to invocations of methods declared in Object class, default methods, and `this` keyword when transforming anonymous classes to lambda expressions.

## 3.16.0 <Badge vertical="middle" text="16.04.2020"/>

The [74<sup>th</sup> refactoring rule](/rules/) is shipped with jSparrow 3.16.0. It reduces security flaws by utilizing parameterized queries.

### New Rule
#### [**Use Parameterized Query**](/rules/use-parameterized-query.html)

This rule replaces a [`java.sql.Statement`](https://docs.oracle.com/javase/8/docs/api/java/sql/Statement.html) with a [`java.sql.PreparedStatement`](https://docs.oracle.com/javase/8/docs/api/java/sql/PreparedStatement.html) if the SQL query is constructed by concatenating string literals with user defined expressions (e.g. variables, method invocations, user input, etc). 
Parameterized queries enforce a distinction between the SQL code and the data passed through parameters.

### Fixed Bugs
#### [**Use Functional Interfaces**](/rules/functional-interface.html)
* Fixes unqualified field references when transforming an anonymous class into a lambda expression. 

## 3.15.0 <Badge vertical="middle" text="19.03.2020"/>

jSparrow 3.15.0 extends the ruleset to 73 rules. Some UI improvements and Bug Fixes are also included. 

### New Rules

#### [**Use String Join**](/rules/use-string-join.html) 

Replaces [`Collection::stream`](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#stream--) with 
[`String::join`](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#join-java.lang.CharSequence-java.lang.Iterable-) 
in cases where the sole purpose of the stream is to concatenate the String values of the collection. 

#### [**Remove Redundant Type Casts**](/rules/remove-redundant-type-cast.html)

Finds and removes casting expressions whose target types matches exactly the type of the original expression.

#### [**Remove Collection::addAll**](/rules/remove-collection-add-all.html)

Moves the parameters used in [`Collection#addAll(Collection c)`](https://docs.oracle.com/javase/8/docs/api/java/util/Collection.html#addAll-java.util.Collection-) 
to the constructor which is used for initializing a collection.

### UI improvements

#### Starting jSparrow on Multiple Projects
jSparrow can be executed in multiple projects simultaneously either by selecting a parent project or by 
selecting more than one project on the project explorer. 

[ ![Starting jSparrow on Multiple Projects](/img/eclipse/release_notes/jsparrow-start-on-multiple-projects.png) ](/img/eclipse/release_notes/jsparrow-start-on-multiple-projects.png)

#### Sorting Results on the Summary Page 
The results shown in jSparrow Summary Page can be sorted by the rule name, the number of findings or the time saved. 

### Fixed Bugs
#### [**Replace For-Loop with Enhanced-For-Loop**](/rules/for-to-for-each.html)

* If the `Iterable` object has been modified inside the loop body, the transformation would still have taken place.

## 3.14.0 <Badge vertical="middle" text="20.02.2020"/>

The [70<sup>th</sup> refactoring rule](/rules/) is shipped with jSparrow 3.14.0. It improves your `java.util.Optional`s.

### New Rule
#### [**Use Optional::filter**](/rules/optional-filter.html)

This rule extracts an `Optional::filter` from the consumer used in `Optional::ifPresent`. This simplifies the lambda expression used with Optional operations.

## 3.13.0 <Badge vertical="middle" text="30.01.2020"/>

jSparrow 3.13.0 contains [69 refactoring rules](/rules/) now. The new rule improves your `java.util.Optional`s.

### New Rule
#### [**Use Optional::map**](/rules/optional-map.html)

This rule extracts an `Optional::map` from the consumer used in `Optional::ifPresent`. This makes complicated code blocks easier to read and reuse.

### Fixed Bugs
#### [**Replace For-Loop with Enhanced-For-Loop**](/rules/for-to-for-each.html)

* If the loop variable has been used in the initialization expression of an inner loop, the variable name would have been dropped from this expression, rather than replaced properly.

## 3.12.0 <Badge vertical="middle" text="19.12.2019"/>

jSparrow 3.12.0 adds a new refactoring rule for improving source code readability. This brings jSparrow to a total of [68 automatic refactoring rules](/rules/).

### New Rule
#### [**Make Fields And Variables Final**](/rules/make-fields-and-variables-final.html)

This rule declares `private` fields and local variables `final`, if they are effectively `final`. Readability and maintainability of code is improved and accidental reassignments are prevented for affected fields and variables.

## 3.11.0 <Badge vertical="middle" text="21.11.2019"/>

jSparrow 3.11.0 brings you a new rule for enforcing coding conventions. It provides [67 automatic refactoring rules](/rules/) now. 

### New Rule
#### [**Hide Default Constructor In Utility Classes**](/rules/hide-default-constructor-in-utility-classes.html)

Utility classes are classes containing `static` methods and fields only. Such classes should not be instantiated. The default constructor will be hidden by adding a private constructor to utility classes, which prevents their instantiation.

## 3.10.0 <Badge vertical="middle" text="31.10.2019"/>

In this release, jSparrow 3.10.0, we introduce a new rule for Java 9 and above.

### New Rule
#### [**Use Optional::ifPresentOrElse**](/rules/optional-if-present-or-else.html)

In Java 9, the [`Optional`](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html) API has been extended with the [`Optional#ifPresentOrElse`](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html#ifPresentOrElse-java.util.function.Consumer-java.lang.Runnable-) method. jSparrow replaces if-then-else statements, checking for [`Optional#isPresent`](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html#isPresent--), with a single invocation of [`Optional#ifPresentOrElse`](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html#ifPresentOrElse-java.util.function.Consumer-java.lang.Runnable-). This improves the readability of the code and enables the usage of higher order functions with [`Optional`](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html).

## 3.9.0 <Badge vertical="middle" text="19.09.2019"/>

jSparrow 3.9.0 introduces a new automatic refactoring rule that improves performance in certain loops by eliminating redundant loop cycles. 

### New Rule
#### [**Insert Break Statements in For-loops**](/rules/insert-break-statement-in-loops.html)

This rule finds Enhanced For-loops that return a boolean flag in case at least one element matches a certain criteria. In such cases, a break statement is added after the flag has been set the first time. This eliminates additional redundant loop cycles. 

## 3.8.0 <Badge vertical="middle" text="14.08.2019"/>

With version 3.8.0 of jSparrow, two new refactoring rules are introduced. This brings jSparrow to a total number of [64 automatic refactoring rules](/rules/)! 

### New Rules

#### [**Use Collections Singleton List**](/rules/use-collections-singleton-list.html)

Java offers an efficient way to create empty lists and single-element lists with [`Collections.emptyList()`](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#emptyList--) and [`Collections.singletonList(..)`](https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#singletonList-T-) respectively. This rule searches for occurrences of [`Arrays.asList`](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html#asList-T...-) that can be replaced with either of those methods. 

#### [**Remove Null-Checks Before Instanceof**](/rules/remove-null-check-before-instanceof.html)

As seen in [SonarCloud](https://sonarcloud.io/organizations/default/rules?open=squid%3AS4201&rule_key=squid%3AS4201), checks for `null` before `instanceof` can be redundant, since `null` cannot be an instance of anything. In logical conjunctions and disjunctions, this rule removes a null-check whenever it is redundant. 

## 3.7.0 <Badge vertical="middle" text="18.07.2019"/>

The jSparrow 3.7.0 release contains a new refactoring rule and brings compatibility with [Lombok](https://projectlombok.org/) annotations. 
Some stability improvements are also included. 

### New Rule
#### [**Replace For-Loop with Stream::takeWhile**](/rules/enhanced-for-loop-to-stream-take-while.html)

Since Java 9, it is possible to get the prefix of a Stream with the [`takeWhile`](https://docs.oracle.com/javase/9/docs/api/java/util/stream/Stream.html#takeWhile-java.util.function.Predicate-) method.
This rule replaces enhanced for-loops iterating over the prefix of a collection with `Stream::takeWhile`. 

### Lombok Compatibility

This release brings compatibility of jSparrow refactoring with [Lombok](https://projectlombok.org/) annotations. 
The code generated by Lombok will not be affected by jSparrow. 

### Fixed Bugs 

#### [**Replace Collection.sort with List.sort**](/rules/use-list-sort.html)

* Allowing the transformation of `Collection.sort` to `List.sort` if the comparator is implemented inline as an anonymous class. 

## 3.6.1 <Badge vertical="middle" text="02.07.2019"/>

### Hotfix Release

This hotfix release brings a bugfix on a refactoring rule.

### Fixed Bugs

#### [**Use Local Variable Type Inference**](/rules/local-variable-type-inference.html)
* Allow converting the declared type to `var` if the local variable is used as a parameter in overloaded methods.

## 3.6.0 <Badge vertical="middle" text="19.06.2019"/>

jSparrow 3.6.0 introduces three new refactoring rules. 

### New Rules 
#### [**Use Factory Methods for Collections**](/rules/collections-factory-methods.html)

Java 9 introduced a convenient way to create immutable collections with factory methods. 
This rule, replaces the invocations of ```Collections.unmodifiableList/Set/Map``` with the corresponding factory method [```List.of```](https://docs.oracle.com/javase/9/docs/api/java/util/List.html#of-E...-), [```Set.of```](https://docs.oracle.com/javase/9/docs/api/java/util/Set.html#of-E...-) and [```Map.ofEntries```](https://docs.oracle.com/javase/9/docs/api/java/util/Map.html#ofEntries-java.util.Map.Entry...-) accordingly.

#### [**Reorder Modifiers**](/rules/reorder-modifiers.html)

This rule reorders the modifiers on Type, Field and Method Declarations based on the recommendation of Java Language Specification.

####  [**Replace Collection.sort with List.sort**](/rules/use-list-sort.html)

Java 8 introduced an extension to the List API by adding a [`sort`](https://docs.oracle.com/javase/8/docs/api/java/util/List.html#sort-java.util.Comparator-) method that sorts by Comparator. This rule replaces static invocations of `Collections.sort(List, Comparator)` with `List.sort(Comparator)`.

## 3.5.1 <Badge vertical="middle" text="23.05.2019"/>

We have introduced a [Customer Portal](https://jsparrow.atlassian.net/servicedesk/customer/portal/1), where you can report bugs and get support. 
There is also a new email address for customer support: [support@jsparrow.eu](mailto:support@jsparrow.eu) 

This release adds the link to our Customer Portal and the new email address to the help dialogs in jSparrow.

## 3.5.0 <Badge vertical="middle" text="16.05.2019"/>

A new rule with the [Old Language Constructs](/tags.html#Old_Language_Constructs) tag has been implemented for jSparrow 3.5.0. This brings jSparrow to a new total of 58 rules.

### New Rule
#### [**Replace Map::get by Map::getOrDefault**](/rules/map-get-or-default.html)
This rule automatically replaces invocations of [`Map::get`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#get-java.lang.Object-) with the alternative [`Map::getOrDefault`](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#getOrDefault-java.lang.Object-V-), thus eliminating the succeeding null-checks.

## 3.4.0 <Badge vertical="middle" text="18.04.2019"/>

The jSparrow 3.4.0 release extends the the ruleset further with one more rule.
Some stability improvements are also included.

### New Rules
#### [**Remove Unused Parameters in Private Methods**](/rules/remove-unused-parameter.html)
This new rule finds and removes the unused parameters in private methods.
As a result, all the references of the affected method are updated accordingly.

### Fixed Bugs
#### [**StringBuffer() to StringBuilder()**](/rules/string-buffer-to-builder.html)

* Avoid type incompatibilities in assignments and return statements when replacing a `StringBuffer` by a `StringBuilder`.  

## 3.3.0 <Badge vertical="middle" text="21.03.2019"/>

The jSparrow 3.3.0 release brings a bunch of new rules, improvements to Java version handling, and some minor UI improvements.

### New Rules
#### [**Use BufferedReader::lines**](/rules/buffered-reader-lines.html)

Replaces While-Loops and For-Loops that are using [`BufferedReader::readLine`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedReader.html#readLine--) with streams using [`BufferedReader::lines`](https://docs.oracle.com/javase/8/docs/api/java/io/BufferedReader.html#lines--).

#### [**Remove Modifiers in Interface Properties**](/rules/remove-modifiers-in-interface-properties.html)
Removes unnecessary modifiers on interface properties.

### Extended Rules

#### [**Replace For-Loop with Stream::Match**](/rules/enhanced-for-loop-to-stream-any-match.html)

In addition to [`Stream::anyMatch`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#anyMatch-java.util.function.Predicate-), this rule is extended to allow converting Enhanced For-Loops to [`Stream::allMatch`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#allMatch-java.util.function.Predicate-) or [`Stream::noneMatch`](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#noneMatch-java.util.function.Predicate-).

### Java Version handling

Version resolution when running Eclipse with JDK 11 on Java 8 projects has been improved.

### UI Improvements

* Feedback when entering a license has been improved.
* License status in the jSparrow license preference page has been unified.

[ ![License settings Starter](/img/eclipse/release_notes/license-settings-starter.png) ](/img/eclipse/release_notes/license-settings-starter.png)

## 3.2.0 <Badge vertical="middle" text="21.02.2019"/>

### jSparrow Is Fit for Java 11

Since the official End of Life of Java 8 has been reached, we have updated jSparrow to be able to run on Java 11 as well as Java 8.

### New Rule

jSparrow 3.2.0 brings a new rule for [collapsing if statements](/rules/collapse-if-statements.html).
The motivation behind this rule is to improve the readability of code by reducing the number of nested language constructs.

### Direct Link to Rule Documentation

In the “Select Rules” wizard we have added a link to each rule description which leads directly to a detailed documentation of that rule on our website.

[ ![Preview of rule's documentation link](/img/eclipse/release_notes/srw_doc_link.jpg) ](/img/eclipse/release_notes/srw_doc_link.jpg)

## 3.1.2 <Badge vertical="middle" text="15.02.2019"/>

### Hotfix Release

This hotfix release brings bugfixes on refactoring rules.

### Fixed Bugs

#### Use Try-With-Resource
* Avoiding runtime exceptions when searching for the [`Resource::close`](https://docs.oracle.com/javase/8/docs/api/java/lang/AutoCloseable.html#close--) invocations.

#### Replace Expression Lambda with Method Reference
* Avoid creating method references on java arrays.

## 3.1.1 <Badge vertical="middle" text="13.02.2019"/>

### Hotfix Release

Resolving a connectivity failure in jSparrow Starter registration.

### Fixed Bugs

#### jSparrow Starter Registration over proxy

* Fixes a bug related to the registration for jSparrow Starter in cases where the internet access is regulated with a proxy.

See also [Define proxy in Eclipse](./additional-configuration.html#setup-proxy).

## 3.1.0 <Badge vertical="middle" text="29.01.2019"/>

### jSparrow Lands on Eclipse 2018–12

Starting with version 3.1.0, jSparrow will be able be installed in Eclipse 2018-12.

### Old Welcome Screen Has Been Removed

The old welcome screen was removed due to the presence of the dashboard which allows you to stay up to date with dynamic content.

### Fixed Bugs

#### Replace For-Loop with `Stream::findFirst`

* Identifying cases where the argument's type of the `orElse` invocation is not cast compatible with the stream type.

#### Use Multi Catch

* Verifying that the types of the arguments in overloaded methods are not changed after merging the `catch` clauses.

#### Replace Expression Lambda with Method Reference

* Avoiding ambiguities caused when converting a lambda expression to a method reference on an object with a raw type.

#### Remove Lambda Expression Parenthesis

* Avoid introducing implicit return types when converting a lambda 'single-body-statement' (i.e., lambda statements whose body consist of a block with a single statement) to a lambda expression (i.e., a lambda statement whose body consist of a single expression).

#### Replace static final Collections with Collections.unmodifiable...()

* Avoid converting a static final collection to an unmodifiable collection if it is used as an initializer of another collection.

## 3.0.0 <Badge vertical="middle" text="21.12.2018"/>

### Introduction of jSparrow Starter

Version 3.0.0 introduces *jSparrow Starter*!

This version of jSparrow makes it possible to apply ***15 selected rules free of charge***.

Registering enables jSparrow Starter permanently and allows you to apply the free rules without limitation.

#### What does this mean exactly?

Previously, the free version of jSparrow showed possible changes, but did not have the finish button enabled. With jSparrow Starter, the finish button will be enabled for the free rules.

The original behavior of *jSparrow Free* remains unaffected.

#### How to register?

See the documentation at: [Registration for 15 free rules](jsparrow-starter-registration.html).

#### List of free rules

* [Replace For-Loop with Enhanced-For-Loop](/rules/for-to-for-each.html)
* [Organize Imports](/rules/organize-imports.html)
* [Use @Override Annotation](/rules/override-annotation.html)
* [Remove Boxing for String Conversions](/rules/primitive-boxed-for-string.html)
* [Remove Double Negations](/rules/remove-double-negation.html)
* [Remove toString() on String](/rules/remove-to-string-on-string.html)
* [Remove Unnecessary Semicolons](/rules/remove-empty-statement.html)
* [Remove Unnecessary Thrown Exceptions on Method Signatures](/rules/remove-unnecessary-throws.html)
* [Reorder String Equality Check](/rules/string-literal-equality-check.html)
* [Replace Equality Check with isEmpty()](/rules/use-is-empty-on-collections.html)
* [Replace equals() on Enum Constants](/rules/enums-without-equals.html)
* [Replace Expression Lambda with Method Reference](/rules/lambda-to-method-reference.html)
* [Replace Inefficient Constructors with valueOf()](/rules/inefficient-constructor.html)
* [Split Multiple Variable Declarations](/rules/multi-variable-declaration-line.html)
* [Use Try-With-Resource](/rules/try-with-resource.html)

Note: All free rules have the tag "[Free](/tags.html#Free)" added to them.

### Fixed Bugs

#### Use StringUtils Methods

* Avoid implicit import collisions of 'StringUtils' classes from different packages.

#### Replace For-Loop with Stream::findFirst

* Fixed an issue related to deriving the generic types of elements on a stream.

#### System Out To Logging

* Finding the legal locations for using non-static loggers.

#### Replace Expression Lambda with Method Reference

* Using fully qualified names if it is not possible to add import statements.
* Avoiding ambiguities with overloaded methods when replacing lambdas by method references.

#### Replace Concatenation with Infix-Operation

* Fixed an issue where the 'concat' method is not used for concatenating 'java.lang.String' instances.

## 2.7.0 <Badge vertical="middle" text="21.11.2018"/>

This release brings 6 new rules and a news dashboard.

### News Dashboard

A news dashboard has been added to jSparrow.
Make sure to visit the dashboard regularly to get news on upcoming updates!

[ ![Open the dashboard](/img/eclipse/release_notes/2-7-0-open-dashboard.gif) ](/img/eclipse/release_notes/2-7-0-open-dashboard.gif)

### New Rules

#### Remove unnecessary thrown exceptions on method signatures

The following exceptions on method signatures are removed:

* Exceptions that are subtypes of already thrown exceptions
* Exceptions that are thrown more than once
* Exceptions that are inheriting from RuntimeException

See official documentation for more information: [Remove Unnecessary Thrown Exceptions on Method Signatures](/rules/remove-unnecessary-throws.html)

#### Remove double negations

Removes pairs of negations from boolean expressions until only zero or one negation is left.

See official documentation for more information: [Remove Double Negations](/rules/remove-double-negation.html)

#### Remove explicit call to super()

If a constructor does not explicitly invoke a superclass constructor, the Java compiler automatically inserts a call to the no-argument constructor of the superclass. Hence, there is no need to explicitly call the default constructor of the super class.

See official documentation for more information: [Remove Explicit Call To super()](/rules/remove-explicit-call-to-super.html)

#### Remove unnecessary semicolons

Finds and removes the unnecessary semicolons from the code blocks.

See official documentation for more information: [Remove Unnecessary Semicolons](/rules/remove-empty-statement.html)

#### Use StringBuilder::append

Replaces the infix operator `+` over `String` concatenations with at least three operands by `StringBuilder::append`. When possible, unwraps the parenthesized expressions.

See official documentation for more information: [Use StringBuilder::append](/rules/use-string-builder-append.html)

#### Use guard condition

Replaces, when possible, the last if-statement of a method body with a guard-if and unwraps its body.

See official documentation for more information: [Use Guard Condition](/rules/guard-condition.html)

## 2.6.0 <Badge vertical="middle" text="21.09.2018"/>

### Update Site Change

jSparrow has now different features for Neon/Oxygen and Photon.
The jSparrow feature for Neon/Oxygen remains the same as before 2.6.0.

* Update can be done as before

The jSparrow feature for Photon is new and therefore it cannot be upgraded by the update mechanism from Eclipse.

* You need to install the the new feature from the Photon Category in at the Eclipse update site.

### New Rules

#### Use local variable type inference

Minimum Java Version: 10
Replaces local variable declarations with var, wherever it is legal.

#### Use Optional::ifPresent

Minimum Java Version: 8
Replaces if-clauses for Optionals with `isPresent()` by using the `ifPresent(Consumer<? extends T>)` method, which wraps the executing statements of the if clause into a Consumer.

### Fixed Bugs

#### Reformat code rule replaces mutated vowels in constant strings

The reformat code rule was replacing mutated vowels with question marks within constant `Strings`. This behavior was corrected and the constant `Strings` remain unchanged.

#### Compilation units with syntax errors stayed flagged as error afflicted classes even if the errors had been removed

Java classes with compilation errors are excluded from any refactoring by jSparrow by design. There has been a bug however, where fixing such Java classes with errors would still leave them marked to be ignored by jSparrow until Eclipse was restarted.

This issue has been fixed and Java classes will be evaluated for errors on each execution of jSparrow.

## 2.5.3 <Badge vertical="middle" text="16.08.2018"/>

The version range of the `apache.commons.lang3` library that is used for the “Use StringUtils Methods” rule has been enlarged. Currently we support all versions that are released.

* Accepted versions of `apache.commons.lang3` are now : [3.0,3.7]

## 2.5.2 <Badge vertical="middle" text="31.07.2018"/>

Eclipse Photon is now Supported

* Organize imports has been updates to work with Eclipse Photon

## 2.5.0 <Badge vertical="middle" text="22.05.2017"/>

This release brings substantial performance improvements, one new rule and various small improvements.

### Important Notice

License keys have to be added again!
The way license information is stored changed. For this reason, all previously added license keys need to be added again.
The license key can be added as follows: preferences → jSparrow → License → “Update license key”.
We thank you for your understanding!

### Performance Improvements

Applying rules takes only half the time now!

Process improvements of the rule engine led to an overall reduced time for applying all refactorings in the “Select Rules” wizard. Measurements show that running jSparrow on projects only takes a fraction of the time it previously took.

![Absolute performance improvement](/img/eclipse/release_notes/absolute-performance-improvement-with-legend.png)
![Relative performance improvement](/img/eclipse/release_notes/relative-performance-improvement.png)

### Remove Deprecated Date Constructs

Some `java.util.Date` constructors like `new Date(int year, int month, int day)`, `new Date(int year, int month, int date, int hrs, int min)` and `new Date(int year, int month, int date, int hrs, int min, int sec)` are deprecated and the Calendar should be used instead.  This rule searches for deprecated calendar instances, introduces calendar instances and sets the time corresponding to the parameters in the deprecated constructor, and replaces the latter with an invocation of `Calendar.getTime()`.  For instance, the following code:

``` java
// Deprecated Date Constructor
Date date = new Date(90, 1, 31);
```

will be replaced with:

``` java
// Calendar instead of deprecated constructor
Calendar calendar = Calendar.getInstance();
calendar.set(1990, 1, 31);
Date date = calendar.getTime();
```

Note that the date constructor is implicitly adding 1900 to the first argument (i.e. year), whereas `Calendar.set` is expecting the exact year value. Therefore, the rule takes care of preparing the parameters for the `Calendar.set()`-method properly.
If the deprecated constructor is used in a field initialization, then an initializing block is introduced for creating the calendar and initializing the field properly. See the before/after table.

### Removal of the Obsolete _Field naming convention_ Rule

Since the introduction of the _Rename Fields_ rule (Context Menu → jSparrow → Rename Fields Rule), the _Field Naming Convention_ rule became obsolete. The _Rename Fields_ rule offers more options and has better performance.

### Adjustment of the Time Saved

On the summary page the value of “Time Saved” now uses man-days, meaning eight-hour working days. Man-days are a more management-friendly unit than 24-hour working days and correspond better with current laws about working hours.

### MINOR UI IMPROVEMENTS

* Removal of the obsolete tag “logging”
* This tag is obsolete in the “Select Rules” wizard, since all logging related refactorings are bundled in the “Logging Rule” wizard.
* The “Add all” button is no longer enabled if only disabled rules are present
* Removal of the word “Apply” in the context menu
* Added a minimum width to the “Select Rules” wizard
* Bugfix to avoid UI freezes when committing survey results
* Bugfix that prevents a rare case where it was possible to select no profile

## 2.4.5 <Badge vertical="middle" text="25.04.2018"/>

### Bugfix for ImmutableStaticFinalCollections-Rule

Diamond Operators in Java 7 are not valid within a method parameter because their type cannot be inferred there. This caused a compilation error, when the rule was applied to a Java 7 project. The fix causes the rule to ignore collections in a Java 7 project, which use a Diamond Operator in their initializer.

### Bugfix for FieldRenaming-Rule

Solves an issue where the renaming of a field did not change the references to it in anonymous inner classes.

## 2.4.4 <Badge vertical="middle" text="26.03.2018"/>

Updated the way the free licenses work.

### Detailed Information

Free licenses have been reworked to no longer require a connection to the licensing server. When using older versions of jSparrow this might have led to warning issues. However, jSparrow functionality should not be adversely impacted.
Any warnings should be able to be removed by upgrading to the latest version of jSparrow. If you experience errors that persist after the upgrade please contact us at [bugreport@jsparrow.eu](mailto:bugreport@jsparrow.eu).

## 2.4.3 <Badge vertical="middle" text="20.02.2018"/>

### Bug Fixes

* Further improvements on the comment preservation
* Minor improvements on the rule execution counting
* Duplicate profiles where possible if “x” was used to cancel the operation
* Using the “x” to abort the operation now behaves as expected
* jSparrow was executable on sub-elements of a class but was not executed because the types are not suitable for refactoring
* The visual display of jSparrow was removed from sub-elements of a class

## 2.4.2 <Badge vertical="middle" text="30.01.2018"/>

### Bug Fixes

* Fixed a bug where comments were lost in some cases.

## 2.4.1 <Badge vertical="middle" text="09.01.2018"/>

### Bug Fixes

* Fixed a bug where the number of times a rule was applied was displayed incorrectly.
* Fixed an issue that prevented some rules from counting the number of times they were applied correctly.
* Fixed a bug where changes made by the “Use Try-With-Resource” rule were not displayed under certain circumstances.
* Fixed a bug where no license warning was displayed if a license was already in use by another user.

## 2.4.0 <Badge vertical="middle" text="19.12.2017"/>

### Rename Fields Rule

This release adds a new semi-automatic rule called “Rename Fields Rule”.

This new rule can be used for finding and renaming the fields that do not comply with the Naming Conventions.

A configuration wizards provides different refactoring options. The user can select fields to be renamed based on the access modifier key (screenshot of the configuration wizard is given below). As soon as a field which doesn’t comply with the naming conventions is found, the rule will search for its references and compute a renaming. The search scope can be set by the user, either to the current project or to the workspace that eclipse is currently using.

![RenameFieldsRule](/img/eclipse/release_notes/rename-fields-rule.png)

The new name is computed based on the existing field’ name and the configuration options that the user can provide on the rule wizard. On the default configuration, the existing field name is converted to camelCase. Furthermore the occurrences of underscores `_` and dollar-signs `$` are removed and the first letter which is following them (if any) is converted to uppercase. Note however, that the user has the possibility to choose in the configuration wizard whether or not to change the first letter after `_` or `$` to uppercase.

Before the renaming is applied to the original sources, a preview wizard will show the changes related to the renaming of each field. Since a non-private field may be accessed in multiple classes,  a single renaming may affect more than one file. A tree-style view in the preview wizard will show the the changes to all of the affected files for each renaming. The user has the possibility to ignore a renaming by un-checking the corresponding element in the tree view.

![RenameFieldsRulePreviewBlur](/img/eclipse/release_notes/rename-fields-rule-preview-blur.png)

__Limitations__

The renaming cannot be performed automatically if:

* The newly computed name is not a valid java variable name.
* The newly computed name clashes with an existing variable name within the same class.

### Bug Fixes

* Logging Rule:
  * Fixed a bug where tooltips for checkboxes would not show up at the right position.

## 2.3.1 <Badge vertical="middle" text="29.11.2017"/>

### Bug Fixes

* Fixed a bug where controls on the Summary Page could be duplicated under certain circumstances.
* Fixed a bug where alphabetical sorting of files in the Summary page was disabled.

## 2.3.0 <Badge vertical="middle" text="21.11.2017"/>

### Statistics
jSparrow now estimates the time it takes to fix issues. All rules in jSparrow get an individual estimation time to fix the corresponding issue. On each run of jSparrow, the time for each rule is multiplied by the number of occurrences of each corresponding rule, resulting in an estimation of saved time.

The statistics are added as follows:

* (Updated) Preview Wizard: now additionally displays the following information for each rule individually:
  * (New) Issues Fixed: The number of issues fixed for the current rule in all selected classes
  * (New) Time Saved: The amount of time saved for the current rule in all selected classes
* (Updated) Summary Page: now displays the following information for all rules:
  * (New) Run Duration: The time it took jSparrow to get and calculate all changes (i.e., the time between clicking “Finish” in the “Select Rules” Wizard and the appearance of the Preview Wizard).
  * (New) Issues Fixed: The overall number of fixed issues (i.e., how often rules were applied) for the current run of jSparrow.
  * (New) Time Saved: The total time saved by applying all rules displayed.
  * (New) Rules: A list of rules that were applied in the current run of jSparrow, including the number of times they were applied and the amount of time saved per rule.
  * Files and Diff View: The complete list of files where jSparrow found potential changes and a diff view that displays changes for each file.

  ![Summary page](/img/eclipse/release_notes/summary-page-blur.png)

### Logging Rule

The Logging Rule has been updated in major ways to support more cases and provide greater customizability. The changes are focused on Exception logging.

* (New) Logging Exceptions: A new grouping of Exception related logging options.
  * (Updated) “Replace printStackTrace by a logger statement with selected level”
    * Option to replace all occurrences of `printStackTrace` with the selected severity level
  * (New) “Insert a logger statement with the selected level for unlogged exceptions”
    * Option to add a logger statement to catch-clauses that do not log an Exception in any way
  * (New) “Always add the exceptions as a parameter in logger statements”
    * Option to always log an Exception if there is one present. For example, if only the message of an Exception is logged but not the Exception itself, the Exception will be added as additional argument to the log statement.
  * (New) “Always use this severity level for logging exceptions”
    * Option to always use the selected severity of “Logging Exceptions” when an Exception is logged, even though `System.out.print` or `System.err.print` might specify a different severity level.
  * (New) Tooltips: Added examples for the checkboxes to illustrate the functionality

  ![Summary page](/img/eclipse/release_notes/logging-rule.png)

### Profile Settings

The profiles settings have been improved and jSparrow is now capable of importing and exporting rule profiles. Exported profiles are saved in YAML format.

* (New) Import Profile(s)…
  * Adds the functionality to import YAML formatted jSparrow profiles
* (New) Export Profile(s)…
  * Adds the functionality to export the selected profile(s) into a YAML formatted file

  ![Summary page](/img/eclipse/release_notes/logging-rule.png)

### New Rule: UsePutIfAbsent

This Java 8 rule updates the following old language construct and improves readability:

* If `map.put(..)` is wrapped with a condition verifying the existence of an element one can use `map.putIfAbsent(…)` instead.

### Usability Improvements

* Various usability improvements
  * Option to switch between flat and recursive package resolving
  * Re-selecting the same profile has the intended behavior of resetting the selected profiles
  * Rule descriptions are now shown even on the right side of the Select Rules Wizard

### Bug Fixes

* Use Functional Interfaces:
  * Fixed a NullPointerException that could occur under very specific circumstances
  * Fixed an issue where a very specific case of an anonymous class containing wildcards in the body should not have been converted
* Replace Nested Loops with flatMap:
  * Fixed an issue where more than two nested streams could not be converted to a `flatMap`
* Use Multi-Catch:
  * Fixed an issue where catch clauses were shifted below more generic Exceptions
* Replace Expression Lambda with Method Reference:
  * Fixed an issue where method references were incorrectly used for inner types
  * Fixed an issue where jSparrow would not distinguish between `Integer.toString()` and `Integer.toString(Integer)`
* Remove Explicit Type Argument:
  * Fixed an issue where a Type Argument could not safely be inferred
* Replace static final Collections with `Collections.unmodifiable…()`:
  * Fixed an issue where unused imports where added
* Use StringUtils Methods:
  * Fixed an issue where not all changes were added on the first run if a parameter of a method invocation was a method invocation that could also be transformed
* Rule tags:
  * Fixed an issue where tags and “Remove disabled rules” would not work together

## 2.2.2 <Badge vertical="middle" text="25.10.2017"/>

### Bug Fixes

* Fixed a bug where Eclipse would report “Save Problems” when manually editing and saving files right after running jSparrow.

## 2.2.1 <Badge vertical="middle" text="10.10.2017"/>

### Bug Fixes

* An Issue was resolved if the project used Java 9 as language level.
  * Replace For-Loop with Enhanced-For-Loop
    * In cases the iterable was named after an primitive type with “s” as postfix the derived loop variable was translated to the corresponding primitive type. The behavior was changed so that an “a/an” is added as prefix to the created variable.

## 2.2.0 <Badge vertical="middle" text="21.09.2017"/>

This release is shipped with twelve new rules and other improvements to the user interface and the logic behind. In order to improve our possibility to track down bugs and other errors the OSGi bundle names have been changed. This has been necessary for jSparrow to work correctly with Eclipse Error Reporting. We have also added a new Summary Screen, where all changes can be reviewed before applying them. To make the selection of rules more intuitive and clearer we have changed their names to be more descriptive and consistent. The trial licensing model has been changed to accommodate new needs. Therefore it’s not possible anymore to persist changes with a trial license. However, changes can still be reviewed on the Summary Screen.

### Names of the OSGi Bundles Have Been Changed

* The prefix of the OSGI-bundles and OSGi-features of jSparrow has been changed from: `jSparrow` → `eu.jSparrow`
* __Important__: The result is that it is not possible to update from a previous version of jSparrow! It is required to uninstall and reinstall jSparrow to upgrade to 2.2.0. Otherwise there might be side effects because there will be two different named instances of jSparrow within your Eclipse version.

### Trial Licensing Model Changed

* The trial license has changed.
* The major change is that it’s no longer possible to apply changes to source code.
* All changes will be displayed by the Preview Wizard and a Summary is shown in the final step at the new Summary Page.

### Summary Page

* Introduction of a Summary Page that displays all the changes from all rules that will be made.

### New Rules Have Been Added

* Remove Inherited Interfaces from Class Declaration
  * Remove interfaces from class declaration, which are already implemented by a super class. These interfaces are inherited from the super class.
* Replace Equality Check with `isEmpty()`
  * Java 6 introduced `isEmpty()` on `Collections` and `Strings`. This rule replaces equality checks involving `length()` or `size()` with calls to `isEmpty()`. For example, `s.length() == 0` becomes `s.isEmpty()`. Applying this rule improves readability.
* Replace `equals()` on Enum constants
  * Replace occurrences of `equals()` on Enum constants with an identity comparison (==). In the case the equals relation is wrapped with an boolean negation the result will be an not equals (!=).
* Replace For-Loop with `Stream::anyMatch`
  * Replaces an occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with `Stream::anyMatch`. The stream syntax is more concise and improves readability.
* Replace For-Loop with `Stream::collect(Collectors.joining())`
  * Transforms loops which are only used for concatenating a `String` to an invocation of `Stream::collect(Collectors.joining())`. If the Java compliance level is below 1.8 and at least 1.5, then a `StringBuilder` is introduced for concatenating the values on each iteration of the loop.
* Replace For-Loop with `Stream::findFirst`
  * Enhanced for-loops which are used to find an element within a collection can be replaced by `Stream::findFirst`. Using the stream syntax a multi-line control statement can be reduced to a single line.
* Replace For-Loop with `Stream::sum`
  * Transforms enhanced for-loops which are only used for summing up the elements of a collection to a `Stream::sum` invocation
* Replace `indexOf()` with `contains()`
  * This rule replaces calls to `indexOf()` on instances of `String` or Collection with calls to the `contains()` method. For example `l.indexOf(s) >= 0` is transformed to `l.contains(s)`. `contains()` was introduced in Java 1.4 and helps to make the code more readable.
* Replace Nested Loops with flatMap
  * Nested For-Loops or invocations of forEach commonly used to iterate over all elements of a collection of collections, can be avoided by using `flatMap()`. Using `flatMap()` makes code much more readable and can be combined with other stream functions.
* Replace static final Collections With Collections.unmodifiable…()
  * An unmodifiable Collection can be created with the matching `Collections.unmodifiable…()` method. Some examples are `Collections.unmodifiableList()`, `Collections.unmodifiableSortedSet()`, etc. A declaration of a `Collection` with the `static` and `final` modifiers is not sufficient because it might still be modifiable. The `Collections` which are created with `Collections.unmodifiable…()` throw an `UnsupportedOperationException` as soon as a modification is attempted.
* StringBuffer() to StringBuilder()
  * This rule changes the type of local variables from `StringBuffer()` to `StringBuilder()`.
* Use equals() on Primitive Objects
  * It is recommended that you use `equals()` on primitive objects. Applying this rule will replace occurrences of `!=` and `==` with `equals()`. For example, `”hello” == “world”` will become `”hello”.equals(“world”)` Using this rule helps to avoid bugs, as `==` checks for object reference equality instead of value equality.

### Name Changes of Rules

| Previous Name                        | Current Name |
|:------------------------------- |:----- |
|Arithmetic Assignment|Replace Assignment with Compound Operator|
|Braces to Control-Block|Add Parenthesis to Control Statements|
|Collection removeAll() to clear()|Replace removeAll() with clear()|
|Use Diamond Operator|Remove Explicit Type Argument|
|Enhanced For-Loop to Stream::forEach|Replace For-Loop with Stream::forEach|
|Field names convention|Apply Field Naming Conventions|
|For to ForEach|Replace For-Loop with Enhanced-For-Loop|
|Use FunctionalInterface|Use Functional Interfaces|
|Replace constructors of primitive types with valueOf() method|Replace Inefficient Constructors with valueOf()|
|Stream forEach to collect|Use Stream::collect|
|if-Wrapper in Stream::forEach to Stream::filter|Use Stream::filter|
|Lambda forEach to map|Use Stream::map|
|Expression Lambda to Method Reference|Replace Expression Lambda with Method Reference|
|MultiCatch|Use Multi-Catch|
|Separate lines for variable declarations|Split Multiple Variable Declarations|
|OrganiseImportsRule|Organize Imports|
|@Override annotation rule|Use @Override Annotation|
|SonarQube: Primitives should not be boxed just for String conversions|Remove Boxing for String Conversions|
|Rearrange class members|Rearrange Class Members|
|Remove new String() constructor|Remove String Constructor|
|Remove toString() from Strings|Remove toString() on String|
|SerialVersionUid check for static, final|Make SerialVersionUID Static Final|
|Standard Logger|System Out To Logging|
|Statement Lambda To Expression Lambda|Remove Lambda Expression Parenthesis|
|Replace String.concat(param) with Infix-Operation Plus|Replace Concatenation with Infix-Operation|
|String.format() System line separator|Use Portable Newline|
|String Literals equality check|Reorder String Equality Check|
|StringUtils|Use StringUtils Methods|
|TryWithResource|Use Try-With-Resource|
|While-loops to for-loop|Replace While-Loop With Enhanced For-Loop|

## 2.1.0 <Badge vertical="middle" text="14.08.2017"/>

* New welcome screen that explains in very short terms how to use jSparrow, including a feedback area
* A new license expired dialog with a feedback form
* Improved dialogs for error messages
* Improvement of the forEach to Lambda rule
* Minor bugfix of the Lambda do method reference rule

## 2.0.2 <Badge vertical="middle" text="06.07.2017"/>

* Support for Eclipse Oxygen
* Support for macOS

## 2.0.0 <Badge vertical="middle" text="21.06.2017"/>

* UI improvements
  * Redesign of the selection process within the corresponding wizard
  * Redesign of the preference page
    * profiles have been improved
* General
  * Introduction of rule requirements
    * Introduces a background check that is performed on the selected sources, respectively the project they are located in, to check different requirements
    * Java version requirement check added
    * Required libraries check added
  * Introduction of interactive rules
    * SystemOutToLogging rule was introduced which requires addition user interaction to be executed
* Ruleset Additions
  * Target Java 1.0 and upwards
    * Rearrange class members
      * Class elements are sorted according to the oracle code convention for file organization
      * Order of visibility modifieres are also included
    * Yoda Conditions for Strings
      * Constants are moved to the left side of the condition to prevent an accidental assignment
    * Naming conventions for private elements
      * Change names of variables according to Java code conventions of Oracle
    * Multiple variables should not be declared in the same line
      * Splitting the variable declaration to multiple lines to prevent implicit changes on multiple variables, by changing the modifier of one line.
    * Interactive Rule: System out to logging
      * Introduces the replacement of System.out statements (`println`, `error`, `e.printstacktrace`) with a logging statement
        * Requires the configuration of a logging environment (log4j, slf4j)
  * Target Java 1.6 and upwards
    * @Override addition
      * To improve readability and enforcing compile errors on methods where the signature has changed the `@Override` annotation should be applied
  * Target Java 1.7 and upwards
    * Diamondrule
      * Removes unnecessary generic type references to replace them with diamonds
  * Target Java 1.8 and upwards
    * Lambda statements to method references
      * Replaces Java 8 lambda function definitions with a method reference lambda if possible
    * Statement lambda to expression
      * If the body of the lambda statement contains only a single expression, the braces are optional. It is reduced to a lambda expression.
    * For Each to Lambda
      * Transforms a for each loop to a corresponding lambda statement
    * Addition Optimization possibilities for lambda loops
      * if-statements without else to filters from streams
      * unwrapping object done with mapping from streams
      * collecting objects done with collect from streams

## 1.1.0 <Badge vertical="middle" text="31.03.2017"/>

* Support for Eclipse Mars
* UI improvements
  * Addition of progress monitors for better feedback
  * Loading indicators on various points where real time background processing is not possible

## 1.0.0 <Badge vertical="middle" text="01.02.2017"/>

* Support for Eclipse Neon
* Support for Ubuntu and Windows 7/10
* Execution on different views in the Eclipse IDE
  * Editor
  * Package Explorer
* Introduction of a diff-view after application of the selected rules
* Contains Preference Page to customize the behavior.
* Initial Ruleset
  * Target Java 1.0 and upwards
    * OrganiseImports
      * Removes unused imports and organizes them
    * StringUtils
      * Apache Commons Lang `StringUtils` required in classpath of executing project
      * Replaces operations on `String` object with corresponding `StringUtils` operation
  * Target Java 1.1. and upwards
    * SerialVersionUid
      * Adds the modifieres `static` and `final` to `SerialVersionUid` long variables when they are absent
    * RemoveNewStringConstructor
      * Removes all class instantiations from `String` if its parameter is empty or a `String`.
    * RemoveToStringOnString
      * Removes all method invocation of `toString()` on a `String` object
    * StringConcatToPlus
      * Replaces the `String` concatenation with the method invocation with the plus operation for `Strings`
    * PrimitiveBoxedForString
      * A boxed primitive is allocated just to call `toString()`. It is more effective to just use the `static` form of `toString` which takes the primitive value.
    * InefficientConstructor
      * All calls to a constructor of a primitive type will be replaced by the corresponding static `valueOf()` method.
    * ArithmeticAssignment
      * Assignments that only execute simple arithmetic operations on the target are resolved as arithmetic assignment
    * BracketsToControl
      * All control flow statements that aren’t using curly braces are wrapped to improve readability
  * Target Java 1.2 and upwards
    * CollectionRemoveAll
      * Collections that use remove all elements by applying it to itself could also be cleared.
      * use `collection.clear()` instead of `collection.removeAll(collection)`
  * Target Java 1.5 and upwards
    * WhileToForEach
      * Replaces while loops with for-each loops that have been introduced in Java 1.5
    * ForToForEach
      * Replaces traditional for loops with for-each loops that have been introduced in Java 1.5
    * StringFormatLineSeparator
      * Use `String.format` placeholder for linebreak instead of distribution system dependent linebreak.
  * Target Java 1.7 and upwards
    * MultiCatch
      * Combines multiple catch phrases that handle the error identically

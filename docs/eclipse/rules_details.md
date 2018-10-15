---
title: jSparrow rules
---
# Rules in details

[[toc]]

## Rules short description

Following are the short description with example screenshot for each the implemented rules.


### Use Try-With-Resource

This rule adds the try-with-resources statement introduced in Java 7. Closing statements are removed as the construct takes care of that. Applying this rule makes the code safer and more readable.


### Use Multy-Catch

Java 7 introduced the possibility to merge multiple catch clauses into a single multi-catch clause. Merging is only possible if the catch statements are identical. Using this rule reduces clutter and improves readability.


### Use Functional Interfaces

Anonymous instances of a functional interface type are replaces by a simple lambda expression. Only instances of functional interfaces can be replaced.  


### Replace removeAll() with clear()

Simplifies the code by replacing all occurrences of removeAll() which have the current collection as parameter with clear(). For example, list.removeAll(list) becomes list.clear().


### Replace static final Collections with Collections.unmodifiable...()

An unmodifiable Collection can be created with the matching Collections.unmodifiable...() method. Some examples are Collections.unmodifiableList(), Collections.unmodifiableSortedSet(), etc.
A declaration of a Collection with the static and final modifiers is not sufficient because it might still be modifiable.
The Collections which are created with Collections.unmodifiable...() throw an UnsupportedOperationException as soon as a modification is attempted.


### Remove Explicit Type Argument

Since Java 1.7 the Diamond Operator (\<>) can be used to simplify instance creation where generics are involved.
For example, 'Map\<String, List\<String>> myMap = new HashMap\<String, List\<String>>()' can be replaced by 'Map\<String, List\<String>> myMap = new HashMap\<>()'.
In order to apply this rule your project must use Java 1.7 or later.


### Use @Override Annotation

This rule adds the @Override annotation to methods overriding or implementing parent class methods. Even though using @Override it is not mandatory, using this annotation is considered a best practice for two main reasons:
 1) It ensures that the method signature is a subsignature of the overridden method (otherwise, a compile error is indicated).
 2) It improves the readability.


### Make SerialVersionUID Static Final

Applying this rule adds the modifiers static and final long variables with the name SerialVersionUID, as this confirms to Java code conventions.
For example, 'private long serialVersionUID = 1L' becomes 'private static final long serialVersionUID = 1L'.


### Rearrange Class Members

According to Oracle code conventions members of classes and interfaces should appear in the following order:
 1) Class variables
 2) Instance variables
 3) Constructors
 4) Methods.
Additionally, those members should be sorted based on their access modifier. Applying this rule will sort class members to promote readability.


### Add Parenthesis to Control Statements

Transforms single statements after control statements to block constructs by adding curly braces. This improves readability.


### Split Multiple Variable Declarations

Code conventions for Java recommend that each variable or field is declared on a separate line. This rule will split declarations occurring on the same lines over multiple lines to improve readability.


### Replace equals() on Enum Constants

Replace occurrences of equals() on Enum constants with an identity comparison (==). In the case the equals relation is wrapped with an boolean negation the result will be an not equals (!=).


### Remove Inherited Interfaces from Class Declaration

Remove interfaces from class declaration, which are already implemented by a super class. These interfaces are inherited from the super class.


### Replace put(..) with putIfAbsent(..)

Java 8 adds an API that allows for conditionally adding entries to a map. Before, one would have to resort to if-statements.
For example, 'if(!map.containsKey(aKey)) { map.put(aKey, aValue); }' becomes 'map.putIfAbsent(aKey,aValue)'.
Using this rule reduces clutter and improves readability.


### Remove Deprecated Date Constructs

Removes deprecated Date constructs which are obsolete since JDK version 1.1


### Use String Literals

Removes all class instantiations of String if the constructor parameter is empty or a String itself.
For example 'new String("StringLiteral")' becomes '"StringLiteral"'. This improves performance and readability.


### Replace Inefficient Constructors with valueOf()

All calls to a constructor of a primitive type will be replaced by the corresponding static valueOf() method.
For example 'new Integer("1")' becomes 'Integer.valueOf("1")'.


### Remove Boxing for String Conversions

When calling toString() on a primitive no new instance of that primitive has to be created. This rule replaces occurrences of such code with a static method. For example, 'new Integer(1).toString()' becomes 'Integer.toString(1)'. Applying this rule improves performance.


### Use Portable Newline

This rule replaces any occurrences of '\n' with '%n'.
For example 'String.format("\n\n")' is replaced by 'String.format("%n%n")'.
The benefit of this approach is that '%n' is portable across platforms.


### Replace indexOf() with contains()

This rule replaces calls to indexOf() on instances of String or Collection with calls to the contains() method.
For example 'l.indexOf(s) >= 0' is transformed to 'l.contains(s)'.
'contains()' was introduced in Java 1.4 and helps to make the code more readable.


### Remove toString() on String

All method invocations of toString() on a String element are not needed. Applying this rule will remove such method calls.
For example, '"string".toString()' becomes '"string"'.
This transformation improves performance.


### Use StringUtils Methods

This rule replaces various String methods with their null-safe counterparts from StringUtils.
For example, '"String".trim()' becomes 'StringUtils.trim("String")'.
Using this rule makes null pointer exceptions less likely to occur.


### Reorder String Equality Check

To avoid NullPointerExceptions, String literals should be placed on the left side when checking for equality.
This means that 'val.equals("val")' is transformed into '"val".equals(val)'.


### Replace Concatenation with Infix-Operation

This rule replaces the concat() method on Strings with the '+' operator.
For example, 's = s.concat("bar")' becomes 's = s + "bar"'. This improves readability and performance for chained concatenations.


### Replace Equality Check with isEmpty()

Java 6 introduced isEmpty() on collections and Strings. This rule replaces equality checks involving length() or size() with calls to isEmpty().
For example, 's.length() == 0' becomes 's.isEmpty()'.
Applying this rule improves readability.


### Replace Assignment with Compound Operator

Assignments involving an arithmetic assignment can be simplified by using a compound operator such as '+=', '-=', '/=' or '*='.
For example, this rule will transform 'a=a+1' into 'a+=1'.
The rule only applies if both operands are primitive types.


### StringBuffer() to StringBuilder()

This rule changes the type of local variables from StringBuffer() to StringBuilder().


### Use equals() on Primitive Objects

It is recommended that you use equals() on primitive objects. Applying this rule will replace occurrences of != and == with equals().
For example, '"hello" == "world"' will become '"hello".equals("world")'
Using this rule helps to avoid bugs, as == checks for object reference equality instead of value equality.


### Replace While-Loop with Enhanced For-Loop

Applying this rule replaces While-loops over iterators with an equivalent for-loop. Loops where the body modifies the iterator in some way will not be transformed.


### Replace For-Loop with Enhanced For-Loop

Since Java 1.5 enhanced for-loops can be used to iterate over collections. This rule replaces old for-loops utilizing iterators with enhanced for-loops in order to improve readability.


### Replace For-Loop with Stream::forEach

Enhanced For-Loops can be replaced by forEach().
For example 'for(Item item: items) { }' becomes 'items.forEach()'.
This makes code more readable and can be combined with other stream functions such as filter and map.


### Use Stream::filter

If-Statements making up the entire execution block of a Stream::forEach method can be transformed into a call to Stream::filter. This only applies if there are no other statements passed as arguments to forEach(). filter() can be used with other stream functions and improves readability.


### Remove Lambda Expression Parenthesis

If the body of a Lambda statement contains only a single expression braces are optional. It can be reduced to a lambda expression by removing the parenthesis.
For example 'stream.map(x -> { return x*2 })' is replaced by 'stream.map(x -> return x*2)'.
This makes the code more readable and more concise.


### Use Stream::collect

Replaces 'Stream.forEach' with 'Stream.collect' if the argument of the forEach statement is only used for adding elements to a list.
For example, 'stream.forEach(x -> list.add)' is transformed into 'stream.collect(Collectors.toList())'.
This simplifies adding elements to a list.


### Use Stream::map

Extracts a block from the body of the consumer of the Stream::forEach method and introduces Stream::map instead. This makes complicated code blocks easier to read and reuse.


### Replace Nested Loops with flatMap

Replace Nested Loops with flatMap.


### Replace For-Loop with Stream::anyMatch

Replaces an occurrences of enhanced for-loops which are only used to initialize or return a boolean variable with Stream::anyMatch. The stream syntax is more concise and improves readability.


### Replace For-Loop with Stream::findFirst

Enhanced for-loops which are used to find an element within a collection can be replaced by Stream::findFirst. Using the stream syntax a multi-line control statement can be reduced to a single line.


### Replace For-Loop with Stream::sum

Replace For-Loop with Stream::sum.


### Replace For-Loop with Stream::collect(Collectors.joining())

Transforms loops which are only used for concatenating a string to an invocation of Stream::collect(Collectors.joining()).
If the Java compliance level is below 1.8 and at least 1.5, then a StringBuilder is introduced for concatenating the values on each iteration of the loop.


### Replace Expression Lambda with Method Reference

This rule simplifies expression lambdas by using method reference.
For example, 'personList.forEach(person -> doSomething(person))' becomes 'personList.forEach(this::doSomething)'.
This rule can only be applied if the parameters of the lambda expression and the method match.


### Reformat Code

Reformats code according to the coding conventions defined in Eclipse. For example, line breaks will be added if lines are too long. Properly formatted code improves readability and makes collaboration easier.


### Organize Imports

Applying this rule has the same effect as Eclipse's built in Organize Imports functionality. It will remove unused imports and sort import statements alphabetically.

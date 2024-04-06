(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{527:function(a,s,t){"use strict";t.r(s);var n=t(45),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"use-stringutils-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-stringutils-methods"}},[a._v("#")]),a._v(" Use StringUtils Methods")]),a._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),t("p",[a._v("This rule replaces various String methods with their null-safe counterparts from StringUtils.\nFor example, "),t("code",[a._v('"String".trim()')]),a._v(" becomes "),t("code",[a._v('StringUtils.trim("String")')]),a._v(".")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("Requirements")]),a._v(" "),t("p",[a._v("Activation of this rule requires the following classpath entry to be present:")]),a._v(" "),t("ul",[t("li",[a._v("org.apache.commons.lang3.StringUtils")])])]),a._v(" "),t("h2",{attrs:{id:"benefits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#benefits"}},[a._v("#")]),a._v(" Benefits")]),a._v(" "),t("p",[a._v("Using StringUtils helps avoid a number of issues, such as null pointer exceptions. Depending on the specific methods readability, performance and others may also be improved. In short: StringUtils is just generally better.")]),a._v(" "),t("h2",{attrs:{id:"supported-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-api"}},[a._v("#")]),a._v(" Supported API")]),a._v(" "),t("h3",{attrs:{id:"isempty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isempty"}},[a._v("#")]),a._v(" isEmpty")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" cs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"trim"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trim"}},[a._v("#")]),a._v(" trim")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"equalsignorecase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#equalsignorecase"}},[a._v("#")]),a._v(" equalsIgnoreCase")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equalsIgnoreCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" anotherString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equalsIgnoreCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" str1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" str2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"endswith"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endswith"}},[a._v("#")]),a._v(" endsWith")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("endsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" suffix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("endsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" suffix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"indexof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#indexof"}},[a._v("#")]),a._v(" indexOf")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("indexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("indexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" seq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" searchSeq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"contains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contains"}},[a._v("#")]),a._v(" contains")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("contains")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("contains")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" seq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" searchSeq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"substring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#substring"}},[a._v("#")]),a._v(" substring")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("substring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" beginIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("substring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"startswith"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#startswith"}},[a._v("#")]),a._v(" startsWith")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"touppercase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#touppercase"}},[a._v("#")]),a._v(" toUpperCase")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("upperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("upperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h3",{attrs:{id:"tolowercase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tolowercase"}},[a._v("#")]),a._v(" toLowerCase")]),a._v(" "),t("p",[t("strong",[a._v("Pre String API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post StringUtils API")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Locale")]),a._v(" locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h2",{attrs:{id:"tags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[a._v("#")]),a._v(" Tags")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("Tags")]),a._v(" "),t("TagLinks")],1),a._v(" "),t("h2",{attrs:{id:"code-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#code-changes"}},[a._v("#")]),a._v(" Code Changes")]),a._v(" "),t("h3",{attrs:{id:"checking-for-empty-strings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checking-for-empty-strings"}},[a._v("#")]),a._v(" Checking for Empty Strings")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isEmpty")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"dropping-surrounding-spaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dropping-surrounding-spaces"}},[a._v("#")]),a._v(" Dropping Surrounding Spaces")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("trim")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"comparing-equals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparing-equals"}},[a._v("#")]),a._v(" Comparing Equals")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" email "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getUsername")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nusername"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("expectedUsername"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nemail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equalsIgnoreCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("expectedEmail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" email "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getMail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" username "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getUsername")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" expectedUsername"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equalsIgnoreCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" expectedEmail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"finding-a-substring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-a-substring"}},[a._v("#")]),a._v(" Finding a Substring")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("substring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("substring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"finding-the-index-of-a-substring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#finding-the-index-of-a-substring"}},[a._v("#")]),a._v(" Finding the Index of a Substring")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("indexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sequence"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("indexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sequence"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"comparing-the-suffix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparing-the-suffix"}},[a._v("#")]),a._v(" Comparing the Suffix")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("endsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("suffix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("endsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" suffix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"comparing-the-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparing-the-prefix"}},[a._v("#")]),a._v(" Comparing the Prefix")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("startsWith")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" prefix"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"searching-for-a-sequence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searching-for-a-sequence"}},[a._v("#")]),a._v(" Searching for a Sequence")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("contains")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sequence"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("contains")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" sequence"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"changing-capitalization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-capitalization"}},[a._v("#")]),a._v(" Changing Capitalization")]),a._v(" "),t("p",[t("strong",[a._v("Pre")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" upper "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toUpperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" lower "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[t("strong",[a._v("Post")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" upper "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("upperCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" lower "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lowerCase")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("VersionNotice"),a._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[a._v("#")]),a._v(" Properties")]),a._v(" "),t("RuleProperties")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
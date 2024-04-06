(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{417:function(t,e,a){"use strict";a.r(e);var i=a(45),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"additional-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[t._v("#")]),t._v(" Additional Configuration")]),t._v(" "),a("h2",{attrs:{id:"setup-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-proxy"}},[t._v("#")]),t._v(" Setup Proxy")]),t._v(" "),a("h3",{attrs:{id:"set-forwarding-in-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-forwarding-in-proxy"}},[t._v("#")]),t._v(" Set Forwarding in Proxy")]),t._v(" "),a("p",[t._v("Configure your proxy to allow to reach the endpoints for our registration and licensing services at:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("License API endpoint")]),t._v(" "),a("p",[t._v("https://go.netlicensing.io/core/v2/rest")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Registration API endpoint")]),t._v(" "),a("p",[t._v("https://amazonaws.com")])]),t._v(" "),a("h3",{attrs:{id:"define-proxy-in-eclipse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-proxy-in-eclipse"}},[t._v("#")]),t._v(" Define Proxy in Eclipse")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Proxy entries")]),t._v(" "),a("p",[t._v("Open Preferences -> General -> Network Connections")])]),t._v(" "),a("p",[t._v("It is important that the HTTPS entry is set similar to the following example. The Host and Port have to be replaced according to your proxy settings:")]),t._v(" "),a("p",[a("a",{attrs:{href:"/img/eclipse/proxy.png"}},[a("img",{attrs:{src:"/img/eclipse/proxy.png",alt:"Example proxy entries"}})])]),t._v(" "),a("h3",{attrs:{id:"activating-basic-authentication-scheme-in-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activating-basic-authentication-scheme-in-java"}},[t._v("#")]),t._v(" Activating Basic Authentication Scheme in Java")]),t._v(" "),a("p",[t._v("Since "),a("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/8u111-relnotes-3124969.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 8u111"),a("OutboundLink")],1),t._v(", the "),a("code",[t._v("Basic")]),t._v(" authentication scheme has been deactivated, by default, in the Oracle Java Runtime, by adding "),a("code",[t._v("Basic")]),t._v(" to the "),a("code",[t._v("jdk.http.auth.tunneling.disabledSchemes")]),t._v(" networking property.\nIf your proxy requires it, the "),a("code",[t._v("Basic")]),t._v(" authentication scheme can be reactivated by removing "),a("code",[t._v("Basic")]),t._v(" from the "),a("code",[t._v("jdk.http.auth.tunneling.disabledSchemes")]),t._v(" networking property:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jdk.http.auth.tunneling.disabledSchemes=\n")])])]),a("p",[t._v("In Java 8, this property may be configured in "),a("code",[t._v("$JAVA_HOME/jre/lib/net.properties")]),t._v(". From Java 9 onwards, the path changed to "),a("code",[t._v("$JAVA_HOME/conf/net.properties")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);
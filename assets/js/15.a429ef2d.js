(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{343:function(e,t,a){},375:function(e,t,a){"use strict";a(343)},397:function(e,t,a){"use strict";a.r(t);a(11);var r={data:function(){return{registration:{firstName:"",lastName:"",email:"",company:"",dsgvo:!1,license:!1,newsLetterAccepted:!0},valid:!0,firstNameRules:[function(e){return!!e||"First name is required"},function(e){return e&&e.length<=15||"Name must be less than 15 characters"}],lastNameRules:[function(e){return!!e||"Last name is required"},function(e){return e&&e.length<=15||"Name must be less than 15 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},methods:{validate:function(){this.$refs.form.validate()&&this.sendRegistration()},reset:function(){this.registration.firstName="",this.registration.lastName="",this.registration.email="",this.registration.company="",this.registration.dsgvo=!1,this.registration.license=!1,this.registration.newsLetterAccepted=!0,this.$refs.form.resetValidation()},sendRegistration:function(){var e={headers:{"content-type":"application/json; charset=UTF-8"},body:JSON.stringify(this.registration),method:"POST",mode:"no-cors"};fetch("https://1k4wn56lwd.execute-api.eu-central-1.amazonaws.com/Prod/starter/create",e).then((function(e){console.log(e),window.location.href="./jsparrow-starter-registration.html"})).catch((function(e){return console.log(e)}))}}},n=(a(375),a(45)),i=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{counter:15,rules:e.firstNameRules,label:"First Name*",required:""},model:{value:e.registration.firstName,callback:function(t){e.$set(e.registration,"firstName",t)},expression:"registration.firstName"}}),e._v(" "),a("v-text-field",{attrs:{counter:15,rules:e.lastNameRules,label:"Last Name*",required:""},model:{value:e.registration.lastName,callback:function(t){e.$set(e.registration,"lastName",t)},expression:"registration.lastName"}}),e._v(" "),a("v-text-field",{attrs:{label:"Company"},model:{value:e.registration.company,callback:function(t){e.$set(e.registration,"company",t)},expression:"registration.company"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.emailRules,label:"Email*",required:""},model:{value:e.registration.email,callback:function(t){e.$set(e.registration,"email",t)},expression:"registration.email"}}),e._v(" "),a("v-checkbox",{attrs:{rules:[function(e){return!!e||"The GDPR must be accepted!"}],required:""},model:{value:e.registration.dsgvo,callback:function(t){e.$set(e.registration,"dsgvo",t)},expression:"registration.dsgvo"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n        By clicking on the checkbox you confirm that you have read and understood the\n        "),a("a",{attrs:{href:"https://jsparrow.io/wp-content/uploads/GDPR.pdf",target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v("\n        General Data Protection Regulation")]),e._v(" and that you agree to all points listed therein.\n      ")])]),e._v(" "),a("v-checkbox",{attrs:{rules:[function(e){return!!e||"The License Agreement must be accepted!"}],required:""},model:{value:e.registration.license,callback:function(t){e.$set(e.registration,"license",t)},expression:"registration.license"}},[a("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n        I agree with the terms and conditions of the\n        "),a("a",{attrs:{href:"https://jsparrow.io/wp-content/uploads/EULA.pdf",target:"_blank"},on:{click:function(e){e.stopPropagation()}}},[e._v("\n        License Agreement")])])]),e._v(" "),a("v-checkbox",{attrs:{label:"I agree to receive the jSparrow newsletter about new product features,\n     special offers and interesting information about Java refactoring and improving code quality"},model:{value:e.registration.newsLetterAccepted,callback:function(t){e.$set(e.registration,"newsLetterAccepted",t)},expression:"registration.newsLetterAccepted"}}),e._v(" "),a("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v("Send")]),e._v(" "),a("v-btn",{attrs:{color:"error"},on:{click:e.reset}},[e._v("Reset Form")])],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);
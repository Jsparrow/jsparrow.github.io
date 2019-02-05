<template>
  <div class="container">
    <form id="app" action="http://127.0.0.1:3000/starter/create/" @submit="checkForm" method="post" novalidate="true" enctype='application/json'> 
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
      <p>
        <label for="firstName">Firstname</label>
        <input id="firstName" v-model="registeration.firstName" type="text" name="firstName">
      </p>

      <p>
        <label for="lastName">LastName</label>
        <input id="lastName" v-model="registeration.lastName" type="text" name="lastName">
      </p>

            <p>
        <label for="company">Company</label>
        <input id="company" v-model="registeration.company" type="text" name="company">
      </p>

      <p>
        <label for="email">Email</label>
        <input id="email" v-model="registeration.email" type="email" name="email">
      </p>

      <p>
        <input type="checkbox" id="newsletter" v-model="registeration.newsletterAccepted" checked>
        <label for="newsletter">Newsletter ipsum - {{ registeration.newsletterAccepted }}</label>
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      registeration: {
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        newsletterAccepted: false},
    };
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.registeration.firstName) {
        this.errors.push("Firstname required.");
      }
      if (!this.registeration.lastName) {
        this.errors.push("Lastname required.");
      }
      if (!this.registeration.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.registeration.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        this.sendRegistration();

        return true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendRegistration: function() {
      console.log(JSON.stringify(JSON.parse(JSON.stringify(this.registeration))));
       const Url ='http://localhost:3000/starter/create';
       const otherPram={
           headers:{
             "content-type":"application/json; charset=UTF-8"
           },
           body:JSON.stringify(JSON.parse(JSON.stringify(this.registeration))),
           method:"POST",
           mode: "no-cors"
       };
     
       fetch(Url,otherPram)
       .then(data=>{return data.json()})
       .then(res=>{console.log(res)})
       .catch(error=>console.log(error));
    }
  }
};
</script>

<style lang="stylus">
@import '~@styles/appStyles';
</style>

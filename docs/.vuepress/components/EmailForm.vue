<template>
  <div class="container">
    <form
      id="app"
      action="http://127.0.0.1:3000/starter/create/"
      @submit="checkForm"
      method="post"
      novalidate="true"
      enctype="application/json"
    >
      <vue-input
          name="firstName"
          id="firstName1"
          required
          placeholder="First Name"
          validation="required"
          v-model="registeration.firstName"
        />


      <p>
        <label for="firstName">First name</label>
        <input
          data-vv-as="First Name"
          id="firstName"
          v-model="registeration.firstName"
          type="text"
          name="firstName"
          v-validate="'required'"
        >
        <span>{{ errors.first('firstName') }}</span>
      </p>

      <p>
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          v-model="registeration.lastName"
          type="text"
          name="lastName"
          v-validate="'required'"
        >
        <span>{{ errors.first('lastName') }}</span>
      </p>

      <p>
        <label for="company">Company</label>
        <input id="company" v-model="registeration.company" type="text" name="company">
      </p>

      <p>
        <label for="email">Email</label>
        <input
          id="email"
          v-model="registeration.email"
          type="email"
          name="email"
          v-validate="'required|email'"
        >
        <span>{{ errors.first('email') }}</span>
      </p>

      <p>
        <label for="dsgvo">dsgvo</label>
        <input type="checkbox" id="dsgvo" v-model="registeration.dsgvo" checked>
      </p>

      <p>
        <label for="license">license</label>
        <input type="checkbox" id="license" v-model="registeration.license" checked>
      </p>

      <p>
        <label for="newsletter">Newsletter</label>
        <input type="checkbox" id="newsletter" v-model="registeration.newsletter" checked>
      </p>

      <p>
        <input type="submit" value="Submit" :disabled="isSubmitDisabled">
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registeration: {
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        dsgvo: false,
        license: false,
        newsletter: true
      }
    };
  },
  computed: {
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    isSubmitDisabled() {
      return this.hasErrors || this.hasEmptyFields;
    },
    hasEmptyFields() {
      let hasEmptyField = false;
      Object.keys(this.registeration).forEach(key => {
        if (
          key !== "newsletter" &&
          (this.registeration[key] === "" || this.registeration[key] === false)
        ) {
          hasEmptyField = true;
        }
      });
      return hasEmptyField;
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      // this.errors = [];

      // if (!this.registeration.firstName) {
      //   this.errors.push("Firstname required.");
      // }
      // if (!this.registeration.lastName) {
      //   this.errors.push("Lastname required.");
      // }
      // if (!this.registeration.email) {
      //   this.errors.push("Email required.");
      // } else if (!this.validEmail(this.registeration.email)) {
      //   this.errors.push("Valid email required.");
      // }

      // if (!this.errors.length) {
      //   this.sendRegistration();

      //   return true;
      // }
      console.log(this.errors);
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendRegistration: function() {
      console.log(JSON.stringify(this.registeration));
      const Url = "http://localhost:3000/starter/create";
      const otherPram = {
        headers: {
          "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(this.registeration),
        method: "POST",
        mode: "no-cors"
      };

      fetch(Url, otherPram)
        .then(data => {
          return data.json();
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="stylus">
</style>

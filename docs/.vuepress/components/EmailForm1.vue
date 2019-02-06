<template>
<v-app>
  <form>
    <v-text-field
      v-model="registration.firstName"
      v-validate="'required|max:15'"
      :counter="15"
      :error-messages="errors.collect('firstName')"
      label="First Name*"
      data-vv-name="firstName"
      required
    ></v-text-field>
    <v-text-field
      v-model="registration.lastName"
      v-validate="'required|max:15'"
      :counter="15"
      :error-messages="errors.collect('lastname')"
      label="Last Name*"
      data-vv-name="lastname"
      required
    ></v-text-field>
    <v-text-field
      v-model="registration.email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-checkbox
      v-model="registration.dsgvo"
      v-validate="'required'"
      :error-messages="errors.collect('dsgvo')"
      label="dsgvo"
      data-vv-name="dsgvo"
      type="dsgvo"
      required
    ></v-checkbox>
    <v-checkbox
      v-model="registration.license"
      :rules="[v => !!v || 'You must agree to continue!']"
      :error-messages="errors.collect('license')"
      :label="`Checkbox 1: ${registration.license.toString()}`"
      data-vv-name="registration.license"
      type="checkbox"
      required
    ></v-checkbox>
    <v-checkbox
      v-model="registration.newsletter"
      v-validate="'required'"
      :error-messages="errors.collect('newsletter')"
      label="newsletter"
      data-vv-name="newsletter"
      type="checkbox"
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new'
    },

    data: () => ({
      registration: {
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        dsgvo: false,
        license: false,
        newsletter: true
      },
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          firstname: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 15 characters'
            // custom messages
          },
          lastname: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 15 characters'
            // custom messages
          },
          dsgvo: {
            required: () => 'Dsgvo musst be accepted',
          },
          license: {
            required: () => 'license musst be accepted',
          },
          newsletter: {
            required: () => 'newsletter musst be accepted',
          },
        }
      }
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    computed: {
      hasErrors() {
        return this.errors && this.errors.items.length > 0;
      },
    },
    methods: {
      submit () {
        this.$validator.validateAll()

        console.log(this.registration)

        // if(hasErrors()){
        //   return true;
        // }
      //   this.sendRegistration();
      },
      clear () {
        this.registration.firstName = ''
        this.registration.lastName = ''
        this.registration.email = ''
        this.registration.company = ''
        this.registration.dsgvo = false
        this.registration.license = false
        this.registration.newsletter = true
        this.$validator.reset()
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
  }
</script>

<style>
.theme--light.application {
    background: #ffffff;
}
</style>

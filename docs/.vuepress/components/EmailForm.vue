<template>
  <v-app>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="registration.firstName"
        :counter="15"
        :rules="firstNameRules"
        label="First Name*"
        required
      ></v-text-field>

      <v-text-field
        v-model="registration.lastName"
        :counter="15"
        :rules="lastNameRules"
        label="Last Name*"
        required
      ></v-text-field>

      <v-text-field v-model="registration.company" label="Company"></v-text-field>

      <v-text-field v-model="registration.email" :rules="emailRules" label="Email*" required></v-text-field>

      <v-checkbox
        v-model="registration.dsgvo"
        :rules="[v => !!v || 'The GDPR must be accepted!']"
        required
      >
        <span slot="label">
          By clicking on the checkbox you confirm that you have read and understood the
          <a @click.stop href="https://jsparrow.io/wp-content/uploads/GDPR.pdf" target="_blank">
          General Data Protection Regulation</a> and that you agree to all points listed therein.
        </span>
      </v-checkbox>

      <v-checkbox
        v-model="registration.license"
        :rules="[v => !!v || 'The License Agreement must be accepted!']"
        required
      >
        <span slot="label">
          I agree with the terms and conditions of the
          <a @click.stop href="https://jsparrow.io/wp-content/uploads/EULA.pdf" target="_blank">
          License Agreement</a>
        </span>
      </v-checkbox>

      <v-checkbox v-model="registration.newsletter"
      label="I agree to receive the jSparrow newsletter about new product features,
       special offers and interesting information about Java refactoring and improving code quality"></v-checkbox>

      <v-btn :disabled="!valid" color="success" @click="validate">Send</v-btn>

      <v-btn color="error" @click="reset">Reset Form</v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
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
    valid: true,
    firstNameRules: [
      v => !!v || "First name is required",
      v => (v && v.length <= 15) || "Name must be less than 15 characters"
    ],
    lastNameRules: [
      v => !!v || "Last name is required",
      v => (v && v.length <= 15) || "Name must be less than 15 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.sendRegistration();
      }
    },
    reset() {
      this.registration.firstName = "";
      this.registration.lastName = "";
      this.registration.email = "";
      this.registration.company = "";
      this.registration.dsgvo = false;
      this.registration.license = false;
      this.registration.newsletter = true;
      this.$refs.form.resetValidation();
    },
    sendRegistration: function() {
      // Prod stack
      const Url = "https://1k4wn56lwd.execute-api.eu-central-1.amazonaws.com/Prod/starter/create";
      // Test stack
      // const Url = "https://5dblvgznqf.execute-api.eu-central-1.amazonaws.com/Prod/starter/create";
      const otherPram = {
        headers: {
          "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(this.registration),
        method: "POST",
        mode: "no-cors",
      };

      fetch(Url, otherPram)
        .then(res => {
          console.log(res);
          window.location.href = './jsparrow-starter-registration.html';
        })
        .catch(error => console.log(error));

         //one level up
    }
  }
};
</script>

<style lang="stylus">
@import '../../../node_modules/vuetify/src/stylus/components/_forms.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_text-fields.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_inputs.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_labels.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_selection-controls.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_buttons.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_counters.styl';
@import '../../../node_modules/vuetify/src/stylus/components/_messages.styl';
@import '../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';

.theme--light.application {
  background: #ffffff;
}
</style>

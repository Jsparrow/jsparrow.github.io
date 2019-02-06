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
      <div>
        <vue-input
          name="firstName"
          id="firstName"
          required
          placeholder="First Name"
          validation="required"
          v-model="registeration.firstName"
        />
      </div>
      <div>
        <vue-input
          name="lastName"
          id="lastName"
          required
          placeholder="Last Name"
          validation="required"
          v-model="registeration.lastName"
        />
      </div>

      <div>
        <vue-input
          name="company"
          id="company"
          placeholder="Company"
          v-model="registeration.company"
        />
      </div>

      <div>
        <vue-input
      name="email"
      id="email"
      required
      type="email"
      placeholder="E-mail"
      validation="required|email"
      v-model="registeration.email"
      />

      </div>

<div>
      <vue-checkbox
          name="dsgvo"
          id="dsgvo"
          v-model="registeration.dsgvo"
          label="I accept dsgvo"
          validation="required"
          required
        />
</div>
<div>
         <vue-checkbox
          name="license"
          id="license"
          v-model="registeration.license"
          label="I accept the terms"
          validation="required"
          required
        />
</div>
<div>
         <vue-checkbox
          name="newsletter"
          id="newsletter"
          v-model="registeration.newsletter"
          label="I want newsletter"
        />
</div>
      <p>
        <vue-button color="primary" :disabled="isSubmitDisabled" :loading="isLoading"> Save </vue-button>
      </p>
    </form>
  </div>
</template>

<script>
import VueInput from "./VueInput.vue";

export default {
  components: { VueInput },
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
      },
      isLoading: false
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
          key !== "newsletter" && key !== "company" &&
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

      //   this.sendRegistration();
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

<style>
</style>

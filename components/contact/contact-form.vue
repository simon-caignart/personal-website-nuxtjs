<template>
  <form
    id="contact-form"
    name="contact-form"
    class="w-full md:w-1/2 px-10 sm:px-22 md:px-6 xl:px-28 z-10 text-right mb-14 md:mb-0"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
    data-aos="zoom-in" data-aos-delay="500" data-aos-once=true
  >
    <input type="hidden" name="form-name" value="contact-form" />
    <!-- Bot Prevention Field -->
    <p class="hidden">
      <label
        >Don’t fill this out if you’re human: <input name="bot-field"
      /></label>
    </p>
    <!-- FIRST NAME & LAST NAME ROW -->
    <div class="contactRow">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
        <label class="contactInputLabel" for="first-name">
          {{ $t("contact.name") }}
        </label>
        <input
          class="contactInput"
          id="first-name"
          type="text"
          name="firstname"
          v-model="firstName"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 text-left">
        <label class="contactInputLabel" for="last-name">
          {{ $t("contact.lastName") }}
        </label>
        <input
          class="contactInput"
          id="last-name"
          type="text"
          name="lastname"
          v-model="lastName"
        />
      </div>
    </div>

    <!-- EMAIL & PHONE ROW  -->
    <div class="contactRow">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-left">
        <label class="contactInputLabel" for="email">{{ $t("contact.email") }}</label>
        <input
          required
          class="contactInput"
          id="email"
          type="email"
          name="email"
          v-model="email"
        />
      </div>
      <div class="w-full md:w-1/2 px-3 text-left">
        <label class="contactInputLabel" for="phone-number">
          {{ $t("contact.phoneNumber") }}
        </label>
        <vue-tel-input
          :inputOptions="tel_options"
          id="phone-number"
          mode="international"
          autocomplete="on"
          v-model="phone"
        ></vue-tel-input>
      </div>
    </div>
    <!-- Hidden tel input so that the form gets the value of the vue-tel-input component -->
    <input type="tel" name="phone" :value="phone" hidden />

    <!-- MESSAGE ROW -->
    <div class="contactRow px-3">
      <label class="contactInputLabel" for="message">{{ $t("contact.message") }}</label>
      <textarea
        class="resize-y contactInput"
        id="message"
        name="message"
        rows="10"
        required
        v-model="message"
      ></textarea>
    </div>
    <!-- Submit Button -->
    <button
      type="submit"
      id="submitButton"
      style="width:149.06px;"
      class="contactSubmitBtn"
    >
      <svg
        enable-background="new 0 0 24 24"
        class="contactSubmitBtnSvg text-purple-600 dark:text-pink-400 group-hover:text-black dark:group-hover:text-purple-400 group-focus:text-black dark:group-focus:text-purple-400"
        height="512"
        viewBox="0 0 24 24"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"
        />
        <path
          d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"
        />
      </svg>
      <div
        class="text-purple-600 dark:text-pink-400 group-hover:text-black group-focus:text-black dark:group-focus:text-purple-400 dark:group-hover:text-purple-400 transition duration-300 ease-in-out"
      >
        {{ $t("contact.sendIt") }}
      </div>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      tel_options: { placeholder: "", name: "phone" },
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  computed: {
    getFirstname() {
      return this.firstName;
    },
    getLastname() {
      return this.lastName;
    },
    getEmail() {
      return this.email;
    },
    getPhone() {
      return this.phone;
    },
    getMessage() {
      return this.message;
    },
  },
  methods: {
    // This is the handleSubmit method that animate the button and call the postData method
    handleSubmit() {
      // Get the button
      var submitBtn = document.getElementById("submitButton");
      submitBtn.disabled = true;
      submitBtn.classList.add("cursor-not-allowed");
      submitBtn.firstChild.classList.add("animate-fadeOut");
      submitBtn.lastChild.classList.add("animate-fadeOut");
      // Change the innerhtml to add the loading circle and change the text
      setTimeout(() => {
        submitBtn.innerHTML =
          '<svg class="animate-fadeIn -ml-1 mr-3 h-5 w-5 text-black dark:text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><div class="animate-fadeIn text-black dark:text-purple-400">Processing</div>';
      }, 500);
      setTimeout(() => {
        submitBtn.firstChild.classList.replace(
          "animate-fadeIn",
          "animate-spin"
        );
        submitBtn.lastChild.classList.replace("animate-fadeIn", "animate-none");
      }, 1000);
      // Call the postFormData method
      setTimeout(() => {
        this.postFormData();
      }, 3250);
    },
    // This function puts all the form fields into a FormData constructor, which we later encode with the URLSearchParams constructor
    createFormDataObj(data) {
      const formData = new FormData();
      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    // This is our custom postData function
    postFormData() {
      // This `data` object is what's passed to the createFormDataObj function. It needs all of your form fields, where the key is the name= attribute and the value is the computed value.
      const data = {
        "form-name": "contact-form",
        firstname: this.getFirstname,
        lastname: this.getLastname,
        email: this.getEmail,
        phone: this.getPhone,
        message: this.getMessage,
      };
      // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page located at pages/thanks.vue
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(this.createFormDataObj(data)).toString(),
      })
        // This is how we route to /contact/success on successful form submission
        .then(() => this.$router.push({path: this.localePath('contact/success'), query: {q: this.q}}))
        .catch((error) => alert(error));
    },
  },
};
</script>

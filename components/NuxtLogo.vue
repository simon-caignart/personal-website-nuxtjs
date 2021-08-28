<template>
      <div class="w-full md:w-1/2 px-3 text-left">
        <vue-tel-input
          id="phone-number"
          mode="international"
          autocomplete="on"
          v-model="phone"
        ></vue-tel-input>
      </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ""
    };
  }
};

</script>

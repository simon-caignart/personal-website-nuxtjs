<template>
  <div
    id="sectionSeparator"
    class="bg-white dark:bg-gray-800 rounded-full"
  ></div>
</template>

<script>
export default {
  mounted: function() {
    this.addClass(); // will execute at pageload
  },
  methods: {
    addClass: function() {
      var sectionSeparator = document.getElementById("sectionSeparator");
      sectionSeparator.classList.add(this.width);
    },
  },
  props: {
    width: {
      type: String,
      required: true,
      default: "w-2",
    },
  },
};
</script>

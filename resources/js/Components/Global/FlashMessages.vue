<template>
    <div />
  </template>
  
  <script setup>
  import { usePage } from "@inertiajs/vue3";
  import { createToaster } from "@meforma/vue-toaster";
  import { onMounted, watchEffect } from "vue";
  
  const toaster = createToaster({
    position: "bottom", 
    useDefaultCss: true, 
    maxToasts: 1, 
  });
  
  watchEffect(() => {
  const flash = usePage().props.flash;

  if (flash.success) {
    toaster.success(flash.success);
  }
  if (flash.error) {
    toaster.error(flash.error);
  }
});
  </script>
  
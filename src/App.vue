<template>
  <div id="app">
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__delay-0.4s"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>

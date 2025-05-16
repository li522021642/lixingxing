<template>
  <resume-layout>
    <home-view />
  </resume-layout>
</template>

<script>
import ResumeLayout from './layouts/ResumeLayout.vue';
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    ResumeLayout,
    HomeView
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
}

.dark-mode {
  background-color: #121212;
  color: rgba(255, 255, 255, 0.85);
}
</style>

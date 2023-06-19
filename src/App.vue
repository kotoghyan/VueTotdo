<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchTasks');
  },
};
</script>


<style>
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

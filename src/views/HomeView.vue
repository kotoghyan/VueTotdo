<template>
  <div class="root">
    <h1>Главная страница</h1>
    <router-link to="/tasks">Перейти к списку задач</router-link>
    <TaskList/>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList";

export default {
  components: {TaskList}
}
</script>
<style scoped>
.root {
  text-align: center;
}
</style>

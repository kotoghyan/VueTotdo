<template>
  <div>
    <router-link to="/">На главную</router-link>
    <task-form></task-form>
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm";

export default {
  name:'TaskPage',
  components: { TaskForm },
}
</script>

<template>
  <div>
    <h2>Создать задачу</h2>
    <form @submit.prevent="createTask">
      <input type="text" v-model="task.title" placeholder="Заголовок" required>
      <button type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  name:'TaskForm',
  data() {
    return {
      task: {
        title: ''
      },
    };
  },
  methods: {
    createTask() {
      this.$store.dispatch('createTask', {
        ...this.task,
        id: Date.now(),
        editing: false
      });
      this.task.title = '';
    },
  },
};
</script>

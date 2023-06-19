<template>
  <div class="root">
    <h2>Список задач</h2>
    <div v-for="task in tasks" :key="task.id">
      <div v-if="task.editing" class="task">
        <input type="text" v-model="task.title">
        <button @click="updateTask(task)">Сохранить</button>
      </div>
      <div v-else class="task">
        <span>{{ task.title }}</span>
        <button @click="toggleEditing(task)">Изменить</button>
        <button @click="deleteTask(task.id)">Удалить</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.state.tasks.tasks;
    },
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch('deleteTask', id);
    },
    toggleEditing(task) {
      task.editing = !task.editing;
    },
    updateTask(task) {
      task.editing = false;
      this.$store.dispatch('updateTask', task);
    },
  },
};
</script>

<style scoped>
  .root{
    min-width: 300px;
  }
  .task > span {
    margin-right: 10px;
  }
</style>

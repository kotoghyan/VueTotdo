const tasksModule = {
	state: {
		tasks: [],
	},
	mutations: {
		SET_TASKS(state, tasks) {
			state.tasks = tasks;
		},
		ADD_TASK(state, task) {
			state.tasks.push(task);
		},
		DELETE_TASK(state, id) {
			state.tasks = state.tasks.filter((task) => task.id !== id);
		},
		UPDATE_TASK(state, updatedTask) {
			const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
			if (index !== -1) {
				state.tasks.splice(index, 1, updatedTask);
			}
		},
	},
	actions: {
		fetchTasks({ commit }) {
			const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
			commit('SET_TASKS', tasks);
		},
		createTask({ commit, state }, task) {
			console.log(task, 'task')
			// const newTask = { ...task, id: Date.now() };
			const updatedTasks = [...state.tasks, task];
			localStorage.setItem('tasks', JSON.stringify(updatedTasks));
			commit('ADD_TASK', task);
		},
		deleteTask({ commit, state }, id) {
			const updatedTasks = state.tasks.filter((task) => task.id !== id);
			localStorage.setItem('tasks', JSON.stringify(updatedTasks));
			commit('DELETE_TASK', id);
		},
		updateTask({ commit, state }, updatedTask) {
			const updatedTasks = state.tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
			localStorage.setItem('tasks', JSON.stringify(updatedTasks));
			commit('UPDATE_TASK', updatedTask);
		},
	},
};

export default tasksModule;

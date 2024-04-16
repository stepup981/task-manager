import { defineStore } from "pinia";

export const useTaskStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [],
    nameTask: "",
    filterTasks: "",
    task: {},
  }),
  getters: {
    filteredTasks: (state) => {
      if (state.tasks.length === 0) return;

      let filteredTasks = state.tasks.filter((task) =>
        task.name.toLowerCase().includes(state.nameTask.toLowerCase())
      );

      switch (state.filterTasks) {
        case "incompleteTasks":
          filteredTasks.sort((a, b) => a.completed - b.completed);
          break;
        case "completeTasks":
          filteredTasks.sort((a, b) => b.completed - a.completed);
          break;
        default:
          break;
      }

      return filteredTasks;
    },
  },
  actions: {
    addTask(payload) {
      this.tasks.push(payload);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    deleteTask(payload) {
      const index = this.tasks.findIndex((task) => task.id === payload);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
    },
    removeAll() {
      this.tasks.splice(0, this.tasks.length);
      localStorage.removeItem("tasks");
    },

    updatedTasks(nameTask, filterTasks) {
      this.nameTask = nameTask;
      this.filterTasks = filterTasks;
    },

    uploadTask(task) {
      console.log(task);
      this.task = task;
    },

    editTask(task) {
      task.editing = true;
      setTimeout(() => {
        const input = document.querySelector("#inputTask");
        if (input) input.focus();
      });
    },

    saveTask(task) {
      const savedTasks = this.tasks;
      const taskIndex = savedTasks.findIndex((item) => item.id === task.id);

      savedTasks[taskIndex].name = task.name;
      this.tasks = savedTasks;

      if (task.name !== "") {
        task.editing = false;
      } else {
        deleteTask(task.id);
      }
    },
  },
});

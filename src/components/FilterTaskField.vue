<script>
import { ref, watch, onMounted } from "vue";
import { useTaskStore } from "@/store/index";

import ButtonTask from "@/components/UI/ButtonTask.vue";
export default {
  components: {
    ButtonTask,
  },

  setup() {
    const taskStore = useTaskStore();
    const nameTask = ref("");
    const filterTasks = ref("");

    watch([nameTask, filterTasks], () => {
      taskStore.updatedTasks(nameTask.value.trim(), filterTasks.value);
    });

    return {
      filterTasks,
      nameTask,
    };
  },
};
</script>

<template>
  <div class="filter-task">
    <input placeholder="Search task" v-model="nameTask" type="text" />
    <select v-model="filterTasks">
      <option value="completeTasks">Complete tasks</option>
      <option value="incompleteTasks">Incomplete tasks</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.filter-task {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;

  input,
  select {
    border: none;
    border-radius: 6px;
    padding: 8px 6px;
    word-wrap: break-word;
    font-size: 14px;
    background-color: white;

    outline: none;
    cursor: pointer;
  }
}
</style>

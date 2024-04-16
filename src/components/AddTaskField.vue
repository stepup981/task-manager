<script>
import { ref } from 'vue';
import { useTaskStore } from '@/store/index'; 
import ButtonTask from "@/components/UI/ButtonTask.vue";

export default {
  components: {
    ButtonTask,
  },
  setup() {
    const newTask = ref(""); 
    const taskStore = useTaskStore();

    const addTaskOnList = () => {
      if (!newTask.value.trim()) return;

      const task = { id: Date.now(), name: newTask.value, editing: false, completed: false };
      taskStore.addTask(task); 
      newTask.value = "";
    };

    return { newTask, addTaskOnList };
  },
};
</script>
<template>
  <form class="add-task" @submit.prevent="addTaskOnList">
    <input
      v-model="newTask"
      placeholder="The quick brown fox jumps over the lazy dog."
      type="text"
      class="add-task__input"
    />
    <ButtonTask add />
  </form>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.add-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  &__input {
    @include task;
  }
}

@media (max-width: 680px) {
  .add-task {
    flex-direction: column;
    align-items: normal;
  }
}
</style>

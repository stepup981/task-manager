<script>
import { useTaskStore } from "@/store";

export default {
  props: ["task"],

  setup(props) {
    const taskStore = useTaskStore();
    const task = taskStore.task;

    // в объекте task лежит вся информация о той таске, которую выбрали

    return {
      task,
    };
  },
};
</script>

<template>
  <div class="info">
    <div class="info__block">{{ task.name }}</div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import AddTaskField from "@/components/AddTaskField.vue";
import FilterTask from "@/components/FilterTaskField.vue";
import EditTaskField from "@/components/EditTaskField.vue";

export default {
  components: {
    AddTaskField,
    EditTaskField,
    FilterTask,
  },
};
</script>

<template>
  <div class="task-manager">
    <h1 class="task-manager__title">Add task</h1>
    <div class="task-manager__arrow-down"></div>
    <div class="task-manager__block">
      <AddTaskField />
      <FilterTask />
      <EditTaskField />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-manager {
  &__title {
    font-size: 56px;
    color: var(--primary-color-orange);
    font-weight: 700;
    text-align: center;
  }

  &__arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid var(--primary-color-orange);
    margin: 0 auto;
    animation: bounce 0.5s infinite alternate;
    margin-bottom: 24px;
  }

  &__block {
    border: 2px solid var(--primary-color-gray);
    border-radius: 6px;
    padding: 16px;
    background-color: var(--primary-color-blue);
    margin: 0 auto;
    width: 50%;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>

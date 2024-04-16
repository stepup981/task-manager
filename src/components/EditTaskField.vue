<script>
import { ref, onMounted } from "vue";
import { useTaskStore } from "@/store/index";

import ButtonTask from "@/components/UI/ButtonTask.vue";

export default {
  components: {
    ButtonTask,
  },
  setup() {
    const taskStore = useTaskStore();
    let tasks = ref(taskStore.tasks);

    const editTask = (task) => {
      taskStore.editTask(task)
    };

    const saveTask = (task) => {
      taskStore.saveTask(task)
      
    };

    const toggleTaskCompleted = (task) => {
      task.completed = !task.completed;
    };

    const filteredTasks = () => {
      tasks.value = taskStore.filteredTasks;
    };

    const uploadTask = (task) => {
      taskStore.uploadTask(task)
    }

    onMounted(() => {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
      if (savedTasks) {
        savedTasks.forEach((task) => {
          taskStore.addTask(task);
        });
      }
    });

   

    return {
      tasks,
      editTask,
      saveTask,
      deleteTask: taskStore.deleteTask,
      removeAll: taskStore.removeAll,
      toggleTaskCompleted,
      filteredTasks,
      uploadTask
    };
  },
};
</script>

<template>
  <div class="edit-task">
    <div class="edit-task__status">
      <div class="edit-task__title">Task list</div>
      <div class="edit-task__status-action">
        <ButtonTask @click="filteredTasks" filter></ButtonTask>
        <ButtonTask @click="removeAll" removeall>Remove all</ButtonTask>
      </div>
    </div>
    <div class="edit-task__block">
      <ul class="edit-task__tasks-list">
        <li class="edit-task__list-item" v-for="task in tasks" :key="task.id">
          <div
            class="edit-task__task"
            :class="{ completed: task.completed }"
            v-if="!task.editing"
            @click="toggleTaskCompleted(task)"
          >
            {{ task.name }}
          </div>
          <textarea
            v-else
            v-model="task.name"
            class="edit-task__text-task"
            type="text"
            id="inputTask"
            @keyup.enter="saveTask(task)"
          />
          <div class="edit-task__btn-block">
            <ButtonTask
              v-if="!task.editing"
              edit
              @click="editTask(task)"
            ></ButtonTask>
            <ButtonTask v-else @click="saveTask(task)" save></ButtonTask>
            <ButtonTask @click="deleteTask(task.id)" remove></ButtonTask>
            <router-link :to="{ name: 'info', query: { taskId: task.id } }">
              <ButtonTask @click="uploadTask(task)" info />
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
.edit-task {
  &__status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    align-items: center;
    margin-bottom: 16px;
  }

  &__status-action {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 26px;
  }

  &__btn-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  &__tasks-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  &__list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  &__task {
    @include task;
    cursor: pointer;
  }

  &__task.completed {
    text-decoration: line-through;
    background-color: var(--primary-color-orange);
  }

  &__text-task {
    resize: none;
    min-height: 70px;

    @include task;
  }
}

@media (max-width: 880px) {
  .edit-task {
    &__list-item {
      flex-direction: column;
      justify-content: start;
      align-items: normal;
    }
    &__btn-block {
      justify-content: start;
    }
  }
}

@media (max-width: 680px) {
  .edit-task {
    &__status {
      display: grid;
      gap: 10px;
    }

    &__tasks-list {
      gap: 20px;
    }
  }
}
</style>

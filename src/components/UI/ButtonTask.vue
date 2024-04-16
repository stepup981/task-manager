<script>
export default {
  props: {
    add: {
      type: Boolean,
      default: false,
    },
    edit: {
      type: Boolean,
      default: false,
    },
    remove: {
      type: Boolean,
      default: false,
    },
    removeall: {
      type: Boolean,
      default: false,
    },
    save: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    },
    filter: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<template>
  <button
    type="submit"
    class="btn"
    :class="{
      add: add,
      edit: edit,
      remove: remove,
      removeall: removeall,
      save: save,
      info: info,
      filter: filter
    }"
  >
  <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  background-color: white;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px 8px;
  cursor: pointer;
  border: none;
  font-size: 14px;

  &::before {
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transform: scale(1.05);
    background-color: var(--primary-color-orange);
  }
}

.add {
  &::before {
    content: url("@/assets/add.svg");
  }
}

.edit {
  &::before {
    content: url("@/assets/edit.svg");
  }
}

.remove,
.removeall {
  &::before {
    content: url("@/assets/delete.svg");
  }
}

.save {
  &::before {
    content: url("@/assets/done.svg");
  }
}

.info {
  &::before {
    content: url("@/assets/question.svg");
  }
}

.filter {
  max-width: 40px;
  &::before {
    content: url("@/assets/filter.svg");
  }
}

@media (max-width: 680px) {
  .btn {
    gap: 5px;
    max-width: 50%;
  }

  .removeall {
    width: 100%;
  &::before {
    content: url("@/assets/delete.svg");
  }
}
}
</style>

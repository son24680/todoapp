<template>
  <div class='todo-item'>
    <p class='todo-item__text'>{{todo.text}}</p>
    <div class='todo-item__delete' @click='deleteItem(todo)'>-</div>
  </div>
</template>

<script>
  export default {
    name: 'to-do-item',
    props: ['todo'],
    methods: {
      deleteItem(todo) {
        this.$emit('delete', todo);
      },
    },
  };
</script>

<style lang="scss">
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: center;

    * {
      padding: 6px;
    }

    &__delete {
      cursor: pointer;
    }
  }
</style>
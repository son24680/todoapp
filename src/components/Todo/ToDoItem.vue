<template>
  <div class='todo-item'>
    <p class='todo-item__text'>{{todo.text}}</p>
    <div class='todo-item__delete' @click='deleteItem(todo)'>-</div>
    <div class='todo-item__update' @click='updateItem(todo)'>-</div>
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
      updateItem(todo) {
        this.$emit('update', todo);
      },
    },
  };
</script>

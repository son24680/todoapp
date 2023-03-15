<template>
    <div class='todo-container'>
      <div class='todo'>
        <h1 class='todo__header'>Vue ToDo</h1>
        <div class='todo__container'>
          <div class='todo__content'>
            <ToDoItem v-for='todo in list' :todo='todo' @delete='onDeleteItem' :key='todo.id' />
          </div>
          <div class='todo__content'>
            <ToDoItem v-for='todo in list' :todo='todo' @update='oncreateNewToDoItem' :key='todo.id' />
          </div>
          <div class='todo__form'>
            <input type='text' v-model='todo' v-on:keyup.enter='createNewToDoItem'>
            <input type="submit" class='todo__add' value='+' @click="createNewToDoItem"/>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import ToDoItem from './ToDoItem';
  
  export default {
    name: 'to-do',
    components: {
      ToDoItem,
    },
    data() {
      return {
        list: [
          {
            id: 1,
            text: 'Learn HTML',
          },
          {
            id: 2,
            text: 'Learn CSS',
          },
          {
            id: 3,
            text: 'Learn ReactJS',
          },
        ],
        todo: '',
      };
    },
    methods: {
      createNewToDoItem() {
        if (!this.todo) {
          // eslint-disable-next-line
          alert('Please enter a todo!');
          return;
        }
        const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
        this.list.push({ id: newId, text: this.todo });
        this.todo = '';
      },
      onUpdate() {
          this.list = this.list.map(item => item !== this.todo);
      },
      onDeleteItem(todo) {
        this.list = this.list.filter(item => item !== todo);
      },
    },
  };
</script>

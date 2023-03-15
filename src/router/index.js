import Vue from 'vue';
import Router from 'vue-router';
import ToDo from '@/components/ToDo/ToDo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'To Do',
      component: ToDo,
    },
  ],
});
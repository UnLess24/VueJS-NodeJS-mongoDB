import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import CreateItem from '../components/CreateItem.vue';
import DisplayItem from '../components/DisplayItem.vue';
import EditItem from '../components/EditItem.vue';

const routes = [
  { name: 'CreateItem', path: '/create/item', component: CreateItem },
  { name: 'DisplayItem', path: '/', component: DisplayItem },
  { name: 'EditItem', path: '/edit/:id', component: EditItem },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

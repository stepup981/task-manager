import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import TaskList from "@/views/TaskList.vue";
import TaskInfo from '@/components/TaskInfo'

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/task",
    name: "task",
    component: TaskList,
  },
  { 
    path: "/info",
    name: 'info',
    component: TaskInfo,
    props: (route) => ({task: route.query.taskId})
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

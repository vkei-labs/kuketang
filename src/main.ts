
import { createApp } from 'vue'
import App from './App.vue'
import {createBootstrap} from 'bootstrap-vue-next'

const app = createApp(App);
app.use(createBootstrap());
app.mount('#app');

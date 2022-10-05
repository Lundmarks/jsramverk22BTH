import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
// import Nav from "vue-nav-ui";

createApp(App).use(CKEditor).mount('#app')
// createApp(App).use(CKEditor, Nav).mount('#app')


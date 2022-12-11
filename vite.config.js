const vue = require('@vitejs/plugin-vue');
import { defineConfig } from "vite";


export default defineConfig({
    test: {
        environment: "happy-dom"
    },
    plugins: [vue()]
});
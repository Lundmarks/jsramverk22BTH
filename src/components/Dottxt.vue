<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" tag-name="textarea" id="editor1" class="editor1"></ckeditor>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default {
    name: 'Dottxt',
    data() {
        return {
            // The configuration of the editor.
            editor: ClassicEditor,
            editorData: '<p>Text here..</p>',
            name: '',
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
    font-style: italic;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: black;
    text-decoration: none;
    border: 2px solid black;
    padding: 7px;
    border-radius: 12px;
    transition-duration: 0.4s;
}

a:hover {
    background-color: #e8ffc6;
    color: #3e8e34;
    border-color: #51a372;
}
</style>

<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div id="app">
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'Dottxt',
    props: {
        msg: String
    },
    data() {
        return {
            // CKEditor
            editor: ClassicEditor,
            editorData: '<p>Text here..</p>',
            editorConfig: {
                // The configuration of the editor.
                //removePlugins: ['ImageToolbar', 'ImageUpload', 'MediaEmbed']
            },
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
      color: #42b983;
}
</style>

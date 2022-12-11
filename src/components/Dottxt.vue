<template>
    <div>
        <h3> Load document </h3>
        <ul>
            <li v-for="doc in docs" v-bind:key="doc._id">
                <a href="#" class="loadBtn" v-bind:class="loadBtn" @click="loadDocument(doc)"> {{doc.name}} </a>
            </li>
        </ul>
        <div id="ckeditorContainer">
            <ckeditor id="editor" :editor="editor" v-model="editorData"></ckeditor>
        </div>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default {
    name: 'Dottxt',
    mounted() {
        this.getDocs();
    },
    created() {
        this.$root.dottxtComponent = this;
    },
    methods: {
        getDocs() {
            let that = this;
            fetch("https://jsramverk-dottxt.azurewebsites.net/docs")
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                that.docs = result.data;
            });
        },
        loadDocument(document) {
            // this.getDocs();
            this.$root.headerComponent.setUsername(document.name);
            this.editorData = document.docContent;
        },
        getEditorContent() {
            return this.editorData;
        }
    },
    data() {
        return {
            // // The configuration of the editor.
            editor: ClassicEditor,
            editorData: "<p>Text here..</p>",
            name: '',
            docs: null,
            loadBtn: null,
        };
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped insert="body">

h1 {
    font-style: italic;
}

a {
    color: black;
    text-decoration: none;
    border: 1px solid black;
    padding: 5px;
    border-radius: 4px;
    transition-duration: 0.4s;
    font-size: small;
}

a:hover {
    background-color: black;
    color: lightblue;
    border-color: blue;

}

li {
    margin: 15px 0 0 -35px;
    list-style: none;
}

</style>

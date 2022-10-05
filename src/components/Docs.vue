<template>
  <h1> DOCS </h1>
</template>


<script>
// import Nav from "vue-nav-ui"
// import docs from "../../models/docs"

export default {
    // name: 'Docs',
    components: {
      // baseUrl: "https://jsramverk-dottxt.azurewebsites.net/",
    },
    methods: {
        getAllDocs: async function getAllDocs() {
          console.log("GETALLDOCS");
          console.log(window.location.href);
          // const response = await fetch
        }
    },
    data() {
        return {
          // todo
        };
    }
}
</script>

<!-- <script>
export default {
  data() {
    return {
      docs: [],
    };
  },

  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script> -->
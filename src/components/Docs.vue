<template>
  <h1> Saved documents</h1>
  <ul>
     <li v-for="doc in docs" v-bind:key="doc._id">
        {{ doc.name }}
      </li>
  </ul>
</template>


<script>
// import Nav from "vue-nav-ui"

export default {
    // name: 'Docs',
    components: {
      // baseUrl: "https://jsramverk-dottxt.azurewebsites.net/",
    },
    mounted() {
    this.getDocs();
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
    }
  },
    data() {
        return {
          docs: null,
        };
    }
}
</script>
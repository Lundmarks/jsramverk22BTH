<template>
    <img alt="dottxt logo" src="./assets/dottxt.png">
    <Header titleText="Dottxt Text Editor"/>
    <Dottxt/>
</template>

<script>
import Header from './components/Header.vue'
import Dottxt from './components/Dottxt.vue'

export default {
    name: 'App',
    components: {
        Header,
        Dottxt
    },
    methods: {
        // saveText: function() {
        //     alert('saveText');
        // }
    },
    data(){
        return {
            //Nothing yet
    }
}
};

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>

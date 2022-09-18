<template>
    <img alt="dottxt logo" src="./assets/dottxt.png">
    <Nav :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
        <img class="img" src="" alt="" />
        <a href="#" class="saveBtn" v-bind:class="saveButton" @click="saveText"> Save </a>
    </Nav>
    <Dottxt msg="Dottxt Text Editor"/>
</template>

<script>
import Dottxt from './components/Dottxt.vue'
import Nav from "vue-nav-ui"

// export default {
//     name: 'App',
//
//     components: {
//         Dottxt,
//         Nav
//     }
// }

export default {
    name: 'App',
    components: {
        Dottxt,
        Nav,
    },
    methods: {
        saveText: function() {
            alert('saveText');
            
        }
    },
    data(){
        return {
            /* FOR YOUR NAVIGATION LINKING NAMES AND PATHS */
            // navLinks: [
            //     {
            //         name: "Home",
            //         path: "/",
            //     },
            // ],
            navConfig: {
                whitespace: true, /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */
                navBg: "#FAFAFA", /* BACKGROUND COLOR OF YOUR NAV  */
                navBorderRadius: "30px", /* BORDER RADIUS OF YOUR NAV */
                linkFont: "poppins", /* FONT FAMILY OF YOUR NAV */
                linkColor: "black", /* FONT COLOR OF YOUR NAV */
                responsivePosition: "TOP", /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */
            },
            btnConfig: {
                btnLink: false, /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */
                btnUrl: "showMore", /* LINK URL OF YOUR NAV BUTTON */
                btnText: "Save", /* NAV BUTTON TEXT */
                btnBg: "#004d15", /* BACKGROUND COLOR OF YOUR NAV BUTTON  */
                btnTextColor: "white", /* FONT COLOR OF YOUR NAV BUTTON*/
                btnBorderWidth: "5", /* BORDER WIDTH OF YOUR NAV BUTTON */
                btnBorderColor: "black", /* BORDER COLOR OF YOUR NAV BUTTON */
                btnBorderRadius: "20px", /* BORDER RADIUS OF YOUR NAV BUTTON */
            }
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

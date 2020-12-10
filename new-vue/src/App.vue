<template>
    <div id="app">
        <h2>egg-learning</h2>
<!--        <TabBar></TabBar>-->
    </div>
    <router-view></router-view>
</template>

<script>

    import Select from "./components/Select";
    import TabBar from "./components/tabBar/TabBar";
    import Home from "./views/Home"

    export default {
        name: 'app',
        components: {
            Select,
            Home,
            TabBar
        },
        data(){
            return {
                islogin:false

            }
        },
        mounted() {
            // this.isLogin()
        },
        methods:{
            // isLogin(){
            //     let token=localStorage.getItem('token')
            //     if(token){
            //         this.islogin=true
            //         console.log(this.islogin)
            //         console.log(token)
            //     }
            // }
        }
    }
</script>

<style>

</style>

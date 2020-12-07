<template>
    <div id="app">
        <h2>egg-learning</h2>
<!--        <Select></Select>-->
<!--        <Home></Home>-->
    </div>
    <router-view></router-view>
</template>

<script>

    import Select from "./components/Select";
    import Home from "./views/Home"

    export default {
        name: 'app',
        components: {
            Select,
            Home
        }
    }
</script>

<style>

</style>

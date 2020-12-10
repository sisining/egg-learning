<template>
    <div>
        <TabBar></TabBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import TabBar from '../components/tabBar/TabBar'

    export default {
        name: "Index",
        components: {
            TabBar
        },
        data() {
            return {}
        },
        computed: {},
        methods: {}

    }
</script>

<style scoped>

</style>

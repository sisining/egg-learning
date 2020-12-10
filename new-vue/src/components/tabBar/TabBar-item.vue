<template>
    <div class="box">
        <div class="tab-bar-item" @click="itemClick">
        <slot name="slot-text"></slot>
    </div>
    </div>
</template>

<script>
    export default {
        name: "TabBar-item",
        data() {
            return {}
        },
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'deepSkyblue'
            }
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        text-align: center;
        width: 55px;
    }

    .box{
        display: flex;
    }


</style>

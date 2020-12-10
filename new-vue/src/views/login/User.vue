<template>
    <div>
        <h2>
            个人中心
            {{222+token}}
        </h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        data(){
            return{
                token:null
            }
        },
        methods:{
            get(){
                return  this.token=localStorage.getItem('token')
            }
        }
    }
</script>

<style scoped>

</style>

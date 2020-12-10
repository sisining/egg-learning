<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <BarItem path="/index/user">
                    <template v-slot:slot-text>
                        <div>个人中心</div>
                    </template>
                </BarItem>
            </el-menu-item>
            <el-menu-item index="2">
                <BarItem path="/index/message">
                    <template v-slot:slot-text>
                        <div>消息中心</div>
                    </template>
                </BarItem>
            </el-menu-item>
            <el-menu-item index="3" id="user">
                <BarItem path="/index/admin">
                    <template v-slot:slot-text>
                        <div>用户管理</div>
                    </template>
                </BarItem>
            </el-menu-item>
            <el-menu-item @click="loginOut">
                <div>注销</div>
            </el-menu-item>
            <el-menu-item>
                <div>{{type}}</div>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
    import BarItem from './TabBar-item'
    import {mapGetters} from 'vuex'
    import $ from 'jquery'
    export default {
        name: "TabBar",
        components: {
            BarItem
        },
        data() {
            return {
                activeIndex: '1',
                path: String,
                admin:false,
                type:null
            }
        },
        mounted() {
            this.adminType()
        },
        computed:{
            ...mapGetters(['theType'])
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            loginOut(){
                this.$store.commit('failureLogin')
                this.$router.push('/login')
            },
            adminType(){
            let type=this.$store.getters.theType
                console.log(type)
                if(type!=1){
                    this.admin=true
                    this.type="用户登录"
                    $('#user').attr('disabled','disabled')
                }else{
                        this.type="管理员"
                }
            }
        }

    }
</script>

<style scoped>
    .el-menu-item {
        height: 56px;
        font-size: 14px;
        color: #303133;
        padding: 0 30px;
        position: relative;
        -webkit-transition: border-color .3s, background-color .3s, color .3s;
        transition: border-color .3s, background-color .3s, color .3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .admin{
        pointer-events: none;
    }
</style>

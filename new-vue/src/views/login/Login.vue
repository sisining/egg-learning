<template>
    <div class="login">
        <div style="display: flex;justify-content: center;align-items:center;margin-top: 150px">
            <el-card style="width: 400px;">
                <div slot="header" class="clearfix">
                    <h2>登录</h2>
                </div>
                <table>
                    <tr>
                        <td>用户名</td>
                        <td>
                            <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td>密码</td>
                        <td>
                            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"
                                      @keydown.enter.native="doLogin"></el-input>
                            <!-- @keydown.enter.native="doLogin"当按下enter键的时候也会执行doLogin方法-->
                        </td>
                    </tr>
                    <tr>
                        <!-- 占两行-->
                        <td colspan="2">
                            <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
                        </td>
                    </tr>
                </table>
            </el-card>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {loginIn} from "../../network";

    export default {
        name: "login",
        data() {
            return {
                labelPosition: 'right',
                loginForm: {
                    name: '',
                    password: '',
                },
            };
        },
        props:{
            qx:{

            }
        },
        methods: {
            ...mapMutations(['changeLogin', 'failureLogin']),

            doLogin() {//一点击登录按钮，这个方法就会执行
                // alert(JSON.stringify(this.user))//可以直接把this.user对象传给后端进行校验用户名和密码
                const name = this.loginForm.name
                const password = this.loginForm.password
                console.log(this.loginForm)
                if (name === '' || password === '') {
                    this.$alert('账号或密码不能为空', '内容错误', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `请正确输入账号密码`
                            });
                        }
                    });
                } else {
                    let obj = this.loginForm
                    console.log(obj)
                    loginIn(obj).then(res => {
                        console.log(res)
                        console.log(obj)
                        let token = res.data.token
                        console.log(token)
                        if (token) {
                            // let token = 'Bearer ' + token
                            // 将用户token保存到vuex中
                            // this.changeLogin(token);
                            this.$store.commit('changeLogin',token)
                            console.log(localStorage.getItem('token'))
                            console.log(this.$store.state.token)
                            //进入到home
                            this.$router.push('/index')
                            this.$message({
                                type: 'success',
                                message: `登录成功`
                            });
                            console.log(res.data.data[0].admin)
                            let type=res.data.data[0].admin
                            this.$store.commit('loginType',type)
                        } else {
                            this.$alert('登录失败,用户名或密码错误', '用户登录', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$message({
                                        type: 'error',
                                        message: `请检查输入的用户名或密码`
                                    });
                                }
                            })
                        }

                    }).catch(err => {
                        this.failureLogin()
                        //清空token
                        // this.$store.commit('loginOut')
                        this.$router.push('/login');
                        console.log(err)
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        display: flex;
        justify-content: center;
    }

    .form {
        width: 40%;
    }

    .input {
        margin-left: 5px;
        width: 80px;
    }

</style>

export default {
    // 修改token，并将token存入localStorage
    // changeLogin (state, user) {
    //   state.Authorization = user.Authorization;
    //   localStorage.setItem('Authorization', user.Authorization);
    // },
    changeLogin(state, token) {
        state.token = token
        localStorage.token = token;
        console.log(state.token)
        localStorage.setItem('token', state.token)

    },

    failureLogin(state) {
        state.token = ''
        localStorage.removeItem('token')
    },

    //登录的类型
    loginType(state, payload) {
        console.log(payload)
        state.type = payload
    },

    loginIn(state,token){
        state.userToken=token
    },

    loginOut(state){
        state.userToken=''
    }
}

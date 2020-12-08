export default {
    // 修改token，并将token存入localStorage
    // changeLogin (state, user) {
    //   state.Authorization = user.Authorization;
    //   localStorage.setItem('Authorization', user.Authorization);
    // },
    changeLogin (state,token) {
        state.token=token
      localStorage.token=token;
    },

    failureLogin(state){
        state.token=''
        localStorage.removeItem('token')
    }
}

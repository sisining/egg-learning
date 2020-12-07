import  axios from 'axios'

export default {
    getAll(params){
        return axios.get('/query',params)
    },
    addOne(params){
        return axios.post('/create',params)
    },

    updateThose(params){
        return axios.put('/update',params)
    },

    deleteThose(params){
        return axios.delete('/delete',params)
    }
}

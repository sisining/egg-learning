import {request} from './request'

export function getDate() {
    return request({
        url: '/query',
        method: 'GET'
    })
}

//findOne
export function findOne() {
    return request({
        url: '/queryOne',
        method: 'GET'
    })
}

//添加
export function createOne(params) {
    return request({
        url: '/create',
        method: 'POST',
        data: {...params}
    })
}

//更新
export function updateOne(params) {
    return request({
        url: '/update',
        method: 'PUT',
        data: {...params}
    })
}

//删除
export function deleteOne(id) {
    return request({
        url: '/delete',
        method: 'DELETE',
        params: {id}

    })
}

//级联选择
export function selectDate() {
    return request({
        url: '/select',
        method: 'GET',

    })
}

export function selectRegion(fjzj) {
    return request({
        url: '/selectRegion',
        method: 'GET',
        params: {fjzj}

    })
}

export function selectProvince() {
    return request({
        url: '/selectProvince',
        method: 'GET',

    })
}

export function selectCity(fjzj) {
    return request({
        url: '/selectCity',
        method: 'GET',
        params: {fjzj}

    })
}

// export function selectMore(ssdy) {
//   return request({
//     url: '/selectMore',
//     method: 'GET',
//     params: {ssdy}
//
//   })
// }

//上传
export function uploadOne(formData) {
    return request({
        url: '/upload',
        method: 'POST',
        data: formData
    })
}

//下载
export function download(filename) {
    console.log(filename + '==========')
    return request({
        url: '/download',
        method: 'get',
        params: {filename}
    })
}

//登录
export function loginIn(params) {
    return request({
        url: '/login',
        method: 'POST',
        data: params
    })
}





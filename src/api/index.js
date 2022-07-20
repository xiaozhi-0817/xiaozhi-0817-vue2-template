// 封装api 发送请求
import request from '../utils/request'

const publics = ''

// 登陆  get示例
export function getLogin(params) {
    return request({
        url: `${publics}/login`,
        method: 'get',
        params: params,
        headers: {}
    })
}
// 登陆  get示例
export function postLogin(params) {
    return request({
        url: `${publics}/login`,
        method: 'post',
        params: params,
        headers: {}
    })
}

// 一个项目中如果后台请求不是同一个ip，而是多个ip的时候，可以在api文件夹下建立多个js，用来调用请求。


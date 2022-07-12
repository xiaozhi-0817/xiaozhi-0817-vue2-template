// 封装api 发送请求
import http from '../utils/http'

/**
 *  @param request 请求地址 例如：http://127.0.0.1:8088/request/...
 *  @param   '/testIp'代表vue-cil中config，index.js中配置的代理
 */

let request = ''

// --- 分类导出 ---

// // get 请求
// export function getListApi(params) {
//     return http.get(`${request}/map/getScenicSpotPosition`, params)
// }

// // post请求
// export function postFormAPI(params) {
//     return http.post(`${request}/postForm.json`, params)
// }

// 登陆
export function getLogin(params) {
    return http.post(`${request}/web/login`, params)
}
// 获取所有权限
export function getRoot(params) {
    return http.post(`${request}/web/sys/authority/alllist`, params)
}
// 获取操作员1信息
// 获取所有权限
export function getUser1(params) {
    return http.post(`${request}/web/sys/authority/list`, params)
}
// 获取操作员2信息
// 获取所有权限
export function getUser2(params) {
    return http.post(`${request}/web/sys/operator/list`, params)
}
// 提交数据
export function addSubmit(params) {
    return http.post(`${request}/web/sys/authority/add`, params)
}
// 一个项目中如果后台请求不是同一个ip，而是多个ip的时候，可以在api文件夹下建立多个js，用来调用请求。


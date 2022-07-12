import axios from 'axios'
// 导入axios
// import Cookies from "js-cookie"; 可以使用js-cookie插件 npm install --save js-cookie
// 1 创建新的axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    // 超时时间  这里设置的是五秒
    timeout: 5 * 1000
})
// 2 请求拦截器
service.interceptors.request.use(config => {
    /**
   * 使用js-cookie 添加token 实例
   *  let token = Cookies.get('token')
   *  config.headers['Authorization'] = token; // 让每个请求携带自定义token 请根据实际情况自行修改
   */
    // 发送请求钱做的一些处理 数据转换 ，配置请求头  这是token ，设置loading等， 根据需求添加
    // config.data = JSON.stringify(config.data); // 数据转换，也可以使用qs转换
    config.headers = {
        'content-type': 'application/json;charset=UTF-8' // 配置请求头
    }
    // 注意使用token的时候需要引入cookie方法或者使用本地localStorage等方法
    // const token = getCookie('名称') // 这里取到token之前，需要先拿到token 存起了
    // const token = 'token'
    // if (token) {
    //     config.params = { "token": token }
    //     config.headers.token = token
    // }
    return config
}, error => {
    Promise.reject(error)
})

//  参考地址  https://blog.csdn.net/weixin_43216105/article/details/98877960?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164483395416780271540783%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164483395416780271540783&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~hot_rank-1-98877960.first_rank_v2_pc_rank_v29&utm_term=vue%E5%B0%81%E8%A3%85axios&spm=1018.2226.3001.4187

// 3 响应拦截器 
service.interceptors.response.use(response => {
    // 接收到响应数据并成功后的一些共有处理，关闭loading等操作
    return response.data
}, error => {
    //  --- ---  接收到异常响应后的处理 --- ---
    if (error && error.response) {
        // 1 公共错处理
        // 2 更具响应码具体处理
        switch (error.response.status) {
            case 400:
                console.log('错误请求')
                break;
            case 401:
                console.log('未授权，请重新登录')
                break;
            case 403:
                console.log('拒绝访问')
                break;
            case 404:
                console.log('请求错误,未找到该资源')
                // window.location.href = "/NotFound" //NotFound
                break;
            case 405:
                console.log('请求方法未允许')
                break;
            case 408:
                console.log('请求超时')
                break;
            case 500:
                console.log('服务器端出错')
                break;
            case 501:
                console.log('网络未实现')
                break;
            case 502:
                console.log('网络错误')
                break;
            case 503:
                console.log('服务不可用')
                break;
            case 504:
                console.log('网络超时')
                break;
            case 505:
                console.log('http版本不支持该请求')
                break;
            default:
                console.log(`连接错误${error.response.status}`)
        }
        console.log(error.response.status, '状态码');
    } else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout')) {
            console.log("服务器响应超时，请刷新当前页面");
        }
        console.log('服务器链接失败');
    }
    console.log(error.message);
    // 如果不需要错误处理 以上过程都可以省略
    return Promise.resolve(error.response)
})
// 4 导出文件
export default service
// 统一管理我们的开发 接口 api
import axios from "axios"
let instance = axios.create({
    baseURL:"/api", // 基准地址
    timeout:5000
})
// 请求响应拦截
instance.interceptors.request.use((config) => {
    // 请求拦截
    // console.log(config)
    // config.headers.token = "wwwwwww"
    return config
})
instance.interceptors.response.use(response => {
    // response 是后台发回的响应数据
    return response
})


export default instance
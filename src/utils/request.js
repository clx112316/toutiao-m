//封装网络请求模块
import axios from 'axios'

//方法一：
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/'
// export default axios

//方法二：
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/'
})
export default request
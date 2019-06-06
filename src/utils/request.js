import axios from 'axios'
import {
    Message
} from 'element-ui'

const service = axios.create({
    baseURL: '',
    timeout: 60000
})


// response interceptor 请求拦截
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response interceptor 响应拦截
service.interceptors.response.use(
    response => {
        if (response.data.code != 0) {
            Message({
                message: response.data.message,
                type: 'error'
            })
        }
        return response.data
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service

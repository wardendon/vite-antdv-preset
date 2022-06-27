import axios from 'axios'
import router from '@/router'
// import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

// 获取token
const getToken = () => {
  const userStore = useUserStore()
  const { token } = userStore
  return token
}
// 根据环境获取baseUrl
const baseUrl = import.meta.env.VITE_BaseUrl
// 创建实例
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
})
// 封装get请求
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then(
      (response) => {
        resolve(response)
      },
      (err) => {
        reject(err)
      },
    )
  })
}
// 封装post请求
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        },
      )
  })
}

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { code, message, data } = response.data
    //   要根据code决定下面的操作
    if (code == 200 && data) {
      // console.log('响应拦截器:data', data)
      return data
    } else if (code == 200) {
      return response.data
    } else if (code == 10004) {
      // 未能读取到有效Token，清空storage
      window.localStorage.clear()
      console.log('message', message)
    } else {
      // 业务错误
      // return Promise.reject(new Error(message))
      return response.data
    }
  },
  (error) => {
    let errorInfo = error.response
    if (!errorInfo) {
      const {
        request: { statusText, status },
      } = JSON.parse(JSON.stringify(error))
      errorInfo = {
        statusText,
        status,
      }
    }

    if (errorInfo.status === 404) {
      router.push({
        name: 'error_404',
      })
    } else if (errorInfo.status === 500) {
      router.push({
        name: 'error_500',
      })
    }
    return Promise.reject(error)
  },
)

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    // 在这个位置需要统一的去注入token
    if (token) {
      console.log('token', token)
      // 如果token存在 注入token
      config.headers.token = token
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance

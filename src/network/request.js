import axios from 'axios'

export function request(config) {
  const instance =new axios.create({
    baseURL:'http://185.152.210.136:8000/api/z8',
    timeout:5000
  })
  //1.请求拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err => {

  })
  //2.响应拦截器
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{

  })
  return instance(config)
}

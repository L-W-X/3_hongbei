import axios from'axios';

const instance=axios.create({
    baseURL:'/api',
    timeout:20000
})

instance.interceptors.request.use(config =>{
    console.log(config)
    return config
})

instance.interceptors.response.use(response =>{
    return response.data
},
err=>{
    return Promise.reject(error)
}
)
export default instance
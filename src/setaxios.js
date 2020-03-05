import axios from 'axios'
import store from '@/store/store'
import router from '@/router.js'


export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers.token=store.state.token
            }
            return config
        }
    )
    axios.interceptors.response.use(
        response=>{
            if(response.status==200){
                const data=response.data
                if(data.code==-1){
                    store.commit('settoken','')
                    localStorage.removeItem('token')
                    //跳转到login页面
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}
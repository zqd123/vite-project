import {createPinia, defineStore} from 'pinia'
export const useUserStore = defineStore('user',{
    state:()=>({
        name:'zhangqd'
    })
})
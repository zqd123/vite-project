import router from './index'

/**前置守卫 */
router.beforeEach((to,from)=>{
    console.log({to,from});
    return true;
})
/**后置守卫 */
router.afterEach((to,from)=>{
    // console.log({to,from});
})
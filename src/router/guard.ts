import router from './index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';

/**前置守卫 */
router.beforeEach((to,from)=>{
    console.log({to,from});
    nprogress.start()
    return true;
})
/**后置守卫 */
router.afterEach((to,from)=>{
    nprogress.done()
    // console.log({to,from});
})
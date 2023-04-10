import {createRouter,createWebHashHistory} from 'vue-router'
import routes from './routes'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/**前置守卫 */
router.beforeEach((to,from)=>{
  console.log({to,from});
  return true;
})
/**后置守卫 */
router.afterEach((to,from)=>{
  // console.log({to,from});
})

export default router
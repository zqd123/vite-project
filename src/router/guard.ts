import router from "./index";
import Nprogress from "../utils/progress";

/**前置守卫 */
router.beforeEach((to, from) => {
  // console.log({to,from});
  Nprogress.start();
  return true;
});
/**后置守卫 */
router.afterEach((to, from) => {
  Nprogress.done();
  // console.log({to,from});
});
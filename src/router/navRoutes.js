import router from './index'

const routes = router.options.routes
const navRoutesList = []
let navRoutes = {}

routes.forEach(route => {
  if (route.meta.nav) {
    navRoutesList.push(route)
  }
})

navRoutes = { routes: navRoutesList }

export default navRoutes

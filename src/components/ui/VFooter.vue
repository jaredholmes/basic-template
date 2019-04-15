<template>
  <footer class="ui-v-footer fw-light bc-secondary">
    <div class="container flex align-center justify-between">
      <div class="footer-nav flex dir-col">
         <router-link
            v-for="(route, i) in navRoutes.routes"
            :key="i"
            :to="route.path"
          >
            {{ route.name }}
          </router-link>
      </div>
      <div class="copyright">
        &copy; Company 2019
      </div>
    </div>
  </footer>
</template>

<script>
import navRoutes from '@/router/navRoutes'

export default {
  name: 'VFooter',
  data () {
    return {
      navRoutes: navRoutes
    }
  }
}
</script>

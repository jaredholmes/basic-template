<template>
  <nav class="ui-navbar flex align-center justify-between">
    <div class="navbar-heading flex align-center">
      <img src="../../assets/logo.png" alt="Vue">
      <h1><router-link class="c-text-primary" to="/">Basic Template</router-link></h1>
    </div>
    <div
      @click="toggleNav"
      class="navbar-nav-toggle"
    >
      <icon name="menu"><icon-menu/></icon>
    </div>
    <div
      class="navbar-nav flex fw-regular"
      :class="{ 'active bc-white': navbarActive }"
    >
      <span
        @click="navbarActive = false"
        class="navbar-nav-close text-align-right"
      >
        <icon name="close"><icon-close/></icon>
      </span>
      <span
        v-for="(route, i) in navRoutes.routes"
        :key="i"
        @click="navbarActive = false"
        class="nav-link"
      >
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </span>
    </div>
  </nav>
</template>

<script>
import navRoutes from '@/router/navRoutes'
export default {
  name: 'Navbar',
  data () {
    return {
      navbarActive: false,
      navRoutes: navRoutes
    }
  },
  methods: {
    toggleNav () {
      this.navbarActive = !this.navbarActive
    }
  }
}
</script>

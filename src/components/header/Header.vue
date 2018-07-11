<template>
  <header class="c-header">
    <b-navbar class="customHeader pt-3 pb-3" toggleable="md" type="dark " variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">EVENOR</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav >
          <b-nav-item :to="{ path: '/home'}" >
            Home
          </b-nav-item>
          <b-nav-item :to="{ path: '/achievement/detail'}" >
            Achievement
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form right>
            <b-input-group>
              <b-form-input size="md" type="text" placeholder="Search"/>
              <b-input-group-append>
                <b-button variant="outline-light" class="" type="submit">
                  <icon name="search"></icon>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-nav-form> -->
          <b-nav-item v-show="!autenticated" :to="{ path: '/account/login'}" right >
            Sign in or Sign up
          </b-nav-item>
          <b-nav-item-dropdown v-show="autenticated" right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>My Profile</em>
            </template>
            <b-dropdown-item :to="{ path: '/account/profile'}">My Event</b-dropdown-item>
            <b-dropdown-item @click="logout()">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
import { checkCredentials, destroyCookies } from '@/utils/auth'
import { confirmationAlert, successAlert } from '@/utils/alert'
import router from '@/router/index'
export default {
  name: 'c-header',
  created () {
    console.log('header')
    if (checkCredentials()) {
      console.log('auth true')
      this.$store.dispatch('isAuth', this.true)
    } else {
      console.log('auth false')
      this.$store.dispatch('isAuth', this.false)
    }
  },
  data () {
    return {
      true: true,
      false: false
    }
  },
  methods: {
    logout: function () {
      confirmationAlert('Logout', 'Apakah anda yakin keluar dari sistem?',
        function (e) {
          successAlert('Logout berhasil')
            .then(e => {
              destroyCookies()
              router.go('home')
              router.push('/home')
            })
        }
      )
    }
  },
  computed: {
    autenticated () {
      return this.$store.getters.auth
    }
  }
}
</script>

<style>
a:hover{
  background-color: turquoise;
}
.customHeader{
  z-index: 99;
  background: rgba(10, 100, 255, 0.7) !important;
}
</style>


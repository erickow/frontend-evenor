<template>
  <header class="c-header">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">EVENOR</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav >
          <b-nav-item :to="{ path: '/home'}" >
            Home
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form right>
            <b-input-group>
              <b-form-input size="md" type="text" placeholder="Search"/>
              <b-input-group-append>
                <b-button variant="outline-light" class="" type="submit">
                  <icon name="search"></icon>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Login</em>
            </template>
            <b-dropdown-item :to="{ path: '/profile/'}">My Event</b-dropdown-item>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>
<script>
  export default {
    name: 'c-header',
    components: {
    },
    methods: {
    }
  }
</script>

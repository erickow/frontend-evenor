<template>
  <div class="full">
    <b-container fluid>
      <AppHeader/>
      <div class="app-body">
        <main class="main">
          <b-container fluid id="custom">
            <b-row align-h="center">
              <b-col >
                <router-view></router-view>
              </b-col>
            </b-row>
          </b-container>
        </main>
      </div>
      <AppFooter/>
    </b-container>
  </div>
</template>

<script>
import { Header as AppHeader, Footer as AppFooter } from '@/components'
import { checkCredentials } from '@/utils/auth'

export default {
  name: 'full',
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    checkCredentials()
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}
</style>


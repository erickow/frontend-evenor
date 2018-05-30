<template>
  <div v-if="loading" class="centeringContent">
        <b-row align-h="center" align-v="center">
            <b-col sm="12" md="12" lg="12">
              <epic-spiners
                :animation-duration="800"
                :size="100"
                color="#ff1d5e"
              />
            </b-col>
        </b-row>
  </div>
  <div v-else class="full">
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
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  data () {
    return {
      loading: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}
.centeringContent {
  width: 100%;
  height: 100%;
  margin-top: 20%;
  margin-left: 47%;
}
</style>


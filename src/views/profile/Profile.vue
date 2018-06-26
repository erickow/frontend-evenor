<template>
  <div class="v-profile">
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="11" lg="11">
            <b-card no-body>
              <b-tabs class="text-center" pills vertical card>
              <b-tab active>
                <template align-h="center" slot="title">
                  <b-img fluid :src="require('@/assets/img/icon/profile.png')" width="100" height="100" blank-color="#777" alt="img" class="m-1" /> <br> <strong>Profile</strong>
                </template>
                <profile-detail class="text-left"/>
              </b-tab>
              <b-tab>
                <template class="text-center" slot="title">
                  <b-img fluid :src="require('@/assets/img/icon/event.png')" width="100" height="100" blank-color="#777" alt="img" class="m-1" /> <br> <strong>My Events</strong>
                </template>
                <profile-event class="text-left"/>
              </b-tab>
            </b-tabs>
              
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>

<script>
import { ProfileDetail, ProfileEvent } from '@/components/'
import { getUser } from '@/utils/auth'
export default {
  name: 'v-profile',
  components: {
    ProfileDetail,
    ProfileEvent
  },
  created () {
    this.$store.dispatch('loadMyUpcomingEvent', getUser())
    this.$store.dispatch('loadMyHistoryEvent', getUser())
    this.$store.dispatch('SET_USER')
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

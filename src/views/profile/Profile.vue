<template>
  <div class="v-profile">
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card no-body>
              <b-tabs pills card vertical>
              <b-tab active>
                <template align-h="center" slot="title">
                  <icon scale="3" name="info-circle"></icon> <br> <strong>Profile</strong>
                </template>
                <profile-detail/>
              </b-tab>
              <b-tab>
                <template slot="title">
                  <icon scale="3" name="calendar"></icon> <br> <strong>My Events</strong>
                </template>
                <profile-event/>
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

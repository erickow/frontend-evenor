<template>
  <div class="v-profile">
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card no-body>
              <b-tabs card>
              <b-tab title="Profile" active>
                <profile-detail/>
              </b-tab>
              <b-tab title="My Event">
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
export default {
  name: 'v-profile',
  components: {
    ProfileDetail,
    ProfileEvent
  },
  data () {
    return {
    }
  }
}
</script>

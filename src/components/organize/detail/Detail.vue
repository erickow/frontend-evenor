<template>
  <div class="c-organize-detail">
      <b-row class="m-1" align-h="center">
          <b-col sm="12" md="12" lg="12">
              <b-card>
                <b-row>
                <b-col sm="12" md="7" lg="7">
                    <b-card 
                    no-body
                    :img-src="require('@/assets/img/dummy.jpg')"
                    img-alt="Image"
                    img-top>
                
                </b-card>
                </b-col>
                <b-col sm="12" md="5" lg="5">
                    <b-card class="h-100 boxShadowUp" >
                        <b-table :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :items="comittees"
                                :fields="fields"
                                :per-page="4"
                                :current-page="currentPage">
                        </b-table>
                        <b-pagination size="md" :total-rows="comittees.length" v-model="currentPage" :per-page="4">
                         </b-pagination>
                    </b-card>
                </b-col>
              </b-row>
              <b-row class="mt-4" align-h="center">
                  <b-col sm="12" md="4" lg="4">
                    <b-card class="boxShadowUp">
                        <vote></vote>
                    </b-card>
                  </b-col>
                  <b-col sm="12" md="8" lg="8">
                      <b-card class="boxShadowUp h-100">
                        <h4>{{ event.name }}</h4>
                        <small>{{event.startDate }} - {{ event.endDate}}</small>
                        <br><br>
                        <p>{{ event.description }}</p>
                        
                      </b-card>
                  </b-col>
               </b-row>
              <b-row class="mt-4" align-h="center">
                <b-col sm="12" md="12" lg="12">
                    <b-card class="boxShadowUp">
                        <h1>Recent Activity</h1>
                        
                    </b-card>
                </b-col>
               </b-row>
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>

<script>
import Vote from './vote'
export default {
  name: 'c-organize-detail',
  components: {
    Vote
  },
  created () {
    this.$store.dispatch('loadEventComittee', this.$route.params.eventId)
  },
  data () {
    return {
      currentPage: 1,
      sortBy: 'score',
      sortDesc: true,
      fields: [
        { key: 'comittee.name', sortable: true },
        { key: 'score', sortable: true }
      ]
    }
  },
  computed: {
    event () {
      return this.$store.getters.event
    },
    comittees () {
      return this.$store.getters.eventComittee
    }
  }
}
</script>

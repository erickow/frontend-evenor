<template>
  <div class="c-profile-event">
    <b-tabs pills card>
        <b-tab title="Upcomming Event" active>
          <b-row>
            <b-col sm="12" md="6" lg="6" 
                  v-for="upcoming in myUpcomingEvents"
                  :key="upcoming.id"
                  class="mt-2"
                  >
              <b-card bg-variant="info"
                  text-variant="white"
                  class="h-100"
                  >
                <b-row>
                  <b-col sm="12" md="4" lg="4">
                    <b-img thumbnail fluid rounded blank width="170" height="150" blank-color="#777" alt="img" class="m-1" />
                  </b-col>
                  <b-col sm="12" md="8" lg="8">
                    <h5><strong>{{ upcoming.name.slice(0,20) }}...</strong></h5>
                    <p class="card-text">{{ upcoming.description }}</p>
                    <b-button :to="{ path: '/event/organize/'+ upcoming.id}" variant="primary">Organize Event</b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="History Event">
          <b-row>
            <b-col sm="12" md="6" lg="6" 
                  v-for="history in myHistoryEvents"
                  :key="history.id"
                  class="mt-2"
                  >
              <b-card bg-variant="info"
                  text-variant="white"
                  class="h-100"
                  >
                <b-row>
                  <b-col sm="12" md="4" lg="4">
                    <b-img thumbnail fluid rounded blank width="170" height="150" blank-color="#777" alt="img" class="m-1" />
                  </b-col>
                  <b-col sm="12" md="8" lg="8">
                    <h5><strong>{{ history.name.slice(0,20) }}...</strong></h5>
                    <p class="card-text">{{ history.description }}</p>
                    <b-button :to="{ path: '/event/organize/'+ history.id}" variant="primary">Organize Event</b-button>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'c-profile-event',
  data () {
    return {
    }
  },
  computed: {
    myUpcomingEvents () {
      return this.$store.getters.myUpcomingEvents
    },
    myHistoryEvents () {
      return this.$store.getters.myHistoryEvents
    }
  }
}
</script>

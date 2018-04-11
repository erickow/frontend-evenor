<template>
  <div class="c-profile-event">
      <b-tabs pills card>
                  <b-tab title="Upcomming Event" active>
                    <b-card bg-variant="info"
                            text-variant="white"
                            class="">
                      <b-row>
                        <b-col sm="12" md="3" lg="3">
                           <b-img thumbnail fluid rounded blank width="200" height="200" blank-color="#777" alt="img" class="m-1" />
                        </b-col>
                        <b-col sm="12" md="8" lg="8">
                          <h3 >Event Title</h3>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          <b-button :to="{ path: '/event/organize'}" variant="primary">Organize Event</b-button>
                        </b-col>
                      </b-row>
                    </b-card>
                  </b-tab>
                  <b-tab title="History Event">
                    Belum ada content
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
  }
}
</script>

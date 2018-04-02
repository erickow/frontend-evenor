<template>
  <div class="v-profile">
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card no-body>
              <b-tabs card>
              <b-tab title="Profile" active>
                <b-row>
                <b-col sm="12" md="5" lg="5">
                  <b-img thumbnail fluid rounded blank width="350" height="350" blank-color="#777" alt="img" class="m-1" />
                </b-col>
                <b-col sm="12" md="7" lg="7">
                  <h4>Nama : Ericko Wicaksono</h4>
                  <h4>Email : ericko@mail.com</h4>
                  <Polygraph/>  
                </b-col>
              </b-row>
              </b-tab>
              <b-tab title="My Event">
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
              </b-tab>
            </b-tabs>
              
            </b-card>
          </b-col>
      </b-row>
  </div>
    
  </div>  
</template>

<script>
import Polygraph from '@/components/Polygraph'
export default {
  name: 'v-profile',
  components: {
    Polygraph
  },
  data () {
    return {
    }
  }
}
</script>

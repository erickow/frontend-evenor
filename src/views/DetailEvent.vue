<template>
  <div class="v-detail-event">
      <div class="bg mt-1" :style="{ 'background-image' : 'url(\'' + imageView(event.photo) + '\')' }">
      </div>
      <b-row class="front mt-4" align-h="center">
        <b-col sm="12" md="9" lg="9">
            <b-card-group class="mt-3">
            <b-col class="m-0 p-0" sm="12" md="8" lg="8">
                <b-card no-body>
                    <b-card-img
                            :src="imageView(event.photo)"
                            alt="Img"
                            height="400" top>
                            </b-card-img>
                
                </b-card>
            </b-col>
            <b-col class="m-0 p-0" sm="12" md="4" lg="4">
                <b-card class="h-100" bg-variant="white" text-variant="dark" >
                    <div>
                        <br> <br>
                        <h2>{{ event.name }}</h2>
                        <br><br><br><br><br><br>
                        <b-row align-v="end">
                            <b-col sm="12" md="5" lg="5">
                                <b-button @click="setComittee()" v-show="event.setComittee" variant="primary">Daftar Panitia</b-button>
                            </b-col>
                            <b-col sm="12" md="5" lg="5">
                                <b-button @click="setParticipant()" v-show="event.setParticipant" variant="primary">Daftar Partisipan</b-button>
                            </b-col>
                        </b-row>
                        
                    </div>
                    
                </b-card>
            </b-col>
            </b-card-group>
        </b-col>
      </b-row>

      <b-row class="mt-0" align-h="center">
          <b-col sm="12" md="9" lg="9">
              <b-card>
                  <b-row>
                      <b-col sm="12" md="8" lg="8">
                    <p class="card-text">
                    <strong> Deskripsi: </strong> 
                        <br>
                        {{ event.description}}
                    </p>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                    <b-card bg-variant="light" text-variant="dark" >
                        <div>
                            <p class="card-text">
                                <strong> Mulai </strong> 
                                <br>
                                {{ event.startDate }}
                                <br>
                                <strong> Selesai </strong> 
                                <br>
                                {{ event.endDate }}
                            </p>
                            </div>
                    </b-card>
                </b-col>
                  </b-row>
              </b-card>          
          </b-col>
      </b-row>
  </div>
      
</template>

<script>
import { confirmationAlert } from '@/utils/alert'
export default {
  name: 'v-detail-event',
  created () {
    this.$store.dispatch('loadEvent', this.$route.params.eventId)
  },
  data () {
    return {
    }
  },
  methods: {
    imageView (data) {
      return URL.createObjectURL(new Blob([data], {type: 'image/jpeg'}))
    },
    setComittee: function () {
      confirmationAlert('Daftar Panitia', 'Apakah anda yakin untuk mendaftar menjadi panitia?',
      function (e) {
      })
    },
    setParticipant: function () {
      confirmationAlert('Daftar Partisipan', 'Apakah anda yakin untuk mendaftar menjadi partisipan?',
      function (e) {
      })
    }
  },
  computed: {
    event () {
      return this.$store.getters.event
    }
  }
}
</script>

<style scoped>
.bg {
  /* Half height */
  height: 400px !important; 
  /* Center and scale the image nicely */
  background-position: center !important;
  background-repeat: no-repeat!important;
  background-size: cover !important;
  -webkit-filter: blur(4px);
  -moz-filter: blur(4px);
  -o-filter: blur(4px);
  -ms-filter: blur(4px);
  filter: blur(4px), brightness(50%);
  background-attachment: fixed;
}
.front{
  margin-top: -350px !important;
}
</style>

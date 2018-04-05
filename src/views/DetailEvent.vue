<template>
  <div class="v-detail-event">
      <b-row class="mt-4" align-h="center">
        <b-col sm="12" md="10" lg="10">
            <b-card-group deck>
            <b-col sm="12" md="8" lg="8">
                <b-card no-body>
                    <b-card-img
                            :src="require('../assets/img/dummy.jpg')"
                            alt="Img"
                            height="360" top>
                            </b-card-img>
                
                </b-card>
            </b-col>
            <b-col sm="12" md="4" lg="4">
                <b-card class="h-100" bg-variant="info" text-variant="white" title="Pelaksanaan">
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
                    <b-button href="#" variant="primary">Daftar Peserta</b-button> <br><br>
                    <b-button href="#" variant="primary">Daftar Panitia</b-button>
                    </div>
                    
                </b-card>
            </b-col>
            </b-card-group>
        </b-col>
      </b-row>
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card >
                <h4>{{ event.name }}</h4>
                <small>{{ event.startDate }}</small>
                <p class="card-text">
                   <strong> Deskripsi: </strong> 
                    <br>
                    {{ event.description}}
                </p>
                
            </b-card>
          </b-col>
      </b-row>
  </div>
    
  </div>  
</template>

<script>
export default {
  name: 'v-detail-event',
  created () {
    this.$store.dispatch('loadEvent', this.$route.params.eventId)
  },
  data () {
    return {
    }
  },
  computed: {
    event () {
      return this.$store.getters.event
    }
  }
}
</script>

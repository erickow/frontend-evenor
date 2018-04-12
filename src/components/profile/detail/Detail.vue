<template>
  <div class="c-profile-detail">
    <b-row>
      <b-col sm="12" md="5" lg="5">
        <b-card class="h-100" >
          <b-img thumbnail fluid rounded blank width="400" height="400" blank-color="#777" alt="img" class="m-1" />
          <h5><strong>Peringkat</strong></h5>
          <p class="text-center">Event Geeks</p>
          <h5><strong>Total Score</strong></h5>
          <p class="text-center">10029</p>
        </b-card>
      </b-col>
      <b-col sm="12" md="7" lg="7">  
        <b-card no-body class="h-100">
          <Polygraph/>   
        </b-card>        
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col sm="12" md="12" lg="12">
        <b-card>
          <h5>Nama : {{ user.name }}</h5>
          <h5>Email : {{ user.username }} </h5> 
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Polygraph from '@/components/polygraph/Polygraph.vue'
export default {
  name: 'c-profile-detail',
  components: {
    Polygraph
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

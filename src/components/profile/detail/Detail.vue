<template>
  <div class="c-profile-detail">
    <b-row>
      <b-col sm="12" md="5" lg="5">
        <b-img thumbnail fluid rounded blank width="400" height="400" blank-color="#777" alt="img" class="m-1" />
      </b-col>
      <b-col sm="12" md="6" lg="6">  
          <Polygraph/>           
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="12" lg="12">
        <h5>Nama : Ericko Wicaksono</h5>
        <h5>Email : ericko@mail.com</h5>  
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
  }
}
</script>

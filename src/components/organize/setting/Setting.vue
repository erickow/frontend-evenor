<template>
  <div class="c-organize-setting">
      <b-row class="" align-h="center">
          <b-col sm="12" md="12" lg="12">
              <b-card>
                <b-form-checkbox id="checkbox1"
                     v-model="event.setComittee"
                     value="true"
                     unchecked-value="false"
                     size="md"
                     >
                  Hidupkan Fitur Recruitment Kepanitiaan
                  
                </b-form-checkbox>
                <br><br>
                <b-form-checkbox id="checkbox2"
                     v-model="event.setParticipant"
                     value="true"
                     unchecked-value="false"
                     size="md">
                  
                Hidupkan Fitur Recruiment Partisipan
                </b-form-checkbox><br><br>
                <b-button variant="primary" >Simpan Pengaturan</b-button>
            </b-card>
          </b-col>
      </b-row>
  </div>  
</template>

<script>
export default {
  name: 'c-organize-setting',
  data () {
    return {
      setComittee: '',
      setParticipant: ''
    }
  },
  computed: {
    event () {
      return this.$store.getters.event
    }
  }
}
</script>

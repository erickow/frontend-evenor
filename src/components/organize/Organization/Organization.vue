<template>
  <div class="c-organize-organization">
      <b-row align-h="center">
          <b-col sm="12" md="12" lg="12">
            <b-card>
              <h3>List Panitia</h3>
              <b-row>
                <b-col sm="12" md="6" lg="6">
                  <b-card>
                    <b-row>
                      <b-col sm="4" md="4" lg="4">
                        <b-img :src="require('@/assets/img/icon/profile.png')" width="75" height="75" blank-color="#777" alt="img" />
                      </b-col>
                      <b-col sm="8" md="8" lg="8">
                        <h4>Seleksi panitia : <br><b-button variant="primary" v-b-modal="'listComittee'" >Lihat Kepanitiaan</b-button></h4>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
                <b-col sm="6" md="6" lg="6">
                  <b-card>
                    <b-row>
                      <b-col sm="4" md="4" lg="4">
                        <b-img :src="require('@/assets/img/icon/profile.png')" width="75" height="75" blank-color="#777" alt="img" />
                      </b-col>
                      <b-col sm="8" md="8" lg="8">
                        <h4>Seleksi panitia : <br><b-button variant="primary" v-b-modal="'listComittee'" >Lihat Kepanitiaan</b-button></h4>
                      </b-col>
                    </b-row>  
                  </b-card>
                </b-col>
              </b-row>
              <h3 class="mt-3">List Peserta</h3>
              <b-row>
                <b-col sm="12" md="6" lg="6">
                  <b-card>
                    <b-row>
                      <b-col sm="4" md="4" lg="4">
                        <b-img :src="require('@/assets/img/icon/profile.png')" width="75" height="75" blank-color="#777" alt="img" />
                      </b-col>
                      <b-col sm="8" md="8" lg="8">
                        <h4>Seleksi peserta : <br><b-button variant="primary" v-b-modal="'listParticipant'" >Lihat Peserta</b-button></h4>  
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="6">
                  <b-card>
                    <b-row>
                      <b-col sm="4" md="4" lg="4">
                        <b-img :src="require('@/assets/img/icon/profile.png')" width="75" height="75" blank-color="#777" alt="img" />
                      </b-col>
                      <b-col sm="8" md="8" lg="8">
                        <h4>Seleksi peserta : <br><b-button variant="primary" v-b-modal="'listParticipant'" >Lihat Peserta</b-button></h4>  
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
      </b-row>


      <b-modal id="listComittee" size="md" centered title="List Panitia">
      <table class="table table-responsive" >
        <thead>
          <th>Nama</th>
          <th>Email</th>
        </thead>
        <tbody>
          <tr v-for="com in comittees" :key="com.comittee.id">
            <td>{{ com.comittee.name }}</td>
            <td>{{ com.comittee.email }}</td>
          </tr>
        </tbody>

      </table>
    </b-modal>

     <b-modal id="listParticipant" size="md" centered title="List Panitia">
      <table class="table table-responsive" >
        <thead>
          <th>Nama</th>
          <th>Email</th>
        </thead>
        <tbody>
          <tr v-for="par in participants" :key="par.participant.id">
            <td>{{ par.participant.name }}</td>
            <td>{{ par.participant.email }}</td>
          </tr>
        </tbody>

      </table>
    </b-modal>

  </div>  
</template>

<script>
export default {
  name: 'c-organize-organization',
  created () {
    this.$store.dispatch('loadEventComittee', this.$route.params.eventId)
    this.$store.dispatch('loadEventParticipant', this.$route.params.eventId)
  },
  data () {
    return {
      fields: [
        { key: 'name' },
        { key: 'email' }
      ]
    }
  },
  computed: {
    comittees () {
      return this.$store.getters.eventComittee
    },
    participants () {
      return this.$store.getters.eventParticipant
    }
  }
}
</script>

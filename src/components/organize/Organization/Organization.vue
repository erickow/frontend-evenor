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
                        <h4>Seleksi panitia : <br><b-button variant="primary" v-b-modal="'listSeleksiComittee'" >Lihat Kepanitiaan</b-button></h4>
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
                        <h4>list panitia : <br><b-button variant="primary" v-b-modal="'listComittee'" >Lihat Kepanitiaan</b-button></h4>
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
                        <h4>Seleksi peserta : <br><b-button variant="primary" v-b-modal="'listSeleksiParticipant'" >Lihat Peserta</b-button></h4>  
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
                        <h4>List peserta : <br><b-button variant="primary" v-b-modal="'listParticipant'" >Lihat Peserta</b-button></h4>  
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
      </b-row>

      <b-modal id="listSeleksiComittee" size="lg" centered title="List Panitia">
            <table id="printSeleksiPanitia" class="table table-responsive" >
              <thead>
                <th>Nama</th>
                <th>Email</th>
              </thead>
              <tbody>
                <tr v-for="com in comittees" :key="com.comittee.id" @click="selectedComittee(com.comittee)">
                  <td>{{ com.comittee.name }}</td>
                  <td>{{ com.comittee.email }}</td>
                  <td><b-button>Konfirmasi Panitia</b-button></td>
                </tr>
              </tbody>

            </table>
            
            <b-button variant="primary" @click="printSeleksiPanitia"><icon name="print"></icon> Print</b-button>      
    </b-modal>

      <b-modal id="listComittee" size="lg" centered title="List Panitia">
        <b-row align-h="center">
          <b-col sm="12" md="7" lg="7">
            <table id="printDaftarPanitia" class="table table-responsive" >
              <thead>
                <th>Nama</th>
                <th>Email</th>
              </thead>
              <tbody>
                <tr v-for="com in comittees" :key="com.comittee.id" v-b-toggle="'colapse'" @click="selectedComittee(com.comittee)">
                  <td>{{ com.comittee.name }}</td>
                  <td>{{ com.comittee.email }}</td>
                </tr>
              </tbody>

            </table>
            
            <b-button variant="primary" @click="printDaftarPanitia"><icon name="print"></icon> Print</b-button>
          </b-col>
          <b-col sm="12" md="5" lg="5">
            <b-collapse :id="'colapse'" class="mt-2">
              <h1>{{ comittee.name }}</h1>
              <b-img
                  :src="imageView(comittee.photo)"
                  alt="Img"
                  height="150" 
                  blank-color="#bbb"
                  top>
                </b-img>
              <b-card>
                <label for="leadership">Leadership</label>
                <b-form-input id="leadership" size="sm" type="range" min="0" max="100"></b-form-input>
                <label for="leadership">Authority</label>
                <b-form-input id="leadership" size="sm" type="range" min="0" max="100" ></b-form-input>
                <label for="leadership">Decision</label>
                <b-form-input id="leadership" size="sm" type="range" min="0" max="100" ></b-form-input>
                <label for="leadership">Flexibility</label>
                <b-form-input id="leadership" size="sm" type="range" min="0" max="100" ></b-form-input>
              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
      
      
    </b-modal>

    <b-modal id="listSeleksiParticipant" size="md" centered title="List Panitia">
      <table id="printSeleksiParticipant" class="table table-responsive" >
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
      <b-button variant="primary" @click="printSeleksiParticipant"><icon name="print"></icon> Print</b-button>
    </b-modal>

     <b-modal id="listParticipant" size="md" centered title="List Panitia">
      <table id="printDaftarParticipant" class="table table-responsive" >
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
      <b-button variant="primary" @click="printDaftarParticipant"><icon name="print"></icon> Print</b-button>
    </b-modal>

  </div>  
</template>

<script>
import printjs from 'print-js'
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
      ],
      comittee: ''
    }
  },
  methods: {
    selectedComittee: function (data) {
      this.comittee = data
    },
    imageView (data) {
      return URL.createObjectURL(new Blob([data], { type: 'image/jpeg' }))
    },
    printDaftarPanitia () {
      printjs('printDaftarPanitia', 'html')
    },
    printSeleksiPanitia () {
      printjs('printSeleksiPanitia', 'html')
    },
    printDaftarParticipant () {
      printjs('printDaftarParticipant', 'html')
    },
    printSeleksiParticipant () {
      printjs('printSeleksiParticipant', 'html')
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

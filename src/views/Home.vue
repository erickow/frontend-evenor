<template>
  <div class="v-home">
    <b-row class="" align-h="center">
      <b-col sm="12" md="12" lg="12">
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                background="#ababab"
                :interval="4000"
                img-width="720"
                img-height="300"
    >
    <b-carousel-slide>
      <img slot="img" class="d-block w-100" height="550"
           :src="require('../assets/img/event1.jpg')" alt="image slot">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" class="d-block w-100" height="550"
           :src="require('../assets/img/event2.jpg')" alt="image slot">
    </b-carousel-slide>
      

       
    </b-carousel>
        <b-row class="boxUp" align-h="center">
          <b-col  sm="12" md="7" lg="7">
          <div  class="text-center cardUp">
            <h1>Make Your Event Organized</h1>
            <b-button size="lg" variant="outline-light" v-b-modal="'eventForm'">Create Event</b-button>
          </div>

        </b-col>
        </b-row>
      </b-col>
    </b-row>
    
    <b-row  class="eventList" align-h="center">
      <b-col sm="12" md="10" lg="10">
        <h3>Recent Event</h3>
        <b-card-group tag="div">
        <b-col class="mt-3" v-for="(events, index) in homeEvents" :key="index" 
                sm="11" md="6" lg="4">
          <b-link class="card-link" :to="{ path: 'event/detail/' + events.id}">
            <b-card
              class="boxShadowUp h-100"
              footer-tag="footer" no-body>
              <b-img-lazy v-if="events.photo === '' || events.photo === null || events.photo === 'undefined'"
                :src="require('../assets/img/dummy.jpg')"
                alt="Img"
                height="200" 
                blank-color="#bbb"
                top>
              </b-img-lazy>
              <b-img-lazy v-else
                :src="imageView(events.photo)"
                alt="Img"
                height="200" 
                blank-color="#bbb"
                top>
              </b-img-lazy>
              <div class="m-2">
                <h5 class="m-0">{{ events.name }}</h5>
                <small>{{ events.startDate }}</small>
                <p class="card-text m-0 py-0">
                    {{events.description}}
                </p>
                    <!-- <b-button size="sm" variant="outline-dark" class="" type="submit">
                      <icon name="share-alt"></icon> Share
                    </b-button> -->
                    <b-button size="sm" variant="outline-dark" class="" type="submit">
                      Read more <icon name="chevron-right"></icon> 
                    </b-button>
             </div>
              
            </b-card>
          </b-link>
        </b-col>
      </b-card-group>
      </b-col>
    </b-row>

    <b-modal id="eventForm" size="lg" centered hide-footer title="Buat Acara Baru" @shown="clearForm">
      <b-form >
        <label for="title">Judul Acara</label>
        <b-form-input id="title"
                  v-model="form.name"
                  type="text"
                  placeholder="Masukkan judul acara" 
                  required></b-form-input>
        <label for="title">Deskripsi Acara</label>
        <b-form-textarea id="description"
                  v-model="form.description"
                  :rows="3"
                  :max-rows="6"
                  placeholder="Masukkan deskripsi acara" 
                  required></b-form-textarea>
        
        <date-picker class="mt-4" v-model="dateData" range type="datetime" format="yyyy-MM-dd HH:mm:ss" lang="en" confirm></date-picker> 
        <br><br>
        <b-form-file v-model="uploadImage" :state="Boolean(uploadImage)" placeholder="Pilih gambar..." accept=".jpg, jpeg, .png, .gif"></b-form-file>

        <b-button class="mt-4" variant="outline-primary" block @click="addEvent">Buat Acara</b-button>
      </b-form>
    </b-modal>

  </div>

  
</template>

<script>
import moment from 'moment'
export default {
  name: 'v-home',
  created () {
    this.$store.dispatch('loadHomeEvents')
  },
  data () {
    return {
      form: {
        name: '',
        description: '',
        setParticipant: 0,
        setComittee: 0,
        startDate: '',
        endDate: ''
      },
      dateData: [],
      uploadImage: {},
      eventData: {}
    }
  },
  methods: {
    addEvent () {
      console.log(this.dateData)
      this.form.startDate = moment(this.dateData[0]).format('DD-MM-YYYY HH:mm:ss')
      this.form.endDate = moment(this.dateData[1]).format('DD-MM-YYYY HH:mm:ss')
      console.log(this.form)

      const data = new FormData()
      console.log(this.uploadImage)
      data.append('file', this.uploadImage, this.uploadImage.name)
      data.append('name', this.form.name)
      data.append('description', this.form.description)
      data.append('setParticipant', this.form.setParticipant)
      data.append('setComittee', this.form.setComittee)
      data.append('startDate', this.form.startDate)
      data.append('endDate', this.form.endDate)

      this.$store.dispatch('createEvent', data)
    },
    clearForm () {
    },
    imageView (data) {
      return URL.createObjectURL(new Blob([data], {type: 'image/jpeg'}))
    }
  },
  computed: {
    homeEvents () {
      return this.$store.getters.homeEvents
    }
  }
}
</script>

<style scoped>
.btn .fa-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
}
.btn .fa-icon:last-child {
    margin-right: 0;
}
.boxUp {
  margin-top: -300px;
  line-height: 2;
}
.cardUp {
  color: white;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: linear-gradient( rgba(255, 255, 255, 0.9) 0%, white 45%) */
  background: rgba(0, 0, 0, 0) !important;
}
#carousel1{
  margin-top: -80px;
}
.eventList{
  margin-top: 220px;
}
</style>

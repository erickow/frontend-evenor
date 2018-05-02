<template>
  <div class="v-home">
    <b-row class="mt-4" align-h="center">
      <b-col sm="12" md="10" lg="10">
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="0"
                img-width="720"
                img-height="300"
    >

      <!-- <b-carousel-slide caption="Blank Image" :img-src="require('../assets/img/dummy.jpg')" img-alt="Blank image"
                img-width="720"
                img-height="300">
                
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image" 
               >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
      </b-col>
    </b-row>
    <b-row  align-h="center">
      <b-col sm="12" md="10" lg="10">
        <b-card class="text-center">
          Buat Event Baru? <b-button v-b-modal="'eventForm'">Buat disini</b-button>
        </b-card>
      </b-col>
    </b-row>
    
    <b-row  align-h="center">
      <b-col sm="12" md="11" lg="11">
        <b-card-group tag="div">
        <b-col class="mt-5" v-for="(events, index) in homeEvents" :key="index" 
                sm="11" md="6" lg="4">
          <b-link class="card-link" :to="{ path: 'event/detail/' + events.id}">
            <b-card
              footer-tag="footer" no-body>
              <b-card-img
                :src="require('../assets/img/dummy.jpg')"
                alt="Img"
                height="200" top>
              </b-card-img>
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
      dateData: []
    }
  },
  methods: {
    addEvent () {
      console.log(this.dateData)
      this.form.startDate = moment(this.dateData[0]).format('DD-MM-YYYY HH:mm:ss')
      this.form.endDate = moment(this.dateData[1]).format('DD-MM-YYYY HH:mm:ss')
      console.log(this.form)
      this.$store.dispatch('createEvent', this.form)
    },
    clearForm () {
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
</style>

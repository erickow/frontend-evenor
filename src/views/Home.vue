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
  </div>
</template>

<script>
export default {
  name: 'v-home',
  created () {
    this.$store.dispatch('loadHomeEvents')
  },
  data () {
    return {
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

<template>
  <div class="v-home">
    <b-row class="mt-4">
      <b-col sm="12" md="8" lg="8">
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
    >

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
      </b-col>
      <b-col sm="12" md="4" lg="4">
        <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
          <p>For more information visit website</p>
          <b-btn variant="primary" href="#">More Info</b-btn>
        </b-jumbotron>
      </b-col>
    </b-row>
    
    <b-row class="mt-3" align-h="center">
      <b-col sm="12" md="10" lg="11">
        <b-card-group tag="div">
        <b-col v-for="(card, index) in cards" :key="index" 
                sm="11" md="6" lg="4">
          <b-link :to="{ path: 'event/detail', params: { userId: 123 }}">
            <b-card 
                  title="Title"
                  :img-src="require('../assets/img/logo.png')"
                  img-alt="Img"
                  img-top
                  >
              <p v-if="index%2==0" class="card-text">
                  This is a wider card with supporting text below as a
                  natural lead-in to additional content. This content
                  is a little bit longer.
                  
              </p>
              <div slot="footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
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
  data () {
    return {
      cards: 7
    }
  }
}
</script>

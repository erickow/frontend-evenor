<template>
  <div class="v-home">
    <b-row class="mt-4">
      <b-col>
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
    >

      <b-carousel-slide caption="Blank Image" :img-src="require('../assets/img/dummy.jpg')" img-alt="Blank image">
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
      <b-col sm="12" md="10" lg="11">
        <b-card-group tag="div">
        <b-col class="mt-4" v-for="(card, index) in cards" :key="index" 
                sm="11" md="6" lg="4">
          <b-link class="card-link" :to="{ path: 'event/detail', params: { userId: 123 }}">
            <b-card
              footer-tag="footer" no-body>
              <b-card-img
                :src="require('../assets/img/dummy.jpg')"
                alt="Img"
                height="200" top>
              </b-card-img>
              <div class="m-2">
                <h3 class="m-0">Title</h3>
                <small>sub title</small>
                <p class="card-text m-0 py-0">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content
                    is a little bit longer.
                </p>
                    <b-button size="sm" variant="outline-dark" class="" type="submit">
                      <icon name="share-alt"></icon> Share
                    </b-button>
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
  data () {
    return {
      cards: 6
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
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

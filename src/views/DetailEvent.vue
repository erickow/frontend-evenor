<template>
  <div class="v-detail-event">
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="6" lg="6">
              <b-card 
                    no-body
                    :img-src="require('../assets/img/dummy.jpg')"
                    img-alt="Image"
                    img-top>
                
            </b-card>
          </b-col>
          <b-col sm="12" md="4" lg="4">
            <b-card  bg-variant="dark" text-variant="white" title="Card Title">
                <p class="card-text">
                    With supporting text below as a natural lead-in to additional content.
                </p>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
      </b-row>
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card title="Card title"
                    sub-title="Card subtitle">
                <p class="card-text">
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
                </p>
                <a href="#"
                class="card-link">Card link</a>
                <b-link href="#"
                        class="card-link">Another link</b-link>
            </b-card>
          </b-col>
      </b-row>
  </div>
    
  </div>  
</template>

<script>
export default {
  name: 'v-detail-event',
  data () {
    return {
    }
  }
}
</script>

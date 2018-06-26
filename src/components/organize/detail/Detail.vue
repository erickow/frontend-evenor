<template>
  <div class="c-organize-detail">
      <b-row class="m-1" align-h="center">
          <b-col sm="12" md="12" lg="12">
                <b-row>
                <b-col sm="12" md="12" lg="12">
                    <b-card no-body>
                      <b-img-lazy
                        :src="imageView(event.photo)"
                        alt="Img"
                        height="400" 
                        blank-color="#bbb"
                        top>
                      </b-img-lazy>
                    </b-card>
                </b-col>
              </b-row>
              <b-row class="mt-4" align-h="center">
                  <b-col class="mt-4" sm="12" md="12" lg="12">
                      <b-card class="boxShadowUp h-100">
                        <h4>{{ event.name }}</h4>
                        <small>{{event.startDate }} - {{ event.endDate}}</small>
                        <br><br>
                        <p>{{ event.description }}</p>
                        
                      </b-card>
                  </b-col>
               </b-row>
          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  name: 'c-organize-detail',
  data () {
    return {
    }
  },
  methods: {
    imageView (data) {
      return URL.createObjectURL(new Blob([data], { type: 'image/jpeg' }))
    }
  },
  computed: {
    event () {
      return this.$store.getters.event
    }
  }
}
</script>

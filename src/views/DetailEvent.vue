<template>
  <div class="v-detail-event">
      <b-row class="mt-4" align-h="center">
        <b-col sm="12" md="10" lg="10">
            <b-card-group deck>
            <b-col sm="12" md="8" lg="8">
                <b-card no-body>
                    <b-card-img
                            :src="require('../assets/img/dummy.jpg')"
                            alt="Img"
                            height="360" top>
                            </b-card-img>
                
                </b-card>
            </b-col>
            <b-col sm="12" md="4" lg="4">
                <b-card class="h-100" bg-variant="info" text-variant="white" title="Pelaksanaan">
                    <div>
                    <p class="card-text">
                        <strong> Mulai </strong> 
                        <br>
                        01-01-2018
                        <br>
                        <strong> Selesai </strong> 
                        <br>
                        01-02-2018
                    </p>
                    <b-button href="#" variant="primary">Daftar Menjadi Peserta</b-button> <br><br>
                    <b-button href="#" variant="primary">Daftar Menjadi Panitia</b-button>
                    </div>
                    
                </b-card>
            </b-col>
            </b-card-group>
        </b-col>
      </b-row>
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card title="Judul Event"
                    sub-title="01-01-2018">
                <p class="card-text">
                   <strong> Deskripsi: </strong> 
                    <br>
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content. <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br>
                    eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                    ut lacus vel interdum.
                </p>
                
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

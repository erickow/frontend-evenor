<template>
  <div class="v-organize-event">
    <b-row align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card-group deck
                  class="mb-3">
              <b-col class="mt-4" sm="6" md="3" lg="3">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3" name="info-circle"></icon> <br> <strong>Detail</strong></p>
                </b-card>
              </b-col>
              <b-col class="mt-4" sm="6" md="3" lg="3">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3" name="thumb-tack"></icon> <br> <strong>Task</strong></p>
                </b-card>
              </b-col>
              <b-col class="mt-4" sm="6" md="3" lg="3">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3" name="user-circle-o"></icon> <br> <strong>Panitia</strong></p>
                </b-card>
              </b-col>
              <b-col class="mt-4" sm="6" md="3" lg="3">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3"   name="cog"></icon> <br> <strong>Setting</strong></p>
                </b-card>
              </b-col>
            </b-card-group>
          </b-col>
      </b-row>
      <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="10" lg="10">
              <b-card no-body>
              <b-tabs card>
              <b-tab title="Details" active>
                  
                <b-row>
                <b-col sm="12" md="8" lg="8">
                    <b-card 
                    no-body
                    :img-src="require('../assets/img/dummy.jpg')"
                    img-alt="Image"
                    img-top>
                
                </b-card>
                </b-col>
                <b-col sm="12" md="4" lg="4">
                    <b-card class="h-100" >
                        <b-table :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :items="items"
                                :fields="fields"
                                per-page="4"
                                :current-page="currentPage">
                        </b-table>
                        <b-pagination size="md" :total-rows="items.length" v-model="currentPage" :per-page="4">
                         </b-pagination>
                    </b-card>
                </b-col>
              </b-row>
              <b-row class="mt-4" align-h="center">
                <b-col sm="12" md="12" lg="12">
                    <b-card>
                        <h1>Recent Activity</h1>
                        
                    </b-card>
                </b-col>
               </b-row>
              </b-tab>
              <b-tab title="Task">
               <p>Isi task event</p>
              </b-tab>
              <b-tab title="Setting">
               <p>isi setting</p>
              </b-tab>
            </b-tabs>
              
            </b-card>
          </b-col>
      </b-row>
      
  </div>
    
  </div>  
</template>

<script>
export default {
  name: 'v-organize-event',
  data () {
    return {
      currentPage: 1,
      sortBy: 'score',
      sortDesc: true,
      fields: [
        { key: 'name', sortable: true },
        { key: 'score', sortable: true }
      ],
      items: [
        { score: 40, name: 'Macdonald' },
        { score: 40, name: 'Macdonald' },
        { score: 21, name: 'Shaw' },
        { score: 89, name: 'Wilson' },
        { score: 21, name: 'Shaw' },
        { score: 21, name: 'Shaw' },
        { score: 89, name: 'Wilson' },
        { score: 38, name: 'Carney' },
        { score: 38, name: 'Carney' }
      ]
    }
  }
}
</script>

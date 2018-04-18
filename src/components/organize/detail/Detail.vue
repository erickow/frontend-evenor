<template>
  <div class="c-organize-detail">
      <b-row class="" align-h="center">
          <b-col sm="12" md="10" lg="10">
              <b-card>
                <b-row>
                <b-col sm="12" md="7" lg="7">
                    <b-card 
                    no-body
                    :img-src="require('@/assets/img/dummy.jpg')"
                    img-alt="Image"
                    img-top>
                
                </b-card>
                </b-col>
                <b-col sm="12" md="5" lg="5">
                    <b-card class="h-100" >
                        <b-table :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :items="items"
                                :fields="fields"
                                :per-page="4"
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
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  name: 'c-organize-detail',
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

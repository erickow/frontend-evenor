<template>
  <div class="v-organize-event">
    <b-row class="m-3" align-h="center">
        <b-col sm="12" md="8" lg="8">
            <b-card class="boxShadowUp">
            <b-card-group
                  class="mb-3">
              <b-col class="menu mt-1 " xs="6" sm="6" md="3" lg="3" @click="swapComponent('OrganizeDetail')">
                <b-card bg-variant="white"
                        text-variant="dark"
                        class="text-center clickHover" no-body>
                    <p class="card-text"><b-img fluid :src="require('@/assets/img/icon/home.png')" width="100" height="100" blank-color="#777" alt="img" class="m-1" /> <br> <strong>Detail</strong></p>
                </b-card>
              </b-col>
              <b-col class="menu mt-1" xs="6" sm="6" md="3" lg="3" @click="swapComponent('OrganizeTask')">
                <b-card bg-variant="white"
                        text-variant="dark"
                        class="text-center clickHover" no-body>
                    <p class="card-text"><b-img fluid :src="require('@/assets/img/icon/task.png')" width="100" height="100" blank-color="#777" alt="img" class="m-1" /> <br> <strong>Task</strong></p>
                </b-card>
              </b-col>
              <b-col class="menu mt-1" xs="6" sm="6" md="3" lg="3" @click="swapComponent('OrganizeOrganization')">
                <b-card bg-variant="white"
                        text-variant="dark"
                        class="text-center" no-body>
                    <p class="card-text"><b-img fluid :src="require('@/assets/img/icon/profile.png')" width="100" height="100" blank-color="#777" alt="img" class="m-1" /> <br> <strong>Panitia</strong></p>
                </b-card>
              </b-col>
              <b-col class="menu mt-1" xs="6" sm="6" md="3" lg="3" @click="swapComponent('OrganizeSetting')">
                <b-card bg-variant="white"
                        text-variant="dark"
                        class="text-center" no-body>
                    <p class="card-text"><b-img fluid :src="require('@/assets/img/icon/person_setting.png')" width="100" height="100" blank-color="#777" alt="img" class="m-1" /> <br> <strong>Setting</strong></p>
                </b-card>
              </b-col>
            </b-card-group>

            <div :is="components"></div>
            
            </b-card>
        </b-col>
        <b-col sm="12" md="4" lg="4">
          <b-row>
            <b-col sm="12" md="12" lg="12">
            <b-card class="boxShadowUp" >
                        <b-table :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :items="comittees"
                                :fields="fields"
                                :per-page="4"
                                :current-page="currentPage">
                          <template slot="comittee.photo" slot-scope="data">
                            <!-- <b-img-lazy
                              :src="imageView(data)"
                              alt="Img"
                              height="200" 
                              blank-color="#bbb"
                              top>
                            </b-img-lazy> -->
                            <b-img-lazy
                              :src="imageView(data)"
                              alt="Img"
                              height="50" 
                              blank-color="#bbb"
                              top>
                            </b-img-lazy>
                          </template>
                        </b-table>
                        <b-pagination size="md" :total-rows="comittees.length" v-model="currentPage" :per-page="4">
                         </b-pagination>
                    </b-card>
                    </b-col>
                 </b-row>
                    <b-row class="mt-5">
            <b-col sm="12" md="12" lg="12">
                    <b-card class="boxShadowUp">
                        <vote></vote>
                    </b-card>
                    </b-col>
                  </b-row>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import { OrganizeTask, OrganizeDetail, OrganizeOrganization, OrganizeSetting } from '@/components'
import Vote from './../../components/organize/detail/vote/index.vue'
export default {
  name: 'v-organize-event',
  components: {
    OrganizeTask,
    OrganizeDetail,
    OrganizeOrganization,
    OrganizeSetting,
    Vote
  },
  created () {
    this.$store.dispatch('loadEvent', this.$route.params.eventId)
    this.$store.dispatch('loadEventComittee', this.$route.params.eventId)
  },
  data () {
    return {
      components: OrganizeDetail,
      componentsArray: ['OrganizeDetail', 'OrganizeTask', 'OrganizeOrganization', 'OrganizeSetting'],
      currentPage: 1,
      sortBy: 'score',
      sortDesc: true,
      fields: [
        {key: 'comittee.photo', label: '', sortable: true},
        { key: 'comittee.name', label: 'Nama Panitia', sortable: true },
        { key: 'score', label: 'Score', sortable: true }
      ]
    }
  },
  methods: {
    swapComponent: function (component) {
      this.components = component
    },
    imageView (data) {
      return URL.createObjectURL(new Blob([data.value], { type: 'image/jpeg' }))
    }
  },
  computed: {
    comittees () {
      return this.$store.getters.eventComittee
    }
  }
}
</script>

<style scoped>
.menu .card:hover{
  background: turquoise !important ;
}
</style>


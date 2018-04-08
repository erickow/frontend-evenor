<template>
  <div class="v-organize-event">
    <b-row align-h="center">
          <b-col sm="12" md="10" lg="10">
            <b-card-group deck
                  class="mb-3">
              <b-col class="mt-4" sm="6" md="3" lg="3" @click="swapComponent('OrganizeDetail')">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3" name="info-circle"></icon> <br> <strong>Detail</strong></p>
                </b-card>
              </b-col>
              <b-col class="mt-4" sm="6" md="3" lg="3" @click="swapComponent('OrganizeTask')">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3" name="thumb-tack"></icon> <br> <strong>Task</strong></p>
                </b-card>
              </b-col>
              <b-col class="mt-4" sm="6" md="3" lg="3" @click="swapComponent('OrganizeComittee')">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3" name="user-circle-o"></icon> <br> <strong>Panitia</strong></p>
                </b-card>
              </b-col>
              <b-col class="mt-4" sm="6" md="3" lg="3" @click="swapComponent('OrganizeSetting')">
                <b-card bg-variant="info"
                        text-variant="white"
                        class="text-center">
                    <p class="card-text"><icon scale="3"   name="cog"></icon> <br> <strong>Setting</strong></p>
                </b-card>
              </b-col>
            </b-card-group>
          </b-col>
      </b-row>
      <div :is="components"></div>
      
      
  </div>
    
  </div>  
</template>

<script>
import { OrganizeTask, OrganizeDetail, OrganizeComittee, OrganizeSetting } from '@/components'
export default {
  name: 'v-organize-event',
  components: {
    OrganizeTask,
    OrganizeDetail,
    OrganizeComittee,
    OrganizeSetting
  },
  data () {
    return {
      components: OrganizeDetail,
      componentsArray: ['OrganizeDetail', 'OrganizeTask', 'OrganizeComittee', 'OrganizeSetting']
    }
  },
  methods: {
    swapComponent: function (component) {
      this.components = component
    }
  }
}
</script>

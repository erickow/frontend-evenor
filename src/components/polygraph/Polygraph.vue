<template>
 <div class="c-polygraph">
    <div class="Chart">
      <radar-component/>
    </div>
 </div>
</template>

<script>
import RadarComponent from './Radar.js'
export default {
  components: {
    RadarComponent
  },
  data () {
    return {
      dataPoints: null,
      height: 20
    }
  },
  methods: {
    increaseHeight () {
      this.height += 10
    }
  },
  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  }
}
</script>

<style>
.Chart {
  padding: 3%;
}
</style>

import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mounted () {
    this.renderChart({
      labels: ['Leadership', 'Authority', 'Decision', 'Flexibility'],
      datasets: [
        {
          label: 'Data Diri ',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 49, 61, 56]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}

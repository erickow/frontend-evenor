import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  mounted () {
    this.renderChart({
      labels: ['Pengalaman', 'Komunikasi', 'Desain', 'Tanggung Jawab', 'Disiplin'],
      datasets: [
        {
          label: 'Data Diri ',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 39, 61, 56, 75]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}

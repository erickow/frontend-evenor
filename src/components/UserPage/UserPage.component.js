import axios from 'axios'

export default {
  name: 'user-page',
  components: {}, 
  props: [],
  data () {
    return {
      users : {}
    }
  },
  created() {
    
  },
  computed: {

  },
  mounted () {
    this.getUser();
  },
  methods: {
    getUser () {
      axios.get(`http://127.0.01:8000/api/user`)
      .then(response => {
        this.users = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}

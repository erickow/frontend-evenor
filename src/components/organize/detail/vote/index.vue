<template>
  <div class="c-vote">
    <h3>Vote <b-button variant="info" size="sm" v-b-modal="'voteModal'">Tambah vote</b-button></h3>
      <b-tabs pills card>
        <b-tab title="Upcomming Vote" active>
          <b-row>
            <b-col sm="12" md="12" lg="12" 
                  v-for="(upcoming, index) in myUpcomingVotes"
                  :key="index"
                  class="mt-2"
                  >
              <b-card bg-variant="info"
                  text-variant="white"
                  class="h-100"
                  >
                <h5>{{ upcoming.title }}</h5>
                <small>{{ upcoming.endDate }}</small>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="History Vote">
          <b-row>
            <b-col sm="12" md="12" lg="12" 
                  v-for="(history, index) in myHistoryVotes"
                  :key="index"
                  class="mt-2"
                  >
              <b-card bg-variant="info"
                  text-variant="white"
                  class="h-100"
                  >
                <h5>{{ history.title }}</h5>
                <small>{{ history.endDate }}</small>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
    </b-tabs>
    <b-modal id="voteModal" size="md" hide-footer centered title="Tambah Vote Baru"> 
      <b-form >
        <label for="voteTitle">Judul Vote</label>
        <b-form-input id="voteTitle"
                    v-model="vote.title"
                    type="text"
                    placeholder="Masukkan judul vote" 
                    required></b-form-input>
        <label for="voteDescription">Deskripsi Vote</label>
        <b-form-textarea id="voteDescription"
                v-model="vote.description"
                :rows="2"
                :max-rows="3"
                placeholder="Masukkan Deskripsi" 
                required></b-form-textarea>
        <label for="voteDate">Tanggal</label>
        <b-form-input id="voteDate"
                    v-model="voteDate"
                    type="date"
                    placeholder="Masukkan judul card" 
                    required></b-form-input>
        <label class="mt-2" for="voteAswer">Masukkan Pilihan <b-button size="sm" @click="addAnswer">+</b-button></label>
        <div v-for="(n, index) in answerLength" :key="index">
          <b-form-input class="mt-2"
                    id="answer"
                    v-model="vote.options[index].answer"
                    type="text"
                    placeholder="Masukkan judul card" 
                    required></b-form-input>
        </div>
        <b-button class="mt-4" variant="outline-default" block @click="addVote">Tambah Komentar</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'c-vote',
  created () {
    this.$store.dispatch('loadUpcomingVotes', this.$route.params.eventId)
    this.$store.dispatch('loadHistoryVotes', this.$route.params.eventId)
  },
  data () {
    return {
      vote: {
        title: '',
        description: '',
        options: [{
          answer: '',
          total: 0
        }],
        endDate: ''
      },
      voteDate: '',
      voteAnswerLength: 1
    }
  },
  methods: {
    addVote: function () {
      this.vote.endDate = moment(this.voteDate).format('DD-MM-YYYY HH:mm:ss')
      console.log(this.vote)
      this.$store.dispatch('createVote', [this.$route.params.eventId, this.vote])
    },
    addAnswer: function () {
      this.voteAnswerLength = this.voteAnswerLength + 1
      console.log(this.answerLength)
      this.vote.options.push({
        answer: '',
        total: 0
      })
    }
  },
  computed: {
    myUpcomingVotes () {
      return this.$store.getters.eventUpcomingVote
    },
    myHistoryVotes () {
      return this.$store.getters.eventHistoryVote
    },
    answerLength () {
      return this.voteAnswerLength
    }
  }
}
</script>

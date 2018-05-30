<template>
  <div class="c-organize-task">
      <b-row class="m-1" align-h="center">
          <b-col sm="12" md="12" lg="12">
              <b-card>
                <draggable v-model="tasks"
                           :options="{group:'tasks'}"
                           class="row" @end="listMoved">
                      <b-col v-for="mytasks in tasks" :key="mytasks.name" 
                              sm="12" md="3" lg="3" >
                        <b-card class="mt-2 p-2" 
                              bg-variant="default" 
                              text-variant="dark" 
                              header-text-variant="white"
                              header-tag="header"
                              header-bg-variant="dark" 
                              no-body
                              >
                        <h6 slot="header"
                            class="mb-0">{{ mytasks.name }}</h6>
                        <div class="mytasks-contents">
                          <draggable v-model="mytasks.jobs" 
                                  :options="{group:'jobs'}"
                                  @change="taskMoved">
                            <transition-group name="list-task">
                              <b-card v-for="(task, index) in mytasks.jobs" 
                                  v-bind:key="task.name"
                                  class="mt-2 p-2 list-task-item"
                                  no-body
                                  v-b-modal="'jobModal'" @click="setJob(task.id)"
                              >
                                <div>
                                  {{ task.name }}
                                </div>
                                <div>
                                  <br>
                                  <button v-b-modal="'jobModal'" @click="setJob(task.id)">Detail</button>
                                  <button v-on:click="removeJob(mytasks.id, task.name, mytasks.jobs, index)">Remove</button>
                                </div> 
                              </b-card>
                            </transition-group>
                          </draggable>
                          <b-card class="mt-2" 
                                      no-body>
                                <b-button variant="primary" v-b-modal="'jobForm'" @click="setTaskId(mytasks.id)">Tambah Card</b-button>
                              </b-card>
                        </div>
                      </b-card>
                      </b-col>
                      <b-col sm="12" md="3" lg="3">
                        <b-card class="mt-2" no-body>
                          <b-button variant="default" v-b-modal="'taskForm'" >Tambah Cardboard</b-button>
                        </b-card>
                      </b-col>
                </draggable>
            </b-card>
          </b-col>
      </b-row>

      <b-modal id="taskForm" size="lg" centered hide-footer title="Buat Cardboard">
        <b-form >
          <label for="title">Judul Cardboard</label>
          <b-form-input id="title"
                    v-model="formTask.name"
                    type="text"
                    placeholder="Masukkan judul cardboard" 
                    required></b-form-input>
          <b-button class="mt-4" variant="outline-primary" block @click="addTask">Buat Cardboard</b-button>
        </b-form>
      </b-modal>

      <b-modal id="jobForm" size="lg" centered hide-footer title="Buat Card Baru" >
        <b-form >
          <label for="title">Judul Card</label>
          <b-form-input id="title"
                    v-model="formJob.name"
                    type="text"
                    placeholder="Masukkan judul card" 
                    required></b-form-input>
          <label for="description">Deskripsi</label>
          <b-form-textarea id="description"
                  v-model="formJob.description"
                  :rows="3"
                  :max-rows="6"
                  placeholder="Masukkan deskripsi acara" 
                  required></b-form-textarea>
          <label for="jobDate">Tanggal : </label>
          <date-picker id="jobDate" class="mt-4" v-model="dateData" range type="datetime" format="yyyy-MM-dd HH:mm:ss" lang="en" confirm></date-picker> 
          <br><label for="jobDivision">Divisi</label><br>
          <b-form-select id="jobDivision" v-model="formJob.division" :options="divisionOptions" required/>

          <b-button class="mt-4" variant="outline-primary" block @click="addJob">Buat Cardboard</b-button>
        </b-form>
      </b-modal>

      <b-modal id="jobModal" size="lg" centered hide-footer title="Detail Pekerjaan">
        <b-row class="p-2" align-h="center">
          <b-col sm="12" md="7" lg="7">
            <h3>{{ jobModal.name }}</h3>
            <small>{{ jobModal.endDate }}</small>
            <p>{{ jobModal.description }}</p>

            <b-button size="md" variant="outline-primary" v-for="(volunteer, index) in jobModal.comittees" :key="index">
              <b-badge variant="primary" pill>
              {{ volunteer.comittee.name }}
              </b-badge>
            </b-button> <br><br>
            <!-- <h5>Tanggal Mulai : {{ jobModal.startDate }} </h5>
            <h5>Tanggal Selesai : {{ jobModal.endDate }}</h5> -->

            <b-form-checkbox id="checkbox1"
                     v-model="jobModal.completion"
                     value="true"
                     unchecked-value="false"
                     size="md"
                     @change="jobCompletion()">
              Rekap Tugas
              {{ completion }}
            </b-form-checkbox>
          </b-col>
          <b-col sm="12" md="5" lg="5">
            <b-form >
              <b-form-textarea id="description"
                      v-model="comment"
                      :rows="2"
                      :max-rows="3"
                      placeholder="Masukkan Komentar" 
                      required></b-form-textarea>
              <b-button class="mt-4" variant="outline-default" block @click="addComment">Tambah Komentar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-modal>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import moment from 'moment'
export default {
  name: 'c-organize-task',
  components: {
    draggable
  },
  created () {
    this.$store.dispatch('loadTask', this.$route.params.eventId)
  },
  data () {
    return {
      formTask: {
        name: ''
      },
      formJob: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        division: null
      },
      divisionOptions: [
        {value: null, text: 'Pilih divisi'},
        {value: 'ketua', text: 'Ketua'},
        {value: 'sekretaris', text: 'Sekretaris'},
        {value: 'bendahara', text: 'Bendahara'},
        {value: 'humas', text: 'Humas'},
        {value: 'perlengkapan', text: 'Perlengkapan'},
        {value: 'dasain', text: 'Desain Grafis'},
        {value: 'konsumsi', text: 'Konsumsi'},
        {value: 'dokumentasi', text: 'Dokumentasi'},
        {value: 'keamanan', text: 'Keamanan'}
      ],
      dateData: [],
      taskId: '',
      comment: '',
      completion: ''
    }
  },
  methods: {
    setJob: function (id) {
      this.$store.dispatch('loadJob', id)
    },
    setTaskId: function (id) {
      this.taskId = id
    },
    addJob: function () {
    },
    addComment: function () {
    },
    removeJob: function (taskId, name, jobs, index) {
      // Remove job from GUI
      jobs.splice(index, 1)
    },
    add: function () {
      console.log('masuk add')
      this.list.push({
        jobs: [
          {
            name: 'task 1'
          }
        ]
      })
    },
    replace: function () {
      console.log('masuk')
      this.list = [{
        jobs: [{
          name: 'task 1'
        }]
      }]
    },
    addTask: function () {
      this.$store.dispatch('createTask', [this.$route.params.eventId, this.formTask])
    },
    taskMoved: function (event) {
      const evt = event.added || event.moved
      console.log(evt)
      if (evt === undefined) { return }
      const element = evt.element
      const listIndex = this.tasks.findIndex((task) => {
        return task.jobs.find((card) => {
          return card.id === element.id
        })
      })
      var data = new FormData()
      data.append('card[list_id]', this.tasks[listIndex].id)
      data.append('card[position]', evt.newIndex + 1)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
    },
    listMoved: function (event) {

    },
    jobCompletion: function () {
      var form = new FormData()
      form.append('completion', !this.jobModal.completion)
      form.append('dateCompletion', moment(new Date()).format('DD-MM-YYYY HH:mm:ss'))
      this.$store.dispatch('jobCompletion', [this.jobModal.id, form])
    }
  },
  computed: {
    tasks: {
      get () {
        return this.$store.getters.eventTask
      },
      set (value) {
        this.$store.commit('SET_TASK', value)
      }
    },
    jobModal () {
      return this.$store.getters.eventJob
    }
  }
}
</script>

<style scoped>
.list-task-item {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19) !important;
  transition: all 1s;
}

.list-task-enter, .list-task-leave-active {
  opacity: 0;
}
</style>


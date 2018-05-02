<template>
  <dv class="c-organize-task">
      <b-row class="" align-h="center">
          <b-col sm="12" md="10" lg="10">
              <b-card>
                <draggable v-model="tasks" 
                           :options="{group:'tasks'}"
                           class="row">
                      <b-col v-for="mytasks in tasks" :key="mytasks.name" 
                              sm="12" md="3" lg="3">
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
                                  :options="{group:'taskJobs'}">
                            <transition-group name="list-task">
                              <b-card v-for="(task, index) in mytasks.jobs" 
                                  v-bind:key="task.name"
                                  class="mt-2 p-2 list-task-item"
                                  no-body
                                  v-b-modal="'jobModal'"
                                  @click="setJobId(task.id)"
                              >
                                <div>
                                  {{ task.name }}
                                </div>
                                <div>
                                  <br>
                                  <button v-on:click="removeJob(mytasks.id, task.name, mytasks.jobs, index)">Remove</button>
                                </div> 
                              </b-card>
                            </transition-group>
                            <b-card class="mt-2" 
                                      no-body>
                                <b-button variant="primary" v-b-modal="'jobForm'" @click="setTaskId(mytasks.id)">Tambah Card</b-button>
                              </b-card>
                          </draggable>
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

      <b-modal id="taskForm" size="lg" centered hide-footer title="Buat Acara Baru" @shown="clearForm">
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

      <b-modal id="jobForm" size="lg" centered hide-footer title="Buat Acara Baru" @shown="clearForm">
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

          <date-picker class="mt-4" v-model="dateData" range type="datetime" format="yyyy-MM-dd HH:mm:ss" lang="en" confirm></date-picker> 
        
          <b-button class="mt-4" variant="outline-primary" block @click="addJob">Buat Cardboard</b-button>
        </b-form>
      </b-modal>

      <b-modal id="jobModal" size="lg" centered hide-footer title="Detail Pekerjaan" @shown="clearForm">
        <b-row class="mt-4" align-h="center">
          <b-col sm="12" md="7" lg="7">
            <h5>{{ jobModal.name }}</h5>
            <p>{{ jobModal.description }}</p>
            <h5>Tanggal Mulai : {{ jobModal.startDate }} </h5>
            <h5>Tanggal Selesai : {{ jobModal.endDate }}</h5>
          </b-col>
          <b-col sm="12" md="5" lg="5">
            <b-form >
              <b-form-textarea id="description"
                      v-model="jobComment.comment"
                      :rows="2"
                      :max-rows="3"
                      placeholder="Masukkan deskripsi acara" 
                      required></b-form-textarea>
              <b-button class="mt-4" variant="outline-default" block @click="addComment">Tambah Komentar</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-modal>
  </dv>
</template>

<script>
import draggable from 'vuedraggable'
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
        endDate: ''
      },
      jobModal: {
        name: '',
        description: '',
        startDate: '',
        endDate: ''
      },
      dateData: [],
      taskId: ''
    }
  },
  methods: {
    setTaskId: function (id) {
      this.taskId = id
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


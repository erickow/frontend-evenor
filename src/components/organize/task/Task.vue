<template>
  <div class="c-organize-task">
      <b-row class="" align-h="center">
          <b-col sm="12" md="10" lg="10">
              <b-card>
                <b-card-group>
                  <div v-for="mytasks in tasks" :key="mytasks.name">
                    <b-card class="mt-2" bg-variant="dark" text-variant="white" title="Card Title">
                    <div class="mytasks-contents">
                      <draggable v-model="mytasks.jobs">
                        <transition-group name="list-task">
                          <div v-for="(task, index) in mytasks.jobs" 
                              v-bind:key="task.name"
                              class="list-task-item"
                              :options="{group:'taskJob'}"
                          >
                            <div>
                              {{ task.name }}
                            </div>
                            <div>
                              <br>
                              <button v-on:click="removeJob(mytasks.id, task.name, mytasks.jobs, index)">Remove</button>
                            </div> 
                          </div>
                        </transition-group>
                      </draggable>
                    </div>
                  </b-card>
                </div>
                </b-card-group>
            </b-card>
          </b-col>
      </b-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'c-organize-task',
  components: {
    draggable
  },
  data () {
    return {
      tasks: [
        {
          id: 1,
          jobs: [
            {
              name: 'task 1 mencari peralatan panggung'
            },
            {
              name: 'task 2 menyiapkan dana kegiatan'
            },
            {
              name: 'task 3 mencari guest star'
            },
            {
              name: 'task 4 persiapan rekrutmen peserta seminar'
            },
            {
              name: 'task 5 menyebarkan brosura'
            }
          ]
        },
        {
          id: 2,
          jobs: [
            {
              name: 'task 1 mencari peralatan panggung'
            },
            {
              name: 'task 2 menyiapkan dana kegiatan'
            },
            {
              name: 'task 3 mencari guest star'
            }
          ]
        }
      ]
    }
  },
  methods: {
    removeJob: function (taskId, name, jobs, index) {
      // Remove job from GUI
      jobs.splice(index, 1)
    },
    add: function () {
      console.log('masuk add')
      this.list.jobs.push({
        name: 'task 1'
      })
    },
    replace: function () {
      console.log('masuk')
      this.list.jobs = [{
        name: 'task 1'
      }]
    }
  }
}
</script>

<style scoped>
.list-task-item {
  padding: 4px;
  margin-top: 4px;
  border: solid 1px;
  transition: all 1s;
}

.list-task-enter, .list-task-leave-active {
  opacity: 0;
}
</style>


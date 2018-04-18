<template>
  <div class="c-organize-task">
      <b-row class="" align-h="center">
          <b-col sm="12" md="10" lg="10">
              <b-card>
                <div v-for="mytasks in tasks" :key="mytasks.name">
                  <div class="mytasks-contents">
                  <draggable v-model="mytasks.jobs">
                  <transition-group name="list-task">
                    <div v-for="(task, index) in mytasks.jobs" 
                        v-bind:key="task.name"
                        class="list-task-item" 
                    >
                      <div>
                        {{ task.name }}
                      </div>
                      <div>
                        <br>
                        <button v-on:click="removeJob(tasks.id, task.name, tasks.jobs, index)">Remove</button>
                      </div> 
                    </div>
                  </transition-group>
                </draggable>
                  </div>
                </div>
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
              name: 'task 5 menyebarkan brosur'
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


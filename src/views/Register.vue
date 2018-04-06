<template>
  <div class="v-login">
      <b-row align-h="center" class="mt-5">
        <b-col md="8">
            <b-card no-body class="p-4">
              <b-card-body class="text-center">
                <b-row align-h="center">
                    <b-col md="4" lg="4">
                      <h1 class="mt-3">Register</h1>
                      <p class="text-muted">Daftar Akun baru</p>
                    </b-col>
                    <b-col md="8" lg="8">
                        <b-input-group class="mt-4 mb-3">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="user-circle-o"></icon></span></div>
                        <input v-model="username" type="text" class="form-control" placeholder="Masukkan Nama">
                        </b-input-group>
                        <b-input-group class="mt-4 mb-3">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="envelope-o"></icon></span></div>
                        <input v-model="username" type="text" class="form-control" placeholder="Masukkan Email">
                        </b-input-group>
                        <b-input-group class="mb-5">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="key" ></icon></span></div>
                        <input v-model="password" type="password" class="form-control" placeholder="Masukkan Password">
                        </b-input-group>
                        <b-button variant="primary" class="px-4" v-on:click="auth">Daftar   </b-button>
                    </b-col>
                </b-row>
              </b-card-body>
            </b-card>
        </b-col>
      </b-row>
    </div>    
  </div>  
</template>

<script>
export default {
  name: 'v-login',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

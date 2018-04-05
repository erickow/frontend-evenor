<template>
  <div class="v-login">
      <b-row align-h="center" class="mt-5">
        <b-col md="8">
            <b-card no-body class="p-4">
              <b-card-body class="text-center">
                <b-row align-h="center">
                    <b-col md="8" lg="8">
                        <h1>Login</h1>
                        <p class="text-muted">Sign In to your account</p>
                        <b-input-group class="mt-4 mb-3">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="user-circle-o"></icon></span></div>
                        <input v-model="username" type="text" class="form-control" placeholder="Username">
                        </b-input-group>
                        <b-input-group class="mb-5">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="key" ></icon></span></div>
                        <input v-model="password" type="password" class="form-control" placeholder="Password">
                        </b-input-group>
                        <b-button variant="primary" class="px-4" v-on:click="auth">Login</b-button>
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
import { checkFormLogin } from '@/validations/login'
import { warningAlert } from '@/utils/alert'
import { authentication as Login } from '@/utils/request'
export default {
  name: 'v-login',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    auth: function () {
      if (checkFormLogin(this.username, this.password)) {
        Login(this.username, this.password)
      } else {
        warningAlert('Silahkan isi kembali form')
      }
    }
  }
}
</script>

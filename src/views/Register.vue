<template>
  <div class="v-register">
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
                      <b-form @submit="onSubmit">
                        <b-input-group class="mt-4 mb-3">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="user-circle-o"></icon></span></div>
                        <input v-model="form.name" type="text" class="form-control" placeholder="Masukkan Nama" required>
                        </b-input-group>
                        <b-input-group class="mt-4 mb-3">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="envelope-o"></icon></span></div>
                        <input v-model="form.email" type="email" class="form-control" placeholder="Masukkan Email" required>
                        </b-input-group>
                        <b-input-group class="mt-4 mb-3">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="key" ></icon></span></div>
                        <input v-model="form.password" type="password" class="form-control" placeholder="Masukkan Password" required>
                        </b-input-group>
                        <b-input-group class="mt-4 mb-5">
                        <div class="input-group-prepend"><span class="input-group-text"><icon name="key" ></icon></span></div>
                        <input v-model="form.confirmPassword" type="password" class="form-control" placeholder="Konfirmasi Password" required>
                        </b-input-group>
                        <b-button variant="primary" type="submit" class="px-4">Daftar</b-button>
                      </b-form>
                    </b-col>
                </b-row>
              </b-card-body>
            </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import { warningAlert } from '@/utils/alert'
import { requestPublic } from '@/utils/request'
export default {
  name: 'v-register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        active: 0
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.checkConfirmationPassword) {
        requestPublic('post', 'home/register', this.form)
      } else {
        warningAlert('Konfirmasi password tidak sama')
      }
    }
  },
  computed: {
    checkConfirmationPassword () {
      return this.form.password === this.form.confirmPassword
    }
  }
}
</script>

<template>
    <!-- <v-sheet class="bg-deep-purple pa-12" rounded> -->
      <v-card class="mx-auto px-6 py-8" max-width="390">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Email"
          ></v-text-field>
  
        <v-text-field
            v-model="password"
            type="password"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Password"
        ></v-text-field>
  
          <br>
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="indigo-darken-4"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    <!-- </v-sheet> -->
  </template>

<script>
export default {
  name: "SignInComponent",
  data: () => ({
    form: false,
    loading: false,
    email: null,
    password: null,
  }),

  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true
      
      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
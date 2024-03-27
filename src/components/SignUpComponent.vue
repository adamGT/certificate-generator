<template>
    <!-- <v-sheet class="bg-deep-purple pa-12" rounded> -->
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
        
        <v-row>
              <v-col>
                <v-card class="mx-auto px-6 py-8" min-width="390" max-width="490">
                    <v-text-field
                        v-model="user.firstName"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        @keyup="countLetter"
                        label="First Name"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="user.fathersName"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Father's Name"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="user.grandfathersName"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Grandfather's Name"
                    ></v-text-field>

                    <v-combobox
                        v-model="user.title"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Please Choose your title"
                        :items="['Dr.', 'Mr.','Ms.','Mrs','N/S','Sr.']"
                    ></v-combobox>

                    <v-combobox
                        v-model="user.sex"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Gender"
                        :items="['Male', 'Female']"
                    ></v-combobox>
            
                    <v-text-field
                        v-model="user.password"
                        type="password"
                        :readonly="loading"
                        :rules="[required, checkPassword]"
                        class="mb-2"
                        clearable
                        @keyup="checkPassword"
                        label="Password"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="user.conformPassword"
                        type="password"
                        :readonly="loading"
                        :rules="[required, checkPassword]"
                        class="mb-2"
                        clearable
                        @keyup="checkPassword"
                        label="Confirm Password"
                    ></v-text-field>
                </v-card>
              </v-col>
              <v-col>
                
                <v-card class="mx-auto px-6 py-8 " min-width="390" max-width="490" justify="center">
                    

                    <v-text-field
                        v-model="user.phone"
                        :readonly="loading"
                        class="mb-2"
                        clearable
                        label="Phone"
                    ></v-text-field>

                    <v-text-field
                        v-model="user.email"
                        type="email"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Email"
                    ></v-text-field>
                    
                    <v-text-field
                        v-model="user.placeOfWork"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Place of Work"
                    ></v-text-field>
            
                    <v-combobox
                        v-model="user.profession"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Please Choose your profession"
                        :items="['General Practitioner', 'Senior','Nurse','Health Officer','Dentistry','EMT','Other...']"
                    ></v-combobox>

                    
                    <v-combobox
                        v-model="user.region"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Your region"
                        :items="['Addis Ababa', 'Dire Dawa','Harari','Oromia','Amhara','Afar','SNNPR','Sidama','Gambella','Tigray','Somali','Benishangul-Gumuz','South West Ethiopia Peoples Region']"
                    ></v-combobox>
                
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
                        Sign Up
                    </v-btn>
                </v-card>
              </v-col>
            </v-row>
        </v-form>
    <!-- </v-sheet> -->
  </template>

<script>
import AuthService from '../services/authService'

export default {
  name: "SignUpComponent",
  data: () => ({
    form: false,
    loading: false,
    onformPassword: null,
    user: {
      firstName: null,
      fathersName: null,
      grandFathersName: null,
      sex: null,
      title: null,
      email: null,
      phone: null,
      placeOfWork: null,
      profession: null,
      region: null,
      password: null,
    },
  }),

  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true
      
      setTimeout(() => (this.loading = false), 2000)
      this.registerUser()
    },
    checkPassword () {
        if(this.password !== this.conformPassword){
            return "Password doesn't match"
        }
    },
    async registerUser(){
      // try{
        await AuthService.registerUser(this.user)
      // }catch(err){
      //   console.log(err)
      // }
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
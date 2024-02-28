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
                        v-model="firstName"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        @keyup="countLetter"
                        label="First Name"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="fathersName"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Father's Name"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="grandFathersName"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Grandfather's Name"
                    ></v-text-field>
                    <v-combobox
                        v-model="gender"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Gender"
                        :items="['Male', 'Female']"
                    ></v-combobox>
            
                    <v-text-field
                        v-model="password"
                        type="password"
                        :readonly="loading"
                        :rules="[required, checkPassword]"
                        class="mb-2"
                        clearable
                        @keyup="checkPassword"
                        label="Password"
                    ></v-text-field>
            
                    <v-text-field
                        v-model="conformPassword"
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
                        v-model="phone"
                        :readonly="loading"
                        class="mb-2"
                        clearable
                        label="Phone"
                    ></v-text-field>

                    <v-text-field
                        v-model="email"
                        type="email"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Email"
                    ></v-text-field>

                    <v-combobox
                        v-model="title"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Please Choose your title"
                        :items="['Dr.', 'Mr.','Ms.','Mrs','N/S','Sr.']"
                    ></v-combobox>
            
                    <v-combobox
                        v-model="profession"
                        :readonly="loading"
                        :rules="[required]"
                        class="mb-2"
                        clearable
                        label="Please Choose your profession"
                        :items="['General Practitioner', 'Senior','Nurse','Health Officer','Dentistry','EMT','Other...']"
                    ></v-combobox>

                    
                    <v-combobox
                        v-model="region"
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
export default {
  name: "SignUpComponent",
  data: () => ({
    form: false,
    loading: false,
    gender: null,
    email: null,
    password: null,
    conformPassword: null,
    phone: null,
    title: null,
    profession: null,
    region: null,
    firstName: null,
    fathersName: null,
    grandFathersName: null,
  }),

  methods: {
    onSubmit () {
      if (!this.form) return

      this.loading = true
      
      setTimeout(() => (this.loading = false), 2000)
    },
    checkPassword () {
        if(this.password !== this.conformPassword){
            return "Password doesn't match"
        }
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>
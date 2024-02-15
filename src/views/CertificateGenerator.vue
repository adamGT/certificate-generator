<template>
    <v-app>
      <HeadingComponent />
        <v-main>
          <v-container >
            <v-row>
              <v-col>
                <img alt="Vue logo" src="../assets/logo.png">
                <h1 class="text-primary">Welcome to</h1>
                <h1 class="text-primary">Automatic Certificate Generator</h1>
                <br>
                <h3 class="font-weight-light">Please fillout the form and generate your certificate.</h3>
              </v-col>
  
              <v-col>
                <NameInput />
              </v-col>
            </v-row>
          </v-container>        
        </v-main>
      <v-footer class="bg-indigo-darken-4"></v-footer> 
    </v-app>
</template>
<script>
import HeadingComponent from '../components/HeadingComponent.vue'
import NameInput from '../components/NameInput.vue'

export default {
  name: 'App',
  components: {
    HeadingComponent,
    NameInput,
  }
}
</script>
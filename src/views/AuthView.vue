<template>
    <v-app>
      <HeadingComponent />
        <v-main>
          <v-container class="mt-6">
            <div v-show="signUpMode">
                <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
                <h1 class="text-primary">{{ welcomeText }}</h1>
                <h2 class="text-primary">{{ descriptionText }}</h2>
            </div>
            <v-row>
              <v-col v-show="!signUpMode" >
                <img alt="Vue logo" src="../assets/logo.png">
                <h1 class="text-primary">{{ welcomeText }}</h1>
                <h1 class="text-primary">{{ descriptionText }}</h1>
              </v-col>
  
              <v-col>
                <SignInComponent v-show="!signUpMode" />
                <SignUpComponent v-show="signUpMode" />
                
                <h3 class="font-weight-light">{{ headerThreeText }} <a cursor: pointer v-on:click="changeRoute" class="text-primary text-decoration-underline">{{anchorText}} </a></h3>
                
              </v-col>
            </v-row>
          </v-container>        
        </v-main>
      <v-footer class="bg-indigo-darken-4"></v-footer> 
    </v-app>
</template>
<script>
import HeadingComponent from '../components/HeadingComponent.vue'
import SignInComponent from '../components/SignInComponent.vue'
import SignUpComponent from '../components/SignUpComponent.vue'

export default {
  name: 'App',
  components: {
    HeadingComponent,
    SignInComponent,
    SignUpComponent,
  },
  data: () => ({
    signUpMode: false,
    anchorText: "Sign Up",
    welcomeText: "Welcome Back",
    descriptionText: "Sign In to your account",
    headerThreeText: "You don't have an account?",
  }),
  
  methods: {
    changeRoute () {
        if(this.signUpMode){
            this.signUpMode = false
            this.anchorText = "Sign Up"
            this.welcomeText = "Welcome Back"
            this.descriptionText = "Sign In to your account"
            this.headerThreeText = "You don't have an account?"
            
        }else {
            this.signUpMode = true
            this.anchorText = "Sign In"
            this.welcomeText = "Welcome to Blue Health"
            this.descriptionText = "Please create your account by filling the form below"
            this.headerThreeText = "Already have an account?"

        }
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}
</style>

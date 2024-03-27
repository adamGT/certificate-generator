<template>
    <!-- <v-sheet class="bg-deep-purple pa-12" rounded> -->
      <v-card class="mx-auto px-6 py-8" max-width="390">
        <vue-qrcode v-show="true" :value="urlLink" ref="qr" :options="{ width: 300 }"></vue-qrcode>
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
        
        <v-combobox
            v-model="title"
            :readonly="loading"
            :rules="[required, countLetter]"
            class="mb-2"
            clearable
            label="Please Choose your title"
            :items="['Dr.', 'Mr.','Ms.','Mrs','N/S','Sr.']"
        ></v-combobox>

          <v-text-field
            v-model="firstName"
            :readonly="loading"
            :rules="[required, countLetter]"
            class="mb-2"
            clearable
            @keyup="countLetter"
            label="First Name"
          ></v-text-field>
  
          <v-text-field
            v-model="fathersName"
            :readonly="loading"
            :rules="[required, countLetter]"
            class="mb-2"
            clearable
            @keyup="countLetter"
            label="Father's Name"
          ></v-text-field>
  
        <v-text-field
            v-model="grandFathersName"
            :readonly="loading"
            :rules="[required, countLetter]"
            class="mb-2"
            clearable
            @keyup="countLetter"
            label="Grandfather's Name"
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
            Generate Certificate
          </v-btn>
        </v-form>
      </v-card>
    <!-- </v-sheet> -->
  </template>
  <script>
  import { jsPDF } from "jspdf";
  import image from '@/assets/image.png';
  import { font } from '@/assets/fontData'
  export default {
    name: "NameInput",
    data: () => ({
      form: false,
      title: null,
      firstName: null,
      fathersName: null,
      grandFathersName: null,
      loading: false,
      myUrl: '#',
      myFilename: '',
      image,
      urlLink: "https://forms.gle/jWdjmTguom8uDi4Y8"
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true
        this.makePdf()
        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
      countLetter(){
        var fName = 0
        var ffName = 0
        var gfName = 0
        
        if(this.firstName !== null){
          fName = this.firstName.length
        }
        if(this.fathersName !== null){
          ffName = this.fathersName.length
        }
        if(this.grandFathersName !== null){
          gfName = this.grandFathersName.length
        }
        var nameLength = fName+ffName+gfName
        console.log(nameLength)

        if(nameLength > 40){
          return 'Name is too Long for the Certificate'
        }else{
          return true
        }
      },
      makePdf(){
        const doc = new jsPDF({
            orientation: "landscape",
            format: [288, 188]
        });

        var useFullName = this.title+" "+this.firstLetterToCaps(this.firstName.toLowerCase())+" "
        +this.firstLetterToCaps(this.fathersName.toLowerCase())+" "
        +this.firstLetterToCaps(this.grandFathersName.toLowerCase())
        // var useFullName = "ABCDEFGHIJKLMNO"

        var textTopMagrin = 115

        if(useFullName.length < 20){
            doc.setFontSize(70)
        }else if(useFullName.length >= 20 && useFullName.length < 26){
            textTopMagrin = 110
            doc.setFontSize(50)
        }else if(useFullName.length >= 26 && useFullName.length < 35){
            textTopMagrin = 107
            doc.setFontSize(40)
        }else if(useFullName.length >= 35 && useFullName.length < 44){ // Name F Name GF Name letter count should not exceed 35/36
            textTopMagrin = 107
            doc.setFontSize(35)
        }else if(useFullName.length >= 44 && useFullName.length < 54){ // Name F Name GF Name letter count should not exceed 35/36
            textTopMagrin = 107
            doc.setFontSize(32)
        }else{
            alert("Your Name is too long for our certificate. Please shorten it");
            return
        }
        // Wondimagegnehu Gebremariyam Hailesilasei

        
        const contentHtml = this.$refs.qr.$el;
        const qrImage = contentHtml.toDataURL("image/jpeg", 0.8);
        
        const imageWidth = doc.internal.pageSize.getWidth();

        doc.addImage(image,'PNG',4,4,280,180)

        doc.addFileToVFS("calist.ttf", font)
        doc.addFont("calist.ttf", "calist", "normal")
        doc.setFont("calist","normal")
        doc.setTextColor("#013A65") //#3C81A8
        doc.text(useFullName, (imageWidth/2), textTopMagrin, null, null,'center');

        doc.addImage(qrImage, 'PNG', 246, 146, 30, 30)

        doc.setFontSize(15)
        doc.setTextColor("#3C81A8") 
        doc.text("CERTIFICATE", (imageWidth/2), 125, null, null,'center')

        doc.save('Certificate.pdf')
      },
      firstLetterToCaps(data){
        return data.charAt(0).toUpperCase() + data.slice(1)
      }
    },
  }
</script>
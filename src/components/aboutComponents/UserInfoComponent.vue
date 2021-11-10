<template>
  <div class="x text-center p-5" v-if="windowWidth > 731">
    <div class="container">
      <b-row>
        <b-col lg="4" sm="3">
        </b-col>
        <b-col lg="3" >
          <h1 class=" mx-auto text-white tittle animate__animated animate__backInDown">About me</h1>
          <!-- https://readme-typing-svg.herokuapp.com/demo/ -->
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12" lg="0">
        </b-col>
        <b-col sm="12" md="12" lg="3">
          <b-img width="200" height="200" align-self="center" class="animate__animated animate__backInUp img-responsive"  src="https://cdn-icons-png.flaticon.com/512/147/147140.png" rounded="circle" alt="Circle image"></b-img>
        </b-col>
        <b-col sm="12" md="12" lg="9" align-self="center"  class="text-justify text-white animate__animated animate__backInRight">
          <span >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur aelit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur aelit. Officia, in optio minus quasi quae aperiam.
          </span>
        </b-col>
      </b-row>
        
      <b-row>
        <b-col lg="2" ></b-col>
        <b-col sm="8" lg="10" class="mx-auto animate__animated animate__backInUp">
         <social-links />
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="0" md="3" lg="0"></b-col>

        <b-col class="animate__animated animate__backInUp">
         <frameworks></frameworks>
        </b-col>
        <b-col class="animate__animated animate__backInUp ">
          <languages></languages>
        </b-col>
      </b-row>
    </div>
  </div>

  <div class="text-center p-5" v-else>
    <div class="container">
      <b-row >
        <b-col lg="4" sm="3">
        </b-col>
        <b-col lg="3" >
          <h1 class=" mx-auto text-white tittle animate__animated animate__backInDown">About me</h1>
          <!-- https://readme-typing-svg.herokuapp.com/demo/ -->
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12" lg="0">
        </b-col>
        <b-col sm="12" md="12" lg="3">
          <b-img width="200" height="200" align-self="center" class="animate__animated animate__backInUp img-responsive"  src="https://cdn-icons-png.flaticon.com/512/147/147140.png" rounded="circle" alt="Circle image"></b-img>
        </b-col>
        <b-col sm="12" md="12" lg="9" align-self="center"  class="text-justify text-white animate__animated animate__backInRight">
          <span >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur aelit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, in optio minus quasi quae aperiam.
          Lorem ipsum dolor sit amet consectetur aelit. Officia, in optio minus quasi quae aperiam.
          </span>
        </b-col>
      </b-row>
        
      <b-row>
        <b-col lg="2" ></b-col>
        <b-col sm="8" lg="10" class="mx-auto animate__animated animate__backInUp">
         <social-links />
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="0" md="3" lg="0"></b-col>

        <b-col sm="5" md="4" lg="5" class="animate__animated animate__backInUp">
         <frameworks ></frameworks>
        </b-col>
        <b-col sm="6" md="4" lg="4" class="animate__animated animate__backInUp ">
          <languages></languages>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import SocialLinks from './userInfoComponents/SocialMediaComponent.vue'
import Frameworks from './userInfoComponents/FrameworksComponent.vue'
import Languages from './userInfoComponents/LanguagesComponent.vue'
export default {
    name: 'user-info',
    components: {
      SocialLinks,
      Frameworks,
      Languages
    },
    data(){
      return{
        windowWidth: document.documentElement.clientWidth,
      }
    },
    mounted() {
      window.addEventListener('resize', this.getDimensions);
    },
    unmounted() {
      window.removeEventListener('resize', this.getDimensions);
    },
  methods: {
    getDimensions() {
      this.windowWidth = document.documentElement.clientWidth;
    }
  }
}
</script>

<style scoped>
.x{
  height: 100vh;
}
</style>
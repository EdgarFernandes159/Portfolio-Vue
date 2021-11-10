<template>
  <div>
      <div> 
        <b-row class="w-75 mx-auto mt-2">
            <b-col class="icon" v-for="socialSetting in socialSettings" :key="socialSetting.link">
                <a :href="socialSetting.link" target="_blank">
                    <b-icon :icon="socialSetting.iconName"></b-icon>
                </a>
            </b-col>
        </b-row>
      </div>
  </div>
</template>

<script>
export default {
    name: 'social-links',
    data(){
        return{
            socialSettings: [
                {
                    iconName: 'instagram',
                    link: 'https://www.instagram.com'
                },
                {
                    iconName: 'facebook',
                    link: 'https://www.facebook.com'
                },
                {
                    iconName: 'github',
                    link: 'https://www.github.com'
                },
                {
                    iconName: 'twitter',
                    link: 'https://www.twitter.com'
                },
                {
                    iconName: 'youtube',
                    link: 'https://www.youtube.com'
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
a svg{
    color: white;
}
a svg:hover{
   color: tomato;
}
</style>
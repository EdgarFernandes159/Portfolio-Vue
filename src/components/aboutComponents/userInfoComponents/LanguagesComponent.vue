<template>
  <b-container class="text-white">
        <b-row>
            <b-col>
                <h2 class="p-3">Languages</h2>
            </b-col>
        </b-row>
        
        <b-row >
            <b-col v-for="framework in frameworks" :key="framework.name" class="p-3">
                <b-img :src="framework.img_url" height="30" width="30"></b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'languages-component',
    data(){
        return{
            //GET SVG IMAGES = https://devicon.dev/
            frameworks: [
                {
                    name: 'VueJs',
                    img_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
                },
                {
                    name: 'Laravel',
                    img_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
                },
                {
                    name: 'NuxtJs',
                    img_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
                },
                {
                    name: 'React',
                    img_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                },
            ]
        }
    },
}

</script>
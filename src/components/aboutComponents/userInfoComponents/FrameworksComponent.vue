<template>
    <b-container class="text-white w-100">
        <b-row>
            <b-col>
                <h2 class="p-3">Skills</h2>
            </b-col>
        </b-row>
        
        <b-row class="mb-1 text-left" v-for="skill in skills" :key="skill.name">
            <b-col sm="2"  xl="1"></b-col>
            <b-col class="mr-2" sm="2" md="5" lg="2" xl="2">
                {{skill.name}}
            </b-col>
            <b-col sm="10" md="10" lg="10" xl="8" class="pt-1">
                <b-progress variant="warning" :value="skill.value"></b-progress>
            </b-col>
        </b-row>
    </b-container>
    
</template>

<script>
export default {
    name:'Frameworks',
    data(){
        return{
            skills:[
                {
                    name: 'Javascript',
                    value: 75,
                },
                {
                    name: 'C#',
                    value: 50,
                },
                {
                    name: 'PHP',
                    value: 60,
                },
                {
                    name: 'HTML5',
                    value: 80,
                },
                {
                    name: 'MySql',
                    value: 55,
                },
            ],
        }
    }
}
</script>
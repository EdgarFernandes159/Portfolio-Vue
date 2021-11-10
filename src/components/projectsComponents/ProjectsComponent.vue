<template>
    <div class="x p-5">
        <div class="container y">
            <div v-if="totalRepositories == 0">
                <h1 class="text-white mt-3">Don´t have repositories</h1>
            </div>
            <div v-else class="text-white mt-3">
                <div v-for="repository in repositories" :key="repository.name">
                    <!-- Verify if the repository is not a file (README...) -->
                    <div v-if="repository.language != null" class="animate__animated animate__backInLeft">
                        <project-list :repository="repository" :totalRepositories="totalRepositories"></project-list>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import githubApi from "../../api/githubApi";
import ProjectList from "./ProjectList.vue"


export default {
    name: "ProjectsComponent",
    components:{
        ProjectList,
    },
    data(){
        return{
            repositories: [],
            totalRepositories: 0,
        }
    },
    
    async mounted(){
        this.repositories = await githubApi.getRepository();
        this.totalRepositories = this.repositories.length;
    },
}
</script>

<style scoped>
.y{
    max-height: 100%;
    overflow-y: auto;
}
.x{
    height: 100vh;
}
</style>
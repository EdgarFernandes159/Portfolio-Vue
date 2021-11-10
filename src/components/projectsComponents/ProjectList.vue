<template>
    <div class=" text-white mt-2">
        <div class="container">
            <b-card id="repoInfo" bg-variant="dark" :repository="repository">
                <b-card-title>{{repository.name}}</b-card-title>
                <b-badge pill variant="secondary">{{repository.language}}</b-badge>
                <b-card-text v-if="repository.description != null">
                    {{repository.description}} 
                </b-card-text>

                <b-card-text v-else>
                    This project don´t have description
                </b-card-text>

                <a :href="repository.url" text-variant="secondary">Go to project</a>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectList",
    props: {
        repository: Object,
        //get total repositories from projectComponent
        totalRepositories: Number
    },
}
</script>

<style scoped>
#repoInfo{
    border-radius: 15px;
}
a{
    color: gold;
}
a:hover{
    color:white;
    text-decoration: none;
}
</style>
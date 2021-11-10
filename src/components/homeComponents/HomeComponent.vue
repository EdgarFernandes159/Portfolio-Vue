<template>
    <b-container class="x">
        <!-- Change the image size if the window width > 570 -->
        <div v-if="windowWidth > 570">
            <b-img center src="https://readme-typing-svg.herokuapp.com?color=%23E5F700&size=40&center=true&vCenter=true&width=555&height=65&lines=Welcome+to+my+portfolio"></b-img>
        </div>
        <div v-else>
            <b-img class="mx-auto my-auto" src="https://readme-typing-svg.herokuapp.com?color=%23E5F700&center=true&vCenter=true&lines=Welcome+to+my+portfolio"></b-img>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'home-component',
    data() {
        return {
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
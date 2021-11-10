<template>
  <b-nav align="center">
    <b-nav-item v-for="option in options" :key="option.name" :to="option.route" class="mr-5">
      {{option.name}}
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: 'small-menu-options',
  props:{
    options: Array
  },
}
</script>

<style scoped>
.x{
  width: 100vw;
}
a{
  color:white;
}
a:hover, a:focus-visible{
  color:white;
  transform: scale(1.2);
}
a:focus{
  color: gold;
  font-weight: bold;
}
</style>
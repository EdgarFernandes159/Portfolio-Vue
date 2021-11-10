<template>
<div>
  <b-nav vertical>
    <b-nav-item class="p-2" v-for="option in options" :key="option.name" :to="option.route">
      <b-icon :icon="option.icon"></b-icon>
      {{option.name}}
    </b-nav-item>
  </b-nav>
</div>
  
</template>
<script>
export default {
    name: 'menu-options',
    props:{
      options: Array
    },
}
</script>
<style scoped>
ul{
  margin-left: auto;
  margin-right: auto; 
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
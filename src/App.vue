<template>
  <div class="box1" v-if="windowWidth > 915">
    <menu-options class="menu" :options="options" />
    <div class="backgroundStyle">
      <router-view/>
    </div>
  </div>

  <div v-else class="box2">
    <smal-menu-options class="menu2" :options="options"/>
    <div class="backgroundStyle">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MenuOptions from './components/shared/MenuOptionsComponent.vue';
import SmalMenuOptions from './components/shared/SmallMenuOptions.vue'
export default {
  name: 'App',
  components: {
    MenuOptions,
    SmalMenuOptions
  },
  data(){
    return{
      windowWidth: document.documentElement.clientWidth,
      options: [
        {
          name: 'Home',
          icon: 'house-door',
          route: '/'
        },
        {
          name: 'About',
          icon: 'file-earmark-text',
          route: '/about'
        },
        {
          name: 'Projects',
          icon: 'book',
          route: '/projects'
        },
        {
          name: 'Contacts',
          icon: 'telephone',
          route: '/contacts'
        },
      ],
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
  
};
</script>
<style>
:root{
  --color: #0F2027;
  --gradiantColor: linear-gradient(to right, #2C5364, #203A43, #0F2027);;
}
.menu{
  background: var(--color);
  background: var(--gradiantColor);
 
  width: 10%;
  display: flex;
  align-items: center;
}
.menu2{
  /* z-index: 1;
  
  position: fixed; */
  /* width: 100%; */
  background: var(--color);
  background: var(--gradiantColor);
}
.box1{
  display: flex;
  
}
.backgroundStyle{
  width: 100%;
  background: var(--color);
  background: linear-gradient(to right, #243B55, #141E30);

} 
</style>

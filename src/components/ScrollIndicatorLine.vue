<template>
  <section class="indicator">
        <div class="indicator__progress" ref="progress"></div>
  </section>
</template>

<script>
export default {
  name: 'ScrollIndicatorLine',
  props: {
  },
  data(){
    return{
    }
  },
  methods: {
  },
  mounted (){
    let scrollLine = () =>{
      let progress = this.$refs.progress;
      let scrollTop = window.scrollY;
      let windowHeight = window.innerHeight;
      let siteHeight = document.documentElement.scrollHeight;

      let percentegeScroll = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

      progress.style.width = `${percentegeScroll}%`;
    };

    scrollLine();

    window.addEventListener( 'scroll', () =>{
      scrollLine();
    } );
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
.indicator{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999999999;
  width: 100%;
  height: 5px;
  background-color: #f5f5f5;
  
  &__progress{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #2196F3;
  }
}
@media (max-width: 2600px){
}
@media (max-width: 2100px){   
}
@media (max-width: 1967px){}
@media (max-width: 1740px){}
@media (max-width: 1140px){
}
@media (max-width: 967px){
}
@media (max-width: 667px){
}
@media (max-width: 540px){
}
@media (max-width: 410px){}
</style>

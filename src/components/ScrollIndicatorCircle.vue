<template>
  <section class="indicator">
      <svg class="indicator__svg" viewBox="-10 -10 300 300">
        <circle class="indicator__circle" ref="circle" r="140" cx="140" cy="140" fill="none" stroke="#2196F3" stroke-width="20"></circle>
      </svg>
  </section>
</template>

<script>
export default {
  name: 'ScrollIndicator',
  props: {
  },
  data(){
    return{
    }
  },
  methods: {
  },
  mounted (){
    let scrollCircle = () =>{
      let scrollTop = window.scrollY;
      let windowHeight = window.innerHeight;
      let siteHeight = document.documentElement.scrollHeight;

      let percentegeScroll = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

      let circle = document.querySelector(".indicator__circle");
      let circleRadius = circle.getAttribute('r');
      let circleLength = 2 * Math.PI * circleRadius;

      circle.setAttribute('stroke-dasharray', circleLength);
      circle.setAttribute('stroke-dashoffset', -circleLength - circleLength * percentegeScroll / 100);
    };

    scrollCircle();

    window.addEventListener( 'scroll', () =>{
      scrollCircle();
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
  width: 50px;
  bottom: 30px;
  right: 42%;
  z-index: 9999999;
  
  &__svg{
    width: 100%;
    height: auto;
    color: #f5f5f5;
  }
}

</style>

<template>
  <div 
  class="side side-pasiv"
  id="side" 
  v-on:click="sideShow">
    <div class="side__text">
    </div>
    <div class="side__arrow side__arrow-right" id="arrow"></div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection',
  props: {
    msg: String
  },
  methods: {
    sideShow: function (){
      let lateral = document.getElementById('lateral');
      let side = document.getElementById('side');
      let arrow = document.getElementById('arrow');

      if (lateral.classList.contains("lateral")) {
        lateral.classList.remove('lateral');
        lateral.classList.add('lateral-adaptiv');

        side.classList.add('side-activ');
        side.classList.remove('side-pasiv');

        arrow.classList.add('side__arrow-left');
        arrow.classList.remove('side__arrow-right');
      } else {
        lateral.classList.add('lateral');
        lateral.classList.remove('lateral-adaptiv');

        side.classList.remove('side-activ');
        side.classList.add('side-pasiv');

        arrow.classList.remove('side__arrow-left');
        arrow.classList.add('side__arrow-right');
      }
    },
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/style.scss';
  @import '@/scss/_mixins.scss';
  @import '~bootstrap/dist/css/bootstrap.min.css';
  
  .side{
    display: none;
  }
  
  @media (max-width: 1678px){
    .side{
      transition: all 0.9s ease 0s;
      top: 30%;
      display: flex;
      justify-content: space-around;
      z-index: 99999999999;
      width: 45px;
      height: 140px;
      position: fixed;
      opacity: 0.6;
      cursor: pointer;
      background-color: #151515;
      border-radius: 0 100% 100% 0;
      box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
     -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
     -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
    }
    .side:hover{
      opacity: 1;
    }
    .side-pasiv{
      left: 0;
    }
    .side-activ{
      left: 310px;
    }
    .side__text{
      margin: auto 0;
    }
    .side__text>span{
      display: block;
      padding-left: 10px;
      font-size: 0.88rem;
      font-weight: 800;
    }
    .side__arrow{
      width: 32px;
      height: 30px;
      margin: auto 0;
    }
    .side__arrow-left{
      transform: rotate(-135deg);
      border-top: 6px solid #2196F3;
      border-right: 6px solid #2196F3;
    }
    .side__arrow-right{
      transform: rotate(45deg);
      border-top: 6px solid #EE534F;
      border-right: 6px solid #EE534F;
    }
  }

  /* @media (max-width: 1140px){} */
  @media (max-width: 410px){
    .side-activ{
      left: 300px;
    }

  }
  @media (max-width: 360px){
    .side-activ{
      left: 270px;
    }
  }
</style>

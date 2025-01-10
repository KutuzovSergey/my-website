<template>
  <div class="snow-wrapper">
    <div class="snow-block" ref="snowflake_block"></div>
    <div class="snow-parameters">
      <div class="snow-parameters__titel">
        <span>управление снегом</span>
      </div>
      
      <div class="snow-parameters__remove">
        <input type="checkbox" id="switch" class="snow-parameters__switch" v-model="snowConditions" />
        <label for="switch" class="snow-parameters__switch-description">
        </label>
      </div>
      
      
    </div>
    <!-- <span class='snowflake' style='position:absolute;top:10px;'>
      <img src='@/assets/snow/snowflake1.png' alt='#'>
    </span> -->
  </div>
</template>

<script>

export default {
  name: 'Snow',
  props: {
  },
  data(){
    return {
      snowConditions: false,
    }
  },
  methods: {
    randommaker_1: function () {
      console.log('hi')
    }
  },
  watch: {
    snowConditions: function () {
      console.log(this.snowConditions);
      if (this.snowConditions) {
        const snowflakes = document.querySelectorAll('div.snow-block > span');
        console.log(snowflakes);

        for (let i = 0; i <= snowflakes.length; i++) {
          // console.log(snowflakes[i]);
          snowflakes[i].remove();
        }
      }
      // else if (!this.snowConditions) {
        
      // }
    }
  },
  mounted() {
    const snowmax = 100;
    // const snowtype = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS");
    const snowflakes = new Array('snowflake1.png', 'snowflake2.png', 'snowflake3.png');
    //Скорость
    let sinkspeed = 0.5;
    //Максимальный размер снежинок
    let snowmaxsize = 30;
    //Минимальный размер снежинок
    let snowminsize = 8;

    const snowLocal = new Array();
    let marginbottom = this.$refs.snowflake_block.offsetHeight;
    let marginright = this.$refs.snowflake_block.offsetWidth;
    // var timer;
    // var i_snow=0;
    const x_mv = new Array();
    const crds = new Array();
    const lftrght = new Array();
    const browserinfos=navigator.userAgent;
    const ie5 = document.all&&document.getElementById&&!browserinfos.match(/Opera/);
    const ns6 = document.getElementById&&!document.all;
    const opera = browserinfos.match(/Opera/);

    this.randommaker_1();

    function randommaker(range) {
      const rand = Math.floor(range * Math.random());
      return rand;
    }
    
    function initsnow() {
      
      if (ie5 || opera) {
        marginbottom = document.body.clientHeight;
        // marginright = document.body.clientWidth;
      }
      else if (ns6) {
        marginbottom = window.innerHeight;
        // marginright = window.innerWidth;
      }
      
      let snowsizerange = snowmaxsize - snowminsize;
      
      for (let i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        
        x_mv[i] = 0.03 + Math.random() / 10;
        snowLocal[i] = document.getElementById("s" + i);

        // snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)];
        snowLocal[i].size = randommaker(snowsizerange) + snowminsize;
        // const snowflakeSize = randommaker(snowsizerange) + snowminsize;
        // console.log(`${snowflakeSize}px`);

        snowLocal[i].sink=sinkspeed*snowLocal[i].size/5;
        snowLocal[i].posx=randommaker(marginright-snowLocal[i].size);
        snowLocal[i].posy=randommaker(2*marginbottom-marginbottom-2*snowLocal[i].size);
        snowLocal[i].style.left = `${snowLocal[i].posx}px`;
        snowLocal[i].style.top = `${snowLocal[i].posy}px`;
        const snowflakeSize = `${randommaker(snowsizerange) + snowminsize}px`;
        snowLocal[i].style.width = snowflakeSize;
        snowLocal[i].style.height = snowflakeSize;
        snowLocal[i].childNodes[0].style.width = snowflakeSize;
        snowLocal[i].childNodes[0].style.height = snowflakeSize;
        // console.log(snowflakeSize);
        snowLocal[i].childNodes[0].src = `http://www.s-sta.online/snow/${snowflakes[randommaker(snowflakes.length)]}`;

      }
      movesnow();
    }

    function movesnow() {

      for (let i = 0; i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snowLocal[i].posy += snowLocal[i].sink;
        
        snowLocal[i].style.left=`${snowLocal[i].posx+lftrght[i]*Math.sin(crds[i])}px`;
        snowLocal[i].style.top = `${snowLocal[i].posy}px`;
        
        if (snowLocal[i].posy>=marginbottom-2*snowLocal[i].size || parseInt(snowLocal[i].style.left)>(marginright-3*lftrght[i])) {
          snowLocal[i].posx=randommaker(marginright-snowLocal[i].size);
          snowLocal[i].posy=0;
        }
      }

      // console.log(this.snow);
      // setTimeout(movesnow, 10);
    }

    for (let i = 0; i <= snowmax; i++) {
      console.log(snowmaxsize);
      this.$refs.snowflake_block.insertAdjacentHTML('afterbegin', "<span id='s" + i + "' class='snow-block__snowflake' style='position:absolute;top:-" + snowmaxsize + "'>" + "<img alt='#'></span>");
    }

    initsnow();

  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/_mixins.scss';
  @import '@/scss/style.scss';
  @import '~bootstrap/dist/css/bootstrap.min.css';
  @import '@/scss/window.scss';

  .snow-wrapper{
    position: fixed;
    width: 100%;
    height: 0;
    z-index: 999999;
    // border: 2px solid #f70303fa;
  }

  .snow-block{
    width: 100%;
    height: 0;
  }

  .snow-parameters{
    position: fixed;
    width: 150px;
    height: auto;
    left: 50px;
    top: 100px;

    &__titel{
      width: 100%;
      text-align: center;
    }

    &__titel>span{
      text-align: center;
      color: #797979;
      font-size: 0.954rem;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    &__switch{
      height: 0;
      width: 0;
      visibility: hidden;
    }

    &__switch-description {
      cursor: pointer;
      text-indent: -9999px;
      width: 60px;
      height: 20px;
      background: #FCC02C;
      display: block;
      border-radius: 100px;
      position: relative;
    }

    &__switch-description:after {
      content: '';
      position: absolute;
      top: -5px;
      left: -2px;
      width: 30px;
      height: 30px;
      background: #2196F3;
      border-radius: 90px;
      transition: 0.9s;
    }

    &__switch:checked + label {
      background: #797979;
    }

    &__switch:checked + label:after {
      left: calc(100% - 0px);
      transform: translateX(-100%);
    }

    &__switch-description:active:after {
      width: 90px;
    }

  }


</style>
<!-- <span id="s${i}" class="snowflake" style='position:absolute;top:-${snowmaxsize}>${snowletter}</span> -->
 <!-- "<span id='s"+i+"' class='snowflake' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>" -->
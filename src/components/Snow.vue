<template>
  <div class="snow-wrapper">
    <div class="snow-block" ref="snowflake_block"></div>
    <div class="snow-parameters">

      <div class="snow-parameters__titel">
        <span>Управление снегом</span>
        <div class="snow-parameters__open" @click="showSnowSettings">

          <img src="@/assets/icon/chevron-down.svg" alt="">
        </div>
      </div>
      
      <div class="snow-parameters__wrapper" ref="parameters_wrapper">
        <div class="snow-parameters__remove-wrapper">

          <div class="snow-parameters__remove">
            <input type="checkbox" id="switch" class="snow-parameters__switch" v-model="snowConditions" />
            <label for="switch" class="snow-parameters__switch-description">
            </label>
          </div>
          <div class="snow-parameters__text">
            <span>Вкл. / Вык.</span>
          </div>
        </div>

        <div class="snow-parameters__block">
          <div class="snow-parameters__text">
            <label for="numberSnowflakes">Количество снежинок</label>
          </div>
          <div class="snow-parameters__amount-snow">
            <input type="range" id="numberSnowflakes" min="0" max="99" v-model="snowMax" class="snow-parameters__input">
            <output class="snow-parameters__value" name="value" for="range">{{ +snowMax + 1}}</output>
          </div>
        </div>

        <div class="snow-parameters__block">
          <div class="snow-parameters__text">
            <label for="speedOfFall">Скорость снижения</label>
          </div>
          <!-- v-model="minSpeedOfFall" -->
          <div class="snow-parameters__amount-snow">
            <input type="range" id="speedOfFall" min="100" max="0"  class="snow-parameters__input">
            <output class="snow-parameters__value" name="value" for="range">{{ 151 - speedOfFall }}</output>
          </div>
        </div>
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
      x_mv: [],
      crds: [],
      lftrght: [],
      snowMax: 99,
      snowLocal: [],
      snowMaxSize: 30,
      actualMarginBottom: 0,
      snowConditions: false,
      showSettings: false,
      minSpeedOfFall: 1,
      speedOfFall: 150,
    }
  },
  methods: {
    stopSetTimeout: function () {
      const highestTimeoutId = setTimeout(";");
      for (var i = 0 ; i < highestTimeoutId ; i++) {
          clearTimeout(i); 
      }
    },
    showSnowSettings: function () {
      this.showSettings = !this.showSettings;
      if (this.showSettings) {
        this.$refs.parameters_wrapper.classList.add('snow-parameters__wrapper-active');
      } else {
        this.$refs.parameters_wrapper.classList.remove('snow-parameters__wrapper-active');
      }
      
    },
    randommaker: function (range) {
      return Math.floor(range * Math.random())
    },
    initsnow: function () {
      let sinkSpeed = 0.5;
      let snowminsize = 8;
      let marginBottom = 0;
      const browserinfos = navigator.userAgent;
      const opera = browserinfos.match(/Opera/);
      const ns6 = document.getElementById && !document.all;
      const marginRight = this.$refs.snowflake_block.offsetWidth;
      const ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
      const snowflakes = new Array('snowflake1.png', 'snowflake2.png', 'snowflake3.png');

      if (ie5 || opera) {
        marginBottom = document.body.clientHeight;
        // this.marginRight = document.body.clientWidth;
      }
      else if (ns6) {
        marginBottom = window.innerHeight;
        // this.marginRight = window.innerWidth;
      }
      
      let snowsizerange = this.snowMaxSize - snowminsize;

      this.actualMarginBottom = marginBottom;
      for (let i = 0; i <= this.snowMax; i++) {
        this.crds[i] = 0;
        this.lftrght[i] = Math.random() * 15;
        
        this.x_mv[i] = 0.03 + Math.random() / 10;
        this.snowLocal[i] = document.getElementById("s" + i);

        // snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)];
        this.snowLocal[i].size = this.randommaker(snowsizerange) + snowminsize;
        // const snowflakeSize = randommaker(snowsizerange) + snowminsize;

        this.snowLocal[i].sink = sinkSpeed * this.snowLocal[i].size/5;
        this.snowLocal[i].posx = this.randommaker(marginRight - this.snowLocal[i].size);
        this.snowLocal[i].posy= this.randommaker(2 * marginBottom - marginBottom - 2 * this.snowLocal[i].size);
        this.snowLocal[i].style.left = `${this.snowLocal[i].posx}px`;
        this.snowLocal[i].style.top = `${this.snowLocal[i].posy}px`;
        const snowflakeSize = `${this.randommaker(snowsizerange) + snowminsize}px`;
        this.snowLocal[i].style.width = snowflakeSize;
        this.snowLocal[i].style.height = snowflakeSize;
        this.snowLocal[i].childNodes[0].style.width = snowflakeSize;
        this.snowLocal[i].childNodes[0].style.height = snowflakeSize;
        this.snowLocal[i].childNodes[0].src = `http://www.s-sta.online/snow/${snowflakes[this.randommaker(snowflakes.length)]}`;
      }

      this.moveSnow();
    },
    moveSnow: function () {
      const marginRight = this.$refs.snowflake_block.offsetWidth;

      for (let i = 0; i <= this.snowMax; i++) {
        this.crds[i] += this.x_mv[i];
        this.snowLocal[i].posy += this.snowLocal[i].sink;
        
        this.snowLocal[i].style.left=`${this.snowLocal[i].posx + this.lftrght[i] * Math.sin(this.crds[i])}px`;
        this.snowLocal[i].style.top = `${this.snowLocal[i].posy}px`;
        
        if (this.snowLocal[i].posy >= this.actualMarginBottom - 2 * this.snowLocal[i].size ||
            parseInt(this.snowLocal[i].style.left) > (marginRight - 3 * this.lftrght[i])) {
          this.snowLocal[i].posx = this.randommaker(marginRight - this.snowLocal[i].size);
          this.snowLocal[i].posy = 0;
        }
      }

      this.stopSetTimeout();
      setTimeout (this.moveSnow, this.speedOfFall);
    },
    snowToPage: function () {
      for (let i = 0; i <= this.snowMax; i++) {
        this.$refs.snowflake_block.insertAdjacentHTML('afterbegin', "<span id='s" + i + "' class='snow-block__snowflake' style='position:absolute;top:-" + this.snowMaxSize + "'>" + "<img alt='#'></span>");
      }
    },
  },
  watch: {
    snowConditions: function () {
      if (this.snowConditions) {
        const allSnowflakes = document.querySelectorAll('div.snow-block > span');

        for (let i = 0; i <= allSnowflakes.length; i++) {
          if (allSnowflakes[i] !== undefined) {
            allSnowflakes[i].remove();
          }
        }
      } else if (!this.snowConditions) {
        this.snowToPage();
        this.initsnow();
      }
    },
    snowMax: function () {
      const allSnow = document.querySelectorAll('.snow-block__snowflake');

      if (!this.snowConditions) {
        for (let i = 0; i < allSnow.length; i++) {
          if (allSnow[i] !== undefined) {
            allSnow[i].remove();
          }
        }
        this.snowToPage();
        this.initsnow();
      }
    },
    speedOfFall: function () {
      console.log(this.speedOfFall);
    }
  },
  mounted() {
    this.snowToPage();
    this.initsnow();
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

    &__snowflake{
      transition: left 3s, top 3s;
      -webkit-transition: left 3s, top 3s;
    }
  }

  .snow-parameters{
    position: fixed;
    width: 260px;
    height: auto;
    right: 50px;
    top: 65%;
    z-index: 99999999;
    @media (max-width: 867px) {
      right: 20px;
    }

    &__titel{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #00000079;
      padding: 16px 16px;
    }

    &__titel>span{
      text-align: center;
      color: #fff;
      font-size: 0.954rem;
      text-transform: uppercase;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    &__wrapper{
      // visibility: hidden;
      background-color: #000000;
      padding: 16px 16px;
      border-radius: 5px;
      border: 2px solid #151515;
      opacity: .0;
      transition: opacity 3s;
      -webkit-transition: opacity 3s;
    }

    &__wrapper-active{
      // visibility: inherit;
      opacity: 1;
    }

    &__open{
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    &__open>img{
      width: 20px;
      height: 20px;
    }

    &__remove-wrapper{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__remove{
      width: auto;
      height: 100%;
      display: flex;
      align-items: center;
    }

    &__block{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      margin-top: 15px;
    }

    &__text{
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text>span{
      color: #fff;
      font-size: 0.85rem;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    &__text>label{
      color: #fff;
      font-size: 0.85rem;
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

    &__amount-snow{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__input{
      width: 70%;
      appearance: none;
      -webkit-appearance: none;
      height: 10px;
      border-radius: 15px; 
      background: #797979;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
    }

    &__input:hover {
      opacity: 1; /* Fully shown on mouse-over */
    }

    &__input::-webkit-slider-thumb{
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%; 
      background: #2196F3;
      cursor: pointer;
    }

    &__value{
      width: 23%;
      text-align: center;
      border: 1px solid #FCC02C;
    }
  }


</style>
<!-- <span id="s${i}" class="snowflake" style='position:absolute;top:-${snowmaxsize}>${snowletter}</span> -->
 <!-- "<span id='s"+i+"' class='snowflake' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>" -->
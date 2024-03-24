<template>
  <header class="header" id="main">
    <div class="header__logo">
      <img src="@/assets/logo4.png" />
    </div>
    <nav class="menu">
      <ul class="menu__wrapper">
        <li 
          class="menu__item" 
          v-for="menuList in menuHeaderLists"
          v-bind:id="menuList.id"
          :key="menuList.id" >
          <button v-bind:id="menuList.href" @click="followLink" type="button" class="btn menu__btn">{{ menuList.title }}</button>
        </li>
      </ul>
    </nav>
    <nav class="menu__adantiv" v-if="showMenuAdantiv">
        <transition>
          <ul class="menu__wrapper">
            <li 
              class="menu__item"
              v-for="adantivMenuList in adantivMenuLists"
              :key="adantivMenuList.id">
              <a v-bind:href="adantivMenuList.href" @click="followLink"><span>{{ adantivMenuList.title }}</span></a>
          </li>
        </ul>
      </transition>
    </nav>
    <div class="menu__block">
      <div class="sandwich" id="sandwich">
        <transition>
          <div class="sandwich__block" v-if="!showMenuSandwich" @click="showMenuList" key="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="sandwich__clear" v-else @click="hideMenuList" key="clear"></div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
  // import ErrorForm from '@/components/ErrorForm.vue'

export default {
  name: 'LateralFace',
  // components: {
  //   ErrorForm
  // },
  props: {
    menuHeaderLists: {
      type: Array,
      required: false
    }
  },
  data(){
    return {
      adantivMenuLists: [
      {id: 1, title: 'Главная', href: '#main'},
      {id: 2, title: 'Обо мне', href: '#aboutMe'},
      {id: 3, title: 'Навыки', href: '#skills'},
      {id: 5, title: 'Портфолио', href: '#portfolio'},
      {id: 9, title: 'Обратная связь', href: '#feedback'},
      ],
      showMenuAdantiv: false,
      showMenuSandwich: false,
    };
  },
  methods: {
    showMenuList: function () {
      this.showMenuAdantiv = true;
      this.showMenuSandwich = true;
    },
    hideMenuList: function () {
      this.showMenuAdantiv = false;
      this.showMenuSandwich = false;
    },
    followLink: function () {
      let link = event.target;
      let id = link.getAttribute('id');
      this.$router.push({name: 'Home', hash: id});
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';

  .header{
    @include blockMain(90%, 70px);
    margin-bottom: 40px;
    justify-content: flex-end;
    z-index: 9;

    &__logo{
      width: 60px;
      height: 60px;
      margin: auto 50px;
    }

    &__logo>img{
      width: 60px;
      height: 60px;
    }
  }

.menu{
  display: flex;
  width: 83%;
  height: 100%;

  &__wrapper{
    width: 100%;
    height: 100%;
  }

  &__item{
        width: 14%;
        height: 100%;
        margin: auto;
        cursor: pointer;
      }

      &__item:hover{
        background-color: #000000;
        transform: scale(1.1);
      }

      &__item>a{
        width: 100%;
        height: 100%;
        display: flex;
        text-decoration: none;
      }

      &__item>a>span{
        margin: auto;
        color: #ffffff;
      }

      &__btn{
        width: 100%;
        height: 100%;
        color: #ffffff;
        margin: 0;
        padding: 0;
        font-size: 0.9rem;
      }
  }
    .menu__block{
      display: flex;
      justify-content: space-evenly;
      width: 12%;
    }
    .menu__adantiv{
      display: none;
    }
    .sandwich{
      display: none;
    }

@media (max-width: 1280px){
  .menu{

    &__item{
      width: 16%;
    }
  }
}

@media (max-width: 1024px){
  .header{
    justify-content: space-between;
  }

  .menu{
   display: none;
  }
    .menu__block{
      display: flex;
      cursor: pointer;
      justify-content: space-evenly;
      width: 12%;
    }
    .menu__adantiv{
      display: block;
      z-index: 9999999999999;
      background-color: #000;
      width: 100%;
      position: fixed;
      height: 240px;
      top: 10%;
      right: 0;

      box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);

      .menu__item{
        display: block;
        width: 100%;
        height: 45px;
        display: flex;
        border-bottom: 1px solid #000;
      }
      .menu__item>a{
        margin: auto;
        width: 100%;
        color: #2c3e50;
        font-size: 1rem;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
      }
      .menu__item:hover{
        background-color: #F7F7F7;
      }
    }
    .sandwich{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      z-index: 99999999999999;

    .sandwich__block{
      width: 30px;
      height: 30px;
      margin: auto;
      display: flex;
      opacity: 0.5;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .sandwich__block>span{
      width: 90%;
      height: 4px;
      margin: auto 0;
      background-color: #E7E88E;
    }

    .sandwich__block:hover{
      opacity: 0.9;
    }
  }
}
@media (max-width: 967px){
    .header{

    .menu__block{
      width: 30%;
    }
  }
}
@media (max-width: 667px){
    .header{

    .menu__block{
      width: 30%;
    }

  }
}

@media (max-width: 600px){
  .header{
    width: 100%;
  }
}
</style>

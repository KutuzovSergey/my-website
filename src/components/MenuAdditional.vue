<template>
    <div class="menu__additional">
      <nav class="menu menu__additional" v-if="showMenu">
        <transition>
          <ul class="menu__wrapper">
            <li 
              class="menu__item"
              v-for="headerMenuList in headerMenuLists"
              :key="headerMenuList.id">
              <a v-bind:href="headerMenuList.href">
                <span>{{ headerMenuList.title }}</span>
              </a>
            </li>
          </ul>
        </transition>
      </nav>
      <div id="menu__block" class="menu__block">
        <div class="search" id="search">
          <!-- <button type="button" class="btn search__button">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-out" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
            </svg>
          </button> -->
        </div>
        <div class="sandwich" id="sandwich">
          <transition>
            <div class="sandwich__block" v-if="!showMenuIcon" @click="show" key="menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="sandwich__clear" v-else @click="hide" key="clear"></div>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MenuAdditional',
  props: {
    msg: String
  },
  data(){
    return {
      headerMenuLists: [
      {id: 1, title: 'Главная', href: '#main'},
      {id: 2, title: 'Обо мне', href: '#aboutMe'},
      {id: 3, title: 'Навыки', href: '#skills'},
      {id: 5, title: 'Портфолио', href: '#portfolio'},
      {id: 9, title: 'Обратная связь', href: '#feedback'},
      ],
      showMenu: false,
      showMenuIcon: false,
    };
  },
  methods: {
    show: function (){
      let menuBlock = document.getElementById('menu__block');
      let search = document.getElementById('search');

      menuBlock.classList.add('menu__block_activ');
      menuBlock.classList.remove('menu__block');
      search.classList.add('search_activ');

      this.showMenuIcon = true;
      this.showMenu = true;

      this.$emit('show');
    },
    hide: function () {
      let menuBlock = document.getElementById('menu__block');
      let search = document.getElementById('search');

      menuBlock.classList.remove('menu__block_activ');
      menuBlock.classList.add('menu__block');
      search.classList.remove('search_activ');

      this.showMenu = false;
      this.showMenuIcon = false;

      this.$emit('hide');
    }
  },
  mounted (){
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';

.menu-active{
  position: fixed;
  width: 77%;
  height: 100px;
  display: flex;
  top: 10px;
  z-index: 9999999;
  // background-color: #777474;
}

.menu{
  display: flex;
  width: 88%;
  height: 100%;

  &__wrapper{
    width: 100%;
    height: 100%;
  }

  &__item{
    width: 20%;
    height: 100%;
    margin: auto;
    cursor: pointer;
  }

  &__item:hover{
    background-color: #151515;
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
    color: #F7F7F7;
    letter-spacing: 0.1em;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__block_activ{
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    width: 12%;
  }

  &__block{
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    width: 100%;
  }
}

  
    
.search{
  display: none;

      &_activ{
        width: 50%;
        height: 100%;
        margin: 0 auto;
        display: flex;
      }

      &__button{
        margin: auto;
        width: 100%;
        height: 70%;
        opacity: 0.5;
        color: #121212;
      }
      &__button>svg{
        width: 60%;
        height: 60%;
      }
      &__button:hover{
        opacity: 0.9;
      }
    }
    
@media (max-width: 1440px){
  .header{
    .menu{
      width: 100%;
    }
  }
}
@media (max-width: 1340px){
  .header{
    .menu{
    
    .menu__item>a>span{
        font-size: 0.85rem;
      }
    }
  }
}
@media (max-width: 1270px){
  
}
</style>

<template>
  <header class="header" id="main">
    <a name="upward"></a>
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
    <!-- <div class="menu__call">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-forward-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.471 17.471 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969zM12.646.646a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div> -->
    <nav class="menu__adantiv" v-if="showMenuAdantiv">
        <transition>
          <ul class="menu__wrapper">
            <li 
              class="menu__item"
              v-for="adantivMenuList in adantivMenuLists"
              :key="adantivMenuList.id">
              <a v-bind:href="adantivMenuList.href" @click="followLink"><span>{{ adantivMenuList.title }}</span></a>
          </li>
        </ul>H
      </transition>
    </nav>
    <div class="menu__block">
      <!-- <div class="search">
        <div class='search__form' v-if="serchField">
          <form>
            <button type="button" class="btn search__btn search__button" @click="foundText">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
            </button>
            <input type="text" name="search" class="search__input" v-model="searchText" @focus="hideError">
            <div class="search__clear_form clear" @click="clearText">
              <div class="clear__bloc">
                <div class="clear__plus"></div>
              </div>
            </div>
          </form>
          <ErrorForm v-if="searchError" :errorText="errorText" />
        </div>
        <button type="button" v-if="!searchForm" @click="showSearch" key="showSearch" class="btn search__button">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-out" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
          </svg>
        </button>
        <div class="search__clear" v-else @click="hideSearch" key="clearSearch"></div>
      </div> -->
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
  import ErrorForm from '@/components/ErrorForm.vue'

export default {
  name: 'LateralFace',
  components: {
    ErrorForm
  },
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
      searchForm: false,
      serchField: false,
      searchText: "",
      searchError: false,
      errorText: "",
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
    showSearch: function (){
      this.searchForm = true;
      this.serchField = true;
    },
    hideSearch: function (){
      this.searchForm = false;
      this.serchField = false;
    },
    foundText: function (){
      let contentText = document.documentElement.innerHTML;
      let valueInput = this.searchText;

      let verify = (str) => {
        str = str.replace( /^\s+/g, '' );
        return str.replace( /\s+$/g, '' );
      }

     alert(contentText);

      let seek = (value) =>{
        value = verify(value);

        if (contentText.indexOf(value) == -1) {
          this.searchError = true;
          this.errorText = 'Ничего не найдено';
        } 
        if (value == '') {
          this.searchError = true;
          this.errorText = 'Ввидите текст поиска';
        }
        if (value.length < 3) {
          this.searchError = true;
          this.errorText = 'Ввидите больше символов';
        }

        window.location = `#${value}`;
      }
      seek(valueInput);
    },
    hideError: function (){
      this.searchError = false;
    },
    clearText: function (){
      this.searchText = '';
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
    // margin: auto;
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
      // cursor: pointer;
      justify-content: space-evenly;
      width: 12%;
    }
    .menu__call{
      display: none;
    }
    .menu__adantiv{
      display: none;
    }
    .search{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      position: relative;

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

      &__form{
        position: absolute;
        top: 0;
        right: 100%;
        width: 300px;
        height: 100%;
      }

      &__form>form{
        display: flex;
        width: 100%;
        height: 50%;
        border-radius: 2%;
        margin-top: 7.5%;
        border: 1px solid #2196F3;
      }

      &__input{
        width: 70%;
        height: 100%;
        z-index: 99999;
        border: none;
      }
      &__btn{
        width: 20%;
        height: 100%;
        opacity: 1;
        background-color: #ffffff;
      }
      &__btn>svg{
        width: 100%;
        height: 100%;
      }
      &__btn:hover{
        opacity: 1;
      }
      &__clear{
        width: 30px;
        height: 30px;
        border-radius: 6px;
        margin: auto;
        position: relative;
        display: block;
        z-index: 200;
        text-indent: -9999px;
        cursor: pointer;
      }
      &__clear:before,
      &__clear:after {
          content: '';
          width: 80%;
          height: 6px;
          background: #000;
          position: absolute;
          top: 48%;
          left: 10%;
          transform: rotate(45deg);
          transition: all 0.3s ease-out;
      }
      &__clear:after {
          transform: rotate(-45deg);
          transition: all 0.3s ease-out;
      }
      &__clear:hover:before,
      &__clear:hover:after {
          transform: rotate(180deg);
          background: #000;
      }
      &__clear_form{
        width: 10%;
        display: flex;
        background-color: #ffffff;
      }

      .clear{
        &__bloc{
          margin: auto;
          width: 19px;
          height: 19px;
          border-radius: 40%;
          background-color: #CFCFCF;
        }
        &__plus{
          transform: rotate(45deg);
          width: 14px;
          height: 2px;
          background: #808080;
          position: relative;
          left: 3px;
          top: 8px;
        }
        &__plus:after{
          content: "";
          width: 3px;
          height: 14px;
          background: #808080;
          position: absolute;
          left: 5px;
          top: -6px;
        }
      }
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
    justify-content: flex-end;
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
    .menu__call{
      display: flex;
      width: 10%;
      height: 100%;
    }
    .menu__call>svg{
      color: #26A59A;
      width: 60%;
      height: 50%;
      margin: auto;
      cursor: pointer;
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
    .search{
      width: 50%;
      height: 100%;
      margin: 0 auto;
      display: flex;

      .search__button{
        margin: auto;
        width: 100%;
        height: 70%;
        opacity: 0.5;
        color: #121212;
        padding: 0;
      }
      .search__button>svg{
        width: 60%;
        height: 60%;
      }
      .search__button:hover{
        opacity: 0.9;
      }
      .search__btn{
        width: 20%;
        padding: 0;
        background-color: #fff;
        opacity: 1;
      }
      .search__btn>svg{
        width: 100%;
        height: 100%;
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

    .search{

      .search__button{
        padding: 5px;
      }

      .search__button>svg{
        width: 100%;
        height: 100%;
      }

       .search__btn{
        width: 20%;
        padding: 0;
        background-color: #fff;
        opacity: 1;
      }

      .search__btn>svg{
        width: 100%;
        height: 100%;
      }
    }

  }
}
@media (max-width: 667px){
    .header{

    .menu__block{
      width: 30%;
    }
    .menu__call{
      width: 20%;
    }
    .search{
      .search__button>svg{
        width: 100%;
        height: 100%;
      }

      .search__form{
        width: 250px;
      }


      .search__btn{
        width: 20%;
        padding: 0;
        background-color: #fff;
        opacity: 1;
      }
      .search__btn>svg{
        width: 100%;
        height: 100%;
      }
    }

  }
}

@media (max-width: 600px){
  .header{
    width: 100%;
  }
}
@media (max-width: 460px){
    .header{

    .menu__call{
      width: 14%;
    }
    .menu__call>svg{
      width: 100%;
      height: 100%;
    }

    .search{

      .search__form{
        width: 200px;
      }

      .search__btn{
        width: 20%;
        padding: 0;
        background-color: #fff;
        opacity: 1;
      }

      .search__btn>svg{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

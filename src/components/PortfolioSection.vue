<template>
  <section class="portfolio" id="portfolio">
    <a name="portfolio" class="myLink"></a>
    <HeaderDecorative :text='headerComponent' />
    <div class="portfolio__info info">
      <div class="info__title">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-layers-half info__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3.188 8L.264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l-4.578 2.441a.5.5 0 0 1-.47 0L3.188 8z"/>
          <path fill-rule="evenodd" d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4zM1.563 6L8 9.433 14.438 6 8 2.567 1.562 6z"/>
        </svg>
        <h2 click="promis">Моё портфолио</h2>
      </div>
      <div class="info__text">
        <p>Здесь можно посмотреть мои работы. Лендинги, многостраничные сайты и небольшие приложения.</p>
      </div>
    </div>
    <!-- <div class="portfolio__menu menu">
      <ul class="menu__wrapper" @click="searchType">
        <li class="menu__item button-activ all">
          <span class="menu__link">Все</span>
        </li>
        <li class="menu__item landing">
          <span class="menu__link">Лендинги</span>
        </li>
        <li class="menu__item website">
          <span class="menu__link">Сайты</span>
        </li>
        <li class="menu__item applications">
          <span class="menu__link">Приложения</span>
        </li>
      </ul>
      <ul class="menu__adaptiv" v-if="showMenuAdaptiv">
        <li class="item" v-for="portfolioMenuList in portfolioMenuLists"><span>{{ portfolioMenuList.title }}</span></li>
      </ul>
      <div class="sandwich" id="sandwich">
        <transition>
          <div class="sandwich__block" v-if="!sandwichShow" @click="showMenu" key="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="sandwich__clear" v-else @click="hideMenu" key="clear"></div>
        </transition>
      </div>
      <div class="menu__search">
        <div class="menu__form">
          <div class="menu__input">
            <input type="text" placeholder="Searh">
          </div>
          <button>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-zoom-out" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
            </svg>
          </button>
        </div>
      </div>
    </div> -->
    <div class="portfolio__gallery gallery">
      <div class="gallery__block website" id="coursesBlock" @mouseenter="showingDescription" @mouseleave="hidingDescription">
        <a href="/myWork/course/index.html" class="gallery__link" target="_blank">
          <img src="@/assets/portfolio/0_8.png" alt="courses">
        
          <div class="gallery__discription" id="courses">
            <span>рекламный лендинг. курсы для репетиторов</span>
          </div>
        </a>
      </div>
      <div class="gallery__block website" id="woodenHousesBlock" @mouseenter="showingDescription" @mouseleave="hidingDescription">
        <a href="/myWork/housesBaths/index.html" class="gallery__link" target="_blank">
          <img src="@/assets/portfolio/0_5.png" alt="wooden houses">
        
          <div class="gallery__discription" id="woodenHouses">
            <span>многостраничный сайт. продажа деревянных домов</span>
          </div>
        </a>
      </div>
      <div class="gallery__block website" id="muscovitesBlock" @mouseenter="showingDescription" @mouseleave="hidingDescription">
        <a href="/myWork/drummers/index.php" class="gallery__link" target="_blank">
          <img src="@/assets/portfolio/0_3.png" alt="muscovites">
        
          <div class="gallery__discription" id="muscovites">
            <span>многостраничный сайт. ансамбль барабанщиц москвички</span>
          </div>
        </a>
      </div>
      <div class="gallery__block landing" id="quizizzBlock" @mouseenter="showingDescription" @mouseleave="hidingDescription">
        <a href="/myWork/quiz/index.html" target="_blank" class="gallery__link">
          <img src="@/assets/portfolio/0_6.png" alt="quizizz">
        </a>

        <div class="gallery__discription" id="quizizz">
          <span>лендинг. квиз</span>
        </div>
      </div>
      <div class="gallery__block landing" id="greetingsBlock" @mouseenter="showingDescription" @mouseleave="hidingDescription">
        <a href="/myWork/email/index.html" target="_blank" class="gallery__link">
          <img src="@/assets/portfolio/3.png" alt="New Year's greetings">
        
          <div class="gallery__discription" id="greetings">
            <span>email письмо. новогодние поздравления</span>
          </div>
        </a>
      </div>
      <div class="gallery__block landing" id="bredliBlock" @mouseenter="showingDescription" @mouseleave="hidingDescription">
        <a href="/myWork/bredli/index.html" target="_blank" class="gallery__link">
          <img src="@/assets/portfolio/4.png" alt="bredli">

          <div class="gallery__discription" id="bredli">
            <span>сайт-везитка, лендинг. компания по установке охранных систем bredli</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderDecorative from '@/components/HeaderComponents/HeaderDecorative.vue'

  export default {
    name: 'PortfolioSection',
    components: {
      HeaderDecorative
    },
    props: {
      msg: String
    },
    data() {
      return {
        headerComponent: 'Моё портфолио',
        portfolioMenuLists: [
        {id: 1, title: 'Все', value: ''},
        {id: 2, title: 'Лендинги', value: ''},
        {id: 3, title: 'Сайты', value: ''},
        {id: 4, title: 'Приложения', value: ''},
        ],
        sandwichShow: false,
        showMenuAdaptiv: false,
      };
    },
    methods: {
      showMenu: function (){
        this.sandwichShow = true;
        this.showMenuAdaptiv = true;
      },
      hideMenu: function (){
        this.sandwichShow = false;
        this.showMenuAdaptiv = false;
      },
      searchType: function (event){
        const elem = event.target;
        const elems = document.querySelectorAll('.menu__item');

        for (var i = 0; i < elems.length; i++) {
          elems[i].classList.remove('button-activ');
        }

        if (elem.matches('.menu__item')) {
          elem.classList.add('button-activ');
        } else if (elem.parentNode.matches('.menu__item')) {
          elem.parentNode.classList.add('button-activ');
        }
      },
      showingDescription: function (event){
        const galleryBlock = event.target;

        switch (galleryBlock.id) {
          case "coursesBlock":
              const discriptionCourses = document.querySelector('#courses');
              discriptionCourses.classList.add('gallery__discription_active');
            break;
          case "woodenHousesBlock":
              const discriptionWooden = document.querySelector('#woodenHouses');
              discriptionWooden.classList.add('gallery__discription_active');
            break;
          case "muscovitesBlock":
              const discriptionMuscovites = document.querySelector('#muscovites');
              discriptionMuscovites.classList.add('gallery__discription_active');
          break;
          case "quizizzBlock":
              const discriptionQuizizz = document.querySelector('#quizizz');
              discriptionQuizizz.classList.add('gallery__discription_active');
          break;
          case "greetingsBlock":
              const discriptionGreetings = document.querySelector('#greetings');
              discriptionGreetings.classList.add('gallery__discription_active');
          break;
          case "bredliBlock":
              const discriptionBredli = document.querySelector('#bredli');
              discriptionBredli.classList.add('gallery__discription_active');
          break;
        
          default:
            break;
        }
      },
      hidingDescription: function (event) {
        const galleryBlock = event.target;
        console.log(galleryBlock);

        switch (galleryBlock.id) {
          case "coursesBlock":
              const discriptionCourses = document.querySelector('#courses');
              discriptionCourses.classList.remove('gallery__discription_active');
            break;
          case "woodenHousesBlock":
              const discriptionWooden = document.querySelector('#woodenHouses');
              discriptionWooden.classList.remove('gallery__discription_active');
            break;
          case "muscovitesBlock":
              const discriptionMuscovites = document.querySelector('#muscovites');
              discriptionMuscovites.classList.remove('gallery__discription_active');
          break;
          case "quizizzBlock":
              const discriptionQuizizz = document.querySelector('#quizizz');
              discriptionQuizizz.classList.remove('gallery__discription_active');
          break;
          case "greetingsBlock":
              const discriptionGreetings = document.querySelector('#greetings');
              discriptionGreetings.classList.remove('gallery__discription_active');
          break;
          case "bredliBlock":
              const discriptionBredli = document.querySelector('#bredli');
              discriptionBredli.classList.remove('gallery__discription_active');
          break;
        
          default:
            break;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

  .portfolio{
    @include blockMain(90%, 800px);
      position: relative;
      padding: 4% 6%;
      margin-bottom: 40px;
      flex-direction: column;
      justify-content: space-between;

      &__menu{
        width: 100%;
        z-index: 9;
        display: flex;
        justify-content: space-between;
      }

      .menu{
        height: auto;
        background-color: #F0F0F0;
        box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
        -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
        -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);

        &__wrapper{
          width: 69.5%;
          height: 100%;
          display: flex;
          background-color: #ffffff;
        }

        &__search{
          width: 30.4%;
          display: flex;
          background-color: #ffffff;
        }

        &__item{
          width: 20%;
          height: 100%;
          margin: auto;
          cursor: pointer;
          display: flex;
        }

        &__item:hover{
          background-color: #F7F7F7;
          color: #121212;
          transform: scale(1.1);
        }

        &__link{
          margin: auto;
          font-size: 1rem;
          text-transform: uppercase;
          color: #121212;
        }

        &__form{
          display: flex;
          width: 90%;
          margin: auto;
          justify-content: center;
        }

        &__form>button{
          border: 0;
          width: 15%;
          height: 100%;
          background-color: #ffffff;
        }

        &__input{
          width: 85%;
        }

        &__input>input{
          width: 100%;
          border: 0;
        }
        
        .sandwich{
          display: none;
        }
    }

    .gallery{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      z-index: 9;
      
      &__block{
        position: relative;
        width: 33.33%;
        height: auto;
        border: 1px solid #000;
        overflow: hidden;
      }

      &__block:hover{
        transform: scale(1.1);
        z-index: 99999;
      }

      &__discription{
        visibility: hidden;
        position: absolute;
        cursor: pointer;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1%;
        height: 1%;
        bottom: 0;
        left: 0;
        transition: width 2s, height 2s, padding 2s;
      }

       &__discription>span{
        text-align: center;
        text-transform: uppercase;
        font-weight: 900;
        color: #000;
        font-size: 0rem;
        transition: font-size 2s, font-weight 2s;
      }

      &__discription_active{
        visibility: visible;
        width: 100%;
        height: 100%;
        padding: 30px;
        background-color: rgba(34, 160, 65, 0.690);
      }

      &__discription_active>span{
        font-size: 1rem;
      }


      &__link{
        display: block;
        width: 100%;
        height: 250px;
        overflow: hidden;
        cursor: pointer;
      }

      &__link>img{
        width: 100%;
        height: auto;
        margin: auto;
      }
    }

    &__button{
      display: flex;
      width: 100%;
      height: 10%;
      z-index: 9;
    }

    &__button__link{
      width: 20%;
      height: 60%;
      margin: auto;
    }

    &__button-button{
      @include buttonMain(100%, 100%, 1rem);
    }
  }

  @media (max-width: 1280px){
    .portfolio{
      height: 650px;

      .gallery{
          
        &__link{
          height: 200px;
        }

      }
      &__button__link{
        width: 30%;
      }
    }
  }

  @media (max-width: 967px){
      .portfolio{
        height: 700px;

        .menu{
          position: relative;
          z-index: 999;
          height: 6%;

          &__wrapper{
            display: none;
          }
          &__search{
            width: 79%;
          }
          .sandwich{
            background-color: #ffffff;
            display: flex;
            width: 19%;
          }
          &__adaptiv{
            z-index: 9999;
            position: absolute;
            background-color: #ffffff;
            width: 100%;
            height: 200px;
            bottom: -220px;

            .item{
              display: block;
              width: 100%;
              height: 45px;
              display: flex;
              border-bottom: 1px solid #000;
            }
            .item>span{
              margin: auto;
              font-size: 1rem;
              font-weight: 700;
              text-transform: uppercase;
            }
            .item:hover{
              background-color: #F7F7F7;
            }
          }
        }

      .gallery{
          
        &__block{
          width: 50%;
          height: auto;
        }
        
        &__link{
          height: 150px;
        }
      }

      &__button__link{
        width: 60%;
        height: 70%;
      }
    }
  }

    @media (max-width: 600px){
    .portfolio{
      width: 100%;
      height: 660px;
    }
  }

  @media (max-width: 480px){
    .portfolio{
      height: 1450px;

      .gallery{
        flex-direction: column;

        &__block{
          width: 100%;
        }

        &__link {
            height: 210px;
        }
      }
    }
  }
</style>

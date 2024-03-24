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
      };
    },
    methods: {
      showingDescription: function (event){
        const galleryBlock = event.target;
        const COURSES_BLOCK = "coursesBlock";
        const WOODEN_HOUSES_BLOCK = "woodenHousesBlock";

        switch (galleryBlock.id) {
          case COURSES_BLOCK:
              const discriptionCourses = document.querySelector('#courses');
              discriptionCourses.classList.add('gallery__discription_active');
            break;
          case WOODEN_HOUSES_BLOCK:
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

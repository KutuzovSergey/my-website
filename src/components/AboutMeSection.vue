<template>
  <section class="aboutMe" id="aboutMe">
    <a name="aboutMe" class="myLink"></a>
    <HeaderDecorative :text='headerComponent' />
    <div class="aboutMe__info info">
      <div class="info__title">
        <img src="@/assets/icon/about_me_icon.svg" alt="" class="info__title__image">
        <h2>Обо мне</h2>
      </div>
      <div class="info__text">
        <p>Занимаюсь разработкой сайтов, опыт работы более 3 лет. Создаю интернет-ресурсы как с использованием готовых шаблонов, так и воплощая уникальный и оригинальный дизайн с индивидуальным подходом к каждому клиенту. Строго придерживаюсь сроков исполнения, гарантия на сайт по договору.</p>
      </div>
    </div>
    <div class="aboutMe__data">
      <div class="scheme">
        <div class="scheme__block design">
          <div class="scheme__wrapper">
            <div class="scheme__img">
              <img src="@/assets/icon/screen_icon.svg" alt="#" />
            </div>
            <div class="scheme__indicator"></div>
          </div>
          <div class="scheme__text"><span>Адаптивная вёрстка</span></div>
        </div>
        <div class="scheme__block websites">
          <div class="scheme__wrapper">
            <div class="scheme__img">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-globe2 websites__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1.018 7.5h2.49c.037-1.07.189-2.087.437-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5zM3.05 3.049c.362.184.763.349 1.198.49.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.473.257 2.282.287V1.077zm0 4.014c-.91-.03-1.783-.145-2.591-.332a12.344 12.344 0 0 0-.4 2.741H7.5V5.091zm1 2.409V5.091c.91-.03 1.783-.145 2.591-.332.223.827.364 1.754.4 2.741H8.5zm-1 1H4.51c.035.987.176 1.914.399 2.741A13.596 13.596 0 0 1 7.5 10.91V8.5zm1 2.409V8.5h2.99a12.343 12.343 0 0 1-.399 2.741A13.596 13.596 0 0 0 8.5 10.91zm-1 1c-.81.03-1.577.13-2.282.287.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91zm-2.173 2.563a6.695 6.695 0 0 1-.597-.933 8.857 8.857 0 0 1-.481-1.078 8.356 8.356 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.52zM2.38 12.175c.47-.258.995-.482 1.565-.667A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.964 6.964 0 0 0 1.362 3.675zm8.293 2.297a7.01 7.01 0 0 0 2.275-1.521 8.353 8.353 0 0 0-1.197-.49 8.859 8.859 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zm.11-2.276A12.63 12.63 0 0 0 8.5 11.91v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872zm1.272-.688c.57.185 1.095.409 1.565.667A6.964 6.964 0 0 0 14.982 8.5h-2.49a13.355 13.355 0 0 1-.437 3.008zm.437-4.008h2.49a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zm-.74-3.96a8.854 8.854 0 0 0-.482-1.079 6.692 6.692 0 0 0-.597-.933c.857.355 1.63.875 2.275 1.521a8.368 8.368 0 0 1-1.197.49zm-.97.264c-.705.157-1.473.257-2.282.287V1.077c.67.204 1.335.82 1.887 1.855.143.268.276.56.395.872z"/>
              </svg>
            </div>
            <div class="scheme__indicator"></div>
          </div>
          <div class="scheme__text"><span>Поддержка ресурса</span></div>
        </div>
        <div class="scheme__block softwares">
          <div class="scheme__wrapper">
            <div class="scheme__img">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-display softwares__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z"/>
                <path fill-rule="evenodd" d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
              </svg>
            </div>
            <div class="scheme__indicator"></div>
          </div>
          <div class="scheme__text"><span>Модификация </span><span>существующего сайта</span></div>
        </div>
        <div class="scheme__block application">
          <div class="scheme__wrapper">
            <div class="scheme__img">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-richtext application__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/>
                <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM6.25 5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
              </svg>
            </div>
            <div class="scheme__indicator"></div>
          </div>
          <div class="scheme__text"><span>Строгое соблюдение </span><span>техзадания</span></div>
        </div>
      </div>
      <div class="data">
        <div class="data__title">
          <h5>Персональные данные</h5>
        </div>
        <div class="data__block">
          <ul class="data__wrapper data__wrapper-name">
            <li class="data__item"><span>Имя</span><span>:</span></li>
            <li class="data__item"><span>Адрес</span><span>:</span></li>
            <li class="data__item"><span>Телефон</span><span>:</span></li>
            <li class="data__item"><span>WhatsApp</span><span>:</span></li>
            <li class="data__item"><span>Email</span><span>:</span></li>
            <li class="data__item"><span>Сайт</span><span>:</span></li>
          </ul>
          <ul class="data__wrapper data__wrapper-info">
            <li class="data__info">Sergey</li>
            <li class="data__info">г.Москва</li>
            <li class="data__info">+7 (977) 350-67-84</li>
            <li class="data__info">+7 (977) 350-67-84</li>
            <li class="data__info">SergeiPasekin@yandex.ru</li>
            <li class="data__info">http://kutuzov.site/</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="aboutMe__emaill emaill">
      <div class="emaill__info">
        <div class="emaill__img">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-lines-fill emaill__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <div class="emaill__text">
          <span>Бесплатная консультация</span>
          <span>Также можно написать мне на почту</span>
        </div>
      </div>
      <div class="emaill__button">
        <button type="button" class="btn" @click="showWindowMail">
          <div class="emaill__button__icon">
            <img src="@/assets/icon/email_icon.svg" alt="#">
          </div>
          <span>Написать</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderDecorative from '@/components/HeaderComponents/HeaderDecorative.vue'

  export default {
    name: 'AboutMeSection',
    components: {
      HeaderDecorative
    },
    props: {
    },
    data(){
      return{
        headerComponent: 'Обо мне'
      }
    },
    methods: {
      showWindowMail: function (){
        this.$store.commit('WINDOW_MAIL', true);
      },
    },
    mounted(){
    },
  }
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap" rel="stylesheet"');

  .aboutMe{
    @include blockMain(100%, 1100px);
    flex-direction: column;
    position: relative;
    padding: 4% 6%;
    margin-bottom: 40px;
    
    .info{
      width: 100%;
      height: 30%;
    }

    &__data{
      display: flex;
      height: 50%;
      z-index: 9;
    }

    .scheme{
      z-index: 9;
      width: 50%;
      display: flex;
      flex-wrap: wrap;

      &__block{
        width: 45%;
        height: 45%;
        padding-left: 7%;
        box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
        -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
        -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      }

      .design{
        margin-right: 3%; 
        border-bottom: 3px solid #2196F3;

        &__icon{
          color: #2196F3;
          width: 100%;
          height: auto;
        }
      }

      .websites{
        margin-left: 3%;
        border-bottom: 3px solid #EE534F;

        &__icon{
          color: #EE534F;
          width: 100%;
          height: auto;
        }
      }

      .softwares{
        margin-right: 3%; 
        border-bottom: 3px solid #FAC02E;

        &__icon{
          color: #FAC02E;
          width: 100%;
          height: auto;
        }
      }

      .application{
        margin-left: 3%;
        border-bottom: 3px solid #AA47BC;

        &__icon{
          color: #AA47BC;
          width: 100%;
          height: auto;
        }
      }

      &__wrapper{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-between;
      }

      &__text{
        width: 100%;
        height: 30%;
        font-weight: 700;
        text-align: left;
      }

      &__img{
        display: flex;
        flex-direction: row;
        width: 30%;
        height: 50%;
        margin: auto 0;
      }
    }

    .data{
      width: 50%;

      &__title{
        width: 100%;
        text-align: left;
        text-transform: uppercase;
      }
      
      &__title>h5{
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
      }

      &__block{
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
      }

      &__wrapper{
        width: 40%;
      }

      &__wrapper>li{
        display: flex;
      }

      &__item{
        margin-bottom: 12px;
        justify-content: space-between;
      }

      &__item>span{
        color: #797979;
      }

      &__info{
        margin-bottom: 12px;
        font-family: 'Fugaz One', cursive;
      }
    }

    &__emaill{
      z-index: 9;
      display: flex;
      width: 100%;
      height: 15%;
      background-color: #2196F3;
    }

    .emaill{

      &__info{
        display: flex;
        width: 70%;
        padding-left: 3%;
      }

      &__img{
        width: 15%;
        height: 100%;
        display: flex;
      }

      &__icon{
        width: 55%;
        height: auto;
        margin: auto;
        color: #ffffff;
      }

      &__text{
        width: 85%;
        margin: auto;
        text-align: left;
      }

      &__text>span{
        color: #ffffff;
        display: block;
        font-size: 1.34rem;
      }

      &__button{
        display: flex;
        width: 30%;
      }

      &__button>button{
        color: #121212;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 40%;
        padding: 10px 5px;
        border-radius: 0;
        cursor: pointer;
        background-color: #ffffff;
      }

      &__button__icon{
        width: 30px;
        height: auto;
      }
    }

    
  }

  @media (max-width: 1280px){
    .aboutMe{
        height: 1200px;
        justify-content: space-between;

      .info{
        height: 20%;
      }

      &__data{
        flex-direction: column;
        height: 70%;
        justify-content: space-around;
      }

      .scheme{
        width: 80%;
        height: 50%;
        margin: auto;

        &__block{
          width: 46%;
          height: 46%;

        }

        &__text>span{
          font-size: 1rem;
        }
      }

      .data{
        width: 80%;
        height: 40%;
        margin: auto;

        &__item{
          margin-bottom: 5px;
        }

        &__info{
          margin-bottom: 5px;
        }
      }

      &__emaill{
        height: 10%;
      }

      .emaill{
        .emaill__button>button{
          width: 80%;
          height: 50%;
        }
        .emaill__button>button>svg{
          height: auto;
        }
      }
      
    }
  }

  @media (max-width: 968px){
    .aboutMe{
      // height: 1300px;

      .scheme{
        width: 100%;

        &__block{
          padding-left: 5%;
        }
      }

      .info{
        height: 15%;
      }

      &__data{
        height: 60%;
      }

      .emaill{
        height: 15%;
        flex-direction: column;

        &__info{
          width: 100%;
          height: 50%;
          padding: 2%;
          justify-content: center;
        }

        &__text{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: auto;
          margin: 0; 
          text-align: center;
          
        }

        &__text>span{
          font-size: 1rem;
        }

        &__button{
          width: 100%;
          height: 50%;
        }
      }
    }
  }

  @media (max-width: 768px){
    .aboutMe{
      // width: 100%;

      .data{
        width: 100%;

        &__wrapper-name{
          width: 30%;
        }

        &__wrapper-info{
          width: 50%;
        }
      }

      .emaill{
        height: 10%;
      }
    }
  }

  @media (max-width: 600px){
    .aboutMe{
      width: 100%;
      height: 1000px;

      .info{
        height: 22%;
      }

      .scheme{

        &__block{
          width: 100%;
          height: 25%;
          margin: 0;
          padding: 0;
          display: flex;
        }

        .design{
          margin: 0;
        }

        .websites{
          margin: 0;
        }

        .softwares{
          margin: 0;
        }

        .application{
          margin: 0;
        }

        &__wrapper{
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &__text{
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 480px){
    .aboutMe{
      .info {
        &__text>p{
            text-align: center;
        }
      }
      .scheme{
        &__wrapper{
          width: 30%;
        }

        &__text{
          width: 70%;
        }
      }

      .data{

        &__wrapper-name{
          display: none;
        }
        &__wrapper-info{
          width: 100%;
        }
      }

      .emaill{
        &__img{
          display: none;
        }

        &__text{
          width: 100%;
        }
        &__text>span{
          font-size: 0.78rem;
        }

        &__button>button {
          width: 90%;
          height: 70%;
        }
      }
    }
  }

   @media (max-width: 320px){}
</style>

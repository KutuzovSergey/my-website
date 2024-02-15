<template>
  <section class="about">
    <a name="main"></a>
    <div id="carouselExampleCaptions" class="carousel slide about__slide" data-ride="carousel">
      <ol class="carousel-indicators slideshow__indicator">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner slideshow">
        <div class="carousel-item active">
          <div class="slideshow__block">
            <div class="slideshow__content">
              <h5 class="slideshow__title">Привет!</h5>
              <h6 class="slideshow__title-min">Меня зовут Сергей</h6>
              <div class="slideshow__text">
                <p>И я занимаюсь созданием сайтов и веб-приложений</p>
              </div>
              <a href="#portfolio" class="btn slideshow__btn">
                <div class="slideshow__btn__icon">
                  <img src="@/assets/icon/eye_icon.svg" alt="">
                </div>
                <span type="button" >портфолио</span>
              </a>
            </div>
            <div class="about__block">
              <div class="about__picchu">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-right-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </div>
              <div class="about__img d-block">
                <img src="@/assets/aboutSection/photo.png" alt="photo">
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="slideshow__block">
            <div class="slideshow__content">
              <h5 class="slideshow__title">Профессионализм</h5>
              <h6 class="slideshow__title-min">Мне нравится делать сайты</h6>
              <div class="slideshow__text">
                <p>Поэтому я качественно и в сроки выполняю свою работу</p>
              </div>
              <a href="#aboutMe" class="btn slideshow__btn">
                <div class="slideshow__btn__icon">
                  <img src="@/assets/icon/eye_icon.svg" alt="">
                </div>
                <span>обо мне</span>
              </a>
            </div>
            <div class="about__block">
              <div class="about__picchu_second">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-wrench" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z"/>
                </svg>
              </div>
              <div class="about__img d-block">
                <img src="@/assets/aboutSection/photo_01.png" alt="photo">
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="carousel-item">
          <div class="slideshow__block">
            <div class="slideshow__content">
              <h5 class="slideshow__title">Видео</h5>
              <h6 class="slideshow__title-min">Ещё немного о бо мне</h6>
              <div class="slideshow__text">
              </div>
              <button type="button" class="btn slideshow__btn">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-volume-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04z"/>
                <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z"/>
              </svg>
              Включить звук</button>
            </div>
            <div class="about__block">
              <div class="about__picchu">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-right-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </div>
              <div class="about__img d-block">
                <img src="@/assets/aboutSection/photo.png" alt="photo">
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

  .about{
     @include blockMain(90%, 500px);
     margin-bottom: 40px;

     &__slide{
      width: 100%;
      margin: auto 0;
      height: auto;
     }

     &__block{
      display: flex;
      height: 100%;
      margin: auto;
      position: relative;
     }

     &__img{
      width: 260px;
      height: 260px;
      margin: auto;
      overflow: hidden;
      border-radius: 50%;
      box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
     }

     &__img>img{
      width: 100%;
      height: auto;
     }
     
     &__picchu{
      position: absolute;
      width: 60px;
      z-index: 99;
      height: 60px;
      left: 4%;
      top: 5%;
      display: flex;
      background-color: #EE534F;
      border-radius: 50%;
     }

     &__picchu>svg{
      width: 20px;
      height: 20px;
      margin: auto;
      color: #ffffff;
     }

     &__picchu_second{
      position: absolute;
      width: 60px;
      z-index: 99;
      height: 60px;
      left: 4%;
      top: 5%;
      display: flex;
      background-color: #AA47BC;
      border-radius: 50%;
     }

    &__picchu_second>svg{
      width: 30px;
      height: 30px;
      margin: auto;
      color: #ffffff;
    }

    .slideshow{
      height: 100%;

      &__block{
        display: flex;
        width: 90%;
        margin: auto;
        height: 100%;
        padding-top: 5%;
      }

      &__content{
        width: 50%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-right: 2px solid #F0F0F0;
      }

      &__title{
        font-weight: 900;
        font-size: 3rem;
        color: #ffffff;
        padding-bottom: 3%;
      }

      &__title-min{
        color: #ffffff;
        font-size: 1.5rem;
      }

      &__text{
        padding: 2% 0;
      }

      &__text>p{
        font-size: 1.2rem;
        color: #ffffff;
      }

      &__btn{
        @include buttonMain(45%, 25%, 1.2rem);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__btn>span{
        margin: 0;
        padding: 0;
      }

      &__btn__icon{
        width: 30px;
        height: auto;
        margin-right: 5px;
      }

      &__btn__icon>img{
        width: 100%;
        height: auto;
      }
    }
     .slideshow__indicator{
      left: 75%;
      bottom: 45%;
      flex-direction: column;

      .active{
        width: 13px;
        height: 13px;
        background-color: #2196F3;
      }
     }
     .slideshow__indicator>li{
      width: 10px;
      height: 10px;
      background-color: #CDCDCD;
     }
  }
  @media (max-width: 1280px){
    .about{

       .slideshow{

        &__content{
          padding-right: 10px;
        }

        &__title{
          font-size: 1.9rem;
        }

        &__btn{
          width: 70%;
          height: auto;
        }
      }
    }
  }

  @media (max-width:  1024px){
    .about{
      .slideshow{
        &__title-min {
            font-size: 1.2rem;
        }

        &__text > p {
            font-size: 1rem;
        }
      } 
    } 
  }

 @media (max-width: 868px){

  .about{
    height: 630px;

    &__block{
      order: -1;
      width: 260px;
      height: 260px;
    }

    &__img{
      width: 220px;
      height: 220px;
    }

    .slideshow{

      &__block{
        padding: 0;
        height: 630px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &__content{
        order: 0;
        width: 100%;
        height: 220px;
        margin: auto;
        padding-right: 0px;
        padding-top: 10px;
        border-right: none;
        border-top: 2px solid #F0F0F0;
      }

      &__title{
        font-size: 2rem;
      }

      &__text>p{
        font-size: 1rem;
      }

      &__btn{
        width: 50%;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 600px){
  .about{
    width: 100%;

    .slideshow{

      &__title{
        text-align: center;
      }

      &__title-min {
          text-align: center;
        }

      &__text>p{
        text-align: center;
      }

      &__btn{
        width: 60%;
      }

      &__btn>span{
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 480px){
    
  .about{

    &__block{
      width: 210px;
      height: 210px;
    }

    &__picchu{
      width: 50px;
      height: 50px;
    }

    &__img{
      width: 200px;
      height: 200px;
    }

    .slideshow{
      &__btn{
        width: 90%;
      }
    }
  }
}

@media (max-width: 320px){
    
  .about{
  }
}
</style>

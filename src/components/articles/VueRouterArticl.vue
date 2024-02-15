<template>
  <section class="articles">
    <div class="articles__text">
      <img src="@/assets/news/news_routing.jpg" />
      <p>Роутинг на vue js Роутинг или маршрутизация, в веб приложениях представляет из себя организацию маршрутов внутри самого предложения, то бишь переход по ссылкам и вызовов компонент. дополнительный плагин подключающийся для библиотек вроде vue js или reacr js. 
      <p>Простой роут-маршрутизатор: </p>
      <a href="" class="">https://github.com/krasimir/navigo</a>
      <p>Его функция это переход по клику в различные компоненты приложения без перезагрузка приложения. На обычных сайтах схожие функции выполняет тег а, организуя ссылку по которой можен переход, но с перезагрузкой страницы:</p>

      <a href="" class="">Перейти в Гугл</a>
      <a href="" class="">Перейти в Гугл</a>
      <p>Если нам необходимо открыть ссылку в новой вкладке мы добавляем к тегу a атрибут - :</p>
      <a href="" class="">Открыть Гугл в новой вкладке</a>
      <p>Открыть Гугл в новой вкладке</p>
      <p>При организации навигации на странице создаётся два тега а. Первому в атрибут href вписываем через символ # ключевое слово - эта ссылка будет отзываться на клик пользователя. Вторая ссылка будет иметь атрибут name с нашим раннее придуманным ключевым словом и распадалась она будет в том месте до которого нужно осуществить прокрутку страницы, выполненяя роль "якоря". Выглядит это следующем образом:</p>
      <span class="cod__symbol"><</span><span class="cod__tag">a</span>
        <p>Теперь давайте вернёмся к роутину и рассматривать его я буду на примере работы с библиотекой Vue js. Первое что нужно будет сделать это установить сам роутинг. Как это сделать можно посмотреть по ссылке:</p>
        <div class="articles__subheading">
          <h5>Настройка роутинга</h5>
        </div>
        <div class="articles__subheading">
          <h5>Два способа использования</h5>
        </div>
        <div class="articles__subheading">
          <h5>Передача query параметров</h5>
        </div>
        <div class="articles__subheading">
          <h5>Создание якоря на странице</h5>
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
     @include blockMain(100%, 6%);
     padding: 4% 6%;

     .about__slide{
      background-color: #ffffff;
      width: 100%;
      height: 100%;
     }
     .about__block{
      display: flex;
      height: 100%;
      margin: auto;
      position: relative;
     }
     .about__img{
      width: 260px!important;
      height: 260px;
      margin: auto;
      overflow: hidden;
      border-radius: 50%;
      box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
     }
     .about__img>img{
      width: 100%;
      height: auto;
     }
     .about__picchu{
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
     .about__picchu>svg{
      width: 20px;
      height: 20px;
      margin: auto;
      color: #ffffff;
     }
     .about__picchu_second{
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
     .about__picchu_second>svg{
      width: 30px;
      height: 30px;
      margin: auto;
      color: #ffffff;
     }
     .slideshow{
      height: 100%;

      .slideshow__dlock{
        display: flex;
        width: 90%;
        margin: auto;
        height: 100%;
        padding-top: 5%;
       }
      .slideshow__content{
        width: 50%;
        text-align: left;
        border-right: 2px solid #F0F0F0;
      }
      .slideshow__title{
        font-weight: 900;
        font-size: 3rem;
        color: #121212;
        padding-bottom: 3%;
       }
       .slideshow__title-min{
        color: #121212;
        font-size: 1.5rem;
       }
       .slideshow__text{
        padding: 2% 0;
       }
       .slideshow__text>p{
        font-size: 1.2rem;
        color: #121212;
       }
       .slideshow__btn{
         @include buttonMain(40%, 25%, 1rem);
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
  @media (max-width:  1140px){
    .about{

       .about__slide{
       
       }
       .about__block{
        
       }
       .about__img{
       }
       .about__img>img{
        
       }
       .about__picchu{
        
       }
       .about__picchu>svg{
       
       }
       .slideshow{
        
        .slideshow__dlock{
        }
        .slideshow__content{
        }
        .slideshow__title{
          font-size: 2.2rem;
        }
        .slideshow__title-min{
        }
        .slideshow__text{
        }
        .slideshow__text>p{
        }
        .slideshow__btn{
          width: 55%;
        }
      }
      .slideshow__indicator{

        .active{
        }
      }
      .slideshow__indicator>li{
      }
    }
  }

  @media (max-width: 967px){
      .about{
       height: 4%;

       .about__slide{
       
       }
       .about__block{
        
       }
       .about__img{
        width: 200px!important;
        height: 200px;
       }
       .about__img>img{
        
       }
       .about__picchu{
        
       }
       .about__picchu>svg{
       
       }
       .slideshow{
        

        .slideshow__dlock{
          width: 100%;
         }
        .slideshow__content{
          width: 70%;
        }
        .slideshow__title{
          font-size: 2.5rem;
          font-weight: 800;
         }
         .slideshow__title-min{
         }
         .slideshow__text{
         }
         .slideshow__text>p{
            font-size: 1.1rem;
         }
         .slideshow__btn{
          width: 40%;
          padding: 10px 2px;
         }
       }
       .slideshow__indicator{
        left: 0;
        bottom: 0;
        flex-direction: row;

        .active{
        }
       }
       .slideshow__indicator>li{
       }
    }
  }
  @media (max-width: 667px){
  .about{
    height: 6%;

    .about__slide{
       
    }
    .about__block{
      order: -1;
    }
    .about__img{
    }
    .about__img>img{
        
    }
    .about__picchu{
        
    }
    .about__picchu>svg{
       
    }
    .slideshow{

      .slideshow__dlock{
        display: flex;
        flex-direction: column;
        }
      .slideshow__content{
        order: 0;
        width: 100%;
        margin: auto;
        border-right: none;
        border-top: 2px solid #F0F0F0;
      }
      .slideshow__title{
        font-size: 2rem;
      }
      .slideshow__title-min{
      }
      .slideshow__text{
      }
      .slideshow__text>p{
        font-size: 1rem;
      }
      .slideshow__btn{
        width: 70%;
        margin: auto;
        display: block;
      }
    }
    .slideshow__indicator{

      .active{
      }
    }
    .slideshow__indicator>li{
    }
  }
}
</style>

<template>
  <div class="sidebar">
    <div class="logo">
      <div class="logo__img">
        <img src="@/assets/myPhoto.png" alt="logo">
      </div>
      <div class="logo__content">
        <div class="logo__title">
          <h2>Sergey Def</h2>
        </div>
        <div class="logo__text">
          <span>Website and app development</span>
        </div>
      </div>
    </div>
    <div class="sidebar__bottom">
      <div class="sidebar__network network">
        <!-- <div class="network__block">
          <a href="https://www.facebook.com/sergey.def.5" class="network__img">
            <img src="@/assets/icon/social_networks/facebook.svg" alt="#" />
          </a>
          <a href="" class="network__img">
            <img src="@/assets/icon/social_networks/instagram.svg" alt="#" />
          </a>
          <a href="" class="network__img">
            <img src="@/assets/icon/social_networks/twitter.svg" alt="#" />
          </a>
          <a href="" class="network__img">
            <img src="@/assets/icon/social_networks/wk.svg" alt="#" />
          </a>
        </div> -->
      </div>
      <div class="sidebar__myself">
        <div class="myself">
          <div class="myself__title">
            <h4>Для работодателей</h4>
          </div>
          <div class="myself__text">
            <p>Готов рассмотреть любые предложения о постоянной работе или аутсорсинге. Нажав на кнопку ниже, можно скачать моё резюме</p>
          </div>
        </div>
      </div>
      <div class="sidebar__summary">
        <div class="summary">
          <a href="http://www.s-sta.online/summary/КутузовСергей.pdf" download class="summary__link btn summary__button">
              <div class="summary__button__icon">
                <img src="@/assets/icon/download.svg" alt="#" >
              </div>
              <span>резюме</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LateralFace',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet"');
.sidebar{
  width: 20%;
  height: 100%;
  padding-top: 0.4%;
  background-color: #000000;

  &__bottom{
    width: 100%;
    height: auto;
  }

  &__bottom-home{
    height: 96%;
  }

  &__network{
    width: 100%;
    height: 60px;
    background-color: #ffffff;
  }

  &__myself{
    width: 100%;
    height: 190px;
    margin-top: 3px;
    display: flex;
    background-color: #000000;
  }
  
  &__summary{
    width: 100%;
    height: 90px;
    background-color: #151515;
    margin-top: 1%;
  }
}

.logo{
    width: 100%;
    height: auto;

    &__img{
      width: 100%;
      display: flex;
      padding-top: 5%;
      height: 55%;
      overflow: hidden;
      background-color: #151515;
    }

    &__img>img{
      width: 50%;
      height: auto;
      margin: auto;
    }

    &__content{
      width: 100%;
      padding-top: 10%;
      height: 43.5%;
      background-color: #000000;
    }

    &__title{
      height: 100px;
      padding: 0;
      background-color: #151515;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__title>h2{
      font-family: 'Nanum Pen Script', cursive;
      font-size: 2rem;
    }

    &__text{
      height: 80px;
      padding: 0;
      background-color: #151515;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text>span{
      font-size: 1rem;
      color: #CFCFCF;
    }

    &__text>a{
      font-size: 1rem;
      color: #2196F3;
      cursor: pointer;
    }
}

@media (min-width: 1900px){
  .logo{
    &__img{
      height: 65%;
    }
  }
}

@media (min-width: 2250px){
  .logo{
    &__img{
      height: 80%;
    }
  }
}

@media (min-width: 2600px){
  .logo{
    &__img{
      height: 90%;
    }
  }
}

@media (min-width: 3000px){
  .logo{
    &__img{
      height: 100%;
    }
  }
}

.network{
    display: none;
    justify-content: center;
    background-color: #151515;

    &__block{
      display: flex;
      justify-content: space-around;
      width: 80%;
      margin: auto;
    }

    &__img{
      background-color: #CFCFCF;
      color: #FEFEFE;
      width: 35px;
      height: 35px;
      display: flex;
      border-radius: 50%;
    }

    &__img>svg{
      width: 25px;
      height: 25px;
      margin: auto;
    }

     &__img>img{
        width: 25px;
        height: 25px;
        margin: auto;
     }

    &__facebook{
      @font-face { font-family:"Arial";src:url("#FontID0") format(svg)}
      .fil0 {fill:#CFCFCF}
      .fil1 {fill:#FEFEFE}
      .fil2 {fill:white}
      .fnt0 {font-weight:600;font-size:881.01px;font-family:'Arial'}
    }
    
    &__Instagram{
      @font-face { font-family:"Arial";src:url("#FontID0") format(svg)}
     .fil2 {fill:#FEFEFE}
     .fil0 {fill:#CFCFCF}
     .fil3 {fill:#FEFEFE}
     .fil1 {fill:white}
     .fnt0 {font-weight:normal;font-size:881.01px;font-family:'Arial'}
    }

    &__twitter{
      @font-face { font-family:"Arial";src:url("#FontID0") format(svg)}
      .fil3 {fill:#FEFEFE}
      .fil0 {fill:#FEFEFE}
      .fil1 {fill:#FEFEFE}
      .fil2 {fill:white}
      .fnt0 {font-weight:normal;font-size:881.01px;font-family:'Arial'}
    }
    .network__wk{
      color: #FEFEFE!important;
      @font-face { font-family:"Arial";src:url("#FontID0") format(svg)}
      .fil0 {fill:#FEFEFE}
      .fil1 {fill:#FEFEFE}
      .fil2 {fill:#FEFEFE}
      .fnt0 {font-weight:normal;font-size:881.01px;font-family:'Arial'}
    }
    &__img:hover{
      background-color: #2196F3;
    }

    &__facebook{
      .fil0{fill:#2196F3}
    }

    &__Instagram{
        .fil0 {fill:#2196F3}
    }
}

.myself{
    width: 100%;
    height: auto;
    margin: auto;

    &__title{
      width: 100%;
      height: 50px;
      display: flex;
    }

    &__title>h4{
      @include headingMin(1rem, 700);
      margin: auto;
    }

    &__text{
      width: 100%;
      text-align: left;
      padding: 0 7% 0 7%;
      color: #838383;
    }
}

.summary{
  width: 99%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  background-color: #151515;

  &__link{
    display: block;
    width: 100%;
    height: 100%;
    margin: auto;
    text-decoration: none;
  }

  &__button{
      @include buttonMain(240px, 60px, 1rem);
      letter-spacing: 0.1em;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

    &__button>span{
      text-align: center;
      margin: auto 0;
  }
  &__button__icon{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  &__button__icon>img{
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 1678px){
  .sidebar{
    width: 410px;
    height: 100%;

    &__bottom{
      height: 58%;
    }

    &__network{
      height: 12%;
    }

    &__myself{
      height: auto;
    }

    &__summary{
      height: 140px;
    }
  }

  .myself{
    height: 200px;
  }

  .logo{
    height: auto;

    &__content{
      padding-top: 5%;
    }

    &__text{
      padding: 0;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .summary{
    height: 100%;
      
    &__link{
      width: 60%;
      height: 32%;
    }
  }
}

@media (max-width: 1140px){
  .sidebar{
    overflow: scroll;

    &__bottom{
      height: 550px;
    }

    &__network{
      display: none;
    }

    &__myself{
      height: auto;
    }

    &__summary{
      height: 100px;
    }
  }

  .myself{
    height: 300px;
    margin: 0;

    &__title{
      height: 100px;
    }

    &__text{
      height: 140px;
      background-color: #151515;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__text>p{
      margin: 0;
      text-align: center;
    }
  }
  .logo{
    &__img{
      height: 250px;
    }
    &__content{
      height: auto;
      padding: 0;
    }

    &__title{
      background-color: #000000;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center; 
    }

    &__title>h2{
      margin: 0;
    }

    &__text{
      height: 60px;
      padding: 0;
      background-color: #151515;
      display: flex;
      justify-content: center;
      align-items: center; 
    }
  }
  .summary{
    height: 130px;

    &__link{
      width: 210px;
      height: 50px;
    }
  }
}

@media (max-width: 700px){
  .logo{
    &__img{
      height: 200px;
    }
  }
}

@media (max-width: 500px){
  .sidebar{
    width: 350px;
  }
}
@media (max-width: 410px){
  .sidebar{
    width: 300px;
  }

  .logo{
    &__img{
      height: 180px;
    }
  }
  .myself{
    &__text{
      height: 150px;
    }
  }
}

@media (max-width: 360px){
  .sidebar{
    width: 270px;
  }

  .summary{

    &__link{
      width: 70%;
    }
  } 
  
  .myself{
    &__text>p{
      font-size: 0.8rem;
    }
  }
}
</style>

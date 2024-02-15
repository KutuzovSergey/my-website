<template>
  <section class="skills" id="skills">
    <a name="skills" class="myLink"></a>
    <HeaderDecorative :text='headerComponent' />
    <div class="skills__info info">
      <div class="info__title">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill info__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
        <h2>Мои навыки</h2>
      </div>
      <div class="info__text">
        <p>В данном разделе представлены мои профессиональные навыки. Для удобства представления использованы графические прогрессбары и диаграммы.</p>
      </div>
    </div>
      <div class="skills__menu menu">
        <ul class="nav nav-tabs menu__wrapper" id="myTab" role="tablist">
          <li class="nav-item menu__item" role="presentation">
            <a 
              class="nav-link active" 
              id="home-tab" 
              data-toggle="tab" 
              href="#home" role="tab" 
              aria-controls="home" 
              aria-selected="true">Веб разработка</a>
          </li>
          <li class="nav-item menu__item" role="presentation">
            <a 
              class="nav-link" 
              id="profile-tab" 
              data-toggle="tab" 
              href="#profile" 
              role="tab" 
              aria-controls="profile" 
              aria-selected="false">Графические редакторы</a>
          </li>
          <li class="nav-item menu__item" role="presentation">
            <a 
              class="nav-link" 
              id="contact-tab" 
              data-toggle="tab" 
              href="#contact" 
              role="tab" 
              aria-controls="contact" 
              aria-selected="false">Другие навыки</a>
          </li>
        </ul>
      </div>
      <div class="tab-content skills__professional" id="myTabContent">
        <div class="tab-pane fade show active professional" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="professional__title">
            <h5>Профессиональные навыки</h5>
          </div>
          <div class="professional__wrapper">
            <div class="professional__block">
              <div class="professional__item">
                <div class="professional__name"><span>HTML5</span></div>
                <div class="progress professional__progress">
                  <div 
                    class="progress-bar green__line" 
                    role="progressbar" 
                    style="width: 80%;" 
                    aria-valuenow="80" 
                    aria-valuemin="0" 
                    aria-valuemax="20">80%</div>
                </div>
              </div>
              <div class="professional__item">
                <div class="professional__name">
                  <span>bootstrap-4</span>
                </div>
                <div class="progress professional__progress">
                  <div 
                    class="progress-bar red__line" 
                    role="progressbar" 
                    style="width: 40%;" 
                    aria-valuenow="40"
                    aria-valuemin="0" 
                    aria-valuemax="60">40%</div>
                </div>
              </div>
              <div class="professional__item">
                <div class="professional__name"><span>CSS3</span></div>
                <div class="progress professional__progress">
                  <div 
                    class="progress-bar bootstrap__line" 
                    role="progressbar" 
                    style="width: 60%;" 
                    aria-valuenow="60" 
                    aria-valuemin="0" 
                    aria-valuemax="40">60%</div>
                </div>
              </div>
            </div>
            <div class="professional__block">
              <div class="professional__item">
                <div class="professional__name">
                  <span>React.js</span>
                </div>
                <div class="progress professional__progress">
                  <div 
                    class="progress-bar blue__line" 
                    role="progressbar" 
                    style="width: 40%;" 
                    aria-valuenow="40" 
                    aria-valuemin="0" 
                    aria-valuemax="60">40%</div>
                </div>
              </div>
              <div class="professional__item">
                <div class="professional__name"><span>Vue.js</span></div>
                <div class="progress professional__progress">
                  <div 
                    class="progress-bar react__line" 
                    role="progressbar" 
                    style="width: 40%;" 
                    aria-valuenow="40" 
                    aria-valuemin="0" 
                    aria-valuemax="60">40%</div>
                </div>
              </div>
              <div class="professional__item">
              <div class="professional__name"><span>javaScript</span></div>
                <div class="progress professional__progress">
                  <div 
                    class="progress-bar purple__line" 
                    role="progressbar" 
                    style="width: 60%;" 
                    aria-valuenow="60" 
                    aria-valuemin="0" 
                    aria-valuemax="40">60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="tab-pane fade professional" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="professional__title">
          <h5>Профессиональные навыки</h5>
        </div>
        <div class="professional__wrapper">
          <div class="professional__block graphic">
            <div class="professional__item">
              <div class="professional__name"><span>Figma</span></div>
              <div class="progress professional__progress">
                <div 
                  class="progress-bar red__line" 
                  role="progressbar" 
                  style="width: 30%;" 
                  aria-valuenow="30" 
                  aria-valuemin="0" 
                  aria-valuemax="100">30%</div>
              </div>
            </div>
            <div class="professional__item">
              <div class="professional__name"><span>Adobe Photoshop</span></div>
              <div class="progress professional__progress">
                <div 
                  class="progress-bar react__line" 
                  role="progressbar" 
                  style="width: 50%;" 
                  aria-valuenow="50" 
                  aria-valuemin="0" 
                  aria-valuemax="50">50%</div>
              </div>
            </div>
            <div class="professional__item">
              <div class="professional__name"><span>CorelDRAW</span></div>
              <div class="progress professional__progress">
                <div 
                  class="progress-bar bootstrap__line" 
                  role="progressbar" 
                  style="width: 50%;" 
                  aria-valuenow="50" 
                  aria-valuemin="50" 
                  aria-valuemax="100">50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade professional" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div class="professional__title">
          <h5>Профессиональные навыки</h5>
        </div>
        <div class="professional__wrapper">
          <div class="professional__block graphic">
            <div class="professional__item">
              <div class="professional__name">
                <span>Git</span>
              </div>
              <div class="progress professional__progress">
                <div 
                  class="progress-bar react__line" 
                  role="progressbar" 
                  style="width: 60%;" 
                  aria-valuenow="60" 
                  aria-valuemin="0"
                  aria-valuemax="40">60%</div>
              </div>
            </div>
            <div class="professional__item">
              <div class="professional__name">
                <span>Sweet Home 3D</span>
              </div>
              <div class="progress professional__progress">
                <div 
                  class="progress-bar blue__line" 
                  role="progressbar" 
                  style="width: 70%;" 
                  aria-valuenow="70" 
                  aria-valuemin="0" 
                  aria-valuemax="70">70%</div>
              </div>
            </div>
            <div class="professional__item">
              <div class="professional__name"><span>MS Office (Word, Excel)</span></div>
              <div class="progress professional__progress">
                <div 
                  class="progress-bar purple__line" 
                  role="progressbar" 
                  style="width: 60%;" 
                  aria-valuenow="60" 
                  aria-valuemin="0"
                  aria-valuemax="40">60%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="language">
      <div class="language__title">
        <h5>Языковые навыки</h5>
      </div>
      <div class="language__wrapper">
        <div class="language__text">
          <p>Моим жизненным "кредом" является постоянное и непрерывное саморазвитие. Знание иностранных языков - не мой основной профиль, но необходимый минимум присутствует.</p>
        </div>
        <div class="language__chart">
          <!-- <div class="language__block">
            <div class="language__english">
              <span>Русский</span>
            </div>
          </div> -->
          <div class="language__block">
            <span class="language__percent">20%</span>
            <div class="language__german">
              <span>Английский</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import HeaderDecorative from '@/components/HeaderComponents/HeaderDecorative.vue'

  export default {
    name: 'SkillsSection',
    components: {
      HeaderDecorative
    },
    props: {
      msg: String
    },
    data(){
      return{
        headerComponent: 'Мои навыки'
      }
    },
    methods:{
      
    }
  }
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

.skills{
    @include blockMain(90%, 1000px);
    position: relative;
    padding: 4% 6%;
    flex-direction: column;
    z-index: 9;
    margin-bottom: 40px;

    &__professional{
      height: 40%;
      z-index: 9;
      background-color: #000000;
      box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
    }
  }

  .menu{
      z-index: 8;
      width: 100%;
      height: auto;

      &__wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        padding-top: 1.5%;
      }
      &__item{
        display: flex;
        padding: 1px 0px;
      }
      
      &__item>a{
        width: 100%;
        height: 100%;
        color: #989999;
        background-color: #151515;
        font-weight: 700;
      }

      &__item>a:hover{
        border: none;
      }

      &__item>a.active{
        border: none;
        background-color: #000000;
        cursor: pointer;
        z-index: 9;
        color: #ffffff;
      }
  }

  .professional{
    padding: 3%;
    width: 100%;
    height: 100%;
    z-index: 9;
      
    &__title{
      @include headingMinBlock(100%, 22%);
    }

    &__title>h5{
      @include headingMin(1rem, 700);
    }

    &__wrapper{
      width: 100%;
      height: 70%;
      display: flex;
      justify-content: space-between;
    }

    &__block{
      width: 46%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__item{
      display: flex;
      justify-content: space-between;
    }
    &__name{
      width: 20%;
      text-align: left;
    }
    &__name>span{
      font-size: 0.865rem;
      color: #7A7A7A;
    }
    &__progress{
      width: 70%;
      background-color: #292929;
    }

    .green__line{
        background-color: #2196F3;
      }
      .bootstrap__line{
        background-color: #26A59A;
      }
      
    .red__line{
      background-color: #EE534F;
    }

    .blue__line{
      background-color: #3F51B5;
    }
    .react__line{
        background-color: #FCC02C;
    }
    .purple__line{
      background-color: #AB46BC;
    }
    .graphic{
      width: 80%;
      margin: auto;
    }
  }

  .language{
    z-index: 9;
    width: 100%;
    height: 35%;
    padding-top: 2%;

    &__title{
      @include headingMinBlock(100%, 20%);
      display: flex;
    }
    &__title>h5{
      @include headingMin(1rem, 700);
      margin: auto 0;
    }
    &__wrapper{
      width: 100%;
      display: flex;
    }

    &__text{
      width: 50%;
      display: flex;
      padding-right: 5%;
      text-align: left;
    }
    &__text>p{
        margin: auto 0;
        height: 60%;
    }
    &__chart{
        width: 50%;
        display: flex;
        justify-content: space-around;
    }

    &__block{
      width: 150px;
      position: relative;
    }

    &__percent{
      position: absolute;
      font-size: .6rem;
      color: #ffffff;
      top: 69px;
      right: 0px;
      font-weight: 900;
    }

    &__russian{
      background: #ffffff;
      width: 150px; 
      height: 150px;
      text-align: center;
      font: 16px/100px Times, serif;
      border: 24px solid #2196F3;
      border-right: 24px solid #2196F3;
      border-radius: 100px;
    }

    &__english{
      background: #292929;
      width: 150px; 
      height: 150px;
      text-align: center;
      font: 16px/100px Times, serif;
      border: 24px solid #26A59A;
      border-right: 24px solid #000000;
      border-radius: 100px;
    }

    &__english>span{
      color: #ffffff;
    }

    &__german{
      background: #292929;
      width: 150px; 
      height: 150px;
      text-align: center;
      font: 16px/100px Times, serif;
      border: 24px solid #000000;
      border-right: 24px solid #EE534F;
      border-radius: 100px;
    }

    &__german>span{
      color: #ffffff;
    }
  }

  @media (max-width: 967px){
    .language{

      &__title{
        width: 90%;
        margin: auto;
      }

      &__wrapper{
        flex-direction: column;
      }

      &__text{
        width: 90%;
        margin: auto;
        padding: 0;
      }

      &__chart{
        width: 90%;
        margin: 15px auto 0 auto;
        padding: 0;
      }
    }
  }

  @media (max-width: 600px){
    .skills{
      width: 100%;
    }
  }

  @media (max-width: 768px){
    .language{

      &__title{
        width: 90%;
        margin: auto;
      }

      &__title>h5{
        width: 100%;
        text-align: center;
      }

      &__wrapper{
        flex-direction: column;
      }
      &__text{
        width: 90%;
        margin: auto;
        padding: 0;
      }

      &__text{
        height: auto;
        margin: 0;
      }

      &__chart{
        width: 90%;
        margin: 15px auto;
        padding: 0;
      }

      &__russian{
        width: 100px;
        height: 100px;
        font: 12px/190px Times, serif;
      }

      &__english{
        width: 100px;
        height: 100px;
        font: 12px/190px Times, serif;
      }

      &__block{
        width: 100px;
        margin: 20px auto 0 auto;
      }

      &__german{
        width: 100px;
        height: 100px;
        font: 12px/190px Times, serif;
      }
      
      &__percent{
        top: 40px;
      }
      &__german>span{
        left: 20px;
        bottom: 17px;
        position: absolute;
      }
    }

    .professional{
      &__title{
        height: 15%;
      }

      &__wrapper{
        flex-direction: column;
      }

      &__block{
        width: 100%;
        margin: auto;
        padding-top: 8%;
      }

      &__name{
        width: 30%;
      }

      &__name>span{
        font-size: 0.765rem;
      }
    }
   .menu{
      &__wrapper{
        height: 60%;
      }

      &__item{
        padding: 0;
      }
    }
  }
   @media (max-width: 400px){
    .language{

      &__text{
        width: 100%;
      }

      &__chart{
        width: 100%;
      }

    }
   }
</style>

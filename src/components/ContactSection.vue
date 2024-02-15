<template>
  <section class="contact" id="feedback">
    <a name="feedback" class="myLink"></a>
    <HeaderDecorative :text='headerComponent' />
    <div class="contact__info info">
      <div class="info__title">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope-open-fill info__icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"/>
        </svg>
        <h2>Написать мне</h2>
      </div>
      <div class="info__text">
        <p>Если у вас возникли вопросы, предложения или пожелания - контакты для обратной связи ниже. Также возможно сделать заказ интернет-ресурса - сайт под ключ или доработка уже существующего ресурса.</p>
      </div>
    </div>
    <div class="contact__wrapper">
      <div class="contact__block">
       <div class="contact__item phone">
         <div class="phone__heading">
           <h5>phone number</h5>
         </div>
         <div class="phone__list">
           <ul class="phone__block">
             <li class="phone__name">
              <span>+7 (977) 350-67-84</span>
            </li>
           </ul>
            <ul class="phone__block">
             <li class="phone__content"></li>
             <li class="phone__content"></li>
           </ul>
         </div>
       </div>
       <div class="contact__item email">
         <div class="email__heading">
           <h5>email</h5>
         </div>
         <div class="email__list">
            <ul>
             <li class="email__content">SergeiPasekin@yandex.ru</li>
           </ul>
         </div>
       </div>
       <div class="contact__item address">
         <div class="address__heading">
           <h5>adress</h5> 
         </div>
         <div class="address__text">
           <p>г. Москва м.Славянский бульвар</p>
         </div>
       </div>
      </div>
      <div class="contact__block contact__blue">
        <form action="" class="contact__form" method="post" @submit.prevent="sendFeedback">
          <div class="contact__title">
            <h5>написать мне</h5>
          </div>
          <div class="contact__input">
            <input 
              type="text" 
              placeholder="Ваше имя"
              v-model.trim="feedback.name"
              :class="$v.feedback.name.$dirty && !$v.feedback.name.required ? 'contact__error' : ''" />
              <span class="error_form contact__error-message" v-if="$v.feedback.name.$dirty && !$v.feedback.name.required">не заполнено</span>
          </div>
          <div class="contact__input">
            <input 
              type="text" 
              placeholder="Ваш Email"
              v-model.trim="feedback.email"
              :class="($v.feedback.email.$dirty && !$v.feedback.email.required) || ($v.feedback.email.$dirty && !$v.feedback.email.email) ? 'contact__error' : ''" />
              <span class="error_form contact__error-message" v-if="$v.feedback.email.$dirty && !$v.feedback.email.required">не заполнено</span>
              <span class="error_form contact__error-message" v-else-if="$v.feedback.email.$dirty && !$v.feedback.email.email">ошибка в email</span>
          </div>
          <div class="contact__input">
            <input 
              type="text" 
              placeholder="Телефон"
              v-model.trim="feedback.phone"
              :class="$v.feedback.phone.$dirty && !$v.feedback.phone.required ? 'contact__error' : ''" />
              <span class="error_form contact__error-message" v-if="$v.feedback.phone.$dirty && !$v.feedback.phone.required">не заполнено</span>
              <span class="error_form contact__error-message" v-else-if="$v.feedback.phone.$dirty && !$v.feedback.phone.phone">ошибка в номере</span>
          </div>
          <div class="contact__textarea">
            <textarea 
              name="" 
              id="" 
              cols="10" 
              rows="4" 
              placeholder="Сообщение"
              v-model.trim="feedback.text"
              :class="$v.feedback.text.$dirty && !$v.feedback.text.required ? 'contact__error' : ''" /></textarea>
               <span class="error_form" v-if="$v.feedback.text.$dirty && !$v.feedback.text.required">не заполнено</span>
          </div>
          <div class="contact__button">
            <button type="submit" class="btn">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
            </svg>
            <span class="">Отправить</span>
          </button>
          </div>
          <div class="contact__input contact__checkbox">
            <input 
              type="checkbox" 
              name="check_box" 
              checked="checked" 
              class="form-check-input"
              v-model="feedback.consent" />
            <label for="check_box">Согласие на обработка данных</label>
            <span class="error_form" v-if="!$v.feedback.consent.$model">требуется ваше согласие </span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import HeaderDecorative from '@/components/HeaderComponents/HeaderDecorative.vue'

export default {
  mixins: [validationMixin],
  name: 'ContactSection',
  components: {
    HeaderDecorative
  },
  props: {
    msg: String
  },
  data() {
    return {
      headerComponent: 'Написать мне',
      feedback: {
        name: null,
        email: null,
        phone: null,
        text: null,
        consent: true
      },
    }
  },
  methods: {
    sendFeedback: function () {
      if (this.$v.$invalid) {
        this.$v.feedback.$touch();
      }

      let result = this.$v.feedback.name.required &&
      this.$v.feedback.email.required &&
      this.$v.feedback.email.email && 
      this.$v.feedback.phone.required &&
      this.$v.feedback.phone.phone &&
      this.$v.feedback.text.required &&
      this.$v.feedback.consent.$model;

      if (result) {

        let info = this.feedback;
        let message = 'Сообщение усмешно отправлено. Я свяжусь с вами в ближайшее время.';

        this.$store.dispatch('SET_FORM', info);

        this.$store.commit('СHANGE_TEXT', message);
        this.$store.commit('CHANGE_LED', true);
        this.$store.dispatch('CHANGE_LED');

        this.feedback.name = '';
        this.feedback.email = '';
        this.feedback.phone = '';
        this.feedback.text = '';
        this.$v.feedback.$reset();
      }
    }
  },
  validations: {
    feedback: {
      name: { required },
      email: { required, email },
      phone: { required, phone: val => /^\d[\d() -]{4,14}\d$/.test(val) },
      text: { required },
      consent: {}
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/_mixins.scss';
  @import '@/scss/style.scss';
  @import '@/scss/window.scss';
  @import '~bootstrap/dist/css/bootstrap.min.css';

  .contact{
		@include blockMain(90%, 900px);
			position: relative;
			padding: 4% 6%;
      margin-bottom: 40px;
			flex-direction: column;
      justify-content: space-between;

		&__wrapper{
      z-index: 9;
			width: 100%;
			height: 80%;
			display: flex;
      justify-content: space-between;
		}

		&__block{
			width: 49%;
      height: 100%;
		}

    &__item{
      width: 100%;
      height: 33.3%;
      text-align: left;
      padding: 10% 8%;
    }

    .phone{
      
      &__heading{
        width: 100%;
        text-transform: uppercase;
      }
      &__block{
        width: 50%;
      }
      &__list{
        padding-top: 1%;
        display: flex;
      }
      &__name{
        width: 70%;
        padding-bottom: 10px;
        display: flex;
        justify-content: space-between;
      }
      &__content{
        display: flex;
        width: 100%;
        padding-bottom: 10px;
      }
    }
    .email{
      box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -webkit-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);
      -moz-box-shadow:1px 1px 100px 1px rgba(0,0,0,0.21);

      &__heading{
        width: 100%;
        text-transform: uppercase;
      }
      &__list{
        padding-top: 1%;
        display: flex;
      }
      &__content{
        display: flex;
      }
    }
    .address{

      &__heading{
        width: 100%;
        text-transform: uppercase;
      }
      &__text{
        padding-top: 1%;
      }
    }

		&__blue{
			background-color: #2196F3;
      width: 49%;
      height: 100%;
		}

    &__form{
      width: 100%;
      height: 100%;
      display: flex;
      text-align: left;
      flex-direction: column;
      justify-content: space-between;
      padding: 10% 8%;
    }

    &__title{
      width: 100%;
      height: 8%;
    }

    &__title>h5{
      color: #ffffff;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 700;
    }

    &__input{
      width: 100%;
      height: 8%;
      position: relative;
    }

    &__input>input{
      color: #ffffff;
      width: 100%;
      opacity: 0.6;
      background-color: #2196F3;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 2px solid #ffffff; 
    }

    &__input>input:focus{
      opacity: 0.9;
    }

    &__input>input::-webkit-input-placeholder{
      color: #ffffff;
    }

    &__input>input:-moz-placeholder{
      color: #ffffff;
    }

    &__input>input::-moz-placeholder{
      color: #ffffff;
    }

    &__input>input:-ms-input-placeholder{
      color: #ffffff;
    }

    &__textarea{
      width: 100%;
      height: 18%;
      position: relative;
    }
    
    &__textarea>textarea{
      color: #ffffff;
      width: 100%;
      height: 80%;
      resize: none;
      opacity: 0.6;
      background-color: #2196F3;
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom: 2px solid #ffffff; 
    }

    &__textarea>textarea::-webkit-input-placeholder{
      color: #ffffff;
    }

    &__textarea>textarea:-moz-placeholder{
      color: #ffffff;
    }

    &__textarea>textarea::-moz-placeholder{
      color: #ffffff;
    }

    &__textarea>textarea:-ms-input-placeholder{
      color: #ffffff;
    }

    &__button{
      width: 100%;
      height: 10%;
    }

    &__button>button{
      display: flex;
      justify-content: center;
      width: 44%;
      height: 100%;
      border-radius: 0;
      background-color: #ffffff;
    }
    
    &__button>button>svg{
      display: block;
      margin: auto 3px;
    }
    &__button>button>span{
      display: block;
      margin: auto 3px;
    }

    &__checkbox{
      text-align: center;
      height: 40px;
      position: relative;
    }

    &__checkbox>input{
      left: 20%;
      width: auto;
    }

    &__checkbox>label{
      color: #fff;
      font-size: 1rem;
    }

    &__error{
      opacity: 1 !important;
      border-bottom: 2px solid #ff0000 !important;
    }
	}
  @media (max-width: 1140px){
    .contact{

      &__block{
        width: 39%;
      }

      &__blue{
        width: 59%;
      }
    }
  }
  @media (max-width: 967px){
    .contact{
      height: 1500px;
      padding-bottom: 10%;

      &__wrapper{
        height: 90%;
        flex-direction: column;
      }

      &__block{
        width: 80%;
        height: 40%;
        margin: 0 auto;
      }

      &__item{
        padding: 4% 8%;
      }

      &__blue{
        height: 59%;
      }
      &__error-message{
        bottom: -5px;
      }
    }
  }

  @media (max-width: 600px){
    .contact{
      width: 100%;
    }
  }

  @media (max-width: 667px){
    .contact{
      height: 1100px;

      &__wrapper{
        height: 80%;
      }
      .info{
        height: 25%;
      }
      &__block{
        width: 100%;
      }
        .phone{
          
          &__heading>h5{
            font-size: 1rem;
            font-weight: 700;
          }
          &__name{
            width: 100%;
            font-size: 0.9rem;
          }
          &__content{
            font-size: 0.9rem;
          }
        }

        .email{

          &__heading>h5{
            font-size: 1rem;
            font-weight: 700;
          }
          &__content{
            font-size: 0.9rem;
          }
        }
        
        .address{

          &__heading>h5{
            font-size: 1rem;
            font-weight: 700;
          }
          &__text{
            font-size: 0.9rem;
          }
        }

        &__blue{
          height: 60%;
        }

        &__form{
          padding: 4% 8%;
        }

        &__input{
          height: 7%;
        }

        &__button>button{
          width: 70%;
          margin: auto;
          justify-content: center;
        }

        &__checkbox>input{
        left: 15%;
      }

      &__error-message{
        bottom: -15px;
      }
    }
  }

  @media (max-width: 470px){
    .contact{
      &__checkbox>input{
        left: 10%;
      }
    }
  }

  @media (max-width: 410px){
    .contact{
      &__checkbox>input{
        left: 5%;
      }
    }
  }

  @media (max-width: 360px){
    .contact{
      &__checkbox>input{
        left: 0;
      }
    }
  }
</style>

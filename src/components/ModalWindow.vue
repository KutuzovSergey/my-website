<template>
  <section class="window">
    <div class="window__wrapper">
      <form class="window__form" method="post" @submit.prevent="sendForm">
        <div class="window__title">
          <span>Оставить коментарий</span>
          <div class="window__close" @click="closeWindow">
            <div class="window__plus"></div>
          </div>
        </div>
        <div class="window__block">
          <div class="window__photo photo">
            <div class="photo__img">
              <img v-bind:src="photoPreview" class="photo__user" v-show="showPreview">
              <video autoplay="autoplay" id="video" class="camera_stream" v-show="showVideo" src="">
                <img src="" class="photo__user">
              </video>
              <canvas></canvas>
            </div>
            <div class="photo__buttons">
              <div class="photo__button photo__download">
                <label>
                  <span class="photo__text">Загрузить фото</span>
                  <input type="file" name="myFile" ref="file" accept="image/*" @change="photoDownload">
                </label>
              </div>
            </div>
          </div>
          <div class="window__findings findings">
            <div class="findings__name" :class="$v.file.name.$error? 'findings__error' : ''">
              <label for="name" class="findings__input"><span>Имя:</span>
                <input 
                type="text" 
                name="name" 
                class="findings__input findings__error"
                placeholder="Иван"
                v-model="file.name">
              </label>
              <span class="error_form" v-if="$v.file.name.$dirty && $v.file.name.$error">не заполнено</span>
            </div>
            <div class="findings__name" :class="$v.file.surname.$error? 'findings__error' : ''" >
              <label for="surname" class="findings__input"><span>Фамилия:</span>
                <input 
                type="text" 
                name="surname" 
                class="findings__input"
                placeholder="Иванов"
                v-model.trim="file.surname" />
              </label>
              <span class="error_form" v-if="$v.file.surname.$dirty && $v.file.surname.$error">не заполнено</span>
            </div>
            <div class="findings__textarea" :class="$v.file.text.$error? 'findings__error' : ''">
              <textarea 
              rows="10" 
              cols="45" 
              name="text" 
              placeholder="Напишите что-нибудь"
              v-model="file.text"></textarea>
              <span class="error_form" v-if="$v.file.text.$dirty && $v.file.text.$error">не заполнено</span>
            </div>
            <div class="findings__name" :class="$v.file.address.$error? 'findings__error' : ''">
              <label for="address" class="findings__input"><span>Ваш сайт:</span>
                <input 
                type="text" 
                name="address" 
                class="findings__input"
                placeholder="xxxxxxxxxxx.xxx"
                v-model.trim="file.address" />
              </label>
              <span class="error_form" v-if="$v.file.address.$dirty && $v.file.address.$error">не заполнено</span>
            </div>
            <div class="findings__buttons">
              <button type="submit" class="btn findings__button">Отправить</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'ModalWindow',
  props: {
  },
  data(){
    return{
      optionsWindow: [
        { sendAnEmail: '' },
      ],
      post: {
        whom: "pas.sergei2014@yandex.ru",
        theme: "",
        content: "",
      },
      consent: true,
      showPreview: false,
      photoPreview: "",
      file: {
        image: "",
        name: "",
        surname: "",
        text: "",
        address: "",
      },
    }
  },
  methods: {
    closeWindow: function (){
     this.$emit('closeWindowFeedback');
    },
    photoDownload: function (){

      let photoBlock = document.querySelector('.photo__img');

      this.file.fileImage = this.$refs.file.files[0];

      let reader = new FileReader();

      reader.addEventListener("load", function(){
        this.showPreview = true;
        this.photoPreview = reader.result;
        photoBlock.classList.add('photo__img-activ');
      }.bind(this), false);

      if ( this.file ) {
        if ( /\.(jpe?g|png|gif)$/i.test( this.file.fileImage.name ) ) {
          reader.readAsDataURL( this.file.fileImage );
        }
      }
      // console.log(e.target.files[0]);
    },
    sendForm: function (){
      if (this.$v.$invalid) {
        this.$v.file.$touch();
      }
    }
  },
  validations: {
    file: {
      name: { required },
      surname: { required },
      text: { required },
      address: { required }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/window.scss'
</style>

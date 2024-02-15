<template>
  <section class="window">
    <div class="window__wrapper message">
      <div class="window__title message__title">
        <div class="window__close message__close" @click="closeMessage">
          <div class="window__plus"></div>
        </div>
      </div>
      <div class="message__content px-2 py-3">
        <span class="message__text">{{ $store.getters.GET_TEXT }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModalWindow',
  props: {
  },
  data(){
    return{
    }
  },
  methods: {
    closeMessage: function () {
      this.$store.commit('CHANGE_LED', false);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/window.scss';

.message{
  height: 260px;

  &__title{
    height: 20%;
  }
  &__close{
    margin-left: 98%;
  }
  &__content{
    height: 70%;
    display: flex;
  }
  &__text{
    margin: auto;
    font-size: 1.2rem;
  }
}
@media (max-width: 1250px){
  .message{
    height: 250px;
  }
}
  @media (max-width: 967px){
    .message{
      height: 240px;
    }
  }
  @media (max-width: 667px){
    .message{
      height: 230px;
    }
  }
  @media (max-width: 467px){
  .message{
      height: 220px;
    }
  }
  @media (max-width: 365px){
  .message{
      height: 190px;
    }
  }
</style>

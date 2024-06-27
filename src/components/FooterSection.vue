<template>
  <section class="footer">
    <div class="footer__wrapper">
      <div class="footer__text">
        <p>автор: Sergey Def</p>
      </div>
      <div class="footer__link">
        <a href="#upward">
          <img src="@/assets/icon/arrow_top.svg" alt="#">
        </a>
     </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterSection',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
  .footer{
    @include blockMain(90%, 60px);
    position: relative;

    &__wrapper{
      width: 100%;
      height: 100%;
      display: flex;
    }

    &__text{
      width: 93%;
      height: 100%;
      display: flex;
    }

    &__text>p{
      margin: auto 8%;
    }

    &__link{
      width: 7%;
      background-color: #151515;
    }

    &__link>a{
      width: 100%;
      height: 100%;
      display: flex;
    }

    &__link>a>svg{
      width: 80%;
      height: 80%;
      margin: auto;
    }

	}

  @media (max-width: 967px){
    .footer{
      height: 0.8%;
        
      &__text{
        width: 90%;
      }

      &__text>p{
        margin: auto 8%;
      }

      &__link{
        width: 10%;
      }
    }
  }

   @media (max-width: 600px){
    .footer{
      width: 100%;
    }
  }
  
  @media (max-width: 667px){
    .footer{

      &__text{
        width: 85%;
        height: 100%;
      }

      &__link{
        width: 15%;
      }

    }
  }
</style>

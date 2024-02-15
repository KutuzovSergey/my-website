<template>
    <div class="substrate" >
        <span class="substrate__text">{{text}}</span>
    </div>
</template>

<script>

export default {
    name: 'HeaderDecorative',
    props: {
        text:{
           type: String,
           require: true,
        }
  },
}
</script>

<style scoped lang="scss">
    @import '@/scss/_mixins.scss';

    .substrate{
        @include substrate(90%, auto);

        &__text{
            color: #2c3e50;
            @include substrateText(4rem, 900, 0.1);
        }
    }

    @media (max-width: 1280px){
        .substrate{

            &__text{
                font-size: 3.5rem;
            }
        }
    }

    @media (max-width: 967px){
        .substrate{
            width: 70%;
            left: 80px;

            &__text{
                font-size: 2.5rem;
            }
        }
    }

    @media (max-width: 667px){
        .substrate{
            top: 5px;

            &__text{
                font-size: 1.9rem;
            }
        }
    }

    @media (max-width: 470px){
        .substrate{

            &__text{
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: 390px){
        .substrate{

            &__text{
                font-size: 1.2rem;
            }
        }
    }
</style>
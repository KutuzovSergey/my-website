<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

html{
  height: 100%;
}
body{
  height: 100%;
  color: #ffffff;
}
ul{
  margin-left: 0;
  padding-left: 0;
}
li{
  list-style: none;
  display: inline-block;
}
a{
  text-decoration: none;
}
input:focus{
  outline:none;
}
textarea:focus{
  outline:none;
}
button:focus{
  outline: none;
}
.btn:focus{
  box-shadow: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f1f3a9;
  width: 100%;
  min-height: 100%;
  display: flex;
  background-color: #000000;
}
@media (max-width: 360px){
  p{
    font-size: 0.8rem;
  }
}

.articles{
  width: 100%;
  height: auto;

  &__text>p{
    font-size: 1.1rem;
  }

  &__illustration{
    width: 370px;
    height: 200px;
    margin: 20px;
    float: right;
    background-size: cover;
    box-shadow: 1px 1px 15px 11px rgba(0,0,0,0.29);
    -webkit-box-shadow:1px 1px 15px 11px rgba(0,0,0,0.29);
    -moz-box-shadow:1px 1px 15px 11px rgba(0,0,0,0.29);
  }

  &__illustration-svgFirst{
    background-image: url(assets/articles/svg/news_php.jpg);
  }
  &__illustration-website{
    background-image: url(assets/articles/website/news_sait.jpg);
  }
  &__illustration-website_2{
    background-image: url(assets/articles/website/news_sait_2.png);
  }
  &__subtitle{
    width: 100%;
  }
  &__subtitle>h6{
    font-size: 2rem;
    font-weight: 700;
  }
  &__title{
    width: 100%;
    height: 50px;
    display: flex;
  }

  &__title>h3{
    margin: auto;
    font-size: 2rem;
    font-weight: 700;
  }

  &__title>h5{
    margin: auto 0;
    font-size: 1.4rem;
    font-weight: 650;
  }

  &__title>h6{
    margin: auto 0;
    font-size: 1.4rem;
    font-weight: 650;
  }

  &__list>li{
    list-style: disc;
    display: block;
    font-size: 1.1rem;
  }

  &__heading{
    width: 100%;
  }

  &__heading>h3{
    font-size: 1.5rem;
    font-weight: 600;
  }
  &__subheading{
    width: 100%;
    display: flex;
    text-align: center;
    height: 60px;
  }

  &__subheading>h5{
    margin: auto;
    font-size: 1.2rem;
    font-weight: 800;
  }

  &__cod{
    width: 100%;
    padding: 15px;
    background-color: #eae6ca;
    resize: none;
  }

  &__cod_svg{
    height: 190px;
  }

  &__show_result{
    width: 100%;
    height: 50px;
    margin: 40px;
  }

  &__show_result>button{
    @include buttonMain( 20%, 100%, 1rem);
  }

  &__example{
    width: 100%;
    height: auto;
  }

  .example{

    &__blockSVG{
      width: 100%;
      height: auto;
      margin: 26px 0;
    }

    &__blockSVG>svg{
      width: 290px;
      height: 290px;
      margin: auto;
      display: block;
    }
  }
  .example__object{
    width: 100%;
  }
  .cod{
    padding: 20px;
    margin: 10px 0;
    /*overflow: auto;*/
    background-color: #2F302B;
    border: 1px solid #2196F3;
    
    &__symbol{
      @include cod(#ffffff, 700, 1.1rem);
    }
    &__tag{
      @include cod(#57BA14, 800, 1.1rem);
    }
    &__atribute{
      @include cod(#DC971F, 600, 1.1rem);
    }
    &__atribute_value{
      @include cod(#E6DB74, 500, 1.1rem);
    }
    &__CSSselector{
      @include cod(#EB2355, 600, 1.1rem);
    }
    &__CSSproperty{
      @include cod(#1CC9BB, 700, 1.1rem);
    }
    &__CSSvalue{
      @include cod(#8381D1, 500, 1.1rem);
    }
    &__indent-1{
      margin-left: 40px;
    }
    &__indent-2{
      margin-left: 80px;
    }
  }
  .example__css{
    background-image: url(assets/articles/svg/example_svg.svg);
    background-size: cover;
    width: 140px;
    height: 140px;
    margin: auto;
    border: 3px solid #26A59E;
  }
  .fil0 {fill:#3E3E3E}
  .svgAnimation{
    cursor: pointer;
  }
  #fil_0:hover{
    fill: #57BA14;
  }
  #fil_1:hover{
    fill: #AB46BC;
  }
  #fil_2:hover{
    fill: #3F51B5;
  }
  #fil_3:hover{
    fill: #EE534F;
  }
  #fil_4:hover{
    fill: #FCC02C;
  }
  #fil_5:hover{
    fill: #2196F3;
  }
}
@media (max-width: 960px){
  .articles{

    .articles__text>p{
      font-size: 0.8rem;
    }
    .articles__title>h3{
      font-size: 1rem;
    }
    .articles__title>h5{
      font-size: 1rem;
    }
    .articles__title>h6{
      font-size: 1rem;
    }
    .articles__list>li{
      font-size: 0.8rem;
    }
    .articles__heading>h3{
      font-size: 1.2rem;
    }
    .articles__show_result{
      margin: 40px 0;
    }
    .articles__show_result>button{
      margin: auto;
      width: 50%;
    }
    .cod{
      padding: 20px;
      margin: 10px 0;
      background-color: #2F302B;
      border: 1px solid #2196F3;
      
      &__symbol{
        @include cod(#ffffff, 700, 1.1rem);
      }
      &__tag{
        @include cod(#57BA14, 800, 1.1rem);
      }
      &__atribute{
        @include cod(#DC971F, 600, 1.1rem);
      }
      &__atribute_value{
        @include cod(#E6DB74, 500, 1.1rem);
      }
      &__CSSselector{
        @include cod(#EB2355, 600, 1.1rem);
      }
      &__CSSproperty{
        @include cod(#1CC9BB, 700, 1.1rem);
      }
      &__CSSvalue{
        @include cod(#8381D1, 500, 1.1rem);
      }
      &__indent-1{
        margin-left: 40px;
      }
      &__indent-2{
        margin-left: 80px;
      }
    }
    .example__css{
      background-image: url(assets/articles/svg/example_svg.svg);
      background-size: cover;
      width: 140px;
      height: 140px;
      margin: auto;
      border: 3px solid #26A59E;
    }
  }
}
@media (max-width: 660px){
    .articles{

    .articles__illustration{
      width: 300px;
      height: 160px;
      margin: 20px auto;
      float: none;
    }

  }
}
@media (max-width: 460px){
  .articles{

    .articles__text>p{
      font-size: 0.8rem;
    }

    .articles__illustration{
      width: 260px;
      height: 140px;
      margin: 15px auto;
    }

    .articles__title>h3{
      font-size: 1rem;
    }
    .articles__title>h5{
      font-size: 1rem;
    }
    .articles__title>h6{
      font-size: 1rem;
    }
    .articles__list>li{
      font-size: 0.8rem;
    }
    .articles__heading>h3{
      font-size: 1.2rem;
    }
    .articles__show_result{
      margin: 40px 0;
    }
    .articles__show_result>button{
      width: 100%;
    }
    .cod{
      
      &__symbol{
        font-size: 0.9rem;
      }
      &__tag{
        font-size: 0.9rem;
      }
      &__atribute{
        font-size: 0.9rem;
      }
      &__atribute_value{
        font-size: 0.9rem;
      }
      &__CSSselector{
        font-size: 0.9rem;
      }
      &__CSSproperty{
        font-size: 0.9rem;
      }
      &__CSSvalue{
        font-size: 0.9rem;
      }
      &__indent-1{
        margin-left: 20px;
      }
      &__indent-2{
        margin-left: 40px;
      }
    }
  }
}
</style>

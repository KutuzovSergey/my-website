<template>
  <header class="header" id="main">
    <a name="upward" class="myLink"></a>
    <div class="header__logo">
      <img src="@/assets/logo4.png" />
    </div>
    <nav class="menu">
      <ul class="menu__wrapper">
        <li
          class="menu__item"
          v-for="menuList in menuHeaderLists"
          v-bind:id="menuList.id"
          :key="menuList.id"
        >
          <button
            v-bind:id="menuList.href"
            @click="followLink"
            type="button"
            class="btn menu__btn"
          >
            {{ menuList.title }}
          </button>
        </li>
      </ul>
    </nav>
    <nav class="menu__adantiv" v-if="showMenuAdantiv">
      <transition>
        <ul class="menu__wrapper">
          <li
            class="menu__item"
            v-for="adantivMenuList in adantivMenuLists"
            :key="adantivMenuList.id"
          >
            <a v-bind:href="adantivMenuList.href" @click="followLink"
              ><span>{{ adantivMenuList.title }}</span></a
            >
          </li>
        </ul>
      </transition>
    </nav>
    <div class="menu__block">
      <div class="sandwich" id="sandwich">
        <transition>
          <div
            class="sandwich__block"
            v-if="!showMenuSandwich"
            @click="showMenuList"
            key="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            class="sandwich__clear"
            v-else
            @click="hideMenuList"
            key="clear"
          ></div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
// import ErrorForm from '@/components/ErrorForm.vue'

export default {
  name: "LateralFace",
  // components: {
  //   ErrorForm
  // },
  props: {
    menuHeaderLists: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      adantivMenuLists: [
        { id: 1, title: "Главная", href: "#main" },
        { id: 2, title: "Обо мне", href: "#aboutMe" },
        { id: 3, title: "Навыки", href: "#skills" },
        { id: 5, title: "Портфолио", href: "#portfolio" },
        { id: 9, title: "Обратная связь", href: "#feedback" },
      ],
      showMenuAdantiv: false,
      showMenuSandwich: false,
    };
  },
  methods: {
    showMenuList: function() {
      this.showMenuAdantiv = true;
      this.showMenuSandwich = true;
    },
    hideMenuList: function() {
      this.showMenuAdantiv = false;
      this.showMenuSandwich = false;
    },
    followLink: function(event) {
      let link = event.target;
      let id = link.getAttribute("id");
      this.$router.push({ name: "Home", hash: id });
      this.showMenuAdantiv = false;
      this.showMenuSandwich = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style.scss";
@import "@/scss/_mixins.scss";

.header {
  @include blockMain(100%, 70px);
  margin-bottom: 40px;
  justify-content: flex-end;
  z-index: 9;

  &__logo {
    width: 60px;
    height: 60px;
    margin: auto 50px;
  }

  &__logo > img {
    width: 60px;
    height: 60px;
  }
}

.menu {
  display: flex;
  width: 83%;
  height: 100%;

  &__wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  &__item {
    width: 16%;
    height: 100%;
    margin: auto;
    cursor: pointer;
  }

  &__item:hover {
    background-color: #000000;
    transform: scale(1.1);
  }

  &__item > a {
    width: 100%;
    height: 100%;
    display: flex;
    text-decoration: none;
  }

  &__item > a > span {
    margin: auto;
    color: #ffffff;
    font-size: 1rem;
  }

  &__btn {
    width: 100%;
    height: 100%;
    color: #ffffff;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    text-transform: uppercase;
  }
}
.menu__block {
  display: flex;
  justify-content: space-evenly;
  width: 12%;
}
.menu__adantiv {
  display: none;
}
.sandwich {
  display: none;
}

@media (max-width: 1280px) {
  .menu {
    &__item {
      width: 18%;
    }

    &__btn {
      font-size: 0.9rem;
    }
  }
}

@media (max-width: 1024px) {
  .header {
    justify-content: space-between;
    position: relative;
  }

  .menu {
    display: none;

    &__wrapper {
      flex-direction: column;
      padding-top: 40px;
    }

    &__block {
      display: flex;
      justify-content: space-evenly;
      width: auto;
      position: absolute;
      right: 20px;
      top: 10px;
    }

    &__adantiv {
      display: block;
      z-index: 9999999999999;
      background-color: #000;
      width: 100%;
      position: fixed;
      height: auto;
      top: 10%;
      right: 0;
      box-shadow: 0px 0px 10px 5px #3f51b5;
      -webkit-box-shadow: 0px 0px 10px 5px #3f51b5;
      -moz-box-shadow: 0px 0px 10px 5px #3f51b5;
    }

    &__item {
      width: 100%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
      padding-top: 10px;
      border-bottom: 1px solid #fff;
    }
    &__item > a {
      margin: auto;
      width: 100%;
      color: #2c3e50;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
    }
    &__item:hover {
      background-color: #151515;
    }
  }
  .sandwich {
    width: 50px;
    height: 50px;
    display: flex;
    cursor: pointer;
    z-index: 99999999999999;

    &__block {
      width: 30px;
      height: 30px;
      margin: auto;
      display: flex;
      opacity: 0.5;
      flex-direction: column;
      justify-content: space-evenly;
    }

    &__block > span {
      width: 90%;
      height: 4px;
      margin: auto 0;
      background-color: #e7e88e;
    }

    &__block:hover {
      opacity: 0.9;
    }
  }
}

@media (max-width: 440px) {
  .menu {
    &__block {
      right: 10px;
      top: 10px;
    }
  }
}

@media (max-width: 360px) {
  .menu {
    &__block {
      right: 8px;
      top: 8px;
    }
  }
}
</style>

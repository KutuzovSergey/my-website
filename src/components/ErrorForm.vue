<template>
  <div class="error p-2">
    <div class="error__text m-auto">
      <span>{{ errorText }}</span>
    </div>
    <div class="error__triangle"></div>
  </div>
</template>

<script>
export default {
  name: 'ErrorForm',
  props: {
    errorText: {
      type: String,
    } 
  },
  data(){
    return{}
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/style.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

.error{
  display: flex;
  position: absolute;
  background-color: #EE534F;
}
.error__text{
  color: #fff;
}
.error__triangle{
  position: absolute;
}
@media (max-width: 2600px){
}
@media (max-width: 2100px){
}
@media (max-width: 1967px){
}
@media (max-width: 1740px){
}
@media (max-width: 1140px){
}
@media (max-width: 967px){

}
@media (max-width: 667px){
}
@media (max-width: 540px){
}
@media (max-width: 410px){
}
</style>

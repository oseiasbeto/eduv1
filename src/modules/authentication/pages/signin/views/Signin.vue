<template>
  <div class="signin">
    <div class="signin-wrapper">
      <SigninForm/>
      <Slider/>
    </div>
  </div>
</template>

<script>
import SigninForm from '../../../components/theme/SigninForm.vue';
import Slider from '../../../components/theme/Slider.vue';

export default {
    name: "Signin",
    components: { SigninForm, Slider }
};
</script>

<style scoped>

.signin-wrapper {
  min-height: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
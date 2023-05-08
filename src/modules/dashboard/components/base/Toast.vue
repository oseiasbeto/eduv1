<template>
  <transition name="fade">
    <div class="toast" :class="{show: home.toast.show}">{{ home.toast.text }}</div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Toast",
  computed: {
    ...mapState(["home"]),
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 102px;
  left: 45%;
  transform: translate(0%,154%);
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  color: rgb(255, 255, 255);
  background: var(--color-primary);
  font-weight: 600;
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 9px 12px;
  z-index: 111111111;
  transition: all .3s;
}
.show {
  visibility: visible;
  opacity: 1;
  transform: none;
  transition: all .3s;
}
</style>

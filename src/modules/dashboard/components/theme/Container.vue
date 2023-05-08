<template>
  <main class="container">
    <slot> </slot>
  </main>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: "Container",
  computed: {
    ...mapState(["home"])
  },
  mounted() {
  }
};
</script>

<style scoped>
.container {
  position: relative;
  margin-left: 220px;
  height: calc(100vh - 80px);
  width: calc(100% - 220px);
  box-sizing: border-box;
  z-index: 111;
  color: var(--gray-lighter);
  overflow-x: hidden;
}
.pd {
   padding: 0 30px;
}
.disableScroll {
  overflow: hidden;
}
@media (max-width: 414px) {
  .container {
    margin-left: 0px;
    width: 100%;
  }
} 
</style>
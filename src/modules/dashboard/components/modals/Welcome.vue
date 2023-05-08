<template>
  <div class="shade" :class="{show: home.modal.name == 'subcription_successfully'}">
    <div class="modal" :class="{show: home.modal.name == 'subcription_successfully'}" @click.stop>
      <div class="body">

      <div class="top"> 
      <div class="title">
      <h1> Olá {{users.User.firstname != undefined ? users.User.firstname : '' }}, Bem-vindo(a) a nossa plataforma!  </h1>
      </div>
      <p style="font-size: 15px; color: #ffffffb3"> 
      Parabéns! Você foi subscrito ao plano 
      <span class="type">Betovibes 3 mêses premium.</span> Confere os benefícios abaixo:
      </p>
      </div>


      <ul class="benefits">
      <li class="benefit">
      <span class="icon">
      <svg data-v-dae640ce="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#198d4c" data-toggle="tooltip" data-original-title="Verified Page" style="margin-right: 8px;"><path data-v-dae640ce="" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
      </span>
      <span class="text">Criação de playlists <strong>(Ilimitada)</strong></span>
      </li>
      <li class="benefit">
      <span class="icon">
      <svg data-v-dae640ce="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#198d4c" data-toggle="tooltip" data-original-title="Verified Page" style="margin-right: 8px;"><path data-v-dae640ce="" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
      </span>
      <span class="text">Modo Aleatório</span>
      </li>
      <li class="benefit">
      <span class="icon">
      <svg data-v-dae640ce="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#198d4c" data-toggle="tooltip" data-original-title="Verified Page" style="margin-right: 8px;"><path data-v-dae640ce="" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
      </span>
      <span class="text">Único laço</span>
      </li>
      <li class="benefit">
      <span class="icon">
      <svg data-v-dae640ce="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#198d4c" data-toggle="tooltip" data-original-title="Verified Page" style="margin-right: 8px;"><path data-v-dae640ce="" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
      </span>
      <span class="text">Stream <strong>(Ilimitado)</strong></span>
      </li>
      <li class="benefit">
      <span class="icon">
      <svg data-v-dae640ce="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#198d4c" data-toggle="tooltip" data-original-title="Verified Page" style="margin-right: 8px;"><path data-v-dae640ce="" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
      </span>
      <span class="text">Qualidade de áudio <strong>(Máxima)</strong></span>
      </li>
      <li class="benefit">
      <span class="icon">
      <svg data-v-dae640ce="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#198d4c" data-toggle="tooltip" data-original-title="Verified Page" style="margin-right: 8px;"><path data-v-dae640ce="" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path></svg>
      </span>
      <span class="text">Qualidade de imagem <strong>(Máxima)</strong></span>
      </li>
      </ul>
      <div class="buttom">
      <button @click="close" class="">Continuar</button>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex"

export default {
  name: "Welcome",
  components: {

  },
  computed: {
      ...mapState(["users", "home"])
  },
  watch: {

  },
  data() {
    return {
     
    };
  },
  props: {
    id: String,
  },

  methods: {
    close() {
      this.$store.dispatch("actionSetModal", {
        name: "",
        option: 1,
      })
         this.$store.dispatch("actionSetDiasbleScroll", false)
    }
    
  },
};
</script>
<style scoped>
.shade {
  display: flex;
  background: rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 1000111;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.modal {
  position: relative;
  width: 400px !important;
  min-height: 120px;
  max-height: 600px;
  background-color: #202020;
  font-size: 14px;
  z-index: 1110 !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: #fff;
  border-radius: 8px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all .3s;
  transform: scale(0.6);
}
.header {
  padding: 12px 30px;
}
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  padding: 12px 16px;
  border-top: 1px solid rgb(0 0 0 / 12%);
}
.body {
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
}
.modal-title {
  font-size: 16px;
  font-weight: 600;
}

button {
    padding: 17px 12px;
    font-family: inherit;
    width: 100%;
    border-radius: 4px;
    font-size: 17px;
    font-weight: 600;
    background: #198d4c;
    color: #fff;
    border-radius: 100px;
}

button:active {
    transition-duration: 0.2s;
    transform: scale(0.95);
}
button.sended {
    pointer-events: all;
    cursor: pointer;
    background: var(--color-primary);
    color: #fff;

}
.form-check-input {
    width: 18px;
    height: 1.4em;
    background: #5a5a5a;
}
.field {
  margin-bottom: 8px;
}
.field a {
    color: var(--color-primary)
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}
.show {
    visibility: visible;
    opacity: 1;
    transform: none;
}
h1 {
    font-family: "Nunito";
    font-weight: 800;
    line-height: 1.3;
}
.title {
    margin-bottom: 17px;
}
.type {
    color: #f1ebff;
}
.benefits {
    list-style: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px 0;
}
.benefit {
    display: flex;
    width: 100%;
    padding: 9px;
    font-size: 14px;
    border-bottom: 1px solid rgba(255 255 255 / 10%);
    box-sizing: border-box;
}
</style>
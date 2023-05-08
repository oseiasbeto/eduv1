<template>
  <div class="shade" :class="{show: home.modal.name == 'playlist_addTo'}">
    <div class="modal" :class="{show: home.modal.name == 'playlist_addTo'}" @click.stop>
      <div class="header">
      <h4>Selecione a playlist</h4>
      <button @click="close" class="close"> 
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.5 5.5 13 13m-13 0 13-13" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="#fff" fill-rule="evenodd" stroke-linecap="round"></path></svg>
      </button>
      </div>
        <section > 
      <div class="body">
      </div>
      </section>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";
import {mapState} from "vuex"

export default {
  name: "AddToPlaylist",
  components: {
 
  },
  computed: {
    ...mapState(["home", "users"])
  },
  data() {
    return {
      form: {
        title: "",
        isPrivate: false
      },
      loading: false
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
      this.form = {
        title: "",
        isPrivate: false
      }
      this.$store.dispatch("actionSetDiasbleScroll", false)
    },

    async createPlaylist() {
      try {
        if(this.users.token == null) return;

        if(this.form.title == "") {
         this.$refs.title.classList.add("danger")
      } else {
        this.close()
        this.$store.dispatch("actionSetLoadingSmall", true)
        this.$refs.title.classList.remove("danger");
        const res = await api.post("users/playlist/create", {
          title: this.form.title,
          isPrivate: this.form.isPrivate
        })
        this.$store.dispatch("actionSetLoadingSmall", false)
        if(res.status == 201) {
          this.close()
          this.$store.dispatch("actionSetToast", "Playlist criada com sucesso.")
        }
      }
      } catch(err) {
        if(err.status == 400) {
          this.$store.dispatch("actionSetLoadingSmall", false)
        }
        console.log(err.message)
      }
    }  
  }
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
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 1000111;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
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
  transform: translate(0%,-66%);
}
.header {
  border-bottom: 1px solid;
  border-color: rgba(255 255 255 / 4%);
  padding: 12px 30px;
}
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  padding: 12px 16px;
  border-top: 1px solid rgb(0 0 0 / 12%);
}
section {
  height: 100%;
}
.body {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 12px 30px;
}

.modal-title {
  font-size: 16px;
  font-weight: 600;
}

button {
  padding: 12px 12px;
  font-family: inherit;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
     background: rgb(255 255 255 / 14%);
     color: rgb(255 255 255 / 44%);
    pointer-events: none;
    margin-bottom: 12px;
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
.form-control {
  width: calc(100% - 24px);
  flex: 1;
  background-clip: padding-box;
  background-color: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,.3);
  line-height: 1.5;
  padding: 10px 11px;
  border-radius: 4px;
  margin-top: 6px;
  outline: none;
}
.country {
    cursor: pointer;
  background-clip: padding-box;
  background-color: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,.3);
  line-height: 1.5;
  padding: 10px 11px;
  border-radius: 4px;
      border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: none;
  margin-top: 6px;
  outline: none;
}
.forms {
  margin-bottom: 8px;
}
.forms a {
    color: var(--color-primary)
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
}
.tabs {
    display: flex;
    align-items: center;
    height: 38px;
}
.tab {
    position: relative;
    cursor: pointer;
    color: rgba(255, 255, 255, .4);
    font-size: 16px;
    font-weight: 500 !important;
    font-family: Nunito;
    transform-origin: left center;
    transition: all .3s;
}
.tab.active {
    color: #fff;
    font-size: 24px;
    font-family: Nunito;
    transition: all .3s;
}
.tab .border {
    position: absolute;
    width: 20%;
    height: 4px;
    border-radius: 30px;
    background: var(--color-primary)
}
.smal-text {
    font-size: 12px;
    opacity: 0.4;
}
option {
    background: #333;
    color: #fff;
    padding: 8px;
}
.fp {
    cursor: pointer;
    font-size: 13px;
    color: var(--color-primary);
    margin: 12px 0;
    width: 137px;
}
.text-small {
    font-size: 11px;
    padding: 10px 0;
    opacity: .4
}
.danger {
    border-color: var(--danger)
}
.feedback-error {
    display: none;
    font-size: 11px;
    color: var(--danger);
    font-weight: 600;
    padding: 4px 0;
}
.feedback-error.show {
    display: block
}
.show {
    visibility: visible;
    opacity: 1;
    transform: translate(0%,0%);
}
button:disabled {
  pointer-events: none;
}
.close {
      position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    right: 0px;
    top: 0;
    width: 40px;
    height: 40px;
    border-radius: 0px;
    z-index: 111111111;
    pointer-events: auto;
    cursor: pointer;
    background: transparent;
}
h4 {
  font-family: "Nunito";
    font-size: 18px;
    font-weight: 500;
    opacity: 0.6;
}
.isprivate {
  display: flex;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;
  width: 200px;
}

.isprivate span {
    margin-top: 2px;
    margin-left: 8px;
}
.sended {
      float: right;
    pointer-events: all;
    cursor: pointer;
    background: var(--color-primary);
    color: #fff;
    border-radius: 100px;
    height: 44px;
    width: 148px;
}
</style>
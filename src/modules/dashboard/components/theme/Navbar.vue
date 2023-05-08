<template>
  <header class="navbar">
    <div class="left-part">
    <span id="open-sidebar" class="menuicon">
    <span class="menuicon-bread top">
    <span class="crust top"></span>
    </span>
    <span class="menuicon-bread center">
    <span class="crust center"></span>
    </span>
    <span class="menuicon-bread bottom">
    <span class="crust bottom"></span>
    </span>
    </span>
      <div class="logo">
      <img width="140" src="@/assets/images/brand/Ouviaki.png">
      </div>
      <div class="navegator">
      <button class="prev">
      <svg role="img" height="16" width="16" aria-hidden="true" class="Svg-sc-ytk21e-0 lmlFMn IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon" fill="#fff"><path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg>
      </button>
      <button class="next">
      <svg role="img" height="16" width="16" fill="#fff" aria-hidden="true" class="Svg-sc-ytk21e-0 lmlFMn IYDlXmBmmUKHveMzIPCF" viewBox="0 0 16 16" data-encore-id="icon"><path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path></svg>
      </button>
      </div>
    </div>
    <div class="right-part">
      <ul class="options">
        <li class="option row user">
          <div class="avatar"></div>
          <div class="user-info"> 
          <span v-if="users.token == null" style="display: flex;" class="logout">
          <div @click="openModal('signup')" class="onmodal">Inscrever-se</div>
            
            <div class="sept"> / </div>
            <div @click="openModal('login')" class="onmodal">Inicar sessão</div>
          </span>
          <span v-else class="logged">
            <a href="javascript(0)"> {{users.User.username}} </a>
          </span>
          </div>
        </li>
        <li class="option donwload">
          <button class="active">Donwload App</button>
        </li>
        <li class="option auth-mobile">
          <button v-if="users.token == null" @click="openModal('signup')" class="btn-m">Inscrever-se</button>
          <div v-else class="avatar"></div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
//import { api } from "@/api";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  components: {
    
  },
  computed: {
    ...mapState(["users"]),
  },
  created() {
  },
  mounted() {
    const btn = document.querySelector("#open-sidebar")
    const sidebar = document.querySelector(".sidebar");

    btn.addEventListener("click", () => {
      sidebar.classList.toggle("show")
    })
    sidebar.addEventListener("click", () => {
      sidebar.classList.remove("show")
    })
  },
  methods: {
    openModal(type) {
         this.$store.dispatch("actionSetModal", {
           name: "auth",
           tab: type,
           option: 1,
      })
    }
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,.2);
  color: var(--gray-lightest);
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 11111;
}
.auth-mobile {
  visibility: hidden;
}
.navbar .left-part {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
.navbar .navegator {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding-left: 10px;
  margin-left: 220px;
  height: 100%;
}

.btns {
  display: flex;
  flex-direction: row;
  align-items: center;
}
button {
  border-radius: 100px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  width: 140px;
  height: 36px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(240 244 255 / 9%);
  border: 1px solid transparent;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  white-space: nowrap;
}
button.active {
  font-weight: 600;
  background-color: var(--color-primary);
  color: #fff;
}
.options {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  list-style: none;
}
.options .option {
  margin-left: 10px;
  height: 100%;
}

.navegator button {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    border: none;
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 32px;
    justify-content: center;
    position: relative;
    width: 32px;
}
.dg {
  font-weight: bold;
  font-size: 15px;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 100px;
  background: #333;
}
.logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 220px;
    height: 100%;
    background: #0d0d0d;
    display: flex;
    padding: 0 14px;
    align-items: center;
    background-size: auto 31px;
    box-sizing: border-box;
}
.navbar .line {
    z-index: 22;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 1px;
    font-size: 0;
    line-height: 0;
    width: 100%;
    background-color: #000;
    border-bottom: 1px solid #fff;
    opacity: .1;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.user-info {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 13px;
}
.sept {
  padding: 0 8px;
}
.user-info a:hover {
  text-decoration: underline;
}
.prev {
  margin-right: 16px;
}
.onmodal {
  cursor: pointer
}
.donwload {
  visibility: visible;
}
.menuicon {
  position: absolute;
  display: none;
  height: 38px;
  width: 44px;
  z-index: 9902;
}
@media (max-width: 414px) {
  .navbar {
    background: #0d0d0d;
    height: 56px;
  }
 .navegator {
   display: none !important;
 }
 .user {
   display: none !important;
  }
  .donwload {
    visibility: hidden;
  }
 .auth-mobile {
   visibility: visible;
 }
 .btn-m {
    background: transparent;
    border: 1px solid;
    border-color: #fff;
    font-size: 13px;
    width: 107px;
    height: 35px;
 }
 .logo img {
   width: 130px;
   margin-left: 36px;
 }
 .menuicon {
   display: block;
 }
 .menuicon menuicon-bread {
    height: 20px;
    left: 13px;
    pointer-events: none;
    position: absolute;
    transition: transform .1806s cubic-bezier(.04,.04,.12,.96);
    width: 20px;
    z-index: 1;
 }
 .menuicon .menuicon-bread .top {
     top: 19px;
 }
 .menuicon .menuicon-bread .center {
     top: 12px;
 }
 .menuicon .menuicon-bread .bottom {
     bottom: 10px;
 }
 .crust {
    background: #fff;
    border-radius: 1px;
    display: block;
    height: 2px;
    position: absolute;
    transition: transform .1596s cubic-bezier(.52,.16,.52,.84) .1008s;
    width: 20px;
    z-index: 1;
 }
 .crust .top {
    top: 9px;
    transform: translateY(-4px);
 }
 .crust .bottom {
   bottom: 9px;
   transform: translateY(4px);
 }
} 
</style>
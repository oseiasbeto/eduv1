<template>
  <div class="shade" :class="{show: home.modal.name == 'auth'}">
    <div class="modal" :class="{show: home.modal.name == 'auth'}" @click.stop>
      <div class="header">
      <div class="tabs">
      <div v-if="home.modal.tab != 'forgot_password'" @click="setTab('signup')" class="tab" :class="{active: home.modal.tab == 'signup'}">
      <h4>Inscreva-se</h4>
      </div>
      <div v-if="home.modal.tab != 'forgot_password'" style="margin-left: 16px;margin-top: 4px;" @click="setTab('login')" class="tab" :class="{active: home.modal.tab == 'login'}">
      <h4>Iniciar sessão</h4>
      </div>
      <div @click="setTab('login')" v-if="home.modal.tab == 'forgot_password'" style="margin-left: 16px;margin-top: 4px;"  class="tab" :class="{active: home.modal.tab == 'forgot_password'}">
      <h4>Esqueceste a senha?</h4>
      </div>

      <button @click="close" class="close"> 
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5.5 5.5 13 13m-13 0 13-13" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="#fff" fill-rule="evenodd" stroke-linecap="round"></path></svg>
      </button>
      </div>
      </div>
      <section v-show="home.modal.tab == 'signup'"> 
      <div class="body">
        <div class="field">
          <input ref="signupUsername" maxLength="30" v-model="form.username" class="form-control" placeholder="Nome completo" max="50" type="text" />
        </div>
        <div class="field">
         <div class="row">
          <div class="country"> 
          AO +244
          </div>
          <input v-model="form.phone" ref="signupPhone" class="form-control" style="border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;" maxLength="9" placeholder="Número de telefone" max="50" type="tel" />
         </div>
          <p ref="signupFbePhone" class="feedback-error">
          </p>
        </div>
        <div class="field">
          <input ref="signupEmail" v-model="form.email" class="form-control" placeholder="Email" max="50" type="text" />
          <p ref="signupFbeEmail" class="feedback-error">
          </p>
        </div>
        <div class="field">
        <div class="smal-text">Sexo</div>
         <select v-model="form.genre" class="form-control" style="width: 100%;padding: 10px;">
         <option value="M">Masculino</option>
         <option value="F">Femenino</option>
         </select>
        </div>
        <div class="field">
          <input ref="signupAge" v-model="form.age" class="form-control" placeholder="Idade"  type="number" min="0"/>
           <p ref="signupFbeAge" class="feedback-error">
          </p>
        </div>
        <div class="field">
          <input ref="signupPassword" v-model="form.password" class="form-control" placeholder="Palavra-passe" type="password" />
          <p ref="signupFbePassword" class="feedback-error">
          </p>
        </div>

        <div class="buttons">
        <button :disabled="error.show" style="margin-top: 10px;" @click="subscriber()" :class="{sended: form.accept == true}"> Inscrever-se </button>
        </div>

          <div class="field" style="display: flex; align-items: center">
                <input
            
                  type="checkbox"
                  class="form-check-input"
                  v-model="form.accept"
                  checked
                  id="legal"
                />

                <label for="legal" class="legal"
                  >Já fiz a leitura e aceito todos
                  <router-link to="/terms">Termos & Políticas</router-link> 
                  </label>
              </div>
      </div>
      </section>
      <section v-show="home.modal.tab == 'login'"> 
      <div class="body">
        <div class="field">
          <input class="form-control"  v-model="auth.email" placeholder="Email" max="50" type="text" />
        </div>
        <div class="field">
          <input class="form-control" v-model="auth.password" placeholder="Palavra-passe" type="password" />
        </div>
         <div class="buttons">

         <div @click="setTab('forgot_password')" class="fp"> Esqueceste a senha? </div>
        <button :disabled="error.show" @click="login()" class="sended"> Iniciar sessão </button>
        </div>
      </div>
      </section>
      <section v-show="home.modal.tab == 'forgot_password'"> 
      <div class="body">
        <div class="field">
          <input v-model="forgotPassword.email" class="form-control" placeholder="Email" max="50" type="text" />

          <p class="text-small"> 
          Informe o email da sua conta onde vamos enviar o token de confirmação.
          </p>
        </div>
        <div class="field">
          <input  v-model="forgotPassword.newPassword" class="form-control" placeholder="Nova palavra-passe" max="50" type="password" />
           <p class="text-small"> 
          Informe a nova palavra-passe que pretende.
          </p>
        </div>
        <div class="field">
          <input v-model="forgotPassword.confirmPassword" class="form-control" placeholder="Confirmar palavra-passe" type="password" />
            <p class="text-small"> 
          Repete a nova palavra-passe.
          </p>
        </div>
         <div class="buttons">
        <button @click="sendToken()" class="sended"> Enviar token </button>
        </div>
      </div>
      </section>

      <Error :error="error"/>
      <Success :success="success"/>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";
import {mapState} from "vuex"
import Error from "../Error"
import Success from "../Success"


export default {
  name: "Auth",
  components: {
    Error,
    Success
  },
  computed: {
      ...mapState(["home"])
  },
  data() {
    return {
      form: {
        username: "",
        location: {
            country: "Angola"
        },
        phone: "",
        email: "",
        genre: "M",
        age: "",
        password: "",
        accept: true
      },
      auth: {
          email: "",
          password: ""
      },
      forgotPassword: {
          email: "",
          newPasssword: "",
          confirmPassword: ""
      },
      error: {
        show: false,
        text: ""
      },
      success: {
        show: false,
        text: ""
      },
      tab: "signup",
      loading: false,
      newUser: false
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
          username: "",
          location: {
            country: "Angola"
        },
        phone: "",
        email: "",
        genre: "M",
        age: "",
        password: "",
        accept: true
       }
       this.$refs.signupUsername.classList.remove("danger")
       this.$refs.signupEmail.classList.remove("danger")
       this.$refs.signupPhone.classList.remove("danger")
       this.$refs.signupAge.classList.remove("danger")
       this.$refs.signupPassword.classList.remove("danger")

       this.auth = {
          email: "",
          password: ""
      }
      this.$store.dispatch("actionSetDiasbleScroll", false)
    },
    async subscriber() {
        try {
            if(this.form.username == "") {
            this.$refs.signupUsername.classList.add("danger")
        } else {
            this.$refs.signupUsername.classList.remove("danger")
        }
        if(this.form.phone == "") {
            this.$refs.signupPhone.classList.add("danger")
        } else {
            this.$refs.signupPhone.classList.remove("danger")
        }
        if(this.form.email == "") {
            this.$refs.signupEmail.classList.add("danger")
        } else {
            this.$refs.signupEmail.classList.remove("danger")
        }
        if(this.form.age == "") {
            this.$refs.signupAge.classList.add("danger")
        } else {
            this.$refs.signupAge.classList.remove("danger")
        }
        if(this.form.password == "") {
            this.$refs.signupPassword.classList.add("danger")
        } else {
            this.$refs.signupPassword.classList.remove("danger")
        }
        if(
            this.form.username != "" &&
            this.form.phone != "" &&
            this.form.email != "" &&
            this.form.age != "" &&
            this.form.password != "" 
        ) {
          if(Number(this.form.username)) {
            this.$refs.signupUsername.classList.add("danger");
             this.error = {
               show: true,
               text: "Informe um nome verdadeiro."
            }
            setTimeout(() => {
            this.error = {
            show: false,
            text: ""
            }}, 3000);
          } else if(!this.form.email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            this.$refs.signupEmail.classList.add("danger");
             this.error = {
               show: true,
               text: "Formato inválido."
            }
            setTimeout(() => {
            this.error = {
            show: false,
            text: ""
            }}, 3000);
          } else if(!this.form.phone.replace(/[^0-9]/g, "")) {
            this.$refs.signupPhone.classList.add("danger");
             this.error = {
               show: true,
               text: "Formato inválido."
            }
            setTimeout(() => {
            this.error = {
            show: false,
            text: ""
            }}, 3000);
          } else if(this.form.age < 18) {
            this.$refs.signupAge.classList.add("danger");
             this.error = {
               show: true,
               text: "Você deve ter pelomenos 18 anos."
            }
            setTimeout(() => {
            this.error = {
            show: false,
            text: ""
            }}, 3000);
          } else if(this.form.password.length < 6) {
             this.$refs.signupPassword.classList.add("danger");
             this.error = {
               show: true,
               text: "A palavra-passe deve ter no mínimo 6 caracteres."
            }
            setTimeout(() => {
            this.error = {
            show: false,
            text: ""
            }}, 3000);
          } else {
            this.error.show = false
            this.$store.dispatch("actionSetLoadingSmall", true)
            const res = await api.post("users/register", this.form);
            this.$store.dispatch("actionSetLoadingSmall", false)
            if(res.status == 201) {
               this.$store.dispatch("actionSetModal", {
                 name: "auth",
                 tab: "login",
                 option: 1,
                })
                
              this.newUser = true;

                this.form = {
                  username: "",
                  location: {
                    country: "Angola"
                    },
                    phone: "",
                    email: "",
                    genre: "M",
                    age: "",
                    password: "",
                    accept: true
                    },
                    this.success = {
                show: true,
                text: "Inscrito com sucesso. Inicie a tua sessão"
              }

              setTimeout(() => {
                this.success.show = false
              }, 3000);
            } 
          }
  
        }
        } catch (err) {
            if(err.status == 400) {
              this.$store.dispatch("actionSetLoadingSmall", false)
              if(err.data.message == 'Este email já existe.') {
                 this.$refs.signupEmail.classList.add("danger");
                 this.error = {
                   show: true,
                   text: "Este email já existe."
               }
               setTimeout(() => {
                 this.error = {
                   show: false,
                   text: ""
                   }}, 3000);
              }
            }
        }
    },
    async login() {
        try {
          this.$store.dispatch("actionSetLoadingSmall", true)
            const res = await api.post("users/enter", this.auth)
            this.$store.dispatch("actionSetLoadingSmall", false)
            if(res.status == 200) {
                api.headers.common['Authorization'] = "Bearer " + res.data.data.token
                localStorage.setItem("access_token", res.data.data.token);
                this.$store.dispatch("actionSetToken", res.data.data.token);
                this.$store.dispatch("actionSetUser", res.data.data.user);

            
                if(this.newUser) {
                   setTimeout(() => {
                      this.$store.dispatch("actionSetModal", {
                        name: "subcription_successfully",
                        option: 1,
                      })
                   }, 8000);
                }
                this.close()
                this.$store.dispatch("actionSetToast", "Logado com sucesso.")

            }
        } catch (err) {

          if(err.status == 400) {
            this.$store.dispatch("actionSetLoadingSmall", false)
             this.error = {
                show: true,
                text: "Dados inválidos."
            }
            setTimeout(() => {
                this.error.show = false
            }, 2000);
          }
          console.log(err.message)
        }
       
    },
    async sendToken() {
     try {
        const res = await api.post("users/forgot_password", {
        email: this.forgotPassword.email,
        passwordReset: this.forgotPassword.newPassword
      })

      if(res.status == 200) {
        alert("Sucesso")
      }
     } catch (err) {
       if(err.status == 400) {
         alert("Erro"+ err.message)
       }
     }
    },
    setTab(tab) {
      if(tab == 'signup') {
       this.$store.dispatch("actionSetModal", {
           name: "auth",
           tab: "signup",
           option: 1,
       })
       this.form = {
          username: "",
          location: {
            country: "Angola"
        },
        phone: "",
        email: "",
        genre: "M",
        age: "",
        password: "",
        accept: true
       }
       this.$refs.signupUsername.classList.remove("danger")
       this.$refs.signupEmail.classList.remove("danger")
       this.$refs.signupPhone.classList.remove("danger")
       this.$refs.signupAge.classList.remove("danger")
       this.$refs.signupPassword.classList.remove("danger")
      }
      if(tab == 'login') {
        this.$store.dispatch("actionSetModal", {
           name: "auth",
           tab: "login",
           option: 1,
       })
        this.auth = {
          email: "",
          password: ""
        }
      }
      if(tab == 'forgot_password') {
        this.$store.dispatch("actionSetModal", {
           name: "auth",
           tab: "forgot_password",
           option: 1,
       })
        this.forgotPassword = {
          email: "",
          newPasssword: "",
          confirmPassword: ""
      }
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
  height: 600px;
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
  transition: all .3s;
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
  flex-direction: column;
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
.legal {
    font-size: 12px;
    margin-top: 4px;
    margin-left: 8px;
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
    transition: all .3s;
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
</style>
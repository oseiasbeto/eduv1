<template>
  <div class="sidebar">
  <div class="shade"></div>
  <div class="search-wrapper"> 
  <div @click="goToSearch" class="search">
    <div class="icon">
    <svg
        style="margin-right: 8px"
        class="svg-inline--fa fa-search fa-w-16 fontawesome-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="15"
        width="24"
      >
        <path
          fill="#a1a1a6"
          d="M508.5 468.9 387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
        ></path>
      </svg>
  </div>
  <input 
  type="text" 
  placeholder="Pesquisar"
  > 
  </div>
  </div>
  <section> 
  <h2> Explorar </h2>

  <router-link to="/">
  <span class="icon">
  <svg role="img" height="20px" width="20px" fill="currentColor" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL home-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>
   </span>
  <span class="text">Principal </span>
  </router-link>

  <router-link to="/hot">
  <span class="icon">    <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18V5l12-2v13" stroke="var(--color-text);" />
              <circle cx="6" cy="18" r="3" stroke="var(--color-text);" />
              <circle cx="18" cy="16" r="3" stroke="var(--color-text);" />
            </svg> </span>
  <span class="text">Quentes </span>
  </router-link>

  <router-link to="/news">
  <span class="icon"> 
   <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 18V5l12-2v13" stroke="var(--color-text);" />
              <circle cx="6" cy="18" r="3" stroke="var(--color-text);" />
              <circle cx="18" cy="16" r="3" stroke="var(--color-text);" />
            </svg>
 </span>
  <span class="text">Novas </span>
  </router-link>

  <router-link to="/artists">
  <span class="icon">  <svg
              width="20px"
              height="20px"
              viewBox="0 0 1195 1195"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M661.333 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.06 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                fill="currentColor"
              />
            </svg> </span>
  <span class="text">Artístas</span>
  </router-link>

  <router-link to="/albums">
  <span class="icon"> 
  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1z"
                fill="currentColor"
              />
            </svg>
   </span>
  <span class="text">Álbuns</span>
  </router-link>

  <router-link to="/playlists">
  <span class="icon"> 
     <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8C21 10.897 20.103 10 19 10zM5 20v-8h14l.002 8H5zM5 6H19V8H5zM7 2H17V4H7z"
                fill="currentColor"
              />
            </svg>
  </span>
  <span class="text">Playlists</span>
  </router-link>
  </section>

   <section> 
  <h2> Bibilioteca </h2>

  <button @click="createPlaylist()">
  <span class="icon" style="padding: 2px;
    background: rgba(255,255,255, 0.8);
    border-radius: 4px;"> 
  <svg role="img" height="12" width="12" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
  </span>
  <span class="text">Nova playlist </span>
  </button>

  <router-link to="/favorites">
  <span class="icon"> 
   <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
   </span>
  <span class="text">Favoritos </span>
  </router-link>
  </section>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  components: {
    
  },
  computed: {
    ...mapState(["users"])
  },
  name: "Sidebar",
  methods: {
    createPlaylist() {

      if(this.users.token != null) {
        this.$store.dispatch("actionSetModal", {
           name: "playlist_add",
           tab: "",
           option: 1,
        })
      } else {
        alert("Faca primeiro o login.")
      }
    },
    goToSearch() {
      if(this.$route.path == '/search') return;
      this.$router.push('/search')
    }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 62px;
  left: 0;
  width: 220px;
  color: var(--gray-lightest);
  box-sizing: border-box;
  padding: 16px;
  height: 100vh;
  background-color: #0d0d0d;
}
.shade {
   display: flex;
  background: rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 220px;
  right: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100vw !important;
  height: 100vh;
  z-index: 0;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.sidebar section h2 {
    height: 38px;
    line-height: 38px;
    font-size: 14px;
}
.sidebar a, button {
  position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgba(255,255,255,.5);
    line-height: 38px;
    background-size: 16px auto;
    background-position: 24px 50%;
    width: 100%;
    height: 38px;
    padding-left: 12px;
    font-size: 14px;
    border-left: 6px solid transparent;
    border-radius: 4px;
}
.sidebar a:hover {
  color: #fff;
  font-weight: 500;
}
.router-link-exact-active {
  color: var(--color-primary) !important;
  font-weight: 500;
}
.icon {  
  display: flex;
  align-items: center;
  margin-right: 12px
}
h2 {
  color: #fff;
  font-family: "Nunito"
}
.search-wrapper {
  margin-bottom: 12px
}
.search {
  cursor: pointer;
  position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    height: 30px;
    padding: 5px 14px 6px 38px;
    border: 1px solid;
    border-color: hsla(0,0%,100%,.15);
    border-radius: 4px;
    font-size: 12px;
    line-height: 18px;
    color: #121212;
    background: #ffffff12;
    background-size: 24px auto;
    caret-color: #00ddea;
}
.search input {
    pointer-events: none;
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
    height: 32px;
    font-size: 13px !important;
    color: #f5f5f7;
}
.search input::placeholder {
    color: #a1a1a6;
}
.search .icon {
    position: absolute;
     left: 7px;
    top: 7px;
}

@media (max-width: 414px) {
 .sidebar {
   opacity: 0;
   visibility: hidden;
 }
 .shade {
    opacity: 1;
    visibility: visible;
 }
 .sidebar.show {
   opacity: 1;
   visibility: visible;
   z-index: 1111;
   top: 56px;
 }
} 
</style>
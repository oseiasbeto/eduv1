<template>
  <div id="app" >
    <div class="ouviaki-app">
      <Navbar/>
      <div class="ouviaki-hr">
        <Sidebar />
        <Container>
          <router-view />
        </Container>
      </div>
      <player/>
    </div>

    <!--poups-->
    <Loading/>
    <Toast/>

    <!-- Modals -->
    <Auth/>
    <Welcome/>
    <NewPlaylist/>
    <AddToPlaylist/>
  </div>
</template>
<script>
import {api} from "@/api"
import { mapState } from "vuex";
import Container from "./modules/dashboard/components/theme/Container.vue";
import Navbar from "./modules/dashboard/components/theme/Navbar.vue";
import Sidebar from "./modules/dashboard/components/theme/Sidebar.vue";
import Player from "./modules/dashboard/components/player/views/Player.vue";
import Auth from "./modules/dashboard/components/modals/Auth";
import Loading from "./modules/dashboard/components/Loading";
import Welcome from "./modules/dashboard/components/modals/Welcome";
import NewPlaylist from "./modules/dashboard/components/modals/NewPlaylist";
import Toast from "./modules/dashboard/components/base/Toast";
import AddToPlaylist from "./modules/dashboard/components/modals/AddToPlaylist";

export default {
  components: {  
    Navbar, 
    Sidebar, 
    Container, 
    Player, 
    Loading,
    Auth,
    NewPlaylist,
    Welcome,
    Toast,
    AddToPlaylist
    },
  name: "App",
  data() {
    return {
      starting: true,
    };
  },
  watch: {
    "users.token"() {
      if(this.users.token != null) {
        this.getCurrentUser()
      }
    }
  },
  created() {
    if(this.users.token != null) {
      this.getCurrentUser()
    }
  },
  computed: {
    ...mapState(["users", "home"]),
  },

  methods: {
    async getCurrentUser() {
      const res = await api.get("users/current_user")

      if(res.status == 200) {
        this.$store.dispatch("actionSetUser", res.data.current_user);
      }
    }
  },
};
</script>

<style scoped>
#app {
  width: 100vw;
  transition: all 0.4s;
}
.ouviaki-app {
  box-sizing: border-box;
}
</style>
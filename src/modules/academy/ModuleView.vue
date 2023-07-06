<template>
  <div class="academy-modules">
    <div class="academy">
      <Navbar />
      <Sidebar />

      <main class="epanel-main">
        <Dashboard v-if="this.$route.path == '/epanel'" />
        <Marketplace v-if="this.$route.path == '/epanel/marketplace'" />
        <Balance v-if="this.$route.path == '/epanel/balance'" />
        <MyCourses v-if="this.$route.path == '/epanel/mycourses'" />
      </main>

    </div>

  </div>
</template>
<script>
import { api } from "@/api"
import { mapState } from "vuex";

//Pages
import Sidebar from "./components/theme/Sidebar.vue";
import Navbar from "./components/theme/Navbar.vue";
import Dashboard from "./pages/dashboard/views/Dashboard.vue";
import Marketplace from "./pages/marketplace/views/Marketplace.vue";
import Balance from "./pages/balance/views/Balance.vue"
import MyCourses from "./pages/mycourses/views/MyCourses.vue"

//Components

export default {
  components: {
    Sidebar,
    Navbar,
    Dashboard,
    Marketplace,
    Balance,
    MyCourses
  },
  name: "ModuleView",
  data() {
    return {
      starting: true,
    };
  },
  watch: {
    "users.token"() {
      if (this.users.token != null) {
        this.getCurrentUser()
      }
    }
  },
  created() {
    if (this.users.token != null) {
      this.getCurrentUser()
    }
  },
  computed: {
    ...mapState(["users", "home"]),
  },

  methods: {
    async getCurrentUser() {
      const res = await api.get("users/current_user")

      if (res.status == 200) {
        this.$store.dispatch("actionSetUser", res.data.current_user);
      }
    }
  },
};
</script>
  
<style scoped>
.page {
  box-sizing: border-box;
}

.dv {
  display: flex;
  flex-direction: column;
}

.epanel-main {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 230px);
  margin-left: 230px;
  margin-top: 60px;
  box-sizing: border-box;
  padding: 30px;
}
</style>
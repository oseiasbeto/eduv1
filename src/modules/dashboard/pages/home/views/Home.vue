<template>
  <div class="Home">
  <div class="mt"></div>
  <ListBoxRow 
  v-if="users.track.newTracks.length"
  title='Novas músicas' 
  type="track" 
  :isItem="false" 
  :list="users.track.newTracks"
  />
  <ListBoxRow 
  v-if="home.newsAlbum.length"
  title='Novos álbuns' 
  type="album" 
  :isItem="false" 
  :list="home.newsAlbum"
  />

  <ListBoxRow 
  v-if="users.categories.afrobeats.length"
  title='Afrobeats' 
  type="album" 
  :isItem="false" 
  :list="users.categories.afrobeats"
  />
  <ListBoxRow 
  v-if="users.categories.hiphop.length"
  title='Hip Hop & Rap' 
  type="album" 
  :isItem="false" 
  :list="users.categories.hiphop"
  />
  <ListBoxRow 
  v-if="users.categories.semba.length"
  title='Semba' 
  type="album" 
  :isItem="false" 
  :list="users.categories.semba"
  />
  <ListBoxRow 
  v-if="users.categories.kuduro.length"
  title='Kuduro' 
  type="album" 
  :isItem="false" 
  :list="users.categories.kuduro"
  />
  <ListBoxRow 
  v-if="users.categories.kizomba.length"
  title="Kizomba"
  type="album" 
  :isItem="false" 
  :list="users.categories.kizomba"
  />
  <ListBoxRow 
  v-if="users.categories.gospel.length"
  title="Gospel"
  type="album" 
  :isItem="false" 
  :list="users.categories.gospel"
  />
  <ListBoxRow 
  v-if="users.categories.pop.length"
  title="Pop"
  type="album" 
  :isItem="false" 
  :list="users.categories.pop"
  />
  <ListBoxRow 
  v-if="users.categories.reggae.length"
  title="Reggae"
  type="album" 
  :isItem="false" 
  :list="users.categories.reggae"
  />
  <ListBoxRow 
  v-if="users.categories.jaz.length"
  title="Jaz"
  type="album" 
  :isItem="false" 
  :list="users.categories.jaz"
  />

  </div>
</template>

<script>
import {mapState} from "vuex"
import {api} from "@/api"
import ListBoxRow from "../../../components/ListBoxRow"

export default {
  name: "Home",
  components: {
    ListBoxRow
  },
  computed: {
    ...mapState(["home", "users"])
  },
  data() {
    return {
      Afrobeats: [],
      hipHop: [],
    }
  },
  created() {
    this.getNewsAlbums();
    this.getAfrobeats();
    this.getSemba();
    this.getKizomba();
    this.getKuduro();
    this.getAfrohouse();
    this.getHipHop();
    this.getGospel();
    this.getPop();
    this.getElectronica();
    this.getClassica();
    this.getReggae();
    this.getJaz();
    this.getRock();
    this.NewTracks()
  },
  methods: {
    async getNewsAlbums() {
      const res = await api.get("users/albums/new")
      const albums = res.data.albumNews
      this.$store.dispatch("actionSetNewsAlbum", albums)
    },
    async getAfrobeats () {
      const res = await api.post("users/ta/category", {
        category: "Afrobeats"
      })
      this.users.categories.afrobeats = res.data.result
    },
    async getSemba () {
      const res = await api.post("users/ta/category", {
        category: "Semba"
      })
      this.users.categories.semba = res.data.result
    },
    async getKizomba () {
      const res = await api.post("users/ta/category", {
        category: "Kizomba"
      })
      this.users.categories.kizomba = res.data.result
    },
    async getKuduro () {
      const res = await api.post("users/ta/category", {
        category: "Kuduro"
      })
      this.users.categories.kuduro = res.data.result
    },
    async getAfrohouse () {
      const res = await api.post("users/ta/category", {
        category: "Afrohouse"
      })
      this.users.categories.afrohouse = res.data.result
    },
    async getHipHop() {
      const res = await api.post("users/ta/category", {
        category: "Trap"
      })
      this.users.categories.hiphop = res.data.result
    },
    async getGospel () {
      const res = await api.post("users/ta/category", {
        category: "Gospel"
      })
      this.users.categories.gospel = res.data.result
    },
    async getPop () {
      const res = await api.post("users/ta/category", {
        category: "Pop"
      })
      this.users.categories.pop = res.data.result
    },
    async getElectronica () {
      const res = await api.post("users/ta/category", {
        category: "Electrónica"
      })
      this.users.categories.electronica = res.data.result
    },
    async getClassica () {
      const res = await api.post("users/ta/category", {
        category: "Clássica"
      })
      this.users.categories.classica = res.data.result
    },
    async getReggae () {
      const res = await api.post("users/ta/category", {
        category: "Reggae"
      })
      this.users.categories.reggae = res.data.result
    },
    async getJaz () {
      const res = await api.post("users/ta/category", {
        category: "Jaz"
      })
      this.users.categories.jaz = res.data.result
    },
    async getRock () {
      const res = await api.post("users/ta/category", {
        category: "Rock"
      })
      this.users.categories.Rock = res.data.result
    },
    async NewTracks () {
      const res = await api.get("users/tracks/new")
      this.users.track.newTracks = res.data.trackNews
    }
  }
};
</script>

<style scoped>
</style>
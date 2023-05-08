<template>
  <div class="favorite">
   <div class="mt"></div>
    <div class="navbar">
    <ul class="items">
    <li class="item">
    <button @click="setTab('tracks')" :class="{active: tab == 'tracks'}">Músicas</button>
    </li>
    <li class="item">
    <button @click="setTab('artists')" :class="{active: tab == 'artists'}">Artístas</button>
    </li>
    <li class="item">
    <button @click="setTab('albums')" :class="{active: tab == 'albums'}">Álbuns</button>
    </li>
    <li  class="item">
    <button @click="setTab('playlists')" :class="{active: tab == 'playlists'}">Playlists</button>
    </li>
    </ul>
    </div>

    <section v-show="tab == 'tracks'">
    {{library}}
    </section>
    <section v-show="tab == 'artists'">
    {{library}}
    </section>
    <section v-show="tab == 'albums'">
     albums
    </section>
    <section v-show="tab == 'playlists'">
     Playlists
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {api} from "@/api"

export default {
  name: "Favorite",
  data() {
    return {
      tab: "tracks"
    }
  },
  computed: {
    ...mapState(["library"])
  },
  created() {
    this.getFavorites()
  },
  methods: {
    setTab(tab) {
      this.tab = tab
    },
    async getFavorites() {
      const res = await api.get("users/library/favorites");
      const favorites = res.favorites
      this.$store.dispatch("actionSetFavorites", {
        tracks: favorites.tracks,
        artists: favorites.artists,
        albums: favorites.albums,
        playlists: favorites.playlists
      });
    }
  }
};
</script>

<style scoped>
.favorite {
  padding: 0 30px;
}
.items {
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,.1);
  list-style: none
}
.item button {
    position: relative;
    height: 38px;
    margin-right: 40px;
    font-size: 16px;
    color: #fff;
    opacity: .5;
    line-height: 38px;
    transition: all .3s;
}
.item button.active {
  font-size: 20px;
  opacity: 1;
}
button:after {
    content: " ";
    position: absolute;
    bottom: -1px;
    left: 50%;
    width: 20px;
    height: 4px;
    margin-left: -10px;
    background: var(--color-primary);
    border-radius: 2px;
    visibility: hidden;
    -webkit-transition: all .3s;
    transition: all .3s;
    -webkit-transform: scale(0);
    transform: scale(0);
}
button.active:after {
    visibility: visible;
    -webkit-transform: scale(1);
    transform: scale(1);
}
</style>

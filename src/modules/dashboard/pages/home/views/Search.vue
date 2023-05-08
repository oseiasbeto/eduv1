<template>
  <div class="search">
   <div class="mt"></div>
   <div class="search-wrapper">
   <SearchAutoComplete/>
   </div>
   <section v-if="home.searchKeywords.length >= 2">
   <div v-if="home.searchGlobal.isNoneResults == false" class="search-result">
   <div class="navbar">
   <ul class="items">
   <li @click="setTab('all')" class="item">
   <button :class="{active: tab == 'all'}">Todos</button>
   </li>
   <li @click="setTab('artists')" class="item">
   <button :class="{active: tab == 'artists'}">Artístas</button>
   </li>
   <li @click="setTab('tracks')" class="item">
   <button :class="{active: tab == 'tracks'}">Músicas</button>
   </li>
   <li @click="setTab('albums')" class="item">
   <button :class="{active: tab == 'albums'}">Álbums</button>
   </li>
   <li @click="setTab('playlists')" class="item">
   <button :class="{active: tab == 'playlists'}" >Playlists</button>
   </li>
   </ul>
   </div>
   <section v-show="tab == 'all'" id="all">
   {{home.searchGlobal}}
   </section>
   <section v-show="tab == 'artists'" id="artists">
   <div v-if="home.searchGlobal.artists.length" class="results">
   {{home.searchGlobal.artists}}
   </div>
   <div v-else class="no-results">
   <p>Não encontramos nenhum resultado.</p>
   </div>
   </section>
   <section v-show="tab == 'tracks'" id="tracks">
    <div v-if="home.searchGlobal.tracks.length" class="results">
   {{home.searchGlobal.tracks}}
   </div>
   <div v-else class="no-results">
   <p>Não encontramos nenhum resultado.</p>
   </div>
   </section>
   <section v-show="tab == 'albums'" id="albums">
    <div v-if="home.searchGlobal.albums.length" class="results">
     <ListBoxColunm 
     title='' 
     type="album" 
     :isItem="true" 
     :list="home.searchGlobal.albums"
     />
   </div>
   <div v-else class="no-results">
   <p>Não encontramos nenhum resultado.</p>
   </div>
   </section>
   <section v-show="tab == 'playlists'" id="playlists">
     <div v-if="home.searchGlobal.playlists.length" class="results">
   {{home.searchGlobal.playlists}}
   </div>
   <div v-else class="no-results">
   <p>Não encontramos nenhum resultado.</p>
   </div>
   </section>
   </div>
   <div v-else>
   <h3>Não encontramos nenhum resultado</h3>
   </div>
   </section>
   <section v-else>
   <div class="navbar">
   <ul class="items">
   <li @click="setTab('all')" class="item">
   <button :class="{active: tab2 == 'recommend'}">Recomendados</button>
   </li>
   <li @click="setTab('all')" class="item">
   <button :class="{active: tab2 == 'newArtists'}">Novos Artístas</button>
   </li>
   </ul>
   </div>
   </section>

  </div>
</template>

<script>
import {mapState} from "vuex"
import SearchAutoComplete from "../../../components/theme/SearchAutoComplete"
import ListBoxColunm from "../../../components/ListBoxColunm"

export default {
  name: "Search",
  components: {
    SearchAutoComplete,
    ListBoxColunm
  },
  computed: {
      ...mapState(["home"])
  },
  data() {
    return {
      tab: "all",
      tab2: "recommend"
    }
  },
  watch: {
  },
  created() {
    this.$store.dispatch("actionSetSearchKeywords", "")
  },
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  }
};
</script>

<style scoped>
.search {
  padding: 0 30px;
  box-sizing: border-box;
}
.search-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
}
.navbar .items {
  display: flex;
  width: 100%;
  align-items: center;
  list-style: none;
  margin-bottom: 18px;
}
.navbar .items .item button {
    position: relative;
    height: 32px;
    padding: 0 22px;
    margin-right: 18px;
    font-size: 14px;
    color: #fff;
    opacity: .9;
    line-height: 33px;
    transition: all .3s;
    border-radius: 6px;
    background: #363636;
}
.navbar .items .item button.active {
  background: #fff;
  color: #000;
  opacity: 1;
}
@media (max-width: 414px) {
  .search {
    position: relative;
    left: 0px;
    width: 100%;
    height: 42px;
  }
  .icon {
    top: 12px;
    background: #000
  }
}
</style>
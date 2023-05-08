<template>
  <div class="search">
  <div class="icon">
    <svg
        style="margin-right: 8px"
        class="svg-inline--fa fa-search fa-w-16 fontawesome-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="18"
        width="24"
      >
        <path
          fill="#121212"
          d="M508.5 468.9 387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
        ></path>
      </svg>
  </div>
  <input 
  v-model="keyword"
  ref="searchInput"
  @input="setNetwork($event.target.value)"
  type="text" 
  placeholder="Pesquisar"
  > 
  <div v-show="keyword.length" @click="resetSearch()" class="icon right">
  <svg role="img" height="24" width="20" aria-hidden="true" class="Svg-sc-ytk21e-0 gQUQL mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 24 24" data-encore-id="icon"><path d="M3.293 3.293a1 1 0 0 1 1.414 0L12 10.586l7.293-7.293a1 1 0 1 1 1.414 1.414L13.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L10.586 12 3.293 4.707a1 1 0 0 1 0-1.414z"></path></svg>
  </div>
  </div>
</template>

<script>
import {api} from "@/api"
export default {
  name: "SearchAutoComplete",
  data() {
    return {
      search: {},
      labelKey: "title",
      mutableOptions: [],
      keyword: "",
      selectOption: "",
      originalOptions: [],
      options: [],
      search_stories: JSON.parse(localStorage.getItem("search_stories")) || []
    }
  },
  watch: {
    options() {
      this.cloneOptions();
    },
  },
  computed: {
    
  },
  created() {
    if (this.options.length) {
      this.cloneOptions();
    }
  },
  mounted() {
    this.$refs.searchInput.focus();
  },
  methods: {
      async setNetwork(vl) {
      this.$store.dispatch("actionSetSearchKeywords", vl)
      if (vl.length >= 2) {
        if (!this.originalOptions.length) {
          const res = await api.get(`users/search?name=${vl.toLowerCase()}`);

          if (res.status == 200) {
            if(res.data.message == "Não encontramos nenhum resultado concernente a busca requisitada.") {
                   this.$store.dispatch("actionSetSearchGlobal", {
          artists: [],
          tracks: [],
          albums: [],
          playlists: [],
          isNoneResults: true
        })
            } else {
               this.$store.dispatch("actionSetSearchGlobal", {
                 artists: res.data.data.artists,
                 tracks: res.data.data.tracks,
                 albums: res.data.data.albums,
                 playlists: res.data.data.playlists,
                 isNoneResults: false
               })
            }
          }
        } else {
          if (this.selectOption == "") {
            this.searchInternaly();
          }
        }
      } else {
        this.options = [];
        this.selectOption = "";
        this.$store.dispatch("actionSetSearchGlobal", {
          artists: [],
          tracks: [],
          albums: [],
          playlists: [],
          isNoneResults: true
        })
      }
    },
    select(value) {
      this.keyword = value.title;
      this.selectOption = this.keyword;
      this.$router.push(`/chat/search/${this.keyword}`);
      this.close();
    },
    searchInternaly() {
      const search = this.keyword;
      this.mutableOptions = this.originalOptions.filter(
        (o) => o.title.toLowerCase().search(search.toLowerCase()) >= 0
      );
      this.highLightOptions();
    },
    highLightOptions() {
      const search = this.keyword;
      const query = new RegExp(search, "i");

      this.mutableOptions.forEach((o) => {
        this.$set(
          o,
          `${this.labelKey}_highlighted`,
          o[this.labelKey].replace(
            query,
            '<strong style="color: rgb(233, 233, 233) !important" class="font-buld">$&</strong>'
          )
        );
      });
    },
    onClear() {
      this.keyword = "";
      this.selectOption = "";
      this.options = [];
    },
    cloneOptions() {
      this.originalOptions = JSON.parse(JSON.stringify(this.options));
      this.mutableOptions = JSON.parse(JSON.stringify(this.options));
      this.highLightOptions();
    },
    resetSearch() {
      this.keyword = ""
    }
  }
};
</script>

<style scoped>
.search {
    position: absolute;
    display: flex;
    left: 20%;
    width: 500px;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    height: 46px;
    padding: 5px 14px 6px 38px;
    border-radius: 6px;
    font-size: 12px;
    line-height: 18px;
    color: #111;
    background: #fff;
    background-size: 24px auto;
    caret-color: #00ddea;
}
.search input {
  margin-left: 17px;
    outline: none;
    border: none;
    background: transparent;
    width: 100%;
    height: 50px;
    font-size: 15px !important;
    color: #000;
}
.search input::placeholder {
    color: #121212;
}
.icon {
    position: absolute;
    left: 16px;
    top: 14px;
}
.right {
  cursor: pointer;
  position: absolute;
  left: 92%;
  top: 14px;
}
</style>
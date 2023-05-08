<template>
  <div class="artist">
    <div class="gaussianWrap"> 
     <div class="gaussian" :style="`background-image: url(${artists.artist.data.avatar});`"> 
    
    </div>
    <i> </i>
    </div>

    <article class="artist-wrapper"> 
    <div class="artist clearfix"> 
    <section class="cover"> 
    <img :src="artists.artist.data.avatar">
    </section>

    <section class="text"> 
    <h2>{{artists.artist.data.singername}}</h2>

    <div class="description"> 
    <p > {{artists.artist.data.description}} </p>
    </div>

    <span class="country">
    País: {{artists.artist.data.location.country}}
    </span>

    <div class="actions"> 
    <button>
    <span class="icon">
    <svg data-v-6528e354="" role="img" height="24" width="24" fill="#fff" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path data-v-6528e354="" d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
    </span>
     Ouvir tudo
    </button>
    <button> 
    <span class="icon">
    <svg data-v-6528e354="" role="img" height="24" fill="currentColor" width="24" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path data-v-6528e354="" d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>
    </span>
    100.1k
    </button>
    </div>
    </section>


    </div>
    </article>

    
    <article class="container">
      <div class="navbar">
    <ul class="items">
    <li class="item">
    <button @click="setTab('tracks')" :class="{active: tab == 'tracks'}">Músicas</button>
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
    <TrackList type="Artísta" :tracks="artists.artist.tracks"/>
    </section>
    <section v-show="tab == 'albums'">
    {{artists.artist.albums}}
    </section>
    </article>


  <!--
    <article class="container">
    <h1> 
    Comentários </h1>

  
    <span>({{artists.artist.comments.length}}) </span>
    </h1>
    <div class="row"> 
    <input v-model="comment" rows="6" placeholder="Escreve o seu comentário">
    
    <button class="btn">Comentar </button>
    </div>

    <div v-if="artists.album.comments" class="comments">
    <Comment v-for="comment in artists.album.comments" :comment="comment" :key="comment.id" />
    </div>
    </article>
    -->
    

  </div>
</template>

<script>
import TrackList from "../../../components/TrackList"
//import ListBoxColunm from "../../../components/ListBoxColunm"

import {mapState} from "vuex"
import {api} from "@/api"

export default {
  name: "Album",
  components: {
    TrackList,
    //ListBoxColunm
  },
  data() {
    return {
      tab: "tracks",
      comment: ""
    }
  },
  computed: {
    ...mapState(["artists"])
  },
  created() {
    this.getArtist()
  },
  methods: {
    async getArtist() {
      const slug = this.$route.params.slug
      const res = await api.get(`users/artist/${slug}`)
      const artist = res.data.artist
      console.log(res)
      this.$store.dispatch("actionSetArtist", artist)
    },
    setTab(tab) {
      this.tab = tab
    }
  }
};
</script>

<style scoped>
.gaussianWrap {
    position: absolute;
    top: 0;
    left: 0;
    height: 500px;
    width: 100%;
    overflow: hidden;
}
.gaussian {
    position: absolute;
    left: -20%;
    top: -20%;
    width: 140%;
    height: 140%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    -webkit-filter: brightness(.7) blur(50px);
    -moz-filter: brightness(.7) blur(50px);
    filter: brightness(.7) blur(50px);
    background-color: #666;
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=50,MakeShadow=false) \
}
.gaussianWrap svg {
    position: absolute;
    left: -20%;
    top: -20%;
    width: 140%;
    height: 140%
}

.gaussianWrap i {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-linear-gradient(top,rgba(255,255,255,0),rgba(18,18,18,.4),rgba(18,18,18,1));
    background-image: -moz-linear-gradient(top,rgba(255,255,255,0),rgba(18,18,18,.4),rgba(18,18,18,1));
    background-image: -o-linear-gradient(top,rgba(255,255,255,0),rgba(18,18,18,.4),rgba(18,18,18,1));
    background-image: linear-gradient(to bottom,rgba(255,255,255,0),rgba(18,18,18,.4),rgba(18,18,18,1));
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="#999999",endColorstr="#121212")
}
.artist-wrapper {
  z-index: 2;
    position: relative;
    padding-top: calc(62px + 30px);
}
.clearfix {
  padding-left: 30px;
  padding-right: 30px;
  zoom: 1
}
.cover {
    position: relative;
    float: left;
    display: inline;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: #666;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    margin-right: 24px
}
.cover img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.gradient {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 36px;
    width: 100%;
    background-image: -webkit-linear-gradient(top,rgba(255,255,255,0),rgba(64,64,64,.2),rgba(0,0,0,.6));
    background-image: -moz-linear-gradient(top,rgba(255,255,255,0),rgba(64,64,64,.2),rgba(0,0,0,.6));
    background-image: -o-linear-gradient(top,rgba(255,255,255,0),rgba(64,64,64,.2),rgba(0,0,0,.6));
    background-image: linear-gradient(to bottom,rgba(255,255,255,0),rgba(64,64,64,.2),rgba(0,0,0,.6));
}
.listen {
    position: absolute;
    left: 9px;
    bottom: 9px;
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    padding-left: 16px;
    height: 12px;
    background-size: 11px auto;
}
.text {
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
}
.text h2 {
    padding-right: 28px;
    max-width: 860px;
    padding-top: 0;
    display: inline-block;
    height: 64px;
    font-size: 26px;
    line-height: 32px;
    vertical-align: middle;
    max-height: 64px;
    overflow: hidden;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-word;
    word-wrap: break-word;
    font-weight: 700;
}
.description {
    max-width: 860px;
    padding-right: 28px;
    margin-top: 6px;
    font-size: 16px;
    line-height: 18px;
    height: 36px;
    max-width: 60%;
    overflow: hidden;
    white-space: normal;
    color: rgba(255,255,255,.7);
    vertical-align: baseline;
}
.description p {
  display: inline;
  line-height: 18px;
}
.country {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 27px;
    color: rgba(255,255,255,.7);
    overflow: hidden;
}
.country .avatar {
    width: 24px;
    height: 24px;
    background-size: 100% auto;
    object-fit: cover;
    border-radius: 100%;
    margin-right: 12px;
}
.actions button {
  position: relative;
    width: 122px;
    height: 38px;
    padding-left: 32px;
    margin-right: 12px;
    background-color: rgba(255,255,255,.09);
    background-repeat: no-repeat;
    background-position: 22px 50%;
    background-size: 20px auto;
    border-radius: 4px;
    font-size: 14px;
    line-height: 38px;
    color: rgba(255,255,255,.8);
}
.actions button.active {
  background: var(--secondary);
  color: #fff;
  font-weight: 600;
}
.container {
    z-index: 2;
    position: relative;
    display: block;
    padding: 36px 8% 0 0;
    padding-left: 30px;
    color: #fff;
    text-align: left;
}
h1 {
    line-height: 60px;
    font-size: 24px;
    color: #fff;
    letter-spacing: 1px;
}
h1 span {
    font-size: 14px;
    line-height: 60px;
    opacity: .6;
    font-weight: 500
}
input {
  padding: 10px 12px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #222222;
    outline: none;
    color: #999;
    font-size: 14px;
    line-height: 18px;
    vertical-align: middle;
    border: 1px solid #333333;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    overflow-y: auto;
    font-family: inherit
}
.row {
  display: flex
}
.btn {
  float: right;
  padding: 10px 16px;
  text-align: center;
  margin-left: 19px;
  font-weight: 600;
  border-radius: 4px;
  background: var(--color-primary);
  color: #fff
}
.icon {
  position: ABSOLUTE;
  left: 11px;
  top: 15%;
}
.navbar .items {
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,.1);
  list-style: none;
  margin-bottom: 18px;
}
.navbar .items .item button {
    position: relative;
    height: 38px;
    margin-right: 40px;
    font-size: 16px;
    color: #fff;
    opacity: .5;
    line-height: 38px;
    transition: all .3s;
}
.navbar .items .item button.active {
  font-size: 20px;
  opacity: 1;
}
.navbar .items .item button:after {
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
.navbar .items .item button.active:after {
    visibility: visible;
    -webkit-transform: scale(1);
    transform: scale(1);
}
</style>
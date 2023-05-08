<template>
  <div class="playlist">
    <div class="gaussianWrap"> 
     <div class="gaussian" :style="`background-image: url(${albums.album.cover});`"> 
    
    </div>
    <i> </i>
    </div>

    <article class="playlist-wrapper"> 
    <div class="playlist clearfix"> 
    <section class="cover"> 
    <img :src="albums.album.cover">

    <span class="gradient"></span>
    </section>

    <section class="text"> 
    <h2>{{albums.album.title}}</h2>

    <div class="description"> 
    <p > {{albums.album.description}} </p>
    </div>

    <a class="created-by" href="javascript(0)">
    <img :src="albums.album.artist.avatar" class="avatar">
    <strong> {{albums.album.artist.singername}} </strong>
    </a>

    <div class="actions"> 
    <button @click="playAll()" class="active">
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
      <TrackList type="Artísta" :tracks="albums.album.tracks"/>
    </article>

    <div style="margin-top: 38px"></div>
    <ListBoxRow 
    v-if="albums.albums.length"
    title='Álbuns semelhantes' 
    type="album" 
    :isItem="false" 
    :list="albums.albums"
    />

    <article class="container">
    <h1> 
    Comentários 
    <span>({{albums.album.comments.length}}) </span>
    </h1>
    <div class="row"> 
    <input v-model="comment" rows="6" placeholder="Escreve o seu comentário">
    
    <button class="btn">Comentar </button>
    </div>

    <div v-if="albums.album.comments" class="comments">
    <Comment v-for="comment in albums.album.comments" :comment="comment" :key="comment.id" />
    </div>
    </article>

  </div>
</template>

<script>
import TrackList from "../../../components/TrackList"
import Comment from "../../../components/Comment"
import ListBoxRow from "../../../components/ListBoxRow"


import {mapState} from "vuex"
import {api} from "@/api"

export default {
  name: "Album",
  components: {
    TrackList,
    Comment,
    ListBoxRow
  },
  data() {
    return {
      comment: ""
    }
  },
  computed: {
    ...mapState(["albums", "users", "player"])
  },
  created() {
    this.getAlbum()
  },
  methods: {
    async getAlbum() {
      const id = this.$route.params.id
      const res = await api.get(`users/album/${id}`)
      const album = res.data.album
      const albums = res.data.albums
      console.log(this.albums)
      this.$store.dispatch("actionSetAlbum", album)
      this.$store.dispatch("actionSetAlbums", albums)
    },
    playAll() {
      if(this.users.token == null) {
          this.$store.dispatch("actionSetModal", {
           name: "auth",
           tab: 'signup',
           option: 1,
          })
        return ;
      } 
      const tracks = this.albums.album.tracks
      const track = tracks[0]

      this.$store.dispatch("actionSetPlayingTrack", {
        track,
        index: 0,
        playing: true,
        select: this.$store.state.player.playingTrack.select,
        isPane: true,
      });
      const track_source = {
        track,
        index: 0,
        playing: false,
        select: this.$store.state.player.playingTrack.select,
        isPane: false,
      };
      this.$store.dispatch("actionSetQueue", tracks);
      localStorage.setItem("queue", JSON.stringify(tracks));
      localStorage.setItem("playing_track", JSON.stringify(track_source));
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
.playlist-wrapper {
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
    border-radius: 4px;
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
.created-by {
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
.created-by .avatar {
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
@media (max-width: 414px) {
  .cover {
      width: 150px;
      height: 150px;
  }
  .text h2 {
    max-width: 150px;
    font-size: 22px;
  }
  .description {
    max-width: 150px;
  }
  .description p {
    font-size: 14px;
  }
}
</style>
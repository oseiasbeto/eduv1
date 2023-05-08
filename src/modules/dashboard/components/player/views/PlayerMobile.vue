<template>
  <div v-show="player.playingTrack.track != undefined" class="player-mobile">
  <div ref="audio_rali" class="audio-rali"> 
  <input @change="seek($event)" type="range"/>
   <div class="total"> 
   <div class="buffered"> </div>
   <div ref="timeline" class="current" style="width: 0%"> </div>
   <button ref="dot" class="dot" style="left: 0%"> </button>
   </div>
  </div>
    <div class="audio-info">
    <div class="cover default"> 
    <cite class="img" :style="`background-image: url(${player.playingTrack.track.cover})`"></cite>
    </div>
    <div class="text"> 
    <router-link class="track-name" :to="`/track/${player.playingTrack.track.id}`">
    {{player.playingTrack.track != undefined ? player.playingTrack.track.title : "" }}
    </router-link>
    <router-link class="singer-name" to="/user/oos">
    {{player.playingTrack.track != undefined ? player.playingTrack.track.artist.singername : ""}}
    </router-link>
    </div>
    </div>

    <div class="audio-control">

<button @click="togglePlay()" class="play"> 
<svg v-if="!isPlaying" role="img" height="16" width="16" fill="#000" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>

<svg v-else role="img" fill="#000" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>

 </button>
 </div>
    <div class="line"> </div>
  </div>
</template>

<script>
//import { api } from "@/api";

import { mapState } from "vuex";

export default {
  name: "PlayerMobile",
  components: {
    
  },
  computed: {
      ...mapState(["player", "users"])
  },
  data() {
    return {
      audio: new Audio(),
      lyricsShow: false,
      isPlaying: false,
      isMuted: false,
      duration: "",
      correntTime: "",
      timeline: "",
      likedtrack: false,
    }
  },
  watch: {
    "$store.state.player.playerbar.show"() {
      this.toTrack();
    },
    "$store.state.player.playingTrack.track"() {
      const i = this.player.playingTrack.index;
      this.loadTrack(i);
      this.playTrack();
    },
    "$store.state.player.playerbar.album"() {
      if (this.player.show == false) return;
      if (this.player.show == undefined) {
        this.pauseTrack();
      }
      const i = this.$store.state.player.playerbar.correntIndex;
      this.loadTrack(i);
      this.playTrack();
    },

  },
  created() {
    if(this.player.playingTrack.playing != undefined) {
        this.loadTrack()
    }
  },
  mounted() {
    this.toTrack();
  },
  methods: {
    toTrack() {
        if(this.player.playingTrack.track == undefined) return;
                
        window.addEventListener("keydown", (e) => {
         if (e.code === "MediaPlayPause") {
          this.isPlaying = !this.isPlaying
        }

        /*
         if (!this.users.disableCodeSpace && e.code === "Space") {
          e.preventDefault();
          this.togglePlay()
          return;
        } */
        if (e.code === "ArrowLeft") {
          this.prev()
          return;
        }
        if (e.code === "ArrowRight") {
          this.next()
          return;
        }
        });
      this.audio.addEventListener("timeupdate", (e) => {
        if (this.player.show == false || this.player.show == false) return;
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        let progressWidth = (currentTime / duration) * 100;

        this.$refs.timeline.style.width = `${
          progressWidth == undefined ? 0 : progressWidth
        }%`;
        this.$refs.dot.style.left = `${
          progressWidth == undefined ? 0 : progressWidth
        }%`;
        this.timeline = `${progressWidth == undefined ? 0 : progressWidth}%`;
        //update playing track current time

        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);

        if (currentSec < 10) {
          currentSec = `0${currentSec}`;
        }
        this.correntTime = `${currentMin}:${currentSec}`;
      });
      this.audio.addEventListener("ended", () => {
        const select = this.$store.state.player.playerbar.select;

        switch (select) {
          case "no_repeat":
            this.pauseTrack();
            this.audio.currentTime = 0;
            break;
          case "repeat":
            //this.VerifyPlay();
            this.next();
            break;
          case "repeat_once":
            this.audio.currentTime = 0;
            //this.VerifyPlay();
            this.loadTrack(this.$store.state.player.playerbar.correntIndex);
            this.playTrack();
            break;
          case "shuffle":
            var lastIndex = this.player.album.tracks.length - 1;
            var landIndex = 0;
            landIndex = Math.round(Math.random() * lastIndex);

            if (lastIndex != 0) {
              while (
                landIndex == this.player.album.tracks[this.player.correntIndex]
              ) {
                landIndex = Math.round(Math.random() * lastIndex);
              }
            }
            this.$store.state.player.playerbar.correntIndex = landIndex;
            //this.VerifyPlay();
            this.loadTrack(this.$store.state.player.playerbar.correntIndex);
            this.playTrack();
            break;
        }
        const i =
          this.$store.state.player.playerbar.correntIndex > 0
            ? this.$store.state.player.playerbar.correntIndex - 1
            : this.$store.state.player.playerbar.correntIndex;

        let cs;

        if (this.player.album != undefined) {
          cs = this.player.album.tracks[i]._id;
        } else {
          cs = this.$store.state.player.playerbar.track._id;
        }
        this.setRecentPlayers(cs);
        this.setPlay(cs);
        this.setArtist(cs);
      });
      this.audio.addEventListener("loadeddata", () => {
        let audioDuration = this.audio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);

        if (totalSec < 10) {
          totalSec = `0${totalSec}`;
        }
        this.duration = `${totalMin}:${totalSec}`;
      });
    },
    goToAlbum() {
      if (this.$store.state.player.playerbar.album.slug != null) {
        const album = this.$store.state.player.playerbar.album;
        const route = `/album/${album.artist.url}/${album.slug}`;
        if (route != this.$route.path) {
          this.$router.push(route);
        } else return;
      } else {
        const i = this.$store.state.player.playerbar.correntIndex;
        const album = this.$store.state.player.playerbar.album.tracks[i].album;
        const route = `/album/${album.artist.url}/${album.slug}`;
        if (route != this.$route.path) {
          this.$router.push(route);
        } else return;
      }
    },
    loadTrack() {
        const track = this.$store.state.player.playingTrack.track;
        const res = `http://localhost:4040/users/track/stream/${track.id}`
        this.audio.src = res
    },
    playTrack() {
      if (this.$store.state.player.playerbar == undefined) return;
      this.audio.play();
      this.isPlaying = true;
    },
    pauseTrack() {
      this.audio.pause();
      this.isPlaying = false;
    },
    togglePlay() {
      if (this.isPlaying == false) {
        this.playTrack();
        const player = this.$store.state.player.playerbar;
        this.isPlaying = true;
        player.isPlaying = this.isPlaying;
        this.$store.dispatch("actionSetPlayer", player);
        localStorage.setItem("player", JSON.stringify(player));
      } else {
        this.pauseTrack();
        const player = this.$store.state.player.playerbar;
        this.isPlaying = false;
        player.isPlaying = this.isPlaying;
        this.$store.dispatch("actionSetPlayer", player);
        localStorage.setItem("player", JSON.stringify(player));
      }
    },
    seek(e) {
      const audio = this.audio
      this.seekPercent = parseInt(e.srcElement.value);
      this.seekBarWidth = `${this.seekPercent}%`;
      this.$refs.timeline.style.width = `${this.seekPercent}%`;
      this.$refs.dot.style.left = `${this.seekPercent}%`;

      audio.currentTime = (this.seekPercent * audio.duration) / 100;
    },
  },
};
</script>

<style scoped>
.player-mobile {
    display: none;
    z-index: 550;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 80px;
    background-color: #000;
    transition: all .3s;
}
.audio-rali {
    z-index: 10;
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 14px;
    cursor: pointer;
    transition: all .3s;
    visibility: visible;
    opacity: 1;
}
.audio-rali .total {
    pointer-events: none;
    position: absolute;
    top: 6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #3b4753;
}
.buffered {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #666;
}
.current {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: var(--color-primary);
}
.dot {
        position: absolute;
    top: -2px;
    left: 0;
    margin-left: -3px;
    width: 6px;
    height: 6px;
    background-color: var(--color-primary);
    border-radius: 100%;
    cursor: default;
}
.cover {
    float: left;
    display: inline;
    width: 54px;
    height: 54px;
    border-radius: 4px;
    overflow: hidden;
    background-size: 28px auto;
    background-repeat: no-repeat;
    background-position: center;
}
.cover.default {
    background-color: #666 !important;
}
.audio-info {
    float: left;
    display: inline;
    padding-left: 32px;
    padding-top: 14px;
    width: calc(50% - 77px);
    transition: all .3s;
    visibility: visible;
    opacity: 1;
}
.text {
    display: flex;
    flex-direction: column;
    float: left;
    margin-left: 10px;
    max-width: calc(100% - 96px);
    color: #fff;
}
.text .track-name {
    display: block;
    margin-top: 9px;
    font-size: 16px;
    line-height: 18px;
    color: rgba(255,255,255,.9);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.text .singer-name {
    display: block;
    margin-top: 3px;
    font-size: 13px;
    line-height: 15px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
a:hover {
    text-decoration: underline
}
.audio-control {
    position: absolute;
    left: 48%;
    top: 18px;
    margin-left: -72px;
    font-size: 0;
    line-height: 0;
    background: #000;
    transition: all .3s;
}
.audio-control button {
        width: 42px;
    height: 42px;
    transition: all .3s;  
}
.audio-control button > svg {
    width: 20px;
    height: 20px;
}
.play {
    background: #ffffff;
    border-radius: 100px;
    margin: 0 17px;
}
.audio-operation {
    float: right;
    display: inline;
    height: 20px;
    margin: 30px 130px 0 0;
    transition: all .3s;
    visibility: visible;
    opacity: 1;
}
.audio-operation button {
     width: 25px;
    height: 25px;
    margin-right: 15px;
    background-size: auto 20px;
    transition: all .3s;
}
input {
  opacity: 0;
  cursor: pointer;
  position: absolute;
  top: -5px;
  width: 100%;
  padding: 4px 0;
}
.img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@media (max-width: 414px) {
    .list .item {
        width: 44%;
        padding-right: 5%;
    }
}
</style>
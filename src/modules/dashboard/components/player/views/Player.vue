<template>
  <div v-show="player.playingTrack.track != undefined" class="player">
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
     <button @click="toggleShuffle()" :class="{active: player.playingTrack.select == 'shuffle'}"  class="shuffle"> 
    <svg role="img" height="21" fill="#fff" :class="{active: player.playingTrack.select == 'shuffle'}" width="21" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>

    </button>
    <button @click="previous()" class="prev"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="15px" viewBox="0 0 19 15" version="1.1">
    <!-- Generator: Sketch 62 (91390) - https://sketch.com -->
    <title>D0DF27AB-DCDF-4A28-9973-9A73F5B463E0</title>
    <desc>Created with Sketch.</desc>
    <g id="控件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="btn_previous" transform="translate(0.000000, -2.000000)" fill="#FFFFFF">
            <g id="btn/全屏播放/上一首">
                <path d="M18.3333333,9.45108623 L18.3333333,9.71147817 C18.3252294,9.7221943 18.3187025,9.7337872 18.3139117,9.74597454 C18.2810481,9.89030944 18.1811937,10.0156533 18.0388766,10.0912164 C18.8686807,9.63914707 12.8320051,13.299935 6.78092004,16.6101953 C6.53330499,16.714597 6.23874741,16.6716999 6.04164578,16.5025332 C5.96440882,16.4084653 5.89479603,16.3096421 5.83333333,16.2068103 L5.83333333,2.95547587 C5.8409349,2.94776494 5.84745631,2.93926436 5.85275495,2.93015999 C5.89015905,2.8072656 5.97553954,2.70018267 6.09364558,2.62803857 C6.18354885,2.58130156 6.28003041,2.54457962 6.37337944,2.50396293 C6.61881605,2.48228607 6.86362733,2.55017177 7.0515696,2.69202377 C12.5961265,5.95638165 19.0951617,9.61577857 17.9527324,9.02906212 C18.1013285,9.09668926 18.2181789,9.20884001 18.2825865,9.34564975 C18.2988756,9.38098071 18.3164177,9.41603347 18.3333333,9.45108623 Z" id="矩形_48_拷贝_4" transform="translate(12.083333, 9.583333) scale(-1, 1) translate(-12.083333, -9.583333) "/>
                <rect id="矩形" x="0.833333333" y="2.5" width="3.33333333" height="14.1666667" rx="1"/>
            </g>
        </g>
    </g>
</svg> 
</button>

<button @click="togglePlay()" class="play"> 
<svg v-if="!isPlaying" role="img" height="16" width="16" fill="#000" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>

<svg v-else role="img" fill="#000" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>

 </button>
<button @click="next()" class="next"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="15px" viewBox="0 0 19 15" version="1.1">
    <!-- Generator: Sketch 62 (91390) - https://sketch.com -->
    <title>96B3216C-CDE8-425D-9335-17154BBA0BB1</title>
    <desc>Created with Sketch.</desc>
    <g id="控件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="btn_next" transform="translate(-1.000000, -2.000000)" fill="#FFFFFF">
            <g id="btn/全屏播放/上一首" transform="translate(10.000000, 10.000000) scale(-1, 1) translate(-10.000000, -10.000000) ">
                <path d="M18.3333333,9.45108623 L18.3333333,9.71147817 C18.3252294,9.7221943 18.3187025,9.7337872 18.3139117,9.74597454 C18.2810481,9.89030944 18.1811937,10.0156533 18.0388766,10.0912164 C18.8686807,9.63914707 12.8320051,13.299935 6.78092004,16.6101953 C6.53330499,16.714597 6.23874741,16.6716999 6.04164578,16.5025332 C5.96440882,16.4084653 5.89479603,16.3096421 5.83333333,16.2068103 L5.83333333,2.95547587 C5.8409349,2.94776494 5.84745631,2.93926436 5.85275495,2.93015999 C5.89015905,2.8072656 5.97553954,2.70018267 6.09364558,2.62803857 C6.18354885,2.58130156 6.28003041,2.54457962 6.37337944,2.50396293 C6.61881605,2.48228607 6.86362733,2.55017177 7.0515696,2.69202377 C12.5961265,5.95638165 19.0951617,9.61577857 17.9527324,9.02906212 C18.1013285,9.09668926 18.2181789,9.20884001 18.2825865,9.34564975 C18.2988756,9.38098071 18.3164177,9.41603347 18.3333333,9.45108623 Z" id="矩形_48_拷贝_4" transform="translate(12.083333, 9.583333) scale(-1, 1) translate(-12.083333, -9.583333) "/>
                <rect id="矩形" x="0.833333333" y="2.5" width="3.33333333" height="14.1666667" rx="1"/>
            </g>
        </g>
    </g>
</svg> </button>

 <button @click="toggleRepeat()" class="repeat"> 
    <svg role="img" height="21" width="21" :class="{active: player.playingTrack.select == 'repeat'}" fill="#fff" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
    </button>
    </div>

    <div class="audio-operation">
    <button class="favorite"> 
      <svg role="img" height="24" fill="#fff" width="24" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 gQUQL"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>

      </button>
    </div>
    <div class="line"> </div>
  </div>
</template>

<script>
//import { api } from "@/api";

import { mapState } from "vuex";

export default {
  name: "Player",
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
    "$store.state.player.playingTrack.track"() {
      const i = this.player.playingTrack.index;
      this.loadTrack(i);
      this.playTrack();
    },
  },
  created() {
    if(this.player.playingTrack.playing != undefined) {
      this.loadTrack(this.player.playingTrack.index)
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
        const select = this.player.playingTrack.select;

        switch (select) {
          case "no_repeat":
            this.pauseTrack();
            this.audio.currentTime = 0;
            break;
          case "no-repeat":
            //this.VerifyPlay();
            this.next();
            break;
          case "repeat":
            this.audio.currentTime = 0;
            //this.VerifyPlay();
            this.loadTrack(this.$store.state.player.playerbar.correntIndex);
            this.playTrack();
            break;
          case "shuffle":
           var lastIndex = this.player.queue.length - 1,
            landIndex;
          landIndex = Math.round(Math.random() * lastIndex);

          while (landIndex == this.player.playingTrack.index) {
            landIndex = Math.round(Math.random() * lastIndex);
          }

          this.player.playingTrack.index = landIndex;
            this.$store.dispatch("actionSetPlayingTrack", {
              track: this.player.queue[landIndex],
              index: landIndex,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
            });
            localStorage.setItem("playing_track", JSON.stringify({
              track: this.player.queue[landIndex],
              index: landIndex,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
            }));

           this.loadTrack(landIndex);
          this.playTrack();
          break;
        }
        const i =
          this.player.playingTrack.index > 0
            ? this.player.playingTrack.index - 1
            : this.player.playingTrack.index;

        var cs;

        if (this.player.queue.length) {
          cs = this.player.queue[i].id;
        } else {
          cs = this.player.playingTrack.track.id;
        }
        console.log(cs)
        //this.setRecentPlayers(cs);
        //this.setPlay(cs);
        //this.setArtist(cs);
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
      const track = this.player.playingTrack.track;
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
    toggleMute() {
      this.audio.muted = !this.audio.muted;
      this.isMuted = !this.isMuted;
    },
    next() {
      if (!this.player.queue.length) {
        const index = this.player.playingTrack.index;
        const track = this.player.playingTrack.track;
        const track_source = {
        track,
        index: 0,
        playing: false,
        select: this.player.playingTrack.select,
        isPane: false
      };

      this.$store.dispatch("actionSetPlayingTrack", track_source);
      localStorage.setItem("playing_track", JSON.stringify(track_source));

        this.loadTrack(index)
        this.playTrack();
      } else {
        if (
          this.player.playingTrack.select == "shuffle" &&
          this.player.queue.length - 1 > 0
        ) {
          var lastIndex = this.player.queue.length - 1,
            landIndex;
          landIndex = Math.round(Math.random() * lastIndex);

          while (landIndex == this.player.playingTrack.index) {
            landIndex = Math.round(Math.random() * lastIndex);
          }

          this.player.playingTrack.index = landIndex;
           const index = this.player.playingTrack.index
           const track = this.player.queue[index];

            const track_source = {
              track,
              index,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
              };

            this.$store.dispatch("actionSetPlayingTrack", track_source);
            localStorage.setItem("playing_track", JSON.stringify(track_source));

           this.loadTrack(index);
          this.playTrack();
        } else {
          if (
            this.player.playingTrack.index <
            this.player.queue.length - 1
          ) {
            const index = this.player.playingTrack.index += 1;
            const track = this.player.queue[index];
            const track_source = {
              track,
              index,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
              };

            this.$store.dispatch("actionSetPlayingTrack", track_source);
            localStorage.setItem("playing_track", JSON.stringify(track_source));
            this.loadTrack(index);
            this.playTrack();
          } else {
            this.player.playingTrack.index = 0;
            const index = this.player.playingTrack.index
            const track = this.player.queue[index];

            const track_source = {
              track,
              index,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
            };

            this.$store.dispatch("actionSetPlayingTrack", track_source);
            localStorage.setItem("playing_track", JSON.stringify(track_source));


            this.loadTrack(index);
            this.isPlaying = true;
            this.playTrack();
            localStorage.setItem(
              "player",
              JSON.stringify(this.$store.state.player.playerbar)
            );
          }
        }
      }
    },
    previous() {
      if (!this.player.queue.length) {
        const index = 0;
        const track = this.player.playingTrack.track;
        const track_source = {
        track,
        index: 0,
        playing: false,
        select: this.player.playingTrack.select,
        isPane: false
      };

      this.$store.dispatch("actionSetPlayingTrack", track_source);
      localStorage.setItem("playing_track", JSON.stringify(track_source));

        this.loadTrack(index)
        this.playTrack();
      } else {
        if (
          this.player.playingTrack.select == "shuffle" &&
          this.player.queue.length - 1 > 0
        ) {
          var lastIndex = this.player.queue.length - 1,
            landIndex;
          landIndex = Math.round(Math.random() * lastIndex);

          while (landIndex == this.player.playingTrack.index) {
            landIndex = Math.round(Math.random() * lastIndex);
          }

          this.player.playingTrack.index = landIndex;
           const index = this.player.playingTrack.index
           const track = this.player.queue[index];

            const track_source = {
              track,
              index,
              playing: false,
              select: this.player.select,
              isPane: false
              };

            this.$store.dispatch("actionSetPlayingTrack", track_source);
            localStorage.setItem("playing_track", JSON.stringify(track_source));

           this.loadTrack(index);
          this.playTrack();
        } else {
          if (
            this.player.playingTrack.index >
            0
          ) {
            const index = this.player.playingTrack.index -= 1;
            const track = this.player.queue[index];
            const track_source = {
              track,
              index,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
              };

            this.$store.dispatch("actionSetPlayingTrack", track_source);
            localStorage.setItem("playing_track", JSON.stringify(track_source));
            this.loadTrack(index);
            this.playTrack();
          } else {
            this.player.playingTrack.index = this.player.queue.length - 1;
            const index = this.player.playingTrack.index
            const track = this.player.queue[index];

            const track_source = {
              track,
              index,
              playing: false,
              select: this.player.playingTrack.select,
              isPane: false
            };

            this.$store.dispatch("actionSetPlayingTrack", track_source);
            localStorage.setItem("playing_track", JSON.stringify(track_source));


            this.loadTrack(index);
            this.isPlaying = true;
            this.playTrack();
          }
        }
      }
    },
    toggleSelect() {
      const select = this.$store.state.player.playerbar.select;
      switch (select) {
        case "no_repeat":
          this.$store.state.player.playerbar.select = "repeat";
          this.$store.dispatch("actionSetToast", "Repetir foi activado");
          localStorage.setItem(
            "player",
            JSON.stringify(this.$store.state.player.playerbar)
          );
          break;
        case "repeat":
          this.$store.state.player.playerbar.select = "repeat_once";
          this.$store.dispatch(
            "actionSetToast",
            "Repetir uma vez foi activado"
          );
          localStorage.setItem(
            "player",
            JSON.stringify(this.$store.state.player.playerbar)
          );
          break;
        case "repeat_once":
          this.$store.state.player.playerbar.select = "no_repeat";
          this.$store.dispatch(
            "actionSetToast",
            "A Ordem repetir foi desactivada"
          );
          localStorage.setItem(
            "player",
            JSON.stringify(this.$store.state.player.playerbar)
          );
          break;
        case "shuffle":
          this.$store.state.player.playerbar.select = "repeat";
          this.$store.dispatch("actionSetToast", "Repetir foi activado/a");
          localStorage.setItem(
            "player",
            JSON.stringify(this.$store.state.player.playerbar)
          );
          break;
      }
    },
    toggleShuffle() {
      if (this.player.playingTrack.select !== "shuffle") {
        this.player.playingTrack.select = "shuffle";
        this.$store.dispatch(
          "actionSetToast",
          "Ordem aletatória foi activado/a"
        );
        const playerUpdated = this.player.playingTrack
        localStorage.setItem("playing_track", JSON.stringify(playerUpdated));
      } else {
        this.player.playingTrack.select = "no_repeat";
        this.$store.dispatch(
          "actionSetToast",
          "Ordem aletatória foi desativada"
        );
        const playerUpdated = this.player.playingTrack
        localStorage.setItem("playing_track", JSON.stringify(playerUpdated));
      }
    },
    toggleRepeat() {
      if (this.player.playingTrack.select !== "repeat") {
        this.player.playingTrack.select = "repeat";
        this.$store.dispatch(
          "actionSetToast",
          "Único laço foi activado"
        );
        const playerUpdated = this.player.playingTrack
        localStorage.setItem("playing_track", JSON.stringify(playerUpdated));
      } else {
        this.player.playingTrack.select = "no_repeat";
        this.$store.dispatch(
          "actionSetToast",
          "Único laço foi desativado"
        );
        const playerUpdated = this.player.playingTrack
        localStorage.setItem("playing_track", JSON.stringify(playerUpdated));
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
.player {
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
  .audio-info {
    padding-left: 12px;
    width: calc(90% - 77px);
  }
  .audio-control {
    left: 96%;
  }
  .shuffle, .next, .prev, .repeat, .favorite {
    display: none;
  }
  .track-name {
    font-size: 18px;
  }
  .singer-name {
    font-size: 15px;
    line-height: 23px;
  }
} 
svg.active {
  fill: var(--color-primary) !important;
}
</style>
<template>
<section> 
  <div @click="setTrackPlayer(track, index)" @click.right.prevent="openMenu($event)" class="track">
  <div class="serialNum">{{index}}</div>
  <i></i>

  <div class="center">
  <div class="wrap"> 
  <router-link :to="`/track/${track.id}`" class="title" :class="{listing: player.playingTrack.track.id == track.id}"> 
  {{track.title}}
  </router-link>
  </div>

  <a class="singername" href="ol"> 
  {{track.artist.singername}}
  </a>
  </div>

  <div class="right"> 
  <span class=""> 3:40</span>
  </div>
  </div>  

    <ContextMenu ref="menu">
      <div class="item">Ver mais detalhes</div>
      <div class="item">Adicionar a lista de continuação</div>
      <div class="item">Ver artísta</div>
      <div class="item">Ver álbum</div>
      <div class="item">Guardar como favorito</div>
      <div @click="openAddPlaylist" class="item">Adicionar a playlist</div>
    </ContextMenu>
</section>
</template>

<script>
import {mapState} from "vuex"
import ContextMenu from "./ContextMenu.vue";

export default {
  name: "Track",
  components: {
    ContextMenu
  },
  computed: {
    ...mapState(["player", "users"])
  },
  props: {
      track: Object,
      index: Number
  },
  methods: {
    goTo() {
    },
    openMenu(e) {
      this.$refs.menu.openMenu(e)
    },
    openAddPlaylist() {
       this.$store.dispatch("actionSetModal", {
          name: "playlist_addTo",
          tab: "",
          option: 1,
      })
    },
    setTrackPlayer(track, index) {

      if(this.users.token == null) {
          this.$store.dispatch("actionSetModal", {
           name: "auth",
           tab: 'signup',
           option: 1,
          })
        return ;
      } 
      this.$store.dispatch("actionSetPlayingTrack", {
        track,
        index: this.index,
        playing: true,
        select: this.$store.state.player.playingTrack.select,
        isPane: true,
     });

      const track_source = {
        track,
        index,
        playing: false,
        select: this.$store.state.player.playingTrack.select,
        isPane: false,
      };
      localStorage.setItem("playing_track", JSON.stringify(track_source));

      if (this.player.queue.length) {
        const findTrack = this.player.queue.find((que) => que.id == this.track.id);
        if (!findTrack) {
          this.player.queue.push(this.track);
          localStorage.setItem("queue", JSON.stringify(this.player.queue));
        } else return;
      } else {
        this.$store.dispatch("actionSetQueue", [this.track]);
        localStorage.setItem("queue", JSON.stringify([this.track]));
      }
    }
  }
};
</script>

<style scoped>
.track {
     opacity: .8;
    position: relative;
    display: block;
    white-space: nowrap;
    cursor: pointer;
    font-size: 15px;
    line-height: 50px;
    height: 50px;
    border-radius: 8px
}
.track:hover {
    background: rgba(255, 255, 255, 0.1)
}
.serialNum {
    position: absolute;
    width: 40px;
    height: 40px;
    margin-top: 4px;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
}
.wrap {
    position: relative;
    float: left;
    width: 38%;
    margin-right: 8%;
}
.track .center {
    padding: 0 108px 0 42px;
    overflow: hidden;
}
.track .singername {
    float: left;
    max-width: 32%;
    margin-right: 4%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
}
.title {
    float: left;
    max-width: calc(100% - 76px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 8px;
    color: #fff;
}
a:hover {
    text-decoration: underline
}
.right {
    position: absolute;
    right: 2%;
    top: 0;
    text-align: right;
    width: 60px;
    pointer-events: none;
}
.listing {
  color: var(--color-primary);
  opacity: 1;
}
</style>
<template>
<div class="tracklist">
 <header class="head">
                        <span class="serialNum">#</span>

                        <div class="center">
                            <div class="songNameWrap">
                                <div class="songName">Título
                                </div>
                            </div>
                            <div class="typeName">
                            {{type}}
                            </div>
                        </div>
                        <time>Tempo</time>
</header>


<ul class="items"> 
<Track v-for="(track, index) in tracks" :index="index" :track="track" :key="track.id"/>
</ul>
</div>
</template>

<script>
import Track from "./Track"

export default {
  name: "Tracklist",
  components: {
      Track
  },  
  props: {
      tracks: Array,
      type: String
  },
  created() {

  },

};
</script>

<style scoped>


@media (max-width: 1100px) {

}

@media (max-width: 800px) {

}

@media (min-width: 1440px) {
}

.head {
    position: relative;
    opacity: .5;
    margin-bottom: 9px;
    overflow: hidden;
}
.head .serialNum {
  left: 0;
  top: 50%;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
}
.head .center {
    padding: 0 108px 0 42px;
    overflow: hidden;
}
.head .songNameWrap {
    float: left;
    width: 38%;
    margin-right: 8%;
}
.head .typeName {
    padding-top: 0;
    padding-bottom: 0;
    float: left;
    max-width: 32%;
    margin-right: 4%;
}
time {
  position: absolute;
    right: 2%;
    top: 0;
    text-align: right;
    width: 60px;
    pointer-events: none;
}
.head .serialNum {
    position: absolute;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    font-size: 15px;
    line-height: 40px;
    text-align: center;
}

</style>
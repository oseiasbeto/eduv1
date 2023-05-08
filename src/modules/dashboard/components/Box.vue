<template>
  <div class="box">
    <router-link :to="to" class="cover" :class="{itx: isItem}">
    <div @click="goTo(to)" class="img"  :style="`
    background: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    `"></div> 
      <span class="gradient"></span>
 
      <span class="play">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px" viewBox="0 0 60 60" version="1.1">
    <!-- Generator: Sketch 62 (91390) - https://sketch.com -->
    <title>6F0A2533-71AE-4DCF-8914-CCE2F5A737A6</title>
    <desc>Created with Sketch.</desc>
    <g id="控件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="btn_play">
            <g>
                <circle id="Oval" fill-opacity="0.5" fill="#000000" cx="30" cy="30" r="30"/>
                <path d="M42.2071324,31.6362935 C43.0551324,31.1622935 43.0471324,30.3772935 42.2071324,29.8902935 L24.5311324,19.2062935 C23.7001324,18.7242935 23.0111324,19.1162935 23,20.0762935 L23,41.1852935 C22.9891324,42.1442935 23.6651324,42.5462935 24.5021324,42.0782935 L42.2071324,31.6362935 Z" id="Icon" fill="#FEFEFE" opacity="0.9"/>
            </g>
        </g>
    </g>
</svg>
      </span>
    </router-link>

    <router-link :to="`${to}`" class="title"> {{title}} </router-link>
        <router-link :to="`/artist/${artist.slug}`" class="singername"> {{artist.singername}} </router-link>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: {
      title: String,
      type: String,
      img: String,
      artist: Object,
      listen: String,
      isItem: Boolean,
      to: String
  },
  methods: {
      goTo(to) {
          this.$router.push(to)
      }
  }
};
</script>

<style scoped>
.cover {
    position: relative;
    width: 170px;
    height: 170px;
    border-radius: 4px;
    background-color: #666;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
}
.cover .img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 4px;
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
.play {
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s
}
.cover:hover .play {
    visibility: visible;
    opacity: 1
}
.title {
     width: 166px;
    display: block;
    padding-top: 10px;
    font-size: 14px;
    line-height: 16px;
    color: rgba(255,255,255,.9);
    white-space: normal;
    max-height: 32px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-word;
    word-wrap: break-word;
}
.singername {
     width: 166px;
    display: block;
    padding-top: 4px;
    font-size: 13px;
    line-height: 16px;
    color: rgba(255,255,255,.9);
    white-space: normal;
    max-height: 32px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-word;
    word-wrap: break-word;
    opacity: 0.5
}
.itx {
    position: relative;
    padding-top: 100% !important;
    padding-left: 100% !important;
    width: 0 !important;
    height: 0 !important;
    display: block;
    margin-right: 24px;
}

.box {
    cursor: pointer;
    display: block
}
.cover {
    display: block !important;
}
a:hover {
    text-decoration: underline;
}
@media (max-width: 414px) {
 .cover {
   width: 150px;
   height: 150px;
 }
 .title, .singername {
   width: 150px;
 }
} 
</style>
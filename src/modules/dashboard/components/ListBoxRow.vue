<template>
  <article class="list-box-row">
  <h2> {{ title }}
                                    <a v-show="list.length > 5" href="https://www.boomplay.com/more/charts?id=10112&amp;name=Weekly+Charts" class="more log_clickEvent" data-evtid="MH_MUSIC_ICON_CHARTS_CAT_Weekly Charts_MORE_CLICK" data-evtcat="GROUP" data-colgrpid="10112">
                                    Mais

                                    <svg data-v-9f009c0c="" width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-hidden="true" class="chevron"><path data-v-9f009c0c="" d="M19.817 61.863c1.48 0 2.672-.515 3.702-1.546l24.243-23.63c1.352-1.385 1.996-2.737 2.028-4.443 0-1.674-.644-3.09-2.028-4.443L23.519 4.138c-1.03-.998-2.253-1.513-3.702-1.513-2.994 0-5.409 2.382-5.409 5.344 0 1.481.612 2.833 1.739 3.96l20.99 20.347-20.99 20.283c-1.127 1.126-1.739 2.478-1.739 3.96 0 2.93 2.415 5.344 5.409 5.344Z"></path></svg>
                                    </a>
                                </h2>
  <div class="lbr-content"> 
    <ul class="list"> 
    <li v-for="item in list" :key="item.id" class="item">
    <box 
    :title="item.title"
    :type="type"
    :img="item.cover"
    :artist="item.artist"
    :listen="item.listen != undefined ? item.listen : null"
    :isItem="false"
    :to="`/${type}/${item.id}`"
    />
    </li>
    </ul>

    <button id="control" v-if="list.length > 5" class="left current"> 
    <span class="bg"> </span>
    </button>

    <button id="control" v-if="list.length > 5" class="right current">
    <span class="bg"> </span>
    </button>
</div>
  
  </article>
</template>

<script>
import Box from "./Box"

export default {
  name: "ListBoxRow",
  components: {
      Box
  },  
  props: {
      list: Array,
      title: String,
      type: String
  },
  mounted() {
      var currentItem = 0;
      //const maxItems = this.list.length;
      const items = document.querySelectorAll(".item")
      const controls = document.querySelectorAll("#control")
      controls.forEach(control => {
          control.addEventListener("click", () => {
              const isLeft = control.classList.contains("left")
    
              if(isLeft) {
                currentItem -= 4
              } else {
                currentItem += 4
              }
              if(currentItem >= items.length) {
                  currentItem = 0
              }
              if(currentItem < 0) {
                  currentItem = items.length - 1
              }
              console.log(currentItem)
              items[currentItem].scrollIntoView({
                  inline: "center",
                  behavior: "smooth"
              })
          })
      })
  }
};
</script>

<style scoped>
.list-box-row {
    overflow: hidden;
    padding-bottom: 46px;
}
.lbr-content {
    position: relative;
    overflow: hidden;
    width: 100%;
}
.list {
    position: relative;
    top: 0;
    font-size: 0;
    line-height: 0;
    white-space: nowrap;
    transition: all .6s;
    overflow-x: auto;
}
.list::-webkit-scrollbar {
    display: none;
}
.list .item {
    padding-right: 26px;
    display: inline-block;
    vertical-align: top;
}
.list .item:first-child {
    margin-left: 30px;
}
.list .item:last-child {
    margin-right: 4px;
}
.left, .right {
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    height: 217px;
    width: 80px;
    cursor: pointer;
}
.left {
    left: 0;
    background-image: -webkit-linear-gradient(left,rgba(18,18,18,.8),rgba(18,18,18,0));
    background-image: -moz-linear-gradient(left,rgba(18,18,18,.8),rgba(18,18,18,0));
    background-image: -o-linear-gradient(left,rgba(18,18,18,.8),rgba(18,18,18,0));
    background-image: linear-gradient(to right,rgba(18,18,18,.8),rgba(18,18,18,0));
}
.right {
    right: 0;
    background-image: -webkit-linear-gradient(left,rgba(18,18,18,0),rgba(18,18,18,.8));
    background-image: -moz-linear-gradient(left,rgba(18,18,18,0),rgba(18,18,18,.8));
    background-image: -o-linear-gradient(left,rgba(18,18,18,0),rgba(18,18,18,.8));
    background-image: linear-gradient(to right,rgba(18,18,18,0),rgba(18,18,18,.8));
}
.left:hover {
    background-image: -webkit-linear-gradient(left,rgba(18,18,18,1),rgba(0,0,0,0));
    background-image: -moz-linear-gradient(left,rgba(18,18,18,1),rgba(18,18,18,0));
    background-image: -o-linear-gradient(left,rgba(18,18,18,1),rgba(18,18,18,0));
    background-image: linear-gradient(to right,rgba(18,18,18,1),rgba(18,18,18,0))
}

.right:hover {
    background-image: -webkit-linear-gradient(left,rgba(18,18,18,0),rgba(18,18,18,1));
    background-image: -moz-linear-gradient(left,rgba(18,18,18,0),rgba(18,18,18,1));
    background-image: -o-linear-gradient(left,rgba(18,18,18,0),rgba(18,18,18,1));
    background-image: linear-gradient(to right,rgba(18,18,18,0),rgba(18,18,18,1))
}
.bg {
    background-repeat: no-repeat;
    background-position: 80% 79px;
    background-size: 10px auto;
}
.current {
    visibility: visible;
    opacity: 1;
}
h2 {
    margin: 0 30px 10px 30px;
    font-weight: 700;
    font-size: 21px;
    line-height: 23px;
    color: #fff;
}
h2 .more {
    float: right;
    color: var(--color-primary);
    font-weight: 500;
    font-size: 13px
}
@media (max-width: 414px) {
 .current {
   pointer-events: none;
   opacity: 0;
 }
 .list .item {
    padding-right: 17px;
 }
 h2 {
    font-size: 18px;
 }
 .list-box-row {
    padding-bottom: 28px;
 }
} 
</style>
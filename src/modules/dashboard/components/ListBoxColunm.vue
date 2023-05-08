<template>
  <article class="list-box-colunm">
    <ul class="list">
    <li v-for="item in list" :key="item.id" class="item">
    <box 
    :title="item.title"
    :type="type"
    :artist="item.artist"
    :img="item.cover"
    :listen="item.listen != undefined ? item.listen : null"
    :isItem="true"
    :to="`/${type}/${item.id}`"
    />
    </li>
    </ul>
  </article>
</template>

<script>
import Box from "./Box"

export default {
  name: "ListBoxColunm",
  components: {
      Box
  },
  props: {
      type: String,
      list: Array
  }
};
</script>

<style scoped>
.list-box-colunm {
    margin-right: 1.5%;
    padding-bottom: 46px;
}
.list {
    position: relative;
    width: 100%;
    font-size: 0;
    line-height: 0;
    transition: all .6s;
}
.list .item {
    width: 16%;
    padding: 0 1%;
    margin-bottom: 30px;
    display: inline-block;
    vertical-align: top;
}
ul li {
    display: block;
    margin-bottom: 30px;
    display: inline-block;
    vertical-align: top
}
@media (max-width: 1100px) {
    .item {
        width:23%;
        padding: 0 1%
    }
}

@media (max-width: 800px) {
    .item {
        width:31.33%;
        padding: 0 1%
    }
}

@media (min-width: 1440px) {
     .item {
        width: 14.66%;
        padding: 0 1%
    }

     .item strong {
        font-size: 16px;
        line-height: 18px;
        max-height: 36px
    }
}
@media (max-width: 414px) {
    .list .item {
        width: 44%;
        padding-right: 5%;
    }
}
</style>
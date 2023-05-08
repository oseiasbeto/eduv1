<template>
  <div class="comment">
   <a href="#" class="avatar"> 
   </a>

   <div class="right">

   <h2 class="Username">
   {{comment.commentedBy.username}}
   </h2>

   <div class="content">
   <div class="content-text">
   <p> {{comment.comment}} </p>
   </div>
   </div>

   <footer> 
   <address>
   {{comment.commentedBy.location.country}}
   </address>
   <time>
   {{comment.createdAt}}
   </time>
   </footer>
   </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  props: {
      comment: Object,
  },
  methods: {

  }
};
</script>

<style scoped>
.comment {
    display: block;
    padding-top: 15px;
    font-size: 0;
    line-height: 0;
}
.comment .avatar {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 22px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    vertical-align: top;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    cursor: default;
}
.comment .right {
    display: inline-block;
    width: calc(100% - 62px);
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255,255,255,.1);
    vertical-align: top;
}
.comment .username {
    display: block;
    height: 26px;
    margin-top: 0;
    opacity: .6;
    font-size: 16px;
    color: #fff;
    line-height: 24px;
}
.comment .content {
    width: 100%;
    margin-top: 12px;
    overflow: hidden;
    word-break: break-word;
    font-size: 14px;
    color: #fff;
    line-height: 18px;
    vertical-align: middle;
}
.content p {
    word-break: break-word;
    font-size: 14px;
    color: #fff;
    line-height: 18px;
}
footer {
    position: relative;
    display: block;
    margin-top: 14px;
    font-size: 0;
    line-height: 0;
    color: #999;
}
address, time {
    display: inline-block;
    height: 20px;
    margin-right: 4px;
    vertical-align: middle;
    font-size: 12px;
    color: #fff;
    line-height: 16px;
    opacity: .6;
}
h2 {
    display: block;
    height: 26px;
    margin-top: 0;
    opacity: .6;
    font-size: 16px;
    color: #fff;
    line-height: 24px;
    font-weight: 500
}
</style>
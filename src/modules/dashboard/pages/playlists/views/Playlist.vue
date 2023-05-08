<template>
  <div class="playlist">
    <div class="gaussianWrap"> 
     <div class="gaussian" style="background: url(http://localhost:4040/files/306737006_123678540454762_5120085490953468793_n.jpg);"> 
    
    </div>
    <i> </i>
    </div>

    <article class="playlist-wrapper"> 
    <div class="playlist clearfix"> 
    <section class="cover"> 
    <img src="http://localhost:4040/files/306737006_123678540454762_5120085490953468793_n.jpg">

    <span class="gradient"></span>
    <span class="listen">30.9K</span>

    </section>

    <section class="text"> 
    <h2>Trap no AP </h2>

    <div class="description"> 
    <p > Keep up with trending music. Press play and enjoy </p>
    </div>

    <a class="created-by" href="javascript(0)">
    <img src="http://localhost:4040/files/306737006_123678540454762_5120085490953468793_n.jpg" class="avatar">
    <strong> Oselamar </strong>
    </a>

    <div class="actions"> 
    <button class="active"> Ouvir tudo</button>
    <button> 100.1k</button>
    </div>
    </section>


    </div>
    </article>


    <article class="playlist-menu">
      <header class="head">
                        <span class="serialNum">#</span>

                        <div class="center">
                            <div class="songNameWrap">
                                <div class="songName">Title
                                </div>
                            </div>
                            <div class="albumName">Album</div>
                        </div>
                        <time>Time</time>
      </header>
    </article>
  </div>
</template>

<script>
export default {
  name: "Playlist",
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
.playlist-menu {
    z-index: 2;
    position: relative;
    display: block;
    padding: 36px 8% 0 28px;
    color: #fff;
    text-align: left;
}
.head {
    position: relative;
    opacity: .5;
    margin-bottom: 9px;
    overflow: hidden;
}
.serialNum {
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
.head .albumName {
    padding-top: 0;
    padding-bottom: 0;
    float: left;
    max-width: 32%;
    margin-right: 4%;
}
time {
    right: 2%;
    top: 50%;
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
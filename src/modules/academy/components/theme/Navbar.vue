<template>
  <header class="navbar-academy">
    <div class="contents">
      <div class="left">

      </div>
      <div class="right">
        <div class="notification">
          <i class="bi bi-bell"></i>
        </div>
        <div class="user">
          <div class="papover">
            <div class="user-side">
              <div class="avatar">

              </div>
            </div>

            <div class="user-side info">
              <div class="dw">
                <div class="user-txt">
                  <span class="user-content">
                    oseiasbetodev2t6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Navbar",
  components: {

  },
  created() {
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style scoped>
.navbar-academy {
  position: fixed;
  background-color: #fff;
  border-bottom: none;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, .04);
  display: block;
  margin: 0 !important;
  padding: 2px 0 !important;
  height: 60px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 130;
  width: calc(100% - 230px);
  padding: 2px 0 !important;
}

.navbar-academy .contents {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 100%;
}

.btn {
  background: #2bc48a;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  height: 34px;
  line-height: 34px;
  min-width: 34px;
  padding: 0 20px;
  font-weight: 600;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: .25s linear;
}

.btn:hover {
  transition: .25s linear;
  background-color: #209669;
}

.user {
  display: inline-block;
  width: 150px;
  text-align: left;
  vertical-align: middle;
}

.user .papover {
  display: inline-block;
  vertical-align: middle;
}

.user .user-side {
  display: inline-block;
  line-height: 1rem;
  vertical-align: middle;
  margin-right: 10px;
  width: 36px;
  cursor: pointer;
  user-select: none;
}

.user .user-side .avatar {
  height: 34px;
  width: 34px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #dbdbdb;
}

.user-side .info {
  margin-left: 10px;
  max-width: 110px;
  min-width: 83px;
}

.user-side .info .dw {
  display: flex;
  flex-wrap: wrap;
}

.user-txt {
  display: inline-block;
  font-size: .9375rem;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
  color: #1d262d;
}

.user-contents {
  display: inline-block;
  margin: 0 !important;
  max-width: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notification {
  display: inline-block;
  position: relative;
  padding: 5px 9px !important;
  margin-right: 5px;
  border-radius: 20px !important;
}
</style>
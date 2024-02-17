<template>
  <div class="search" id="searchGlobal" ref="searchGlobal">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="14" width="18">
        <path
          d="M508.5 468.9 387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z">
        </path>
      </svg>
    </div>
    <input v-model="keywords" @keydown.enter="goToSearch" type="text" placeholder="Pesquisar na Eduka"
      id="inputSearchGlobal" ref="searchInput">
    <button v-show="keywords.length" @click="clear" class="clear">×</button>
    <button id="close" class="close">×</button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "SearchField",
  data() {
    return {
      keywords: "",
    }
  },
  computed: {
    ...mapState(["home"])
  },
  mounted() {
    this.close()
  },
  created() {

  },
  methods: {
    goToSearch() {
      if (!this.keywords) return;
      if (this.$route.query.keywords === this.keywords) {
        return;
      }
      this.$router.push({ name: "Pesquisa - Eduka", query: { keywords: this.keywords } });
      const searchGlobal = this.$refs.searchGlobal
      searchGlobal.classList.remove("d-flex")
    },
    clear() {
      this.keywords = ""
      this.$refs.searchInput.focus()
    },
    close() {
      const btnClose = document.querySelector("#close")
      btnClose.addEventListener("click", () => {
        const search = document.querySelector(".search")
        search.classList.remove("d-flex")
        this.keywords = ""
      })
    }
  }
};
</script>

<style scoped>
.search {
  height: 39px;
  padding: 0 12px;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d6e3e3;
  border-radius: 4px;
  font-size: 15px;
  line-height: 1.42857143;
  color: #555;
}

.search input {
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
  height: 39px;
  font-size: 15px !important;
  font-weight: 400;
  color: inherit;
  font-family: inherit;
}

.search input::placeholder {
  color: #999;;
}


.icon {
  position: absolute;
  left: 8px;
  top: 8px;
}

.icon svg {
  fill: #5555559f;
}

.right {
  cursor: pointer;
  position: absolute;
  left: 87%;
  top: 8px;
}

.item {
  cursor: pointer;
  padding: 12px;
  padding-bottom: 1px;
}

.clear {
  position: absolute;
  top: 2px;
  right: 0.2rem;
  z-index: 1010;
  background: transparent;
  padding: 0 8px;
  font-size: 1.375rem;
  color: #a5b7c6;
  border: none;
  cursor: pointer;
}

.close {
  display: none;
}

@media (max-width: 414px) {
  .search {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 5px 46px 8px 44px;
    background-color: #1d262d;
    border: none !important;
  }

  .clear {
    display: none;
  }

  .close {
    display: flex !important;
    position: absolute;
    top: 0.875rem;
    right: 0.175rem;
    font-size: 1.5rem;
    font-weight: 500;
    width: 1.6rem;
    height: 1.6rem;
    color: #FFF;
    background-color: #34333347;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: none;
  }

  .search input {
    font-size: 1.025rem !important;
    color: #fff;
  }

  .search input::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  .search .icon {
    position: absolute;
    left: 6px;
    top: 18px;
  }

  .search .icon svg {
    fill: #fff;
    width: 1.275rem;
    height: 1.275rem;
  }
}

.d-none {
  display: none !important;
}

.d-flex {
  display: flex !important;
}
</style>
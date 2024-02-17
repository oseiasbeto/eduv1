<template>
  <div class="marketplace">
    <header>
      <h1 class="title">Marketplace</h1>
      <p class="subtitle">Olá Oséias, seja bem vindo ao nosso painel</p>
    </header>
    <SearchField/>
    <div class="marketplace-tabs">
      <div @click="setTab('recommends')" :class="`${tab == 'recommends' ? 'tab active' : 'tab'}`">
        <span>Recomendados</span>
        <div class="border"></div>
      </div>
      <div @click="setTab('news')" :class="`${tab == 'news' ? 'tab active' : 'tab'}`">
        <span>Recentes</span>
        <div class="border"></div>
      </div>
      <div @click="setTab('+saled')" :class="`${tab == '+saled' ? 'tab active' : 'tab'}`">
        <span>Mais vendidos</span>
        <div class="border"></div>
      </div>
    </div>
    <section v-show="tab == 'recommends'">
      <CourseList>
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
      </CourseList>
    </section>
    <section v-show="tab == 'news'">
      <CourseList>
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
      </CourseList>
    </section>
    <section v-show="tab == '+saled'">
      <CourseList>
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
        <CardCourse :course="course" />
      </CourseList>
    </section>
  </div>
</template>

<script>
import SearchField from '../../../../users/components/theme/SearchField.vue';
import CardCourse from '../../../../users/pages/courses/components/CardCourse.vue';
import CourseList from '../../../../users/pages/courses/components/CourseList.vue';

export default {
  name: "Dashboard",
  components: { CardCourse, CourseList, SearchField },
  data() {
    return {
      tab: "recommends",
      course: {
        banner: "http://localhost:4040/files/FB_IMG_16877125875316852.jpg",
        title: "Introdução ao Adobe XD para aplicativos móveis",
        createdBy: {
          name: "Walt de Jesus"
        },
        isRecommended: false,
        price: 10000,
        description: "Aprenda do zero a criar um app para iOS e Android como um profissional"
      }
    }
  },
  methods: {
    setTab(tab) {
      this.tab = tab
    }
  }
};
</script>

<style scoped>
.dashboard {
  color: #333;
}

header {
  margin-bottom: 24px;
}

h1 {
  font-size: 32px;
  font-weight: 500;
  color: #333;
  padding-right: 30px
}

.subtitle {
  opacity: .75;
  font-weight: 400;
}

/*Body style */
.fast-links {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fast-links a,
button {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
  color: inherit;
  border: none;
  background: #fff;
  color: #5c6a70;
  white-space: nowrap;
  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
  box-shadow: 0 2px 6px rgba(0, 0, 0, .06);
  text-decoration: none;
}

.fast-links .create {
  color: #fff;
  background: #31c178;
  -webkit-box-shadow: 0 4px 24px rgba(49, 193, 120, .25);
  box-shadow: 0 4px 24px rgba(49, 193, 120, .25);
}

.fast-links>a,
button {
  margin-right: 12px;
}

.marketplace-tabs {
  display: flex;
  align-items: center;
  padding-top: 20px;
  border-bottom: 1px solid #d9d9d9;
}

.marketplace-tabs .tab {
  display: block;
  position: relative;
  margin: 0;
  font-weight: 400;
  color: #161616;
  background: transparent !important;
  border-radius: 0;
  font-size: 15px;
  height: 35px;
  margin-right: 1.80rem;
  cursor: pointer;
  transition: all 0.2s;
}

.marketplace-tabs .tab .border {
  display: none;
  position: absolute;
  bottom: 0px;
  left: 0;
  font-weight: 500;
  height: 4px;
  width: 100%;
  background: rgba(85, 91, 97, 0.5);
  transition: all 0.3s;
}

.marketplace-tabs .tab:hover {
  transition: all 0.3s;
}

.marketplace-tabs .tab.active {
  font-weight: 500;
}

.tab.active>.border {
  display: block;
  background: #272d35;
  transition: all 0.2s;
}

.tab:hover>.border {
  display: block;
  transition: all 0.3s;
}

section {
  margin-top: 3.8rem;
}

section header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

section header .left-part {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

section .title {
  display: inline-block;
  margin: 0 0.75rem 0.5rem 0;
  font-size: 1.875rem;
  font-weight: 500;
}

section .subtitle {
  display: inline-block;
  font-weight: 400;
  color: #848484;
  font-size: 1rem;
  font-weight: 400;
}

@media (max-width: 414px) {
  section .title {
    font-size: 24px;
  }

  section .subtitle {
    font-size: 15px;
  }
}
</style>
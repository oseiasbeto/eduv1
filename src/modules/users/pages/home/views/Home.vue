<template>
  <div class="home-page">
    <Hero />
    <div class="j-c">
      <Container>
        <header>
          <h4 class="title">
            Aprenda no seu rítimo
          </h4>
          <p class="subtitle">Aproveite para aprender desde casa, sem um horário fixo e no seu ritmo. É você quem define
            sua
            disponibilidade</p>
        </header>
        <CourseList>
          <CardCourse :course="course" />
        </CourseList>
      </Container>
    </div>
    <BtnMoreCourse />
  </div>
</template>

<script>
import { mapState } from "vuex"
import Hero from "../../../components/theme/Hero.vue";
import CourseList from "../../courses/components/CourseList.vue";
import CardCourse from "../../courses/components/CardCourse.vue";
import BtnMoreCourse from "../../../components/theme/BtnMoreCourse.vue";
import Container from "../../../components/theme/Container.vue";
//import {api} from "@/api"

export default {
  name: "Home",
  components: {
    Hero,
    CourseList,
    CardCourse,
    BtnMoreCourse,
    Container
  },
  computed: {
    ...mapState(["home", "users"])
  },
  data() {
    return {
      course: {
        banner: "http://localhost:4040/files/FB_IMG_16877125875316852.jpg",
        title: "Introdução ao Adobe XD para aplicativos móveis",
        createdBy: {
          name: "Walt de Jesus"
        },
        isRecommended: true,
        price: 10000,
        description: "Aprenda do zero a criar um app para iOS e Android como um profissional"
      }
    }
  },
  created() {

  },
  methods: {

  }
};
</script>

<style scoped>
.home-page {
  width: 100%;
}

header {
  padding: 50px 0 45px;
}

header .title {
  font-size: 1.375rem;
  font-weight: 500;
}

header .subtitle {
  margin: 0;
  font-weight: 400;
  color: #848484;
  font-size: 1.125rem;
}
.j-c {
  display: flex;
  justify-content: center;
}
</style>
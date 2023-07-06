<template>
    <div class="card-course">
        <div class="card-item-top">
            <div class="card-cover">
                <picture>
                    <img :src="course.banner">
                </picture>
                <div class="play">
                    <i style="margin: 0; font-size: 1.4rem;" class="bi bi-play-fill">
                    </i>
                </div>
                <div v-show="course.isRecommended" class="metadata" :class="{
                    recommended: course.isRecommended
                }">
                    <div v-show="course.isRecommended" class="tag">
                        <span>RECOMENDADO</span>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div>
                    <div class="category">
                        <span>Desenvolvimento Web</span>
                    </div>
                    <h3 class="title">
                        <router-link :to="'/course/' + course.id">
                            {{ course.title }}
                        </router-link>
                    </h3>
                </div>

                <p class="educator">
                    Um curso de {{ course.createdBy.name }}
                </p>

                <h4 class="description">
                    {{ course.description }}
                </h4>

                <ul class="status">
                    <li class="stat">
                        <i class="bi bi-cart"></i>
                        <span>10018</span>
                    </li>
                    <li class="stat">
                        <i class="bi bi-heart"></i>
                        <span>1018</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-item-bottom">
            <div class="price">

            </div>
            <router-link class="btn" :to="'/course/' + course.id">
                <i class="bi bi-cart-plus-fill"></i>
                <span style="margin-right: 4px;">Comprar</span>
                <span class="price">
                    {{ course.price }} kz
                </span>
            </router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Course",
    props: {
        course: Object
    },
    methods: {

    }
};
</script>
  
<style scoped>
.card-course {
    display: flex;
    position: relative;
    min-width: 250px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
}

.card-item-bottom {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1rem 1rem;
}

.card-cover {
    display: block;
    width: 100%;
    background-color: #f2f2f2;
    position: relative;
    text-decoration: none;
}

.card-cover:before {
    display: block;
    content: "";
}

.play {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    font-size: 1rem;
    line-height: 40px;
    align-items: center;
    justify-content: center;
    color: #fff;
    transform: translate(-50%, -50%);
    background-color: rgba(22, 22, 22, .6);
    border-radius: 50%;
}

.metadata {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
}

.metadata.recommended {
    background-color: var(--primary);
}

.metadata.new {}

.metadata .tag {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    padding: 0 0.25rem;
    font-size: .6875rem;
    text-transform: uppercase;
    border-radius: 2px;
    font-weight: 500;
    line-height: 1.125rem;
    vertical-align: middle;
    color: #fff;
}

.card-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1rem 0.75rem;
}

.card-body .title {
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 78px;
    -webkit-line-clamp: 3;
    font-weight: 600;
}

.card-body .title a {
    font-size: 1.125rem;
    line-height: 1.5rem;
    transition: all .25s ease-in-out;
}
.title a:hover {
    transition: all .25s ease-in-out;
    color: var(--primary);
}

.card-body .educator {
    display: block;
    display: -webkit-box;
    font-size: .8125rem;
    line-height: 1.25rem;
    height: 18px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-body .description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    font-size: .80rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: #848484 !important;
}

.price {
    font-size: 1.125rem;
}

.category {
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    padding: 0 0.25rem;
    margin-bottom: 0.32rem;
    font-size: .6875rem;
    text-transform: uppercase;
    border-radius: 2px;
    font-weight: 500;
    line-height: 1.125rem;
    vertical-align: middle;
    color: #161616;
    border: 1px solid #d9d9d9;
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 1.5rem;
    font-weight: 600;
    border-radius: 2px;
    text-align: center;
    border: 0;
    text-decoration: none;
    transition: background-color .25s ease-in-out;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: inherit;
    line-height: 1.5rem;
    padding: 12px 16px;
    background-color: #00b2bd;
    color: #fff;
}
.btn:hover {
    background-color: #00838a;
}
.btn span {
    overflow: hidden;
    text-overflow: ellipsis;
}

.status {
    display: flex;
    align-items: center;
    margin-top: 0.5rem !important;
}

.status .stat {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    font-size: .8125rem;
    color: #848484;
    font-weight: 400;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

i {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 6px;
    font: normal normal normal 14px/1 predencio-icons;
    font-size: inherit;
    color: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

picture img {
    display: block;
    width: 100%;
    height: auto;
}
</style>
<template>
  <div>
    <Title class="top-shadow" />
    <Bar
    :title="activeProj.title"
    v-on:left="left()"
    v-on:right="right()"
    ></Bar>
    <View>
        <template v-slot:img>
            <Pagination
            :range="projects.length"
            :active="index"
            v-on:jump="jump($event)"
            >
                <div class="main top-shadow">
                    <ThumbView class="main__side"
                    v-on:activated="pictureIndex = $event"
                    :urls="activeProj.img"
                    ></ThumbView>
                    <ImgView
                    class="main__primary top-shadow"
                    :screenshot="getScreenshotType()"
                    :src="src"
                    :link="setLink()"
                    />
                </div>
            </Pagination>
        </template>
        <template v-slot:desc>
            <ProjectDescription>
                <template #desc>
                    <h2>About the Project:</h2>
                    <p>{{activeProj.description}}</p>
                </template>
                <template #tech>
                    <h2>Techniques Applied:</h2>
                    <ul>
                        <li v-for="(item, index) in activeProj.tech" :key="index">{{item}}</li>
                    </ul>
                </template>
                <template #cta>
                    <a :href="setLink()" target="_blank"><Button class="btn">see project</Button></a>
                    <a :href="activeProj.repository" target="_blank"><Button class="btn">see code</Button></a>
                </template>
            </ProjectDescription>
        </template>
    </View>
    <footer class="footer"></footer>
  </div>
</template>
<script>
import Bar from './components/Bar.vue'
import Button from './components/Button.vue'
import ImgView from './components/ImgView.vue'
import Name from './components/Name.vue'
import ProjectDescription from './components/ProjectDescription.vue'
import Title from './components/Title.vue'
import View from './components/View.vue'
import Pagination from './components/Pagination.vue'
import ThumbView from './components/ThumbView.vue'

import { projects } from './assets/projects'

export default {
  name: 'App',
  components: {
    Button,
    Name,
    Bar,
    ImgView,
    View,
    ProjectDescription,
    Title,
    Pagination,
    ThumbView,
  },
  data() {
    return {
        projects: projects,
        index: 0, // project to show
        pictureIndex: 0, // gallery pic to show
        devLinks: true, // force links to prod
    }
  },
  watch: {
    index() {
        this.pictureIndex = 0
    }
  },
  computed: {
    activeProj() {
        const p = this.projects[this.index]
        return p
    },
    src() {
        const p = this.activeProj
        if (this.pictureIndex > p.img.length) {
            this.pictureIndex = 0
        }
        return p.img[this.pictureIndex]
    }
  },
  methods: {
    left() {
        if (this.index === 0) this.index = this.projects.length - 1
        else this.index--
    },
    right() {
        if (this.index === this.projects.length - 1) this.index = 0
        else this.index++
    },
    jump(index) {
        this.index = index
    },
    setLink() {
        // hack for checking prod mode
        let url = this.activeProj.href
        if (this.devLinks) {
            return `https://sinjin25.github.io/${url}`
        }
        console.log('In dev mode')
        return `http://localhost:3000/${url}`
    },
    getScreenshotType() {
        const img = this.activeProj.img[this.pictureIndex]
        if (!img) return 'mobile view'
        if (img.search('mobile') === -1) return 'desktop view'
        return 'mobile view'
    }
  }
}
</script>

<style lang="scss">
.top-shadow {
    position: relative;
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0px 4px 5px 0px black;
        z-index: 2;
        pointer-events: none;
    }
}
.btn {
    margin: 0 auto;
    min-width: 5em;
}

a + a {
    margin-top: 1rem;
    display: inline-block;
    @media only screen and (min-width: 768px) {
        margin: 0;
        margin-left: 1em;
    }
}
.main {
    display: flex;
    &__primary {
        flex: 1 auto;
    }
    @media only screen and (min-width: 768px) {
        background: var(--dark);
        &__side {
            margin-left: auto;
        }
        &__primary {
            /* recenter after thumbnail pushses */
            /* padding-right: calc(0.5rem + 7rem)!important; */
            padding-right: calc(3rem + 7rem)!important;
            margin-right: auto;
            max-width: 650px;
        }
    }
}
/* stop browser scroll */
.footer {
    height: 200px;
    background: var(--dark);
}
</style>

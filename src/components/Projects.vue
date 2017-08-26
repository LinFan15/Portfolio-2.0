<template>
    <div id="carouselContainer">
        <carousel class="main-carousel"
          v-bind:autoplay="carousel.autoplay"
          v-bind:autoplayTimeout="carousel.autoplayTimeout"
          v-bind:autoplayHoverPause="carousel.autoplayHoverPause"
          v-bind:perPage="carousel.perPage"
          v-bind:scrollPerPage="carousel.scrollPerPage">
            <slide class="carousel-cell" v-for="project in projectsArray" v-bind:key="project.id">
                <object type="image/svg+xml" v-bind:data="project.img"  class="project-svg"></object>
                <br>
                <span class="introText projectTitle">{{ project.title }}</span>
                <span class="introText">{{ project.desc }}</span>
                <a class="project-link" v-bind:href="project.link">
                  <i class="devicon-github-plain colored"></i>
                </a>
            </slide>
        </carousel>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'projects',
  components: {
    Carousel,
    Slide
  },
  data: function () {
    return {
      projectsArray: [{id: 1, title: 'Project 1', desc: 'A Project', link: 'http://tweakers.net'}, {id: 1, title: 'Project 2', desc: 'A Project', link: 'http://xgn.nl'}, {id: 3, title: 'Project 3', desc: 'A Project', link: 'http://google.com'}],
      carousel: {autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true, perPage: 1, scrollPerPage: true}
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      axios.get('/api' + Router.currentRoute.path)
        .then(function (response) {
          // this.projectsArray = response.data
        })
    }
  }
}
</script>

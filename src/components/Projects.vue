<template>
    <div id="carouselContainer">
        <carousel class="main-carousel"
          v-bind:autoplay="carousel.autoplay"
          v-bind:autoplayTimeout="carousel.autoplayTimeout"
          v-bind:autoplayHoverPause="carousel.autoplayHoverPause"
          v-bind:perPage="carousel.perPage"
          v-bind:scrollPerPage="carousel.scrollPerPage"
          v-bind:loop="carousel.loop">
            <slide class="carousel-cell" v-for="project in projectsArray" v-bind:key="project.id">
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
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'projects',
  props: ['lang'],
  components: {
    Carousel,
    Slide
  },
  data: function () {
    return {
      projectsArray: [],
      carousel: {autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true, perPage: 1, scrollPerPage: true, loop: true}
    }
  },
  created: function () {
    if (this.lang === 'nl') {
      this.projectsArray = [{id: 1, title: 'Portfolio Website', desc: 'Deze website.', link: 'https://github.com/LinFan15/Portfolio'},
                        {id: 2, title: 'Automatisch Toetsen (P3P)', desc: 'Webapp gebouwd op Angular 4.x en VMWare Clarity voor het automatisch genereren van toetsen op basis van een pool met door de gebruiker gedefinieerde toetsvragen.', link: 'https://github.com/LinFan15/Automatisch_Toetsen/tree/Public-Release'},
                        {id: 3, title: 'Sudoku Solver', desc: 'Lost sudokus van verschillende grootte op met behulp van een backtracking algoritme.', link: 'https://github.com/LinFan15/SudokuSolver'},
                        {id: 4, title: 'Arduino Web Server', desc: 'Een simpele HTTP web server implementatie om GET en POST requests te kunnen verwerken op een arduino.', link: 'https://github.com/LinFan15/ArduinoWebServer'}]
    } else {
      this.projectsArray = [{id: 1, title: 'Portfolio Website', desc: 'This website.', link: 'https://github.com/LinFan15/Portfolio'},
                        {id: 2, title: 'Automatic Test Generation (P3P)', desc: 'Webapp built on Angular 4.x and VMWare Clarity which automatically generates tests from a pool of user-defined questions.', link: 'https://github.com/LinFan15/Automatisch_Toetsen/tree/Public-Release'},
                        {id: 3, title: 'Sudoku Solver', desc: 'Solves sudokus of varying sizes with the help of a backtracking algorithm.', link: 'https://github.com/LinFan15/SudokuSolver'},
                        {id: 4, title: 'Arduino Web Server', desc: 'A simple HTTP webserver implementation to handle GET and POST requests on an arduino.', link: 'https://github.com/LinFan15/ArduinoWebServer'}]
    }
  }
}
</script>

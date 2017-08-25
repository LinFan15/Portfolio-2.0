<template>
    <div id="paperTextContainer">
        <div class="paperHeading">
          <span>{{ skills.title }}</span>
          <hr>
        </div>
        <div class="paperContent">
          <div id="mainProgressContainer">
            <div class="progressContainer">
              <span class="introText">HTML/CSS</span>
            </div>
            <div class="progressContainer">
              <span class="introText">HTML/CSS</span>
            </div>
            <div class="progressContainer">
              <span class="introText">HTML/CSS</span>
            </div>
            <div class="progressContainer">
              <span class="introText">C#</span>
            </div>
            <div class="progressContainer">
              <span class="introText">HTML/CSS</span>
              <progress class="skillProgress" value="22" max="100"></progress>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'home',
  data: function () {
    return {
      skills: {}
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      axios.get('/api' + Router.currentRoute.path)
        .then(function (response) {
          this.pageData = response.data
          this.homeText = this.pageData.text
        }.bind(this))
    }
  }
}
</script>

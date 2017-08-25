<template>
    <div id="paperTextContainer">
        <div class="paperHeading">
          <span>{{ profile.title }}</span>
          <hr>
        </div>
        <div class="paperContent">
          <img id="faceImg" v-bind:src="profile.img">
          <p class="paperText">{{ profile.text }}</p>
        </div>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'profile',
  data: function () {
    return {
      profile: {}
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      axios.get('/api' + Router.currentRoute.path)
        .then(function (response) {
          this.profile = response.data
        }.bind(this))
    }
  }
}
</script>

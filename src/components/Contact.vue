<template>
    <div id="paperTextContainer">
        <div class="paperHeading">
          <span>{{ contact.title }}</span>
          <hr>
        </div>
        <div class="paperContent">
          <img id="faceImg" v-bind:src="contact.img">
          <p class="paperText">{{ contact.text }}</p>
        </div>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'contact',
  data: function () {
    return {
      contact: {}
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
          this.contactText = this.pageData.text
        }.bind(this))
    }
  }
}
</script>

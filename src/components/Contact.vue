<template>
    <div id="paperTextContainer">
        <div class="paperContent">
          <img class="paperImg" src="/static/img/me.png">
          <p class="paperText">Please send all inquiries to <a href="mailto:mail@yako.me">this email address</a>.</p>
          </p>
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

<template>
    <div id="paperTextContainer">
        <div class="paperHeading">
          <span>{{ disclaimer.title }}</span>
          <hr>
        </div>
        <div class="paperContent">
          <p class="paperText">{{ disclaimer.text }}</p>
        </div>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'disclaimer',
  data: function () {
    return {
      disclaimer: {}
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
          this.disclaimerText = this.pageData.text
        }.bind(this))
    }
  }
}
</script>

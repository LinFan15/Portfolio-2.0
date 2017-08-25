<template>
    <div id="paperTextContainer">
        <p class="paperText">{{ home.text }}</p>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'home',
  data: function () {
    return {
      home: {}
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

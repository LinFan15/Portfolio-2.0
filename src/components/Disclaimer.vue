<template>
    <div id="paperTextContainer">
        <div class="paperContent">
          <p class="paperText">User and briefcase icons made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</p>
            <hr>
          <p class="paperText">Favicon and clipboard icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
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

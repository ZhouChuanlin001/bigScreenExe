import Vue from 'vue'
let vm = new Vue()
let utils = {}
utils.install = function (vm, options) {
  vm.prototype.dateTimeToString =
    function dateTimeToString (date) {
      var y = date.getFullYear()
      var M = date.getMonth() + 1
      var d = date.getDate()
      var H = date.getHours()
      var m = date.getMinutes()
      var s = date.getSeconds()
      return y + '-' + (M < 10 ? ('0' + M) : M) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + (H < 10 ? ('0' + H) : H) + ':' + (m < 10 ? ('0' + m) : m) + ':' + (s < 10 ? ('0' + s) : s)
    }
}

export default utils

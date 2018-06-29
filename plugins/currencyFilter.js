import Vue from 'vue'
import numeral from 'numeral'
Vue.filter('price', value => numeral(value).format('0.00'))

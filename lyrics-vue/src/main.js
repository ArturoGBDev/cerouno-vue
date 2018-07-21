// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import NewSong from './components/NewSong'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)

const routes = [
	{
		path:  '/songs', component: App
	},
	{
		path:  '/songs/new', component: NewSong
	},
]

const router = new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})

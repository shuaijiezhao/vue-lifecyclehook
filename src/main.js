// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Resource from 'vue-resource'
Vue.use(Resource)

let url = 'http://rap.taobao.org/mockjsdata/11037/slide/listSlides.do'


Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  // 如果这里没有写el，后面要用mount挂载app
  // el: '#app',  
  components: { App },
  // template: '<App/>',
  data: {
  	msg: 'lifecycle',
  	imgs: null,
  	arr: [11,12,13]
  },
  methods: {
  	getLists () {
  		this.$http.post(url).then(res => {
  			this.imgs = res.data.data.slideList
  		})
  	},
  	init () {}
  },
  beforeCreate () {
  	// console.log('beforeCreate', this.msg, this.getLists())
  },
  // 异步数据的请求适宜在created的钩子中调用,初始化
  created () {
  	// console.log('created: ', this.msg, this.getLists())
  	this.getLists()
  	this.init()
  	// console.log('created: ', document.querySelectorAll('li').length)
  	setTimeout(() => {
  		this.arr = [4,5,6,7,8]
  		this.$nextTick(() => {
  			console.log('nextTick: ', document.querySelectorAll('li').length)
  		})
  	},0)
  	setTimeout(() => {
  		this.arr = [14,15,16,17,18,19,20]
  		this.$nextTick(() => {
  			console.log('nextTick: ', document.querySelectorAll('li').length)
  		})
  	},1000)
  },
  beforeMount () {
  	// console.log('boforeMount: ', document.querySelectorAll('li').length)
  },
  // 初始数据的dom渲染完毕，可以获取dom节点
  mounted () {
  	// console.log('mounted: ', document.querySelectorAll('li').length)
  },
  beforeUpdate () {

  },
  // 数据更新完毕：如果对数据更新做统一处理，在updated钩子中处理即可，
  // 如果想分开区别不同的数据更新，同时对dom操作，使用nextTick函数处理
  updated () {
  	console.log('updated: ', document.querySelectorAll('li').length)
  },
  beforeDestroy () {
  	console.log('beforeDestroy')
  },
  destroyed () {
  	console.log('destroyed')
  },
  activated () {

  },
  deactivated () {

  },
  // 对具体某个数据变化可以统一处理
  watch: {
  	'arr': function () {}
  }
})
vm.$mount('#app')
vm.$destroy()



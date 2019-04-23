import Vue from 'vue'
import App from './App.vue'
import Nav from './Nav.vue'
import articlelist from './components/Articlelist.vue'
import Article from './components/Article.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



Vue.config.productionTip = false


const router = new VueRouter({
  routes:[
    {
      path:"*",
      component: articlelist
    },
    {
      path: "/:id",
      component: Article
    }
  ]
  //routes // (缩写) 相当于 routes: routes
})

var app=new Vue({
  router,
  render: h => h(App),
  /*data:{
    weather:null,
    articlesList:null,
    friends:null
  },*/
  methods:{
    load(url,fx){
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        fx(data);
        window.console.log(this);
      }.bind(this);
      xhr.send();
      
    }
  },
  created(){
    //this.load("http://weather.tools.largeq.cn/weather.php",function(){this.weather});
    //this.load("/List/0", function () { this.articlesList });
    //this.weather = [{ "id": "0", "name": "宝山", "state1": "1", "state2": "0", "weather": "错误", "tem1": "18", "tem2": "8", "temNow": "14", "windState": "错误", "windDir": "错误", "windPower": "错误", "humidity": "63%", "time": "09:00", "timeline": "1555035435" }]
    //window.console.log(this.weather)
  }
}).$mount('#app')

new Vue({
  render: h => h(Nav),
  
}).$mount('#nav')

//这几行代码就是为了消掉编辑器因变量未使用而引起的报错。我有强迫症。
app;




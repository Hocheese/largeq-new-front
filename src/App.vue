<template>
  <div id="app" class="center">
    <router-view></router-view>
    <!--articlelist></articlelist-->
    <aside>
      <div class="div_block">
        <div><p>{{getWeather("宝山").name}} {{getWeather("宝山").weather}}</p></div>
        <div><h1>{{getWeather("宝山").temNow}}℃</h1></div>
        <div><p>{{getWeather("宝山").windDir}}{{getWeather("宝山").windPower}},空气湿度{{getWeather("宝山").humidity}}</p></div>
      </div>

      <div class="div_block">
        <h2>战略合作伙伴</h2>
        <ul>
          <li v-for="link in friends" v-if="link!=null" :key="link.id"><a :href="'http://'+link.url">{{link.name}}</a></li>
        </ul>
      </div>

      <div class="div_block">
        <h2>打赏小青青</h2>
        <img src="./assets/pay.png" width="100%" alt="支付就用支付宝">
      </div>
    </aside>
  </div>
</template>

<script>
import articlelist from './components/Articlelist.vue'
import ajax from './lib/ajax.js'

export default {
  name: 'app',
  components: {
    articlelist
  },
  data(){
      return {
        weather:[
          {"id":"0","name":"错误","state1":"1","state2":"0","weather":"错误","tem1":"18","tem2":"8","temNow":"14","windState":"错误","windDir":"错误","windPower":"错误","humidity":"63%","time":"09:00","timeline":"1555035435"},
        ],
        friends:[
          {"id":"1","name":"\u6613\u6d4b","url":"etest.xyz"},
          {"id":"2","name":" LargeQ\u7684\u77e5\u4e4e\u4e3b\u9875","url":"www.zhihu.com\/people\/LargeQ"},
          {"id":"3","name":"\u660c\u7ef4\u7684\u535a\u5ba2","url":"blog.changwei.me\/"},
          null
        ],

      }
  },
  methods:{
    getWeather( district){
      let obj=null;
      for(let i in this.weather){
        if(this.weather[i].name===district){
          obj=this.weather[i];
        }
        
      }
      //console.log(this.weather)
        //console.log(obj);
      if(obj===null&&district!="宝山"){
        return this.getWeather("宝山");
      }
      if(obj===null&&district==="宝山"){
        return {"id":"0","name":"error","state1":"0","state2":"0","weather":"error","tem1":"0","tem2":"0","temNow":"0","windState":"error","windDir":"error","windPower":"error","humidity":"0%","time":"08:00","timeline":"0"};
      }
      return obj;

    },
    load:ajax
  },
  mounted(){
    ajax("http://weather.tools.largeq.cn/weather.php",function(data){
      this.weather=JSON.parse(data)
    }.bind(this))
    /*let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://weather.tools.largeq.cn/weather.php");
      xhr.onload = function () {
        this.weather = JSON.parse(xhr.responseText);
        //window.console.log(this);
      }.bind(this);
      xhr.send();*/
    //this.load("http://weather.tools.largeq.cn/weather.php",function(){this.weather});
    //this.weather = [{ "id": "0", "name": "宝山", "state1": "1", "state2": "0", "weather": "错误", "tem1": "18", "tem2": "8", "temNow": "14", "windState": "错误", "windDir": "错误", "windPower": "错误", "humidity": "63%", "time": "09:00", "timeline": "1555035435" }]
  }
}
</script>

<style>

#app {
  display: flex;
  text-align: center;
  margin-top: 60px;
}
article{
  width: 60%;
  margin-right: 5%;
}
aside{
  width: 30%;
  margin-left: 5%;
}
h1{
  font-size: 72px;
}
.div_block{
  padding: 12px;
}
@media screen and (max-width: 740px) {
  #app{
    flex-direction: column;
  }
  article{
    width: 96%;
    margin: auto;
  }
  aside{
    width: 96%;
    margin: auto;
  }
}

</style>

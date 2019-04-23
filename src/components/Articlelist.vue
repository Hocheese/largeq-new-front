<template>
  <article>
    <!--div class="div_block">
      <div class="article_covers">
        <div class="covers_img"><img src="../assets/img.png" alt=""></div>
        <div class="covers_cover">&nbsp;</div>
        <div class="covers_title"><a href="#"><h2>文章标题</h2></a></div>
      </div>
      <div class="article_summary">
        <a href="#">
          <div class="summary_text">摘要摘要</div>
          <div class="author_info"><p>IVEN 发表于 2019-07-01 08：00：00</p></div>
        </a>
        
      </div>
    </div-->
    
    <articlelink 
      v-for="article in articlesList" 
      v-if="article!=null" 
      :key="article.id"
      :id="article.id"
      :title="article.title"
      :timeline="article.timeline"
      :username="article.author.username">{{article.text}}</articlelink>
      <div class="div_block" @click="load">
        加载更多
      </div>
  </article>
</template>

<script>
import articlelink from './Articlelink.vue'
import ajax from '../lib/ajax.js'

export default {
  name: 'articlelist',
  components:{
    articlelink
  },
  data(){
      return {
        articlesList:[
          {"id":"0","title":"关于小青青的秘密基地发生故障的情况说明","text":"由于前端与服务器的通讯发生故障，导致网页无法显示内容。现有关部门正在组织人员进行全力抢修。相关部门领导火速赶往现场，指导抢修工作。","timeline":(new Date()).toString(),"uid":"1","password":"","author":{"username":"小青青的秘密基地前端负责同志"}},
        ],
        p:0
      }
    
  },
  created(){
    this.load("/List/"+this.p,function(data){
      if(this.p==0){
          this.articlesList = JSON.parse(data);
        }else{
          this.articlesList = this.articlesList.concat(JSON.parse(data));
        }
        this.p++;
    }.bind(this));
  },
  methods: {
    load:ajax,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


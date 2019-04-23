<template>
    <div class="div_block">
      <div class="article_covers">
        <div class="covers_img"><img src="../assets/img.png" alt="马克思 恩格斯 列宁 斯大林"></div>
        <div class="covers_cover">&nbsp;</div>
        <div class="covers_title"><router-link :to="'/'+id"><h2>{{title}}</h2></router-link></div>
      </div>
      <div class="article_summary">
        <router-link :to="'/'+id">
          <div class="summary_text"><slot></slot></div>
          <div class="author_info"><p>{{username}} 发表于 {{timeline}}</p></div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
    name:"Articlelink",
    props:["title","timeline","username","id"]
}
</script>
<style scoped>
.div_block{
  padding: 0;
}
.article_covers{
  height: 300px;
  overflow: hidden;
  display: flex;
}
.covers_cover{
  width: 100%;
  height: initial;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) 72%, black);
  margin-left: -100%;
}
.covers_title,.covers_img,img{
  width: 100%;
}
.covers_title{
  margin-left: -100%;
  height: initial;
  font-family: yao;
  
}
.covers_title a{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  transition: 2s;
}
a:hover{
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}
h2{
  margin: 0.83em;
  font-weight: normal;
}
.summary_text{
  font-family: "仿宋";
  padding: 0.83em;
  text-align: left;
}
@media screen and (max-width: 480px){
    .article_covers{
        height: initial;
    }
}
</style>
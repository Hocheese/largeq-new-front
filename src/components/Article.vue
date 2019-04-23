<template>
    <article>
        <div class="div_block">
            <div class="covers_img"><img src="../assets/img.png" alt="全世界无产者联合起来！" width="100%"></div>
            <div>
                <div><h2>{{article.title}}</h2></div>
                <div class="text">{{article.text}}</div>
            </div>
        </div>

    </article>
</template>

<script>
import ajax from '../lib/ajax.js'

export default {
    props:["id"],
    data(){
        return {
            article:{
                title:"正在加载...",
                text:"正在加载..."
            }
        }
    },
    mounted(){
            //
            ajax("/Article/"+this.$route.params.id,function (data) {
                try{
                    this.article = JSON.parse(data);
                }catch(e){
                    this.article.title="关于小青青的秘密基地发生故障的情况说明";
                    this.article.text=`由于前端与服务器的通讯发生故障，导致网页无法显示内容。
                    基地立即启动了应急预案，组织人员进行全力抢修，同时成立了调查组。
                    相关部门领导火速赶往现场，指导抢修工作。
                    上级就此事件做出重要指示：要彻查故障原因，并全力抢修，将故障的损失降至最低；要举一反三，避免此类故障再次发生。
                    经初步调查，故障原因是由于系统抛出以下异常所导致的：`+e.message
                    throw new Error("JSON解析失败："+e.message)
                }
                
            }.bind(this))
        
        
    },
}
</script>

<style scoped>
h2{
    font-family: "yao";
    font-weight: normal;
}
.text{
    font-family: "仿宋";
}
</style>


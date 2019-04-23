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
export default {
    props:["id"],
    data(){
        return {
            article:{
                title:"关于小青青的秘密基地发生故障的情况说明",
                text:`"由于前端与服务器的通讯发生故障，导致网页无法显示内容。
                现有关部门正在组织人员进行全力抢修。
                相关部门领导火速赶往现场，指导抢修工作。
                上级就此事件做出重要指示：要全力排查故障，及时抢修，将故障的损失降至最低。"`
            }
        }
    },
    mounted(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/Article/"+this.$route.params.id);
        xhr.onload = function () {
            this.article = JSON.parse(xhr.responseText);
            this.article
        }.bind(this);
        xhr.send();
    }
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


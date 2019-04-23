<template>
    <nav>
        <div class="center">
            <div id="logo">
                <a href="/">
                    <img src="./assets/logo.png" width="36" height="36">
                    小青青的秘密基地
                </a>
                <button @click="change">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div id="nav_bar" v-bind:style="style">
                <ul>
                    <li><a href="http://tools.largeq.cn">工具箱</a></li>
                    <li><a href="http://www.etest.xyz">易测</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
export default {
    data(){
        return {
            navDisplay:true,
            style:{
                display:"flex"
            }
        }
    },
    methods: {
        change(){
                this.navDisplay=!this.navDisplay;
                //window.console.log(this.navDisplay)
                if(window.innerWidth<=480){
                    if(this.navDisplay){
                        this.style= {display:"flex"};
                    }else{
                        this.style= {display:"none"};
                    }
                }else{
                    this.style= {display:"flex"};
                }
        },
        /*isDisplay(){
            if(window.innerWidth<=480){
                if(navDisplay){
                    return {display:"flex"};
                }else{
                    return {display:"none"};
                }
            }else{
                return {display:"flex"};
            }
            //console.log(window.innerWidth)
        }*/
    },
    mounted(){
        this.change()
    }
}
</script>

<style scoped>
img{
    display: block;
}
nav{
    width: 100%;
    background-color: #e40001;
    position: sticky;
    top: 0;
    padding: 12px;
    font-family: "微软雅黑";
}
nav a{
    display: flex;
}
ul{
    display: flex;
    margin: 0;
}
li{
    margin: 7px;
    list-style: none;
}
#logo{
    font-size: 24px;
}
.container{
    width: 100%;
}
button{
    display: none;
}
@media screen and (max-width: 480px){
    #logo{
        display: flex;
        justify-content: space-between;
    }
    .center{
        flex-direction: column;
    }
    button{
        display: block;
        height: 36px;
        width: 36px;
        background-color: inherit;
        border: 2px red solid;
        border-radius: 2px;
    }
    button span{
        display: block;
        border: 1px red solid;
        margin: 3px auto 4px auto;
    }
    #nav_bar{
        display: none;
        transition: 2s;
    }
}
</style>


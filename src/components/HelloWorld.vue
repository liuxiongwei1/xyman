<template>
    <div class="helloWord">
        <div class="window"><router-view/></div>
        <ul>
            <li>
                <router-link to='/home'>
                    <div><img src="/static/images/home/homeicon.png" alt=""></div>
                    <div>推荐</div>
                </router-link>
            </li>
            <li>
                <router-link to='/classify'>
                    <div><img src="/static/images/home/classicon.png" alt=""></div>
                    <div>分类</div>
                </router-link>
            </li>
            <li>
                <router-link :to='myche'>
                    <div><img src="/static/images/home/icon.png" alt=""></div>
                    <div>购物车</div>
                </router-link>
            </li>
            <li>
                <router-link :to='myth'>
                    <div><img src="/static/images/home/myicon.png" alt=""></div>
                    <div>我的XY</div>
                </router-link>
            </li>
         </ul>
    </div>
</template>

<script>
    if(!localStorage.getItem('my')){
        localStorage.setItem('my','/entry');
        localStorage.setItem('myche','/entry');
    }
   
    export default {
        data(){
            return{
                myth:localStorage.getItem('my'),
                myche:localStorage.getItem('myche')
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
    }
  .helloWord{
    max-width: 600px;
    width: 100%;
    margin: auto;
    ul{
        position: fixed;
        bottom:0;
        right: -50%;
        transform: translate(-50%);
        max-width: 600px;
        width: 100%;
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        background-color: #333333;
        li{
            width: 25%;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 5px;
            img{
                margin: auto;
                width: 25px;
                height: 25px;
            } 
            a{
                width: 25%;
                color: #ffffff;
                text-decoration: none;
                font-size: 10px;
            }   
        }
    }
    .window{
        max-width: 600px;
        width: 100%;
        overflow: auto;
    }
  }
</style>

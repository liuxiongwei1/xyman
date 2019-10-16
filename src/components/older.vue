<template>
	<div class="older">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">订单列表</div>
			<div></div>
		</header>
		<ul>
			<router-link tag='li' to='/complete'>全部</router-link>
			<router-link tag='li' to='/older'>待付款</router-link>
			<router-link tag='li' to='/older'>进行中</router-link>
			<router-link tag='li' to='/older'>已完成</router-link>
			<router-link tag='li' to='/older'>取消</router-link>
		</ul>
		<router-view/>
	</div>
</template>
<script>
	export default{
		methods:{
			regret(){
				history.back()
			},
		}
}
</script>
<style lang="less">
	.router-link-active{
			background-color:orange;
		}
    .older{
    	width:600px;
    	margin: auto;
    	header{
			position: fixed;
			top: 0px;
			background-color: white;
			width: 600px;
			height: 50px;
			display: flex;
			justify-content: space-between;
			div{
				width: 50px;
				height: 50px;
				img{
					margin-top: 10px;
					width: 30px;
					height:30px;
				}
			}
			.headline{
				width: 160px;
				height:40px;
				line-height: 40px;
				font-size: 30px;
				img{
					width: 30px;
					height: 30px;
					margin-bottom: -5px;
					margin-right: 10px;
				}
			}
		}
		ul{
			margin-top: 60px;
			width: 600px;
			list-style-type: none;
			padding: 0;
			display: flex;
			border-top:1px solid #cccccc;
			border-bottom: 1px solid #cccccc; 
			li{
				width: 120px;
				height:60px;
				line-height: 60px;
				font-size: 25px;
				text-align: center;
			}
		}
    }
</style>
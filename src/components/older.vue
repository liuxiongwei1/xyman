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
		<footer><router-view/></footer>
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
<style lang="less" scoped>
	.router-link-active{
			background-color:orange;
		}
    .older{
    	max-width:600px;
    	width: 100%;
    	margin: auto;
    	header{
			position: fixed;
			top: 0;
			left: 50%;
			transform: translate(-50%);
			background-color: white;
			max-width: 600px;
			width: 100%;
			height: 2rem;
			display: flex;
			justify-content: space-between;
			div{
				width: 3rem;
				height: 3rem;
				img{
					margin-top: 0.5rem;
					width: 1.5rem;
					height:1.5rem;
				}
			}
			.headline{
				width: 6rem;
				height:3rem;
				line-height: 3rem;
				font-size:1rem;
				img{
					width: 1.3rem;
					height: 1.3rem;
					margin-bottom: -0.3rem;
					margin-right: 0.3rem
				}
			}
		}
		ul{
			margin: 0;
			padding: 0;
			margin: auto;
			margin-top: 3rem;
			max-width: 600px;
			width: 100%;
			list-style-type: none;
			display: flex;
			border-top:1px solid #cccccc;
			border-bottom: 1px solid #cccccc; 
			li{
				width: 20%;
				height:3rem;
				line-height: 3rem;
				font-size: 1rem;
				text-align: center;
			}
		}
		footer{
			max-width:600px;
			width: 100%;
		}
    }
</style>
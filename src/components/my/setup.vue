<template>
	<div class="setup">
		<router-link tag='div' to='/' class="toHome"><img src="/static/images/my/home.svg" alt=""></router-link>
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">设置</div>
			<div></div>
		</header>
		<ul>
			<router-link tag='li' to='/revisepassword'>修改密码</router-link>
			<li @click='leave'>退出登录</li>
			<router-link tag='li' to='/about'>关于</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		methods:{
			regret(){
				history.back()
			},
			leave(){
				localStorage.setItem('my','/entry');
				localStorage.setItem('entryStatus','false');
				localStorage.setItem('myche','/entry');
				open("http://localhost:8080/#/home","_self");
			}
		}
}
</script>
<style lang='less' scoped>
	.setup{
		width: 100vw;
		background-color:#e7e7e7;
		height: 100vh;
		padding-top: 20px; 
		.toHome{
			width: 2rem;
			height: 2rem;
			border-radius:2rem;
			background-color: #737373;
			position: fixed;
			top:50%;
			left: 10px;
			img{
				margin-left:1px;
				margin-bottom: 5px;
				width: 2rem;
				height: 2rem;
			}
		}
		header{
			top: 2rem;
			background-color: white;
			max-width: 600px;
			width: 90%;
			height: 2.5rem;
			margin: auto;
			display: flex;
			justify-content: space-between;
			div{
				width: 2.5rem;
				height: 2.5rem;
				line-height:3rem; 
				img{
					width: 1.5rem;
					height:1.5rem;
				}
			}
			.headline{
				width: 6rem;
				height:2.5rem;
				line-height: 2.5rem;
				font-size: 1.3rem;
				img{
					width: 1.3rem;
					height: 1.3rem;
					margin-bottom: -0.25rem;
					margin-right: 0.2rem;
				}
			}
			.isSure{
				height: 2rem;
				width: 2rem;
			}
		}
		ul{
			max-width: 600px;
			width: 90%;
			margin: auto;
			list-style-type: none;
			padding: 0;
			li{
				height:2.5rem;
				font-size: 1rem;
				line-height: 2.5rem;
				padding-left: 5px;
				background-color: white;
				margin-top: 20px;
				background-image: url(/static/images/my/right.svg);
				background-repeat: no-repeat;
				background-size: 25px;	
				background-position: right; 
			}
		}
	}
</style>
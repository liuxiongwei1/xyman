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
<style lang='less'>
	.setup{
		width: 100vw;
		background-color:#e7e7e7;
		height: 100vh;
		padding-top: 20px; 
		.toHome{
			width: 50px;
			height: 50px;
			border-radius:50px;
			background-color: #737373;
			position: fixed;
			top:50%;
			left: 10px;
			img{
				margin-left:1px;
				margin-bottom: 5px;
				width: 50px;
				height: 50px;
			}
		}
		header{
			max-width: 600px;
			margin:  auto;
			height: 50px;
			display: flex;
			justify-content: space-between;
			background-color: white;
			div{
				width: 50px;
				height: 50px;
				img{
					margin-bottom: -30px;
					width: 30px;
					height:30px;
				}
			}
			.headline{
				width: 140px;
				height:40px;
				line-height: 50px;
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
			max-width: 600px;
			margin: auto;
			list-style-type: none;
			padding: 0;
			li{
				height:50px;
				font-size: 25px;
				line-height: 50px;
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
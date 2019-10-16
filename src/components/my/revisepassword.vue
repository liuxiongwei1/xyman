<template>
	<div class="revisepassword">
		<router-link tag='div' to='/' class="toHome"><img src="/static/images/my/home.svg" alt=""></router-link>
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">修改密码</div>
			<div></div>
		</header>
		<section>
			<div>原密码<input type="text" placeholder="输入原密码"></div>
			<div>新密码<input type="text" placeholder="输入新密码"></div>
		</section>
		<footer><input type="button" value="保存"></footer>
	</div>
</template>
<script>
	export default{
		methods:{
			regret(){
				history.back()
			}
		}
}
</script>
<style lang='less' scoped>
	.revisepassword{
		width: 800px;
		margin: auto;
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
			width: 700px;
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
				width: 160px;
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
		section{
			width: 700px;
			margin-top: 5px;
			margin: auto;
			div{
				height: 60px;
				font-size: 20px;
				input{
					background-color: white;
					width: 600px;
					height: 50px;
					font-size: 20px;
					margin-left:10px;
					border:none;
					outline:none;
				}
			}
		}
		footer{
			width: 700px;
			margin: auto;
			input{
				height: 50px;
				width: 700px;
				font-size: 30px;
				background-color: orange;
				text-align: center;
				color: white;
				border:none;
			}
		}
		
	}
</style>
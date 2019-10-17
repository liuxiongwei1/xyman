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
		width: 100vw;
		height: 100vw;
		margin: auto;
		.toHome{
			width: 2rem;
			height: 2rem;
			border-radius:2rem;
			background-color: #737373;
			position: fixed;
			top:50%;
			left: 1%;
			img{
				margin-left:1px;
				margin-bottom: 5px;
				width: 2rem;
				height: 2rem;
			}
		}
		header{
			position: fixed;
			top: 0%;
			background-color: white;
			max-width: 600px;
			width: 100%;
			height: 2.5rem;
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
				width: 7rem;
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
		section{
			max-width: 600px;
			width: 90%;
			padding-top: 3rem;
			margin: auto;
			div{
				height: 60px;
				font-size: 20px;
				input{
					background-color: white;
					max-width: 600px;
					height: 80%;
					font-size: 20px;
					margin-left:10px;
					border:none;
					outline:none;
				}
			}
		}
		footer{
			max-width: 600px;
			width: 90%;
			margin: auto;
			input{
				height: 3rem;
				width: 100%;
				font-size: 1.5rem;
				background-color: orange;
				text-align: center;
				color: white;
				border:none;
			}
		}
		
	}
</style>
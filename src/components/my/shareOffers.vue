<template>
	<div class="shareOffers">
		<router-link tag='div' to='/' class="toHome"><img src="/static/images/my/home.svg" alt=""></router-link>
		<div class='picture'>
			<img src="/static/images/my/share.png" alt="">
		</div>
		<div>
			你的优惠码
			<div>kkkkk</div>
		</div>
		<div class='picture'>
			<img src="/static/images/my/click.png" alt="">
		</div>
	</div>
</template>
<script>
	export default{
}
</script>
<style lang="less" scoped>
	.shareOffers{
		padding-top: 20px;
		background-image: url(/static/images/my/sharebg.jpg);
		background-repeat: no-repeat;
		background-size: 100vw 100vh;
		height: 100vh;
		width: 100vw;
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
		.picture{
			text-align: center;
			margin: auto;
			max-width: 600px;
			img{
				max-width:600px; 
			}
		}
		.picture+div{
			width: 100px;
			color:white;
			margin: 20px auto 0;
			text-align: center;
			div{
				margin-top: 5px;
				margin-bottom: 10px;
				border:1px solid white;
				border-radius:2px;
				text-align: center;
				width: 100px;
				height: 50px;
				line-height: 50px;
				color:yellow;
				font-size: 25px;
			}
		}
	}
</style>
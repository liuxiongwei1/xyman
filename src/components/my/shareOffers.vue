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
		padding-top: 2rem;
		background-image: url(/static/images/my/sharebg.jpg);
		background-repeat: no-repeat;
		background-size: 100vw 100vh;
		height: 100vh;
		width: 100vw;
		.toHome{
			width: 3rem;
			height: 3rem;
			border-radius:3rem;
			background-color: #737373;
			position: fixed;
			top:50%;
			left: 1%;
			img{
				width: 3rem;
				height: 3rem;
			}
		}
		.picture{
			text-align: center;
			margin: auto;
			max-width: 600px;
			width: 90%;
			img{
				max-width:600px;
				width: 90%; 
			}
			&:last-child{
				width: 20%;
			}
		}
		.picture+div{
			width: 6rem;
			color:white;
			margin: 1rem auto 0;
			text-align: center;
			div{
				margin-top: 0.4rem;
				margin-bottom: 0.8rem;
				border:0.05rem solid white;
				border-radius:0.2rem;
				text-align: center;
				width: 6rem;
				height: 3rem;
				line-height: 3rem;
				color:yellow;
				font-size: 1.4rem;
			}
		}
	}
</style>
<template>
	<div class="my">
		<header>
			<div class='mytitle'>
				<img src="/static/images/my/1.png" alt=""> 我的XY
			</div>
			<div class="myname">
				<div></div>
				<p>你的名字</p>
			</div>
			<ul>
				<router-link tag='li' to='/setup'>
					<img src="/static/images/my/01.png" alt="">
					<div>设置</div>
				</router-link>
				<router-link tag='li' to='/coupon'>
					<img src="/static/images/my/02.png" alt="">
					<div>优惠券</div>
				</router-link>
				<router-link tag='li' to='/shareOffers'>
					<img src="/static/images/my/03.png" alt="">
					<div>分享优惠</div>
				</router-link>
				<router-link tag='li' to='/older'>
					<img src="/static/images/my/04.png" alt="">
					<div>订单</div>
				</router-link>
			</ul>
		</header>
		<section>
			<router-link tag='div' to='/collect'>单品收藏</router-link>
			<router-link tag='div' to='/concern'>品牌关注</router-link>
		</section>
		<footer>
			<router-view />
		</footer>
	</div>
</template>
<script>
	export default{
}
</script>
<style lang="less">
	.my{
		margin: auto;
		width: 600px;
		header{
			text-align: center;
			font-size: 20px;
			.mytitle{
				width: 600px;
				border-bottom: 2px solid #e9e9e9;
				height: 40px;
				img{
					width: 30px;
					height: 30px;
					margin-bottom: -10px;
					margin-right: 10px;
				}
			}
			.myname{
				div{
					width: 100px;
					height: 100px;
					border-radius: 50px;
					margin: 20px auto 0;
					background-image: url(/static/images/my/2.gif);
					background-repeat: no-repeat;
					background-size: 100px 100px;
				}
				
				
			}
			ul{
				padding: 0;
				width: 600px;
				border-top: 1px solid #d9d9d9;
				list-style-type: none;
				display: flex;
				justify-content: space-around;
				padding-top: 10px;
				li{
					border-right: 4px solid #d9d9d9;
					padding-right: 50px;
					padding-left: 5px;
					&:last-child{
						border-right: none;
						padding-right: 5px;
					}
					div{
						text-align: center;
					}
				}
			}
		}
		section{
			display: flex;
			justify-content: space-around;
			font-size: 30px;
			margin-top:20px;
			div{
				width: 400px;
				text-align: center;
			}
			.router-link-active{
				color: orange;
				border-bottom: 4px solid orange;
			}
		}
	}
</style>
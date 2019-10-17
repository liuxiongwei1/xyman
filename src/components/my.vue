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
			<router-link tag='div' to='/collect' exact>单品收藏</router-link>
			<router-link tag='div' to='/concern' exact>品牌关注</router-link>
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
<style lang="less" scoped>
	.my{
		margin: auto;
		max-width: 600px;
		width: 100%;
		header{
			width: 100%;
			text-align: center;
			font-size: 16px;
			.mytitle{
				width: 100%;
				border-bottom: 2px solid #e9e9e9;
				height: 2rem;
				img{
					width: 1rem;
					height: 1rem;
				}
			}
			.myname{
				div{
					width: 4rem;
					height: 4rem;
					border-radius: 2rem;
					margin: 1rem auto 0;
					background-image: url(/static/images/my/2.gif);
					background-repeat: no-repeat;
					background-size: 100% 100%;
				}
				p{
					margin-top: .5rem;
				}
			}
			ul{
				border-top: 0.05rem solid #5a7fa2;
				padding: 0;
				padding-top:1rem;
				list-style-type: none;
				display: flex;
				justify-content: space-around;
				li{
					width: 25%;
					border-right: 0.05rem solid #5a7fa2;
					border-left: 0.05rem solid #5a7fa2;
					font-size: 1rem;
					&:first-child{
						border-left:1px solid transparent;
					}
					&:last-child{
						border-right: 1px solid transparent;
					}
					img{
						width: 1.3rem;
						height: 1.3rem;
					}
				}
			}
		}
		section{
			width: 100%;
			display: flex;
			div{
				width: 50%;
				text-align: center;
				font-size: 1.1rem;
			}
		}
		.router-link-active{
				color: orange;
				background-color: white;
				border-bottom: 0.1rem solid orange;
			}
	}
</style>
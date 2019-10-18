<template>
	<div class="coupon">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">我的优惠券</div>
			<div></div>
		</header>
		<div :class="isClassB?classB:classA">
			<input type="text" placeholder="请输入兑换码"><input type="button" value='兑换'>
		</div>
		<ul>
			<li>
				<div>
					<h1>&yen;9</h1>
					<div>满90减9</div>
					<div>2019-01-18到2019-02-11</div>
				</div>
				<p>好好过年 坐等惊喜</p>
				<footer>已结束</footer>
			</li>
			<li>
				<div>
					<h1>&yen;10</h1>
					<div>满100减10</div>
					<div>2019-01-18到2019-02-11</div>
				</div>
				<p>好好过年 坐等惊喜</p>
				<footer>已结束</footer>
			</li>
			<li>
				<div>
					<h1>&yen;20</h1>
					<div>满200减20</div>
					<div>2019-01-18到2019-02-11</div>
				</div>
				<p>好好过年 坐等惊喜</p>
				<footer>已结束</footer>
			</li>
			<li>
				<div>
					<h1>&yen;20</h1>
					<div>满200减20</div>
					<div>2019-01-18到2019-02-11</div>
				</div>
				<p>好好过年 坐等惊喜</p>
				<footer>已结束</footer>
			</li>
		</ul>
		<footer @click='coinCertificate'>
			兑换
		</footer>
		<div class='exchange' :style="{display:chu}" @click='disappear'>
			<h5></h5>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				chu:'none',
				isClassB:true,
				classB:"classB",
				classA:"classA"
			}
		},
		methods:{
			regret(){
				history.back()
			},
			coinCertificate(){
				this.chu='block';
				this.isClassB=false
			},
			disappear(){
				this.chu='none';
				this.isClassB=true
			}
		}
}
</script>
<style lang="less" scoped>
	.coupon{
		.classA{
			height: 100px;
			transition:height 0.5s linear;
		}
		.classB{
			height:0px;
			transition:height 0.5s linear;
		}
		header{
			position: fixed;
			z-index: 20;
			top: 0;
			left: 50%;
			transform: translate(-50%);
			max-width: 600px;
			width: 95%;
			height: 3rem;
			display: flex;
			justify-content: space-between;
			background-color: white;
			div{
				width: 2.5rem;
				height: 2.5rem;
				line-height: 2.5rem;
				img{
					margin-top: 1rem;
					width: 1.5rem;
					height:1.5rem;
				}
			}
			.headline{
				width: 7.5rem;
				height:3rem;
				line-height: 3rem;
				font-size: 1rem;
				img{
					width: 1.3rem;
					height: 1.3rem;
					margin-bottom: 0.2rem;
					margin-right: .8rem;
				}
			}
		}
		header+div{
			position: fixed;
			top: 0;
			left: 50%;
			transform: translate(-50%);
			background-color: white;
			z-index: 19;
			max-width: 700px;
			width: 90%;
			margin: auto;
			padding-top: 3rem;
			overflow: hidden;
			input{
				border:none;
				outline: none;
				height:3rem;
				font-size: 1.2rem;
				&:first-child{
					max-width: 600px;
					width: 100%;
					margin-left:20px;
				}
				&:last-child{
					background-color: orange;
					color:white;
					width: 5rem;
					height: 2rem;
					margin-left: 1rem;
				}
			}
		}
		ul{
			padding: 0;
			list-style-type: none;
			margin: 0.5rem auto 0;
			max-width: 600px;
				width: 90%;
			li{
				max-width: 600px;
				width: 90%;
				height: 6rem;
				background-image: url(/static/images/my/couponbg.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding: 3rem 1rem;
				margin: auto;
				position: relative;
				margin-top: .5rem;
				div{
					text-align: right;
					font-size: 0.7rem;
					h1{
						margin-left:90%;
						width: 2rem;
						font-size: 1rem;
						border-bottom: .01rem solid black;
					}
				}
				p{
					font-size: 1rem;
					text-align: center;
					color: white;
					margin-top: 4rem;
				}
				footer{
					max-width: 600px;
					width: 100%;
					height: 12rem;
					position: absolute;
					font-size: 1rem;
					color: white;
					top: 0;
					left: 0;
					transform: translate(0);
					background-color: black;
					text-align: center;
					line-height: 12rem;
					opacity: 0.7;
				}
			}
		}
		footer{
			position: fixed;
			left: 50%;
			bottom:0px;
			transform: translate(-50%);
			max-width: 600px;
			width: 95%;
			height: 2rem;
			color: orange;
			text-align: center;
			background-color: #595757;
			line-height: 2rem;
			font-size: 1rem;
		}
		.exchange{
			h5{
				position:fixed;
				top: -20px;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: black;
				opacity: 0.7;
			}
		}
	}
</style>
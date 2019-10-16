<template>
	<div class="coupon">
		<router-link tag='div' to='/' class="toHome"><img src="/static/images/my/home.svg" alt=""></router-link>
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
<style lang="less">
	.coupon{
		.classA{
			height: 100px;
			transition:height 0.5s linear;
		}
		.classB{
			height:0px;
			transition:height 0.5s linear;
		}
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
			position: fixed;
			z-index: 20;
			top: 0;
			left: 50%;
			transform: translate(-50%);
			width: 700px;
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
				width: 190px;
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
		header+div{
			position: fixed;
			top: 0;
			left: 50%;
			transform: translate(-50%);
			background-color: white;
			z-index: 19;
			width: 700px;
			margin: auto;
			padding-top: 70px;
			overflow: hidden;
			input{
				border:none;
				outline: none;
				height:50px;
				font-size: 20px;
				&:first-child{
					width: 500px;
					margin-left:20px;
				}
				&:last-child{
					background-color: orange;
					color:white;
					width: 100px;
				}
			}
		}
		ul{
			padding: 0;
			list-style-type: none;
			margin: 60px auto 0;
			li{
				width: 600px;
				height: 300px;
				background-image: url(/static/images/my/couponbg.png);
				background-repeat: no-repeat;
				background-size: 640px 300px;
				padding: 20px 30px;
				margin: auto;
				position: relative;
				div{
					text-align: right;
					h1{
						margin-left:500px;
						width: 100px;
						border-bottom: 1px solid black;
					}
				}
				p{
					font-size: 30px;
					text-align: center;
					color: white;
					margin-top: 100px;
				}
				footer{
					width: 640px;
					height: 300px;
					position: absolute;
					font-size: 30px;
					color: white;
					top: 0;
					left: 0;
					transform: translate(0);
					background-color: black;
					text-align: center;
					line-height: 300px;
					opacity: 0.7;
				}
			}
		}
		footer{
			position: fixed;
			left: 50%;
			bottom:0px;
			transform: translate(-50%);
			width: 700px;
			height: 50px;
			color: orange;
			text-align: center;
			background-color: #595757;
			line-height: 50px;
			font-size: 30px;
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
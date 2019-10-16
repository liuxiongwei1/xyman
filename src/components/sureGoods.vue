<template>
	<div class="sureGoods">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">确认订单</div>
			<div></div>
		</header>
		<section>
			<div><img src="/static/images/sureGoods/where.svg" alt=""><span>选择收货地址</span></div>
			<h3>支付方式</h3>
			<div>
				<img src="/static/images/sureGoods/Alipay.svg" alt="">
				<div>
					<div>支付宝支付</div>
					<div>推荐支付宝用户使用</div>
				</div>
			</div>
			<section>
				<div v-for='(m,n) in gInfors'>
					<img :src="m.imgs" alt="">
					<ul>
						<li>{{m.title}}</li>
						<li>数量：{{m.num}}</li>
						<li>价格：&yen;{{m.newprice}}</li>
					</ul>
				</div>
			</section>
			<div class='quan'>
				<div>优惠券</div>
				<div class="fruit">暂无优惠券</div>
			</div>
			<div class='quan'>
				<div>运费券</div>
				<div class="fruit">暂无运费券</div>
			</div>
			<div class='quan'>
				<div>优惠活动</div>
				<div class='fruit1'>暂无优惠活动</div>
			</div>
			<div class='quan'>
				<div>商品总价</div>
				<div class="fruit">￥0</div>
			</div>
			<div class='quan'>
				<div>商品优惠</div>
				<div class="fruit">￥0</div>
			</div>
			<div class='quan'>
				<div></div>
				<div></div>
			</div>
			<textarea cols="40" rows="5" placeholder="留言"></textarea>
		</section>
		<footer>
			<div>总价:￥{{getalnum}}</div>
			<div @click='disappear'>提交订单</div>
		</footer>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				gInfors:JSON.parse(localStorage.getItem('buygoods')),
				getalnum:0,
			}
		},
		created(){
			for(var a in this.gInfors){
				this.getalnum+=this.gInfors[a].num*this.gInfors[a].newprice
			}
		},
		methods:{
			regret(){
				history.back()
			},
			disappear(){
				var arr=JSON.parse(localStorage.getItem('shopping'));
				for(var a in arr){
					if(arr[a].pitch==arr[a].pitch1){
						arr.splice(arr[a],1)
						localStorage.setItem('shopping',JSON.stringify(arr));
					}
				}
				history.back()
			}
		}
}
</script>
<style lang="less">
	.sureGoods{
		width: 600px;
		margin: auto;
		header{
			position: fixed;
			top: 0px;
			background-color: white;
			width: 600px;
			height: 50px;
			display: flex;
			justify-content: space-between;
			div{
				width: 50px;
				height: 50px;
				img{
					margin-top: 10px;
					width: 30px;
					height:30px;
				}
			}
			.headline{
				width: 160px;
				height:40px;
				line-height: 40px;
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
			margin-top: 60px;
			&>div{
				display: flex;
				&:first-child{
					height: 50px;
					font-size: 30px;
				}
			}
			img{
				width: 50px;
				height: 50px;
			}
			h3{
				font-size: 30px;
			}
			h3+div{
				div{
					&:first-child{
						font-size: 20px;
						font-weight: bold;
					}
				}
			}
			&>section{
				margin-top: 20px;
				div{
					height: 100px;
					font-size: 20px;
					margin-top: 10px;
					margin-bottom: 10px;
					&:first-child{
						height: 100px;
						font-size: 20px;
					}
					img{
						width: 100px;
						height: 100px;
					}
					ul{
						display: inline-block;
						list-style-type: none;
						padding: 0;
					}
				}
			}
			.quan{
				justify-content: space-between;
				font-size: 25px;
				margin-top:20px;
				margin-bottom: 20px; 
				.fruit{
					color: orange;
				}
				.fruit1{
					color:#dbdbdb;
				}
			}
		}
		textarea{
			border: none;
			font-size: 30px;
		}
		footer{
			position: fixed;
			width: 600px;
			font-size: 30px;
			bottom: 0;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			div{
				width: 300px;
				height: 50px;
				line-height: 50px;
				text-align: center;
				&:first-child{
					background-color: yellow;
					color: black;
				}
				&:last-child{
					background-color: black;
					color: yellow;
				}
			}
		}
	}
</style>
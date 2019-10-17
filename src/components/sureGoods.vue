<template>
	<div class="sureGoods">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">确认订单</div>
			<div class="isSure"></div>
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
				for(var a=0;a<arr.length;a++){
					if(arr[a].pitch==arr[a].pitch1){
						arr.splice(arr[a],1)
						a--;
						localStorage.setItem('shopping',JSON.stringify(arr));
					}
				}
				history.back()
			}
		}
}
</script>
<style lang="less" scoped>
	.sureGoods{
		max-width: 600px;
		width: 100%;
		margin: auto;
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
			margin-top: 2.5rem;
			&>div{
				display: flex;
				&:first-child{
					height: 2rem;
					font-size: 1.1rem;
				}
			}
			img{
				width: 1.5rem;
				height: 1.5rem;
			}
			h3{
				font-size: 1.2rem;
			}
			h3+div{
				div{
					font-size: 0.4rem;
					&:first-child{
						font-size: .8rem;
						font-weight: bold;
						color:black;
					}
					&:nth-child(2){
						color:#cccccc;
					}
				}
			}
			&>section{
				margin-top: 1rem;
				div{
					height: 4rem;
					font-size: 1rem;
					margin-top: .5rem;
					margin-bottom: .5rem;
					&:first-child{
						height: 4rem;
						font-size: 1rem;
					}
					img{
						width: 4rem;
						height: 4rem;
					}
					ul{
						display: inline-block;
						list-style-type: none;
						padding: 0;
						margin: 0;
					}
				}
			}
			.quan{
				justify-content: space-between;
				font-size: 1rem;
				margin-top:1rem;
				margin-bottom: 1rem; 
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
			font-size: 1rem;
		}
		footer{
			position: fixed;
			max-width: 600px;
			width: 100%;
			font-size: 1.3rem;
			bottom: 0;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			div{
				width: 50%;
				height: 2.5rem;
				line-height: 2.5rem;
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
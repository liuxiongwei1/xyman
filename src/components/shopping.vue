<template>
	<div class="shopping">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">购物车</div>
			<div class='isSure' @click='isisSure'>{{isSure}}</div>
		</header>
		<section>
			<div v-for='(m,n) in goodsinfor' class="buygoods">
				<div @click='checkgoods(m)'><img :src="m.pitch" alt=""></div>
				<div><img :src="m.imgs" alt=""></div>
				<ul>
					<li>{{m.title}}</li>
					<li></li>
					<li>数量：<input type="button"value='+':style='{display:buttonArise}'>{{m.num}}<input type="button"value='-':style='{display:buttonArise}'></li>
					<li>&yen;{{m.newprice}}</li>
				</ul>
			</div>
		</section>
		<footer>
			<div class='footerleft'>
				<div class='xuan'@click='checkall'>
					<div><img :src="all" alt=""></div>
					<div>全选</div>
				</div>
				<div>
					<div>&yen;{{allnum}}</div>
					<div>不包含其他费用</div>
				</div>
			</div>
			<div class="footerright" @click='buygoods'>结算</div>
		</footer>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				goodsinfor:'',
				all:'/static/images/shopping/nopitch.svg',
				allnum:0,
				isSure:'编辑',
				buttonArise:'none',
			}
		},
		created(){
			this.goodsinfor=JSON.parse(localStorage.getItem('shopping'));
		},
		methods:{
			regret(){
				history.back()
			},
			checkgoods(n){
				if(n.pitch==n.pitch1){
					n.pitch=n.pitch2
					this.all='/static/images/shopping/nopitch.svg'
					this.allnum-=n.newprice*n.num

				}else{
					n.pitch=n.pitch1
					this.allnum+=n.newprice*n.num
				}
				var arr=JSON.parse(localStorage.getItem('shopping'));
				for(var a in arr){
					if(n.imgs==arr[a].imgs){
						arr[a].pitch=n.pitch;
						localStorage.setItem('shopping',JSON.stringify(arr));
					}
				}	
			},
			checkall(){
				var arr=this.goodsinfor;
				
				if(this.all=='/static/images/shopping/nopitch.svg'){
				this.all='/static/images/shopping/pitch.svg';
				this.allnum=0;
				for(var a in arr){
					arr[a].pitch=arr[a].pitch1
					this.allnum+=arr[a].newprice*arr[a].num
					localStorage.setItem('shopping',JSON.stringify(arr));
				}
				}else{
				this.all='/static/images/shopping/nopitch.svg';
					for(var a in arr){
						arr[a].pitch=arr[a].pitch2
					}
					this.allnum=0;
					localStorage.setItem('shopping',JSON.stringify(arr));
				}
			},
			isisSure(){
				if(this.isSure=='编辑'){
					this.isSure='完成'
					this.buttonArise='inline-block'
				}else{
					this.isSure='编辑'
					this.buttonArise='none'
				}
				
			},
			buygoods(){
				var arr1=[];
				var arr=JSON.parse(localStorage.getItem('shopping'));
				for(var a in arr){
					if(arr[a].pitch==arr[a].pitch1){
						arr1.push(arr[a])
						localStorage.setItem('buygoods',JSON.stringify(arr1));
					}
				}
				open("http://localhost:8080/#/sureGoods","_self");
			}
		}
}
</script>
<style lang="less">
	.shopping{
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
				width: 140px;
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
			.isSure{
				font-size: 25px;
				line-height: 50px;
			}
		}
		section{
			margin-top: 60px;
			width: 600px;
			.buygoods{
				display: flex;
				height: 100px;
				div{
					&:first-child{
						width: 50px;
						height: 100px;
						line-height: 50px;
						img{
							width: 30px;
							height: 30px;
							margin-top: 35px;
						}
					}
					&:nth-child(2){
						width: 100px;
						height: 100px;
						img{
							width: 100px;
							height: 100px;
						}
					}
				}
				ul{
					list-style-type: none;
					padding: 0;
					height: 25px;
				}
			}
		}
		footer{
			position: fixed;
			bottom: 0;
			left: 50%;
			transform: translate(-50%);
			display: flex;
			.footerleft{
				width: 300px;
				background-color: yellow;
				display: flex;
				.xuan{
					width: 100px;
					height: 50px;
					display: flex;
					line-height: 50px;
					img{
						margin-top: 10px;
						width: 30px;
						height: 30px;
					}
				}
			}
			.footerright{
				width: 300px;
				background-color:black;
				color:white;
				font-size: 30px;
				text-align: center;
			}
		}
	}
</style>
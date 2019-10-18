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
				<div :style='{backgroundImage:m.img}'><!-- <img :src="m.imgs" alt=""> --></div>
				<ul>
					<li>{{m.title}}</li>
					<li></li>
					<li>数量：<input type="button"value='+':style='{display:buttonArise}' @click='addnum(m)'>{{m.num}}<input type="button"value='-':style='{display:buttonArise}' @click='reducenum(m)'><div class="delete" @click='deleted(m)' :style='{display:buttonArise}'>删除</div></li>
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
				var k=0;
				for(var a in arr){
					if(n.imgs==arr[a].imgs){
						arr[a].pitch=n.pitch;
						localStorage.setItem('shopping',JSON.stringify(arr));
					}
					if(arr[a].pitch==arr[a].pitch1){
						k++
					}
					if(k==arr.length){
						this.all='/static/images/shopping/pitch.svg'
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
			addnum(n){
				n.num++
				if(n.pitch==n.pitch1){
					this.allnum+=n.newprice*1
				}
					
			},
			reducenum(n){
				if(n.num){
					n.num--
					if(n.num==0){
						n.num=1
					}else{
						if(n.pitch==n.pitch1){
							this.allnum-=n.newprice*1
						}
					}
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
			},
			deleted(n){
				this.allnum=0
				for(var a in this.goodsinfor){
					if(n.title==this.goodsinfor[a].title){
						this.goodsinfor.splice(a,1);
						localStorage.setItem('shopping',JSON.stringify(this.goodsinfor))
						this.allnum+=this.goodsinfor[a].newprice*this.goodsinfor[a].num
					}
				}
				
			}
		}
}
</script>
<style lang="less" scoped>
	.shopping{
		max-width: 600px;
		width: 100%;
		margin: auto;
		header{
			position: fixed;
			top: 0%;
			left: 50%;
			transform: translate(-50%);
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
				width: 6rem;
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
				font-size: 1.1rem;
				height: 2.5rem;
				width: 2.5rem;
				line-height: 2.5rem;
				margin-right: 1rem;
			}
		}
		section{
			margin-top: 3rem;
			max-width: 600px;
			width: 100%;
			&>div{
				padding: .2rem;
				width: 100%;
				display: flex;
				background-color: #e7e7e7;
				div{
					&:first-child{
						width: 1rem;
						height: 6rem;
						line-height: 6rem;
						margin-right: 0.2rem;
						img{
							width: 1rem;
							height: 1rem;
						}
					}
					&:nth-child(2){
						width: 6rem;
						height: 7rem;
						line-height: 4rem;
						margin-right: 0.2rem;
						background-repeat: no-repeat;
						background-size: 95%;
						background-position: center;
					}
				}
				ul{
					margin: 0;
					margin-top: 0.3rem;
					width: 100%;
					list-style-type: none;
					padding: 0;
					li{
						font-size: 1rem;
						height: 1.5rem;
						line-height: 1.5rem;
						input{
							width: 1.5rem;
							height: 1.5rem;
						}
					}
				}
			}
		}
		.delete{
			border: 1px solid black;
			background-color: white;
			margin-left: 1rem;
			color: red;
		}
		footer{
			position: fixed;
			bottom: 0%;
			left: 50%;
			transform: translate(-50%);
			max-width: 600px;
			width: 100%;
			height:3rem;
			display: flex;
			.footerleft{
				background-color: yellow;
				width: 50%;
				display: flex;
				color: #333333;
				.xuan{
					display: flex;
					width: 3.5rem;
					line-height: 3rem;
					font-size: 0.5rem;
					img{
						width: 1rem;
						margin-right: .2rem;
						margin-left: .2rem;
					}
				}
				.xuan+div{
					div{
						font-size: 0.8rem;
						height: 50%;
						line-height: 1.5rem;
					}
				}
			}
			.footerright{
				width: 50%;
				background-color: #000000;
				color:yellow;
				text-align: center;
				line-height: 3rem;
			}
		}
	}
</style>
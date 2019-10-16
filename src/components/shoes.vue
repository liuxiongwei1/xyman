<template>
	<div class="shoes">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">运动鞋</div>
			<div></div>
		</header>
		<section>
			<div v-for='(i,n) in shoesclass' :key='n' @click='toPay(i)'>
				<img :src="i.imgs" alt="">
				<p>{{i.title}}</p>
				<span>&yen;{{i.newprice}}</span>
				<span class="older">{{i.oldprice}}</span>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return {shoesclass:[
				{	
					imgs:"/static/images/shoes/01.jpg",
					title:"LOS运动鞋",
					newprice:"753",
					oldprice:"￥1538",
					heartsrc:'/static/images/home/heart2.svg',
					heart1src:'/static/images/home/heart1.svg',
					heart2src:'/static/images/home/heart2.svg',
					num:'0',
					pitch:'/static/images/shopping/nopitch.svg',
					pitch1:'/static/images/shopping/pitch.svg',
					pitch2:'/static/images/shopping/nopitch.svg',
				},
				{
					imgs:"/static/images/shoes/02.jpg",
					title:"真皮运动鞋",
					newprice:"553",
					heartsrc:'/static/images/home/heart2.svg',
					heart1src:'/static/images/home/heart1.svg',
					heart2src:'/static/images/home/heart2.svg',
					num:'0',
					pitch:'/static/images/shopping/nopitch.svg',
					pitch1:'/static/images/shopping/pitch.svg',
					pitch2:'/static/images/shopping/nopitch.svg',
				},
				{
					imgs:"/static/images/shoes/03.jpg",
					title:"经典真皮运动鞋",
					newprice:"553",
					heartsrc:'/static/images/home/heart2.svg',
					heart1src:'/static/images/home/heart1.svg',
					heart2src:'/static/images/home/heart2.svg',
					num:'0',
					pitch:'/static/images/shopping/nopitch.svg',
					pitch1:'/static/images/shopping/pitch.svg',
					pitch2:'/static/images/shopping/nopitch.svg',
				},
				{
					imgs:"/static/images/shoes/04.jpg",
					title:"复古运动鞋",
					newprice:"609",
					oldprice:"￥650",
					heartsrc:'/static/images/home/heart2.svg',
					heart1src:'/static/images/home/heart1.svg',
					heart2src:'/static/images/home/heart2.svg',
					num:'0',
					pitch:'/static/images/shopping/nopitch.svg',
					pitch1:'/static/images/shopping/pitch.svg',
					pitch2:'/static/images/shopping/nopitch.svg',
				},
				{
					imgs:"/static/images/shoes/05.jpg",
					title:"真皮休闲鞋",
					newprice:"574",
					heartsrc:'/static/images/home/heart2.svg',
					heart1src:'/static/images/home/heart1.svg',
					heart2src:'/static/images/home/heart2.svg',
					num:'0',
					pitch:'/static/images/shopping/nopitch.svg',
					pitch1:'/static/images/shopping/pitch.svg',
					pitch2:'/static/images/shopping/nopitch.svg',
				},
				{
					imgs:"/static/images/shoes/06.jpg",
					title:"真皮休闲鞋",
					newprice:"468",
					heartsrc:'/static/images/home/heart2.svg',
					heart1src:'/static/images/home/heart1.svg',
					heart2src:'/static/images/home/heart2.svg',
					num:'0',
					pitch:'/static/images/shopping/nopitch.svg',
					pitch1:'/static/images/shopping/pitch.svg',
					pitch2:'/static/images/shopping/nopitch.svg',
				},
			]
		}
		},
		methods:{
			regret(){
				history.back()
			},
			toPay(n){
				if(!localStorage.getItem(n.imgs)){
					localStorage.setItem(n.imgs,JSON.stringify(n))
				};
				this.$router.push({
					path:'/lookgoods',
					query:{
						goodsTnfor:n,
					}
				});
				
			}
		},


}
</script>
<style lang="less" scoped>
	.shoes{
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
		}
		section{
			width:600px;
			padding-top: 20px;
			background-color: #e7e7e7;
			display: flex;
			margin-top: 50px;
			margin-bottom: 50px;
			justify-content: space-around;
			flex-wrap: wrap;
			div{
				width: 250px;
				height: 350px;
				background-color: white;
				margin-bottom: 20px;
				text-align: center;
				span{
					color: orange;
				}
				img{
					width:250px;
					height: 250px;
				}
				.older{
					text-decoration: line-through;
					color:#696969;
				}
			}
		}
	}
</style>
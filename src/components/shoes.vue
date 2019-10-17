<template>
	<div class="shoes">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt="">运动鞋</div>
			<div></div>
		</header>
		<section>
			<div v-for='(i,n) in shoesclass' :key='n' @click='toPay(i)'>
				<div><img :src="i.imgs" alt=""></div>
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
		max-width: 600px;
		width: 100%;
		header{
			position: fixed;
			top: 0px;
			background-color: white;
			max-width: 600px;
			width: 100%;
			height: 3rem;
			display: flex;
			justify-content: space-between;
			div{
				width: 3rem;
				height: 3rem;
				img{
					margin-top: 10px;
					width: 1.5rem;
					height:1.5rem;
				}
			}
			.headline{
				width: 6rem;
				height:6rem;
				font-size: 1rem;
				img{
					width: 1.5rem;
					height: 1.5rem;
					margin-bottom: -5px;
					margin-right: 10px;
				}
			}
		}
		section{
			max-width:600px;
			width: 100%;
			background-color: #e7e7e7;
			display: flex;
			padding-top:3rem; 
			margin-bottom: 4rem;
			justify-content: space-around;
			flex-wrap: wrap;
			border: 1px solid #cccccc;
			&>div{
				max-width: 250px;
				width: 40%;
				height: 15rem;
				background-color: white;
				margin-bottom: 20px;
				text-align: center;
				span{
					color: orange;
				}
				&>div{
					width: 100%;
					text-align: center;
					height: 10rem;
					line-height: 15rem;
					img{
						width:70%;
						height: 100%;

					}
				}
				.older{
					text-decoration: line-through;
					color:#696969;
				}
			}
		}
	}
</style>
<template>
	<div class="classify">
		<img src="/static/images/classify/goods/1.jpg" alt="" >
		<div v-for='(i,n) in information' :key='n'>
			<img :src="i.srcs" alt="" @click='toggle(i)'>
			<section :style="{height:i.gao}">
				<router-link tag='div' to='/shoes' v-for='(a,b) in i.content' :key='a'>{{a}}</router-link>
				<div v-for='m in (3-i.content.length%3)' :key='m'></div>
			</section>	
		</div>
		<img src="/static/images/classify/goods/2.jpg" alt="">
	</div>
</template>
<script>
	export default{
		data(){
			return{
				hei:'0px',
				information:[
					{
						srcs:'/static/images/classify/goods/01.jpg',
						content:['运动鞋','帆布鞋','休闲鞋','正装鞋','靴子','凉鞋/拖鞋','保养护理'],
						gao:'0px',
						open:'200px',
						close:'0px'
					},
					{
						srcs:'/static/images/classify/goods/02.jpg',
						content:['长袖T恤','衬衫','T恤/背心','夹克/外套','毛衣','卫衣','大衣','西装','家居服','运动上衣'],
						gao:'0px',
						open:'200px',
						close:'0px'
					},
					{
						srcs:'/static/images/classify/goods/03.jpg',
						content:['内裤','束脚裤','休闲裤','运动裤','牛仔裤','西裤','短裤'],
						gao:'0px',
						open:'200px',
						close:'0px'
					},
					{
						srcs:'/static/images/classify/goods/04.jpg',
						content:['头发','香水','爽肤水','精华','乳液','身体','剃须','口腔','防晒','洁面护理'],
						gao:'0px',
						open:'200px',
						close:'0px'
					}
				],
			}
		},
		methods:{
			toggle(n){
				if(n.gao==n.open){
					n.gao=n.close;
				}else{
					n.gao=n.open
				}
			}
		}
}
</script>
<style lang="less" scoped>
	.classify{
		img{
			width: 100%;
			margin: 0;
		}
		section{
			border:none;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			div{
				width: 30%;
				text-align: center;
				font-size: 20px;
				margin-top:10px;
				margin-bottom:10px;
			}
		}
	}
</style>
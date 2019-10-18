<template>
	<div class="classify">
		<img src="/static/images/classify/goods/1.jpg" alt="" class='firstimg'>
		<div v-for='(i,n) in information' :key='n'>
			<img :src="i.srcs" alt="" @click='toggle(i)'>
			<section :class="{heights:i.gao}">
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
				information:[
					{
						srcs:'/static/images/classify/goods/01.jpg',
						content:['运动鞋','帆布鞋','休闲鞋','正装鞋','靴子','凉鞋/拖鞋','保养护理'],
						gao:true,
						open:false,
						close:true
					},
					{
						srcs:'/static/images/classify/goods/02.jpg',
						content:['长袖T恤','衬衫','T恤/背心','夹克/外套','毛衣','卫衣','大衣','西装','家居服','运动上衣'],
						gao:true,
						open:false,
						close:true
					},
					{
						srcs:'/static/images/classify/goods/03.jpg',
						content:['内裤','束脚裤','休闲裤','运动裤','牛仔裤','西裤','短裤'],
						gao:true,
						open:false,
						close:true
					},
					{
						srcs:'/static/images/classify/goods/04.jpg',
						content:['头发','香水','爽肤水','精华','乳液','身体','剃须','口腔','防晒','洁面护理'],
						gao:true,
						open:false,
						close:true
					}
				],
			}
		},
		methods:{
			toggle(n){
				if(n.gao==n.open){
					n.gao=n.close;
				}else{
					for(var a in this.information){
						this.information[a].gao=this.information[a].close
					}
					n.gao=n.open
				}
			}
		}
}
</script>
<style lang="less" scoped>
	.classify{
		.heights{
			height: 0;
			transition: height s;
		}
		.firstimg{
			margin-bottom: 20px;
		}
		img{
			width: 100%;
			margin: 0;
			margin-bottom: -0.25rem;
		}
		&>div{
			width: 100%;
		}
		section{
			border:none;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			overflow: hidden;
			div{
				width: 30%;
				height: 5px;
				text-align: center;
				font-size:1rem;
				margin-top:0.5rem;
				margin-bottom:1rem;
			}
		}
	}
</style>
<template>
	<div class="icogoods">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt=""> 品牌浏览</div>
			<div></div>
		</header>
		<section>
			<img src="/static/images/icogoods/1.jpg"alt="">
			<div>
				<div><img src="/static/images/icogoods/2.jpg" alt=""><b>R&O PLAY</b></div>
				<input type="button" value="关注">
			</div>
			<p>Bang & Olufsen 系列产品包括电视机、音乐系统、扬声器、电话机和多媒体产品等，每一款都独具特色、卓尔不群，堪称美学外观与卓越技术之完美融合。</p>
			<ul>
				<li to='/lookgoods' v-for='(m,n) in goods' :key='n'>
					<div><img :src="m.src" alt=""></div>
					<div>{{m.title}}</div>
					<div class="goodsprice">{{m.price}}</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				goods:[
					{
						src:'/static/images/icogoods/01.jpg',
						title:'耳机 米色',
						price:'￥2198'
					},
					{
						src:'/static/images/icogoods/02.jpg',
						title:'耳机 自然灰色',
						price:'￥1198'
					},
					{
						src:'/static/images/icogoods/03.jpg',
						title:'耳机 黑色',
						price:'￥1498'
					}
				]
			}
		},
		methods:{
			regret(){
				history.back()
			}
		}
}
</script>
<style lang="less">
	.icogoods{
		header{
			width: 800px;
			height: 50px;
			margin: auto;
			display: flex;
			justify-content: space-between;
			div{
				width: 50px;
				height: 50px;
				img{
					width: 50px;
					height:50px;
				}
			}
			.headline{
				width: 160px;
				height:40px;
				line-height: 60px;
				font-size: 30px;
				img{
					width: 30px;
					height: 30px;
					margin-bottom: -5px;
				}
			}
		}
		section{
			width: 800px;
			margin: auto;
			img{
				width: 800px;
			}
			img+div{
				display: flex;
				justify-content: space-between;
				div{
					margin-left: 50px;
					margin-top: -50px;
					width: 300px;
					height: 100px;
					font-size: 20px;
					img{
						margin-bottom: -10px;
						width: 100px;
						height: 100px;
					}
				}
				input{
					margin-top: 10px;
					border:none;
					color: white;
					background-color: #ffc619;
					width: 100px;
					height: 30px;
				}
			}
			p{
				color:#99acc9;
				margin-top: 5px;
			}
			ul{
				list-style-type: none;
				display: flex;
				flex-wrap: wrap;
				li{
					width: 350px;
					img{
						width:350px;
					}
					div{
						text-align: center;
					}
					.goodsprice{
						color: orange;
					}
				}
			}
		}
	}
</style>
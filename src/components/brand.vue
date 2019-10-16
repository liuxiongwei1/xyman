<template>
	<div class="brand">
		<div v-for='(m,n) in goodsclassify'>
			<div class='goodstitle'>
				<div class="ico"><img :src="m.icosrc" alt=""></div>
				<div>
					<div class='detailed'>
						<div>{{m.icotitle}}</div>
					</div>
					<div>{{m.tell}}</div>
				</div>
				<router-link tag='div' to='/icogoods' class='more'>更多<img src="/static/images/brand/more.png" alt=""></router-link>
			</div>
			<div class='goodsclass'>
				<div v-for='i in m.goods' class="goodso" :key='i.goodssrc'>
					<div><img :src="i.goodssrc" alt=""></div>
					<div>{{i.goodsinf}}</div>
					<div class='goodsprice'>{{i.price}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				goodsclassify:[
					{
						icosrc:'/static/images/brand/firstico.jpg',
						icotitle:'B&O PLAY',
						tell:'Bang & Olufsen 系列产品包括电视机、音乐系统、扬声器、电话机和多媒体产品等，每一款都独具特色、卓尔不群，堪称美学外观与卓越技术之完美融合。',
						goods:[
							{
								goodssrc:'/static/images/brand/01.jpg',
								goodsinf:'耳机',
								price:'￥998'
							},
							{
								goodssrc:'/static/images/brand/02.jpg',
								goodsinf:'耳机',
								price:'￥98'
							},
							{
								goodssrc:'/static/images/brand/03.jpg',
								goodsinf:'耳机',
								price:'￥68'
							}
						],
					},
					{
						icosrc:'/static/images/brand/secondico.jpg',
						icotitle:'B&O PLAY',
						tell:'Bang & Olufsen 系列产品包括电视机、音乐系统、扬声器、电话机和多媒体产品等，每一款都独具特色、卓尔不群，堪称美学外观与卓越技术之完美融合。',
						goods:[
							{
								goodssrc:'/static/images/brand/11.jpg',
								goodsinf:'耳机',
								price:'￥78'
							},
							{
								goodssrc:'/static/images/brand/12.jpg',
								goodsinf:'耳机',
								price:'￥88'
							},
							{
								goodssrc:'/static/images/brand/13.jpg',
								goodsinf:'耳机',
								price:'￥48'
							}
						],
					},
					{
						icosrc:'/static/images/brand/secondico.jpg',
						icotitle:'B&O PLAY',
						tell:'Bang & Olufsen 系列产品包括电视机、音乐系统、扬声器、电话机和多媒体产品等，每一款都独具特色、卓尔不群，堪称美学外观与卓越技术之完美融合。',
						goods:[
							{
								goodssrc:'/static/images/brand/01.jpg',
								goodsinf:'耳机1',
								price:'￥18'
							},
							{
								goodssrc:'/static/images/brand/02.jpg',
								goodsinf:'耳机2',
								price:'￥28'
							},
							{
								goodssrc:'/static/images/brand/03.jpg',
								goodsinf:'耳机3',
								price:'￥128'
							}
						],
					},
					{
						icosrc:'/static/images/brand/third.jpg',
						icotitle:'B&O PLAY',
						tell:'Bang & Olufsen 系列产品包括电视机、音乐系统、扬声器、电话机和多媒体产品等，每一款都独具特色、卓尔不群，堪称美学外观与卓越技术之完美融合。',
						goods:[
							{
								goodssrc:'/static/images/brand/01.jpg',
								goodsinf:'耳机',
								price:'￥338'
							},
							{
								goodssrc:'/static/images/brand/02.jpg',
								goodsinf:'耳机',
								price:'￥448'
							},
							{
								goodssrc:'/static/images/brand/03.jpg',
								goodsinf:'耳机',
								price:'￥90'
							}
						],
					}
				]
			}
		}
}
</script>
<style lang="less">
	.brand{
		margin-bottom: 50px;
		.goodstitle{
			display: flex;
			.ico{
				width: 50px;
				height: 50px;
				img{
					width: 50px;
					height: 50px;
				}
			}
			.ico+div{
				width:500px;
				.detailed{
					div{
						color: #282923;
					}
				}
				div{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #cccccc;
					width: 480px;
				}
			}
			.more{
				color: #cccccc;
				width: 100px;
				height: 30px;
				line-height: 30px;
				img{
					margin-bottom: -2px;
					width: 30px;
					height: 20px;
				}
			}
		}
		.goodsclass{
			display: flex;
			div{
				text-align: center;
			}
			img{
				width: 150px;
				height: 150px;
			}
			.goodsprice{
				text-align: center;
				color: orange;
			}
		}
	}
</style>
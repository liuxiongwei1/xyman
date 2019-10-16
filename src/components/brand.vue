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
				<div v-for='i in m.goods' class="goodso">
					<div><img :src="i.goodssrc" alt=""></div>
					<div>{{i.goodsinf}}</div>
					<div class='goodsprice'>{{i.price}}</div>
				</div>
			</div>
		</div>
		<div class="di"></div>
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
							},
							{
								goodssrc:'/static/images/brand/03.jpg',
								goodsinf:'耳机',
								price:'￥90'
							},
							{
								goodssrc:'/static/images/brand/03.jpg',
								goodsinf:'耳机',
								price:'￥90'
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
							},
							{
								goodssrc:'/static/images/brand/02.jpg',
								goodsinf:'耳机2',
								price:'￥28'
							},
							{
								goodssrc:'/static/images/brand/02.jpg',
								goodsinf:'耳机2',
								price:'￥28'
							},
							{
								goodssrc:'/static/images/brand/02.jpg',
								goodsinf:'耳机2',
								price:'￥28'
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
<style lang="less" scoped>
	.brand{
		max-width: 600px;
		width: 100%;
		&>div{
			max-width: 600px;
			width:100%;
			.goodstitle{
				display: flex;
				.ico{
					width: 3rem;
					border: 1px solid #dacfcc;
					img{
						width: 3rem;
					}
				}
				.ico+div{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space:nowrap;
					.detailed{
						height: 50%;
						line-height: 200%;
						font-size: 0.6rem;
					}
					.detailed+div{
						font-size: 0.6rem;
						height: 50%;
						line-height: 200%;
						width: 100%;
						color: #dacfcc;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space:nowrap;
					}
				}
				&>div{
					&:last-child{
						width: 10rem;
						text-align: right;
						font-size: 0.8rem;
						color: #dacfcc;
						img{
							width: 1.3rem;
						}
					}
				}
			}
			.goodsclass{
				display: flex;
				justify-content:flex-start;
				margin-top: 2rem;
				margin-bottom: 2rem;
				overflow: auto;
				border-bottom: 2px solid #d5d5d5;
				&>div{
					width: 10rem;
					div{
						width: 10rem;
						text-align: center;
						&:first-child{
							width: 10rem;
							img{
								width: 8rem;
								height: 8rem;
							}
						}
					}
					.goodsprice{
						color: orange;
					}
				}
			}
		}
		.di{
			height: 50px;
		}
	}
</style>
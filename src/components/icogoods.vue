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
				<li to='/lookgoods' v-for='(m,n) in goods' :key='n' @click='toPay(m)'>
					<div><img :src="m.imgs" alt=""></div>
					<div>{{m.title}}</div>
					<div class="goodsprice">{{m.newprice}}</div>
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
						imgs:'/static/images/icogoods/01.jpg',
						title:'耳机 米色',
						newprice:'￥2198',
						content:'纯粹又精湛的大师级作品',
						oldprice:'2944',
						heartsrc:'/static/images/home/heart2.svg',
						heart1src:'/static/images/home/heart1.svg',
						heart2src:'/static/images/home/heart2.svg',
						num:'0',
						pitch:'/static/images/shopping/nopitch.svg',
						pitch1:'/static/images/shopping/pitch.svg',
						pitch2:'/static/images/shopping/nopitch.svg',
					},
					{
						imgs:'/static/images/icogoods/02.jpg',
						title:'耳机 自然灰色',
						newprice:'￥1198',
						content:'纯粹又精湛的大师级作品',
						oldprice:'2944',
						heartsrc:'/static/images/home/heart2.svg',
						heart1src:'/static/images/home/heart1.svg',
						heart2src:'/static/images/home/heart2.svg',
						num:'0',
						pitch:'/static/images/shopping/nopitch.svg',
						pitch1:'/static/images/shopping/pitch.svg',
						pitch2:'/static/images/shopping/nopitch.svg',
					},
					{
						imgs:'/static/images/icogoods/03.jpg',
						title:'耳机 黑色',
						newprice:'￥1498',
						content:'纯粹又精湛的大师级作品',
						oldprice:'2944',
						heartsrc:'/static/images/home/heart2.svg',
						heart1src:'/static/images/home/heart1.svg',
						heart2src:'/static/images/home/heart2.svg',
						num:'0',
						pitch:'/static/images/shopping/nopitch.svg',
						pitch1:'/static/images/shopping/pitch.svg',
						pitch2:'/static/images/shopping/nopitch.svg',
					},
					{
						imgs:'/static/images/icogoods/01.jpg',
						title:'耳机 米色',
						newprice:'￥2198',
						content:'纯粹又精湛的大师级作品',
						oldprice:'2944',
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
		}
}
</script>
<style lang="less" scoped>
	.icogoods{
		max-width: 600px;
		width: 100%;
		margin: auto;
		header{
			max-width: 600px;
			width: 100%;
			height: 2rem;
			margin: auto;
			display: flex;
			justify-content: space-between;
			div{
				width: 2rem;
				height: 2rem;
				img{
					width: 1.5rem;
					height:1.5rem;
				}
			}
			.headline{
				width: 6rem;
				height:2rem;
				line-height: 2rem;
				font-size: 1rem;
				img{
					width: 1.5rem;
					height: 1.5rem;
					margin-bottom: -0.5rem;
				}
			}
		}
		section{
			max-width: 600px;
			width: 100%;
			margin: auto;
			img{
				max-width: 600px;
				width: 100%;
			}
			img+div{
				display: flex;
				justify-content: space-between;
				width: 100%;
				div{
					margin-left: 2rem;
					margin-top: -1rem;
					width: 10rem;
					height: 4rem;
					font-size: 1rem;
					img{
						margin-bottom: -10px;
						width: 3rem;
						height: 3rem;
					}
				}
				input{
					margin-top: 10px;
					border:none;
					color: white;
					background-color: #ffc619;
					width: 4rem;
					height: 2rem;
				}
			}
			p{
				color:#99acc9;
				margin-top: 5px;
			}
			ul{
				margin: 0;
				padding: 0;
				max-width: 600px;
				width: 100%;
				list-style-type: none;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				font-size: 1rem;
				li{
					width: 40%;
					img{
						width:100%;
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
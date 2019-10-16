<template>
	<div class="about">
		<router-link tag='div' to='/' class="toHome"><img src="/static/images/my/home.svg" alt=""></router-link>
		<h2>首款男性显big专属神器</h2>
		<div><img src="/static/images/my/setup/top.png" alt=""></div>
		<h4>XY-全球精选男士生活方式买手电商</h4>
		<h4>质感男人首选购物平台</h4>
		<div><img src="/static/images/my/setup/sj.png" alt=""></div>
		<article>
			<div>
				<div><img src="/static/images/my/setup/circle.svg" alt=""></div>
				<div><img src="/static/images/my/setup/circle.svg" alt=""></div>
			</div>
			<p>在这个颜值第一充满恶意的世界，里子华丽外表拙计的亲们速度前来报到，一键get型男神器，分分钟推到众生唯我独尊！</p>
			<p>从这一刻开始，掀起一切陈旧认知，亮瞎所有忽视目光，全世界有想法有格调的男人集结起来，任性的表达你的“质男”态度。</p>
			<p>无论你是小鲜肉、潮大叔、文青、暖男、商务范、肌肉男，还是贴心萝卜、时尚御姐、霸道女票。</p>
			<p>世界如此平淡，我们big闪亮。XY基因性感指数快要撑爆地球。</p>
			<div>
				<div><img src="/static/images/my/setup/circle.svg" alt=""></div>
				<div><img src="/static/images/my/setup/circle.svg" alt=""></div>
			</div>
		</article>
		<div>
			<img src="/static/images/my/setup/arcimg.png" alt="">
		</div>
		<footer>
			<div>质 男 生 活 &times; 全 球 精 选</div>
			<div>只/为/质/感/而/活</div>
		</footer>
	</div>
</template>
<script>
	export default{
}
</script>
<style lang="less" scoped>
	*{
		color:#cea866;
		text-align: center;
	}
	.about{
		width: 800px;
		height: 100vh;
		margin: auto;
		padding-top: 20px; 
		background-image: url(/static/images/my/setup/bg.png);
		background-repeat: no-repeat;
		background-size: 800px 1000px;
		text-align: center;
		.toHome{
			width: 50px;
			height: 50px;
			border-radius:50px;
			background-color: #737373;
			position: fixed;
			top:50%;
			left: 10px;
			img{
				margin-left:1px;
				margin-bottom: 5px;
				width: 50px;
				height: 50px;
			}
		}
		h4{
			margin: 5px auto 5px;
		}
		article{
			width: 600px;
			margin: auto;
			div{
				display: flex;
				justify-content: space-between;
				div{
					width: 20px;
					height: 20px;
					img{
						width: 20px;
						height: 20px;
					}
				}
			}
		}
		article+div{
			margin: 40px auto 20px;
		}
		footer{
			margin-top: 30px;
			font-size: 20px;
			div{
				&:first-child{
					border-bottom: 1px solid #cea866;
					height: 30px;
				}
				&:last-child{
					border-top: 1px solid #cea866;
					padding-top: 2px;
				}
			}
		}
	}
</style>
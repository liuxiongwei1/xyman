<template>
	<div class="collects">
		<article v-for='(m,n) in goodsclass' >
			<h4>{{m.name}}({{m.inform.length}})</h4>
			<div >
				<div v-for='(i,j) in m.inform'>
					<img :src="i.imgs" alt="">
					<p>{{i.title}}</p>
					<p>&yen;{{i.newprice}}</p>
				</div>
			</div>
		</article>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				goodsclass:JSON.parse(localStorage.getItem('favorite')),
			}
		},
}
</script>
<style lang="less" scoped>
	.collects{
		max-width:600px;
		width: 100%;
		margin: auto;
		article{
			display: block;
			max-width: 600px;
			width: 100%;
			text-align: left;
			margin-bottom: 3rem;
			h4{
				display: block;
				text-align: left;
				padding-left: 0.1rem;
			}
			&>div{
				width: 100%;
				div{
					margin-left: 0.1rem;
					display: inline-block;
					text-align: center;
					font-size: 0.5rem;
					width: 8rem;
					img{
						width: 4rem;
						height: 4rem;
					}
					p{
						padding: 0;
					}
					p+p{
						color:orange;
					}
				}
			}
		}
	}
</style>
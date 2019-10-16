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
		width:600px;
		margin: auto;
		article{
			display: block;
			width: 600px;
			text-align: left;
			margin-bottom: 50px;
			h4{
				display: block;
				text-align: left;
				padding-left: 10px;
			}
			div{
				div{
					margin-left: 10px;
					text-align: center;
					display: inline-block;
					width: 150px;
					font-size: 16px;
					img{
						width: 150px;
						height: 150px;
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
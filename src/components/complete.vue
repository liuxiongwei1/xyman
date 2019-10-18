<template>
	<div class="complete">
		<section>
			<div v-for='(m,n) in gInfors'>
				<img :src="m.imgs" alt="">
				<ul>
					<li>{{m.title}}</li>
					<li>数量：{{m.num}}</li>
					<li>价格：&yen;{{m.newprice}}</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				gInfors:JSON.parse(localStorage.getItem('buygoods')),
			}
		},
		methods:{
			regret(){
				history.back()
			},
		}
}
</script>
<style lang="less" scoped>
	.complete{
		max-width: 600px;
		width: 100%;
		section{
			max-width: 600px;
			width: 100%;
			margin-top: 1rem;
			&>div{
				max-width: 600px;
				width: 100%;
				height: 6rem;
				font-size: 1rem;
				margin-top: 10px;
				margin-bottom: 10px;
				display: flex;
				margin: auto;
				&:first-child{
					height: 6rem;
					font-size: 1rem;
				}
				img{
					width: 4rem;
					height: 4rem;
					margin-right: 0.5rem;
					margin-left: 0.5rem;
				}
				ul{
					margin: 0;
					display: inline-block;
					list-style-type: none;
					padding: 0;
					border: none;
					font-size: 0.8rem;
					li{
						width:100%;
						text-align: left;
						border: none;
					}
				}
			}
		}
	}
</style>
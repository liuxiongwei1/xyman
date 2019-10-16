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
<style lang="less">
	.complete{
		section{
			margin-top: 20px;
			div{
				width: 600px;
				height: 100px;
				font-size: 20px;
				margin-top: 10px;
				margin-bottom: 10px;
				&:first-child{
					height: 100px;
					font-size: 20px;
				}
				img{
					width: 150px;
					height: 150px;
				}
				ul{
					width: 400px;
					margin: 0;
					display: inline-block;
					list-style-type: none;
					padding: 0;
					border: none;
					li{
						width:400px;
						text-align: left;
						border: none;
					}
				}
			}
		}
	}
</style>
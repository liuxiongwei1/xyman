<template>
	<div class="classify">
		<header style="margin-top: 15px;">
		  <el-input placeholder="搜索商品" v-model="input3" class="input-with-select">
		    <el-button slot="append"icon="el-icon-search"></el-button>
		  </el-input>
		  <section>
		  	<router-link tag='div' to='/goods' @click='shang'>商品</router-link>
		  	<router-link tag='div' to='/brand' @click='pin'>品牌</router-link>
		  </section>
		</header>
		<footer><router-view></router-view></footer>	
	</div>
</template>
<script>
	export default{
		data(){
			return{
				input2:'',
				input3:''
			}
		},
		beforeUpdate(n){
			console.log(this.input2)
		},
		methods:{
			shang(){
				console.log(1)
				this.input2='选择商品'
			},
			pin(){
				this.input2='选择品牌'
			}
		}
}
</script>
<style lang="less" scoped>
	.el-select .el-input {
	   max-width: 130px;
	 }
	.input-with-select .el-input-group__prepend {
		border: none;
	   background-color: #fff;
	}
	.classify{
		.el-input{
			width:90%;
			margin-top: 0.5rem;
			margin-left: 5%;
			border: none;
			background-color: #f2f2f2;
			.el-button{
				background-color: #e8e8e8;
			}
		}
		.router-link-active{
			border-bottom: orange 4px solid;
			color:orange;
		}
		header{
			position:fixed;
			max-width: 600px;
			width: 100%;
			top: -1rem;
			left: 50%;
			transform: translate(-50%);
			background-color: white;
		}
		section{
			display: flex;
			justify-content: space-around;
			div{
				font-size:16px;
				width: 50%;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
		}
		footer{
			margin-top: 100px;
			overflow: auto;
		}
	}
</style>
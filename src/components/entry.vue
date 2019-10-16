<template>
	<div class="entry">
		<header><span @click='regret'>取消</span></header>
		<div><img src="/static/images/entry/1.png" alt=""></div>
		<ul>
			<li><input type="text" placeholder="邮箱/手机号" v-model="number" @blur='numbertext'><span>{{numbercontent}}</span></li>
			<li><input type="password" placeholder="密码" v-model="password" @blur='passwordtext'><span>{{passwordcontent}}</span></li>
			<router-link tag='li' :to='towhere'><input type="button" value="登录" @click='tohome'></router-link>
		</ul>
		<div>
			<div>忘记密码?</div>
		 	<div>注册账号</div>
		</div>
		<footer>
			<img src="/static/images/entry/sina.png" alt="">
			<div></div>
			<img src="/static/images/entry/wx.png" alt="">
		</footer>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				number:'',
				numbercontent:'',
				password:'',
				passwordcontent:'',
				towhere:'/entry',
			}
		},
		methods:{
			regret(){
				history.back()
			},
			numbertext(){
				if(/^1[3-9]\d{9}$/.test(this.number)||/\S*@\S*\.\S*/.test(this.number)){
					this.numbercontent='';
				}else{
					this.numbercontent='账号不符合要求';
				}
			},
			passwordtext(){
				if(this.password.length>=6){
					this.passwordcontent='';
				}else{
					this.passwordcontent='密码长度不能小于6';
				}
			},
			tohome(){
				if(this.numbercontent==''&&this.passwordcontent==''){
					localStorage.setItem('entryStatus','true');
					localStorage.setItem('my','/my');
					localStorage.setItem('myche','/shopping');
					history.back();
				}
			}
		}
}
</script>
<style lang="less">
	.entry{
		height: 100vh;
		background-image:url(/static/images/entry/2.png);
		background-repeat: no-repeat;
		background-size: 100vw 100vh; 
		header{
			width: 700px;
			color:white;
			margin: auto;
			padding-top: 20px;
			font-size: 20px;
		}
		header+div{
			width: 100px;
			height: 100px;
			margin: auto;
			margin-top: 50px;
			img{
				width: 100px;
				height: 100px;
			}
		}
		ul{
			list-style-type: none;
			li{
				width: 600px;
				margin: auto;
				margin-top: 40px;
				text-align: center;
				input{
					font-size: 20px;
					width: 600px;
					height: 60px;
					text-align:center;
				}
				&:last-child input{
						border:none;
						color: white;
						background-color: #e7b800;
				}
				span{
					color: red;
					font-size: 30px;
				}
			}
		}
		ul+div{
			margin: auto;
			width: 600px;
			display: flex;
			justify-content: space-between;
			margin-bottom: 40px;
			div{
				color:#7d7c7c;
				width: 100px;
				text-align: right;
			}
		}
		footer{
			width: 500px;
			margin: auto;
			text-align: center;
			div{
				display: inline-block;
				width: 30px;
			}
		}
	}
</style>
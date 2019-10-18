<template>
	<div class="lookgoods">
		<header>
			<div><img src="/static/images/shoes/left.svg" alt="" @click='regret1'></div>
			<div class="headline"><img src="/static/images/shoes/1.png" alt=""> 单品详情</div>
			<div></div>
		</header>
		<div class="ding"></div>
		<section>
			<el-carousel indicator-position="outside">
			    <el-carousel-item v-for="item in pages" :key="item.src">
			      <div><img :src="item.src" alt=""></div>
			    </el-carousel-item>
			</el-carousel>
			<p>{{goodsinformation.title}}</p>
			<p>&yen;{{goodsinformation.newprice}}</p>
			<div class="collect">
				<div @click='entry'>
					<img :src='goodsinformation.heartsrc' alt="">
				</div>
				<div>
					<el-button @click="drawer = true" type="primary" >
					</el-button>
					<el-drawer
					  title="分享到"
					  :visible.sync="drawer"
					  :direction="direction" style='text-align: center;font-size: 1rem;'>
					  <div class='weiAndQQ' style="text-align: center;">
					  	<img src="/static/images/lookgoods/QQ.png" alt=""style='width: 2rem;height:2rem;margin-left: 1rem;margin-right: 1rem;'>
					  	<img src="/static/images/lookgoods/weibo.png" alt=""style='width: 2rem;height: 2rem;margin-left: 1rem;margin-right: 1rem;'>
					  	<img src="/static/images/lookgoods/weixin.png" alt=""style='width: 2rem;height: 2rem;margin-left: 1rem;margin-right: 1rem;'>
					  </div>
					</el-drawer>
				</div>
			</div>
			<div class='goodsdescribe'>产品描述</div>
			<p>产品编号325413</p>
			<div>Converse Chuck Taylor All Star 真皮运动鞋。
				真朋克从来不会赶时髦，真朋克就要穿黑色！穿出自己的风格最重要，全黑色就是象征着反叛，象征着Fuck The World。
				鞋面：牛皮。大底：橡胶。尺码：US 美码。
			</div>
			<div class="goodsinfor"><img src="/static/images/lookgoods/1.jpg" alt=""></div>
			<h4>北美二号仓</h4>
			<div>商品国际快递由UPS提供，商品详情中所示时间为官方发货后物流时效，一般官方发货后15-21个工作日送达您手中。
			海淘商品的物流不稳定性众所周知，收货时长较长！各位下单前请深思熟虑，谨慎下单！下单后请各位耐心等待！
			</div>
			<div class="shopping">
				<div class='oneexplain' v-for='(m,n) in requir' :style='{display:mystyle}'>
					<h3>{{m.title}}</h3>
					<p>{{m.content}}</p>
				</div>
				<div class="shrink" @click='openpanel'>购物说明<img :src="updown" alt=""></div>
			</div>
			<div v-for='(m,n) in moregoods' :key='m.title' class='recommend'>
				<h5>{{m.title}}</h5>
				<div>
					<div>
						<router-link tag='div' to='/lookgoods' v-for='(i,s) in m.com' :key='i.src'>
							<img :src="i.src" alt="">
							<div>{{i.goods}}</div>
							<div class="goodsprice">{{i.price}}</div>
						</router-link>
					</div>
				</div>
				
			</div>
		</section>
		<div class='favorite' :style='{display:open}'@click='clear'>
		</div>
		<div :class="isShow?Yes:No">
			<h4>选择收藏夹</h4>
			<div class='addfavori'>
				<input type="text" placeholder="添加收藏夹" v-model='favoriteclass'>
				<h2 class='add' @click='addfavorite'>
					<img src="/static/images/home/add.svg" alt="">
				</h2>
			</div>
			
			<ul >
				<li v-for='(m,n) in favoriteul' :key='m.name'@click='addFavoriteToClass(m)'>{{m.name}}({{m.inform.length}})</li>
			</ul>
		</div>
		<footer @click='goodsStyle'>
			加入购物车
		</footer>
		<div class="goodsStyle" :style='{height:goodsStyWidth}'>
			<div>
				<header :style='{width:hfwidth}'>
					<div><img src="/static/images/shoes/left.svg" alt="" @click='regret'></div>
					<div class="headline"><img src="/static/images/shoes/1.png" alt=""> 选择商品属性</div>
					<div class="zhan"></div>
				</header>
				<section class="goodssection">
					<section>
						<div class="goodsimg" :style='{backgroundImage:goodsinformation.img}'></div>
						<div>
							<div>{{goodsinformation.title}}</div>
							<div>已选</div>
							<div>价格:&yen;{{goodsinformation.newprice}}</div>
							<div>数量：{{num}}</div>
						</div>
					</section>
					<div>
						颜色
						<div><span style='background-color: orange'>Black Monochrome</span></div>
						尺寸
						<div><span v-for='(m,n) in sizeStyle' :class='{"sizeClass":m.sure}' @click='clickSize(m)'>{{m.name}}</span></div>
						数量
						<div>
							<input type="button" value='+' @click='addnum'><span>{{num}}</span><input type="button" value='-' @click='reducenum'>
						</div>
					</div>
				</section>
				<footer :style='{width:hfwidth}' class='goodsfooter'>
					<div @click='addshopping'>加入购物车</div>
					<div @click='tobuy'>立即购买</div>
				</footer>
			</div>
		</div>
	</div>
</template>
<script>
	localStorage.setItem('shoesgoods',JSON.stringify				(
						{
							imgs:'/static/images/home/1.jpg',
							img:'url(/static/images/home/1.jpg)',
							title:'Bowers & Wilkins C5 入耳式耳机',
							content:'低音下潜惊人的耳机',
							oldprice:'1028',
							newprice:'1744',
							heartsrc:'/static/images/home/heart2.svg',
							heart1src:'/static/images/home/heart1.svg',
							heart2src:'/static/images/home/heart2.svg',
							num:'0',
							pitch:'/static/images/shopping/nopitch.svg',
							pitch1:'/static/images/shopping/pitch.svg',
							pitch2:'/static/images/shopping/nopitch.svg',
						}))
	import slider from 'vue-concise-slider'
	export default{
		created:function(){
			this.goodsinformation=JSON.parse(localStorage.getItem(this.goodsLocal));
			if(!this.goodsLocal){
				this.goodsLocal='shoesgoods';
				this.goodsinformation=JSON.parse(localStorage.getItem(this.goodsLocal))
			}
		},
		data(){
			return{
				hfwidth:'0',
				goodsStyWidth:'0%',
				num:1,
				drawer: false,
				direction: 'btt',
				isShow:true,
				open:'none',
				Yes:'classA',
				No:'classB',
				favoriteul:'',
				favoriteclass:'',
				inforchange:'',
				goodsinformation:'',
				goodsLocal:this.$route.query.goodsTnfor.imgs,
				pages:[
					{
						title:'1',
						src:'/static/images/lookgoods/01.jpg'
					},
					{
						title:'2',
						src:'/static/images/lookgoods/02.jpg'
					},
					{
						title:'3',
						src:'/static/images/lookgoods/03.jpg'
					},
					{
						title:'4',
						src:'/static/images/lookgoods/04.jpg'
					},
				],
				sizeStyle:[
					{
						name:7,
						sure:true,
					},
					{
						name:10,
						sure:false,
					},
					{
						name:15,
						sure:false,
					},
				],
				requir:[
					{
						title:'联系我们',
						content:'如有疑问可以随时咨询XY在线客服或拨打4006-799-288,发送邮件到help@xymens.com'
					},
					{
						title:'购物提示',
						content:'XY提供的商品均由欧洲、日本、美国主流电商或品牌官网直接提供，以保障100%正品。由于海外库存原因，支付成功后，XY会立即处理订单，但可能出现缺货现象。如发生缺货，我们会第一时间通知您，并进行全额退款。'
					},
					{
						title:'关于退货',
						content:'如有退货需求，您可以在签收后5日内及时联系XY客服，我们审核后为您联系官网办理退货。退款款项会在3-5个工作日内返回到用户账上。部分折扣商品恕不提供退换货服务。'
					},
					{
						title:'关于退货费用',
						content:'若商品被XY判断为质量问题需要退换货，与客服协商一致后，退回邮费由XY承担；如果是一般问题产生退换货，用户需要承担退回至相应国家的国际邮费外以及寄送至我司的国内邮费（拒收到付）。其中国际邮费资费为125首500克，45续100克，同时应符合供货方的退换货条款与时效，造成不便，请您谅解。'
					}
				],
				moregoods:[
					{
						title:'可搭配单品',
						com:[
							{
								goods:'一裤',
								src:'/static/images/lookgoods/11.jpg',
								price:'￥250',
							},
							{
								goods:'二裤',
								src:'/static/images/lookgoods/12.jpg',
								price:'￥300',
							},
							{
								goods:'三裤',
								src:'/static/images/lookgoods/13.jpg',
								price:'￥405',
							},
							{
								goods:'四裤',
								src:'/static/images/lookgoods/14.jpg',
								price:'￥120',
							},
						]
					},
					{
						title:'相似产品',
						com:[
							{
								goods:'一鞋',
								src:'/static/images/lookgoods/21.jpg',
								price:'￥300',
							},
							{
								goods:'二鞋',
								src:'/static/images/lookgoods/22.jpg',
								price:'￥140',
							},
							{
								goods:'三鞋',
								src:'/static/images/lookgoods/23.jpg',
								price:'￥115',
							}
						]
					},
				],
				mystyle:'none',
				updown:'/static/images/lookgoods/down.svg'
			}
		},
		methods:{
			clickSize(n){
				for(var a in this.sizeStyle){
					this.sizeStyle[a].sure=false
				}
				n.sure=true
			},
		    openpanel(){
		    	if(this.mystyle=='none'){
		    		this.mystyle='block';
		    		this.updown='/static/images/lookgoods/up.svg';
		    	}else{
		    		this.mystyle='none';
		    		this.updown='/static/images/lookgoods/down.svg'
		    	}
		    },
		    regret1(){
		    	history.back();
		    },
		    regret(){
		    	this.goodsStyWidth='0';
		    	this.hfwidth='0';
		    },
		    entry(){
		    	if(localStorage.getItem('entryStatus')=='true'){
		    		if(this.goodsinformation.heartsrc==this.goodsinformation.heart1src){
		    			this.goodsinformation.heartsrc=this.goodsinformation.heart2src;
		    			localStorage.setItem(this.goodsLocal,JSON.stringify(this.goodsinformation));
		    			var arr=JSON.parse(localStorage.getItem('favorite'));
		    			for(var a=0;a<arr.length;a++){
		    				for(var b=0;b<arr[a].inform.length;b++){;
		    					if(this.goodsinformation.imgs==arr[a].inform[b].imgs){
		    					arr[a].inform.splice(b,1);
		    					}
		    				}
		    				if(!arr[a].inform.length){
		    					console.log(a);
		    					arr.splice(a,1);
		    				}
		    				localStorage.setItem('favorite',JSON.stringify(arr))
		    			}
		    		}else{
		    			this.isShow=false;
		    			this.open='block';
		    			this.favoriteul=JSON.parse(localStorage.getItem('favorite'));
		    		}
		    	}else{
            		open("http://localhost:8080/#/entry","_self");
            	}
		    },
		    addfavorite(){
		    	var arr=JSON.parse(localStorage.getItem('favorite'));
		    	if(this.favoriteclass!=''){
		    		if(arr.length==0){
		    			var arr1=[];
		    			arr1.push(this.goodsinformation);
		    			var obj={
		    				name:this.favoriteclass,
		    				inform:arr1
		    			}
		    			arr.push(obj);
		    			localStorage.setItem('favorite',JSON.stringify(arr));
		    			this.isShow=true;
		    			this.open='none';
		    			this.goodsinformation.heartsrc=this.goodsinformation.heart1src;
		    			localStorage.setItem(this.goodsLocal,JSON.stringify(this.goodsinformation))
		    		}
		    		else{
		    			for(var i=0;i<arr.length;i++){
		    				if(this.favoriteclass==arr[i].name){
		    					
		    				}
		    				else{
		    					if(this.favoriteclass!=arr[arr.length-1].name){
		    						var arr1=[];
		    						arr1.push(this.goodsinformation);
		    						var obj={
		    							name:this.favoriteclass,
		    							inform:arr1
		    						}
		    						arr.push(obj);
		    						localStorage.setItem('favorite',JSON.stringify(arr));
		    						this.isShow=true;
		    						this.open='none';
		    						this.goodsinformation.heartsrc=this.goodsinformation.heart1src;
		    						localStorage.setItem(this.goodsLocal,JSON.stringify(this.goodsinformation))
		    					}
		    				}
		    			}
		    		}
		    	}
		    },
		    addFavoriteToClass(n){
		    	var arr=JSON.parse(localStorage.getItem('favorite'));
		    	for(var m=0;m<arr.length;m++){
		    		if(n.name==arr[m].name){
		    			arr[m].inform.push(this.goodsinformation)
		    		}
		    	}
		    	this.isShow=true;
		    	this.open='none';
		    	this.goodsinformation.heartsrc=this.goodsinformation.heart1src;
		    	localStorage.setItem(this.goodsLocal,JSON.stringify(this.goodsinformation));
		    	localStorage.setItem('favorite',JSON.stringify(arr));
		    },
		    clear(){
		    	this.isShow=true;
		    	this.open='none';
		    },
		    goodsStyle(){
		    	this.goodsStyWidth='100%';
		    	this.hfwidth='100%';
		    },
		    addnum(){
		    	this.num++
		    },
		    reducenum(){
		    	if(this.num){
		    		this.num--
		    		if(this.num==0){
		    			this.num=1
		    		}
		    	}
		    },
		    addshopping(){
		    	this.goodsinformation.num=this.num;
		    	console.log(this.num)
		    	if(!localStorage.getItem('shopping')){
		    		var arr=[];
		    		arr.push(this.goodsinformation);
		    		localStorage.setItem('shopping',JSON.stringify(arr));
		    	}else{
		    		var arr=JSON.parse(localStorage.getItem('shopping'));
		    		for(var a in arr){
		    			console.log(a)
		    			if(this.goodsinformation.imgs==arr[a].imgs){
		    				arr[a].num+=this.goodsinformation.num
		    				break
		    			}else{
		    				if(a==arr.length-1){
		    					arr.push(this.goodsinformation);
		    				}
		    			}
		    		}
		    		if(arr.length==0){
		    			arr.push(this.goodsinformation);
		    		}
		    		localStorage.setItem('shopping',JSON.stringify(arr));
		    	}
		    	this.goodsStyWidth='0';
		    	this.hfwidth='0';
		    },
		    tobuy(){
		    	var arr=[];
		    	arr.push(this.goodsinformation);
		    	localStorage.setItem('buygoods',JSON.stringify(arr));
		    	open("http://localhost:8080/#/sureGoods","_self");
		    }
		}
}
</script>
<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.el-carousel__item div{
		margin: auto;
	    width: 200px;
	    height: 300px;
	    img{
	    	width: 200px;
	    	height: 300px;
	    }
	  }
	  .ding{
	  	width: 100px;
	  	height: 100px;
	  }
	  .el-carousel__item:nth-child(2n) {
	    background-color: #ffffff;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #ffffff;
	  }
	.lookgoods{
		position: relative;
		max-width: 600px;
		width: 100%;
		margin: auto;
		overflow: hidden;
		.weiAndQQ{
			img{
				width: 1rem;
				height: 1rem;
			}
		}
		.classB{
			height:13rem;
			transition:height 1s linear;
		}
		.classA{
			height: 0px;
			transition:height 1s linear; 
		}
		.favorite{
			padding: 0;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.7;
			z-index: 4;
		}
		.favorite+div{
			overflow: hidden;
			max-width: 600px;
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 50%;
			transform: translate(-50%);
			background-color: white;
			z-index: 4;
			h4{
				margin-top: .7rem;
				margin-bottom: 0.3rem;
				font-size: 1rem;
				text-align: center;
			}
			.addfavori{
				input{
					max-width:500px;
					width: 80%;
					height: 2rem;
					font-size: 1rem;
					line-height: 2rem;
					border:none; 
					outline: none;
					margin-left: 0.7rem;
				}
				.add{
					display: inline-block;
					width: 20px;
					height: 20px;
					img{
						width: 20px;
						height: 20px;
					}
				}
			}
			ul{
				overflow: auto;
				padding: 0;
				list-style-type: none;
				li{
					padding-left: 10px;
					height: 40px;
					line-height: 40px;
					font-size: 20px;
					border-bottom: 1px solid #4d4d4d;
					border-top: 1px solid #4d4d4d;
				}
			}
		}
		.collect{
			display: flex;
			justify-content: center;
			margin-bottom: 10px;
			div{
				width: 60px;
				height: 60px;
				text-align: center;
				margin-left:20px;
				margin-right: 20px;
				.el-button{
					width: 50px;
					height: 50px;
					background-color: white;
					border: none;
					background-image: url(/static/images/lookgoods/share.svg);
					background-repeat:no-repeat;
					background-size: 60px 60px;
					background-position: center;
				}
				img{
					width: 50px;
					height: 50px;
				}
			}
		}
		&>header{
			position: fixed;
			top: 0px;
			background-color: white;
			max-width: 600px;
			width: 100%;
			height: 3rem;
			display: flex;
			z-index: 4;
			justify-content: space-between;
			div{
				width: 3rem;
				height: 3rem;
				img{
					margin-top: 10px;
					width: 1.5rem;
					height:1.5rem;
				}
			}
			.headline{
				width:8rem;
				height:6rem;
				font-size: 1rem;
				img{
					width: 1.5rem;
					height: 1.5rem;
					margin-bottom: -5px;
					margin-right: 10px;
				}
			}
		}
		p{
			text-align: center;
		}
		.goodsdescribe{
			text-align: center;
			font-size: 25px;
		}
		.goodsinfor{
			width: 100%;
			margin: auto;
			img{
				margin-top: 40px;
				width: 90%;
			}
		}
		section{
			max-width: 600px;
			width: 100%;
			margin:auto;
			margin-bottom: 50px;
			h4{
				font-size: 30px;
				margin: 0;
				margin-top: 50px;
				text-align: center;
				font-weight: normal;
			}
			.oneexplain{
				position: relative;
				h3{
					left: 50%;
					top:-20px;
					transform:translate(-50%,-50%);
					position: absolute;
					text-align: center;
					line-height:40px; 
					height: 40px;
					width: 150px;
					border-radius: 25px;
					background-color:#333333;
					color: white;
				}
				h3+p{
					margin-top:50px;
					border:2px solid #656565;
					border-radius: 4px;
					text-align: left;
					padding-top: 20px;
					padding-bottom: 20px;
				}
			}
			.shrink{
				text-align: center;
				img{
					margin-top: 0.2rem;
					height: 1.1rem;
					width: 1.1rem;
				}
			}
			.recommend{
				h5+div{
					overflow: auto;
					&>div{
						display: flex;
						div{
							margin-left: 5px;
							width: 100px;
							text-align: center;
							img{
								width: 100px;
								height: 100px;
							}
							.goodsprice{
								color: orange;
							}
						}
					}
				}
			}
		}
		footer{
			position: fixed;
			bottom:0;
			left: 50%;
			transform: translate(-50%);
			max-width:600px;
			width: 100%;
			text-align: center;
			font-size: 1.5rem;
			color: white;
			background-color: #000000;
		}
		.sizeClass{
			background-color: orange;
		}
		.goodsStyle{
			position: fixed;
			width: 100%;
			height: 100%;
			left: 50%;
			transform: translate(-50%);
			top: 0;
			overflow: hidden;
			background-color: white;
			z-index: 5;
			&>div{
				max-width: 600px;
				width: 100%;
				margin: auto;
				&>header{
					overflow: hidden;
					margin-top: 1rem;
					background-color: white;
					max-width: 600px;
					width: 100%;
					height: 3rem;
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
						width:8rem;
						height:2rem;
						font-size: 1rem;
						img{
							width: 1.5rem;
							height: 1.5rem;
							margin-bottom: -0.5rem;
						}
					}
				}
				.goodssection{
					max-width:600px;
					width: 90%;
					section{
						.goodsimg{
							display: inline-block;
							max-width: 50rem;
							width: 40%;
							height: 8rem;
							background-repeat:no-repeat;
							background-size: 100%;
							background-position: center;
						}
						.goodsimg+div{
							width: 57%;
							display: inline-block;
							margin-left:0.8;
							font-size: 0.8rem;
							div{
								height:2rem;
								line-height: 2rem;
								&:nth-child(2){
								color: orange;
								}
								&:first-child{
									height: 4rem;
							}
							}
							
						}
					}
					section+div{
						font-size: 1rem;
						div{
							margin-bottom: 1.1rem;
							border-bottom: 1px solid #696969;
							padding-bottom: 1.1rem;
							span{
								display: inline-block;
								font-size: 1rem;
								padding: 0.6rem 0.6rem;
								margin-top: 0.3rem;
								border: 0.01rem solid orange;
								margin-right: 0.6rem;
							}
							input{
								width: 1.5rem;
								height: 1.5rem;
							}
							input+span{
								margin-right: 0;
								border: none;
							}
						}
					}
				}
				.goodsfooter{
					max-width:600px;
					width: 100%;
					height: 2.5rem;
					bottom: 0%;
					overflow: hidden;
					display: flex;
					justify-content: space-around;
					line-height: 2.5rem;
					text-align: center;
					font-size: 1.1rem;
					background-color: white;
					div{
						&:first-child{
							width: 47%;
							background-color:black;
						}
						&:last-child{
							width: 47%;
							background-color: yellow;
							color: #000000;
						}
					}
				}
			}
		}
	}
</style>
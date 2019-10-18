<template>
	<div class="home">
		<div v-for='n in information'>
			<header><img :src="n.imgs" alt=""></header>
			<p class="title">{{n.title}}</p>
			<p>{{n.content}}</p>
			<footer>
				<button type="button" @click='toPay(n)'>购买&yen;{{n.oldprice}}</button>
				<div><s>&yen;{{n.newprice}}</s></div>
				<div class="heart" @click='entry(n)'>
					<img :src="n.heartsrc" alt="">
				</div>
			</footer>
		</div>
		<div class='favorite' :style='{display:open}'@click='clear'>
		</div>
		<div :class="isShow?Yes:No">
			<h4>选择收藏夹</h4>
			<div class='addfavorite'>
				<input type="text" placeholder="添加收藏夹" v-model='favoriteclass'>
				<h2 class='add' @click='addfavorite'>
					<img src="/static/images/home/add.svg" alt="">
				</h2>
			</div>
			
			<ul >
				<li v-for='(m,n) in favoriteul' :key='m.name'@click='addFavoriteToClass(m)'>{{m.name}}({{m.inform.length}})</li>
			</ul>
		</div>
	</div>
</template>
<script>
	localStorage.setItem('goodsinformation',JSON.stringify([
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
					},
					{
						imgs:'/static/images/home/2.jpg',
						img:'url(/static/images/home/2.jpg)',
						title:'ISSEY MIYAKE三宅一生C系列计时腕表',
						content:'纯粹又精湛的大师级作品',
						oldprice:'2944',
						newprice:'3680',
						heartsrc:'/static/images/home/heart2.svg',
						heart1src:'/static/images/home/heart1.svg',
						heart2src:'/static/images/home/heart2.svg',
						num:'0',
						pitch:'/static/images/shopping/nopitch.svg',
						pitch1:'/static/images/shopping/pitch.svg',
						pitch2:'/static/images/shopping/nopitch.svg',
					},
				]));
	localStorage.setItem('favorite','[]');
	if(!localStorage.getItem('entryStatus')){
		localStorage.setItem('entryStatus','false');
	}
	export default{
		data(){
			return{
				isShow:true,
				open:'none',
				Yes:'classA',
				No:'classB',
				favoriteul:'',
				favoriteclass:'',
				changeadd:'',
				inforchange:'',
				information:JSON.parse(localStorage.getItem('goodsinformation')),
			}	
		},
		methods:{
            entry(n){
            	if(localStorage.getItem('entryStatus')=='true'){
            		if(n.heartsrc==n.heart1src){
            			n.heartsrc=n.heart2src;
            			localStorage.setItem('goodsinformation',JSON.stringify(this.information))
            			var arr=JSON.parse(localStorage.getItem('favorite'));
            			for(var a=0;a<arr.length;a++){
            				for(var b=0;b<arr[a].inform.length;b++){;
            					if(n.imgs==arr[a].inform[b].imgs){
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
            			this.changeadd=n;
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
            			arr1.push(this.changeadd);
            			var obj={
            				name:this.favoriteclass,
            				inform:arr1
            			}
            			arr.push(obj);
            			localStorage.setItem('favorite',JSON.stringify(arr));
            			this.isShow=true;
            			this.open='none';
            			for( i in this.information){
            				if(this.changeadd==this.information[i]){
            					this.information[i].heartsrc=this.information[i].heart1src;
            					localStorage.setItem('goodsinformation',JSON.stringify(this.information))
            				}
            			}
            			
            		}
            		else{
            			for(var i=0;i<arr.length;i++){
            				if(this.favoriteclass==arr[i].name){
            					
            				}
            				else{
            					if(this.favoriteclass!=arr[arr.length-1].name){
            						var arr1=[];
            						arr1.push(this.changeadd);
            						var obj={
            							name:this.favoriteclass,
            							inform:arr1
            						}
            						arr.push(obj);
            						localStorage.setItem('favorite',JSON.stringify(arr));
            						this.isShow=true;
            						this.open='none';
            						for( i in this.information){
            							if(this.changeadd==this.information[i]){
            								this.information[i].heartsrc=this.information[i].heart1src;
            								localStorage.setItem('goodsinformation',JSON.stringify(this.information))
            							}
            						}
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
            			arr[m].inform.push(this.changeadd)
            		}
            	}
            	this.isShow=true;
            	this.open='none';
            	for( var i in this.information){
            		if(this.changeadd==this.information[i]){
            			this.information[i].heartsrc=this.information[i].heart1src;
            			localStorage.setItem('goodsinformation',JSON.stringify(this.information))
            		}
            	}
            	localStorage.setItem('favorite',JSON.stringify(arr));
            },
            clear(){
            	this.isShow=true;
            	this.open='none';
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
<style scoped lang="less">
	.home{
		.classB{
			height:10rem;
			transition:height 1s linear;
		}
		.classA{
			height: 0rem;
			transition:height 1s linear; 
		}
		div{
			header{
				max-width: 100%;
				text-align: center;
				img{
					max-width: 100px;
				}
			}
			.title{
				font-weight: bolder;
			}
			.title+p{
				color: #9999b2;
			}
			footer{
				margin-bottom: 40px;
				height: 50px;
				line-height: 50px;
				display: flex;
				justify-content: space-between;
				button{
					color: white;
					background-color: orange;
					border:none;
					height: 2rem;
					width: 6rem;
					font-size: 1rem;
				}
				s{
					color: orange;
				}
				.heart{
					height: 2rem;
					width: 3rem;
					border:1px solid red;
					text-align: center;
					line-height: 2rem;
					img{
						height: 2rem;
						width: 2rem;
					}
				}
			}
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
		}
		.favorite+div{
			overflow: hidden;
			max-width: 600px;
			width: 100%;
			position: absolute;
			bottom: 0;
			z-index:20;
			left: 50%;
			transform: translate(-50%);
			background-color: white;
			h4{
				margin-top: 0.3rem;
				margin-bottom: 0;
				font-size: 1.3rem;
				text-align: center;
			}
			.addfavorite{
				margin:0;
				padding: 0;
				width: 100%;
				height: 1.5rem;
				display: flex;
				justify-content: space-between;
				input{
					max-width:500px;
					height: 2rem;
					font-size: 1rem;
					line-height: 2rem;
					border:none; 
					outline: none;
					margin-left: 10px;
				}
				.add{
					margin: 0;
					padding: 0;
					width: 1.5rem;
					height: 1.5rem;
					margin-right: 1%;
					img{
						width: 1.5rem;
						height: 1.5rem;
					}
				}
			}
			ul{
				overflow: auto;
				width: 100%;
				padding: 0;
				list-style-type: none;
				li{
					padding-left: 0.6rem;
					height: 2.4rem;
					line-height: 2.4rem;
					font-size: 1.2rem;
					border-bottom: 0.01rem solid #4d4d4d;
					border-top: 0.01rem solid #4d4d4d;
				}
			}
		}
	}
</style>
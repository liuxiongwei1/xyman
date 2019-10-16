import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import classify from '@/components/classify'
import goods from '@/components/goods'
import shopping from '@/components/shopping'
import brand from '@/components/brand'
import shoes from '@/components/shoes'
import lookgoods from '@/components/lookgoods'
import icogoods from '@/components/icogoods'
import entry from '@/components/entry'
import my from '@/components/my'
import collect from '@/components/collect'
import concern from '@/components/concern'
import setup from '@/components/my/setup'
import about from '@/components/my/about'
import revisepassword from '@/components/my/revisepassword'
import coupon from '@/components/my/coupon'
import shareOffers from '@/components/my/shareOffers'
import sureGoods from '@/components/sureGoods'
import older from '@/components/older'
import complete from '@/components/complete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      	{
      		path:'/home',
      		name:'home',
      		component:home
      	},
      	{
      		path:'/classify',
      		name:'classify',
      		component:classify,
      		children:[
      			{
      				path:'/goods',
      				name:'goods',
      				component:goods,
      			},
      			{
      				path:'/brand',
      				name:'brand',
      				component:brand,
      			}
      		],
      		redirect:'/goods'
      	},
      	{
      		path:'/shoes',
      		name:'shoes',
      		component:shoes
      	},
      	{
      		path:'/my',
      		name:'my',
      		component:my,
      		children:[
      			{
      				path:'/collect',
      				name:'collect',
      				component:collect
      			},
      			{
      				path:'/concern',
      				name:'concern',
      				component:concern
      			}
      		],
      		redirect:'/collect'
      	},
      ],
      redirect:'/home'
    },
    {
    	path:'/lookgoods',
    	name:'lookgoods',
    	component:lookgoods,
    },
    {
    	path:'/icogoods',
    	name:'icogoods',
    	component:icogoods,
    },
    {
    	path:'/entry',
    	name:'entry',
    	component:entry,
    },
    {
    	path:'/setup',
    	name:'setup',
    	component:setup,
    },
    {
    	path:'/about',
    	name:'about',
    	component:about,
    },
    {
    	path:'/revisepassword',
    	name:'revisepassword',
    	component:revisepassword,
    },
    {
    	path:'/coupon',
    	name:'coupon',
    	component:coupon,
    },
    {
    	path:'/shareOffers',
    	name:'shareOffers',
    	component:shareOffers,
    },
    {
    	path:'/shopping',
    	name:'shopping',
    	component:shopping
    },
    {
    	path:'/sureGoods',
    	name:'sureGoods',
    	component:sureGoods
    },
    {
      path:'/older',
      name:'older',
      component:older,
      children:[
        {
          path:'/complete',
          name:'complete',
          component:complete,
        },
      ],
      redirect:'/complete'
    },
  ]
})

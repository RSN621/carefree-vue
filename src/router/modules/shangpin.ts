const shangpin:AuthRoute.Route ={
	name: 'shangpin',
	path: '/shangpin',
	component: 'basic',
	children:[
		{
			name: 'shangpin_item',
			path: '/shangpin/item',
			component: 'self',
			meta: {
				title: '商品列表',
				requiresAuth: true,
				icon: 'streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products'
			}
		}
	],
	meta: {
		title: '商品管理',
		icon: 'icon-park:commodity',
		order: 4
	}
}
export default shangpin;

const carefree: AuthRoute.Route = {
	name:'carefree',
	path:'/carefree',
	component: 'basic',
	children:[
		{
		name:'carefree_user',
		path:'/carefree/user',
		component:'self',
		meta:{
			title: '用户',
			requiresAuth: true,
			icon: 'icon-park:reduce-user'
			   }
		},
		{
			name:'carefree_role',
			path:'/carefree/role',
			component:'self',
			meta:{
				title: '角色权限',
				requiresAuth: true,
				icon: 'icon-park:right-user'
			}
		},
		{
			name:'carefree_item',
			path:'/carefree/item',
			component:'self',
			meta:{
				title: '商品',
				requiresAuth: true,
				icon: 'mdi:account'
			}
		}
	],
	meta: {
		title: '用户管理',
		icon: 'icon-park:user',
		order: 2
	}
}
export default carefree;

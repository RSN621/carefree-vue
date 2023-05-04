const dongtian:AuthRoute.Route = {
	name: 'dongtian',
	path: '/dongtian',
	component: 'basic',
	children:[
		{
			name: 'dongtian_fudi',
			path: '/dongtian/fudi',
			component: 'self',
			meta:{
				title:'主控台',
				requiresAuth: true,
				icon: 'akar-icons:sword'
			}
		},
		{
			name: 'dongtian_woekbench',
			path: '/dongtian/woekbench',
			component: 'self',
			meta:{
				title:'工作台',
				requiresAuth: true,
				icon: 'icon-park-outline:workbench'
			}
		}
	],
	meta: {
		title: 'CareFree',
		icon: 'icon-park-outline:all-application',
		order: 1
	}
}
export default dongtian;

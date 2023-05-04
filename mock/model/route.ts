export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
		{
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
		},
		{
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
		},
		{
			name: 'slw',
			path: '/slw',
			component: 'basic',
			meta: {
				title: '305寝室',
				icon: 'icon-park-outline:all-application',
				order: 6
			},
			children: [
				{
					name: 'slw_jc',
					path: '/slw/jc',
					component: 'self',
					meta: {
						title: '江璨',
						requiresAuth: true,
						icon: 'bi:0-circle-fill'
					}
				},
				{
					name: 'slw_ccl',
					path: '/slw/ccl',
					component: 'self',
					meta: {
						title: '曹超零',
						requiresAuth: true,
						icon: 'bi:0-circle'
					}
				},
				{
					name: 'slw_zhr',
					path: '/slw/zhr',
					component: 'self',
					meta: {
						title: '用户展示',
						requiresAuth: true,
						icon: 'mdi:account'
					}
				},
				{
					name: 'slw_hyq',
					path: '/slw/hyq',
					component: 'self',
					meta: {
						title: '音乐展示',
						requiresAuth: true,
						icon: 'ri:bilibili-line'
					}
				}
			],
		},
		{
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
		},
    {
      name: 'multi-menu',
      path: '/multi-menu',
      component: 'basic',
      children: [
        {
          name: 'multi-menu_first',
          path: '/multi-menu/first',
          component: 'multi',
          children: [
            {
              name: 'multi-menu_first_second',
              path: '/multi-menu/first/second',
              component: 'self',
              meta: {
                title: '二级菜单',
                requiresAuth: true,
                icon: 'mdi:menu'
              }
            },
            {
              name: 'multi-menu_first_second-new',
              path: '/multi-menu/first/second-new',
              component: 'multi',
              children: [
                {
                  name: 'multi-menu_first_second-new_third',
                  path: '/multi-menu/first/second-new/third',
                  component: 'self',
                  meta: {
                    title: '三级菜单',
                    requiresAuth: true,
                    icon: 'mdi:menu'
                  }
                }
              ],
              meta: {
                title: '二级菜单(有子菜单)',
                icon: 'mdi:menu'
              }
            }
          ],
          meta: {
            title: '一级菜单',
            icon: 'mdi:menu'
          }
        }
      ],
      meta: {
        title: '多级菜单',
        icon: 'carbon:menu',
        order: 1
      }
    },
		{
			name: 'kjlj',
			path: '/kjlj',
			component: 'self',
			meta: {
				title: '快捷链接',
				icon: 'ri:link-m',
				order: 10,
				keepAlive: true,
				singleLayout: 'basic'
			}
		}
  ],
  admin: [
		{
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
		},
		{
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
		},
		{
			name: 'slw',
			path: '/slw',
			component: 'basic',
			meta: {
				title: '305寝室',
				icon: 'icon-park-outline:all-application',
				order: 6
			},
			children: [
				{
					name: 'slw_jc',
					path: '/slw/jc',
					component: 'self',
					meta: {
						title: '江璨',
						requiresAuth: true,
						icon: 'bi:0-circle-fill'
					}
				},
				{
					name: 'slw_ccl',
					path: '/slw/ccl',
					component: 'self',
					meta: {
						title: '曹超零',
						requiresAuth: true,
						icon: 'bi:0-circle'
					}
				},
				{
					name: 'slw_zhr',
					path: '/slw/zhr',
					component: 'self',
					meta: {
						title: '用户展示',
						requiresAuth: true,
						icon: 'mdi:account'
					}
				},
				{
					name: 'slw_hyq',
					path: '/slw/hyq',
					component: 'self',
					meta: {
						title: '音乐展示',
						requiresAuth: true,
						icon: 'ri:bilibili-line'
					}
				}
			],
		},
		{
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
		},
		{
			name: 'multi-menu',
			path: '/multi-menu',
			component: 'basic',
			children: [
				{
					name: 'multi-menu_first',
					path: '/multi-menu/first',
					component: 'multi',
					children: [
						{
							name: 'multi-menu_first_second',
							path: '/multi-menu/first/second',
							component: 'self',
							meta: {
								title: '二级菜单',
								requiresAuth: true,
								icon: 'mdi:menu'
							}
						},
						{
							name: 'multi-menu_first_second-new',
							path: '/multi-menu/first/second-new',
							component: 'multi',
							children: [
								{
									name: 'multi-menu_first_second-new_third',
									path: '/multi-menu/first/second-new/third',
									component: 'self',
									meta: {
										title: '三级菜单',
										requiresAuth: true,
										icon: 'mdi:menu'
									}
								}
							],
							meta: {
								title: '二级菜单(有子菜单)',
								icon: 'mdi:menu'
							}
						}
					],
					meta: {
						title: '一级菜单',
						icon: 'mdi:menu'
					}
				}
			],
			meta: {
				title: '多级菜单',
				icon: 'carbon:menu',
				order: 1
			}
		},
		{
			name: 'kjlj',
			path: '/kjlj',
			component: 'self',
			meta: {
				title: '快捷链接',
				icon: 'ri:link-m',
				order: 10,
				keepAlive: true,
				singleLayout: 'basic'
			}
		}
  ],
  user: [
		{
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
		},
		{
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
		},
		{
			name: 'slw',
			path: '/slw',
			component: 'basic',
			meta: {
				title: '305寝室',
				icon: 'icon-park-outline:all-application',
				order: 6
			},
			children: [
				{
					name: 'slw_jc',
					path: '/slw/jc',
					component: 'self',
					meta: {
						title: '江璨',
						requiresAuth: true,
						icon: 'bi:0-circle-fill'
					}
				},
				{
					name: 'slw_ccl',
					path: '/slw/ccl',
					component: 'self',
					meta: {
						title: '曹超零',
						requiresAuth: true,
						icon: 'bi:0-circle'
					}
				},
				{
					name: 'slw_zhr',
					path: '/slw/zhr',
					component: 'self',
					meta: {
						title: '用户展示',
						requiresAuth: true,
						icon: 'mdi:account'
					}
				},
				{
					name: 'slw_hyq',
					path: '/slw/hyq',
					component: 'self',
					meta: {
						title: '音乐展示',
						requiresAuth: true,
						icon: 'ri:bilibili-line'
					}
				}
			],
		},
		{
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
		},
		{
			name: 'kjlj',
			path: '/kjlj',
			component: 'self',
			meta: {
				title: '快捷链接',
				icon: 'ri:link-m',
				order: 10,
				keepAlive: true,
				singleLayout: 'basic'
			}
		}
  ]
};

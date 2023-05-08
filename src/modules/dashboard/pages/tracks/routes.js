export default [
    {
        name: 'Quentes',
        path: '/hot',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Hot')
    },
    {
        name: 'Novas',
        path: '/news',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/News')
    }
]
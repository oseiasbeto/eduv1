export default [
    {
        name: 'Artístas',
        path: '/artists',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Artists')
    },
    {
        name: 'Artísta',
        path: '/artist/:slug',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Artist')
    }
]
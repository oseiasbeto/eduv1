export default [
    {
        name: 'Categorias',
        path: '/categories',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Categories')
    }
]
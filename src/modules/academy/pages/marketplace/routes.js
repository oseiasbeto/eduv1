export default [
    {
        name: 'Marketplace - Epanel',
        path: '/epanel/marketplace',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]
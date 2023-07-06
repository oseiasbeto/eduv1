export default [
    {
        name: 'Painel de control - Eduka',
        path: '/epanel',
        meta: {
            requiresAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]
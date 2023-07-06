export default [
    {
        name: 'Criar conta - Eduka',
        path: '/account/signup',
        meta: {
            routeAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]
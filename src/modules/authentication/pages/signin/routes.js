export default [
    {
        name: 'Eduka - Entrar',
        path: '/account/signin',
        meta: {
            routeAuth: true
        },
        component: () => import('../../ModuleView.vue')
    }
]
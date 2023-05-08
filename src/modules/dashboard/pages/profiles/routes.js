export default [
    {
        name: 'Minha conta',
        path: '/users/account',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/MyAccount')
    }
]
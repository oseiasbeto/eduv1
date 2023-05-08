export default [
    {
        name: 'Ouviaki - Ouve Agora os teus Favoritos',
        path: '/',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Home')
    },
    {
        name: 'Ouviaki | Pesquisar',
        path: '/search',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Search')
    }
]
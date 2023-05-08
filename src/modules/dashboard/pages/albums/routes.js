export default [
    {
        name: 'Albuns',
        path: '/albums',
        component: () => import('./views/Albums')
    },
    {
        name: 'Album',
        path: '/album/:id',
        component: () => import('./views/Album')
    },
]
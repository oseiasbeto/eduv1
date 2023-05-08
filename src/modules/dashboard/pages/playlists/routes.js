export default [
    {
        name: 'Playlists',
        path: '/playlists',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Playlists')
    },
    {
        name: 'Playlis',
        path: '/playlist/:id',
        meta: {
            requiresAuth: true
        },
        component: () => import('./views/Playlist')
    },
]
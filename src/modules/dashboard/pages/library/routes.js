export default [
    {
        name: 'Favoritos',
        path: '/favorites',
        component: () => import('./views/Favorites')
    },
    {
        name: 'Minhas playlists',
        path: '/my-playlists',
        component: () => import('./views/MyPlaylists')
    },
    {
        name: 'Nova Playlist',
        path: '/new-playlist',
        component: () => import('./views/NewPlaylist')
    },
]
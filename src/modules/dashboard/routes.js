import { routes as home } from './pages/home'
import { routes as albums } from './pages/albums'
import { routes as artists } from './pages/artists'
import { routes as categories } from './pages/categories'
import { routes as playlists } from './pages/playlists'
import { routes as tracks } from './pages/tracks'
import { routes as library } from './pages/library'

export default [
    ...home,
    ...albums,
    ...artists,
    ...categories,
    ...playlists,
    ...tracks,
    ...library
]
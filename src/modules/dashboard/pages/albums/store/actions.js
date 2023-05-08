import * as types from "./mutation-types"

export const actionSetAlbum = ({commit}, payload) => {
    commit(types.SET_ALBUM, payload)
}
export const actionSetAlbums = ({commit}, payload) => {
    commit(types.SET_ALBUMS, payload)
}
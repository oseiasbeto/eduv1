import * as types from "./mutation-types"

export const actionSetFavorites = ({commit}, payload) => {
    commit(types.SET_FAVORITES, payload)
}
export const actionSetMyPlaylists = ({commit}, payload) => {
    commit(types.SET_MYPLAYLISTS, payload)
}
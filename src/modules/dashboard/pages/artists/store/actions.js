import * as types from "./mutation-types"

export const actionSetArtists = ({commit}, payload) => {
    commit(types.SET_ARTISTS, payload)
}
export const actionSetArtist = ({commit}, payload) => {
    commit(types.SET_ARTIST, payload)
}
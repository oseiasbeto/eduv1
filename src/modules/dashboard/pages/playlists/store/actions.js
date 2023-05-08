import * as types from "./mutation-types"

export const actionSetPlaylist = ({commit}, payload) => {
    commit(types.SET_PLAYLIST, payload)
}
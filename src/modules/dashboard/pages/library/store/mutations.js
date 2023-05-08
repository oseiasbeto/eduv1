import * as types from "./mutation-types"

export default {
    [types.SET_FAVORITES](state, payload) {
        state.favorites = payload
    },
    [types.SET_MYPLAYLISTS](state, payload) {
        state.myPlaylists = payload
    }
}
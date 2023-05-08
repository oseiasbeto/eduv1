import * as types from "./mutation-types"

export default {
    [types.SET_ALBUM](state, payload) {
        state.album = payload
    },
    [types.SET_ALBUMS](state, payload) {
        state.albums = payload
    }
}
import * as types from "./mutation-types"

export default {
    [types.SET_ARTISTS](state, payload) {
        state.artists = payload
    },
    [types.SET_ARTIST](state, payload) {
        state.artist = payload
    }
}
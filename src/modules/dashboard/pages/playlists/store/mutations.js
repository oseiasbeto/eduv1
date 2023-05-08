import * as types from "./mutation-types"

export default {
    [types.SET_PLAYLIST](state, payload) {
        state.playlist = payload
    }
}
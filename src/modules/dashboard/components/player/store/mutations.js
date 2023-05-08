import * as types from "./mutation-types"

export default {
    [types.SET_PLAYER](state, payload) {
        state.player = payload
    },
    [types.SET_CURRENTINDEX](state, payload) {
        state.correntIndex = payload
    },
    [types.SET_PLAYINGTRACK](state, payload) {
        state.playingTrack = payload
    },
    [types.SET_QUEUE](state, payload) {
        state.queue = payload
    }
}
import * as types from "./mutation-types"

export default {
    [types.SET_TRACK](state, payload) {
        state.track = payload
    },
    [types.SET_TRENDING](state, payload) {
        state.trackTrending = payload
    },
    [types.SET_NEWS](state, payload) {
        state.trackNews = payload
    }
}
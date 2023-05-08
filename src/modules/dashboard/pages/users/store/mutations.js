import * as types from "./mutation-types"

export default {
    [types.SET_USER](state, payload) {
        state.User = payload
    },
    [types.SET_TOKEN](state, payload) {
        state.token = payload
    },
    [types.SET_DISABLECODESPACE](state, payload) {
        state.disableCodeSpace = payload
    }
}
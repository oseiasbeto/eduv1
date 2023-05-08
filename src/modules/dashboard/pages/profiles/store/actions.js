import * as types from "./mutation-types"

export const actionSetUser = ({commit}, payload) => {
    commit(types.SET_USER, payload)
}
export const actionSetToken = ({commit}, payload) => {
    commit(types.SET_TOKEN, payload)
}
import * as types from "./mutation-types"

export const actionSetPlayer = ({commit}, payload) => {
    commit(types.SET_PLAYER, payload)
}
export const actionSetCurrentIndex = ({commit}, payload) => {
    commit(types.SET_CURRENTINDEX, payload)
}
export const actionSetQueue = ({commit}, payload) => {
    commit(types.SET_QUEUE, payload)
}
export const actionSetPlayingTrack = ({commit}, payload) => {
    commit(types.SET_PLAYINGTRACK, payload)
}
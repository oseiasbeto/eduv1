import * as types from "./mutation-types"

export const actionSetTrack = ({commit}, payload) => {
    commit(types.SET_TRACK, payload)
}
export const actionSetTrackTrending = ({commit}, payload) => {
    commit(types.SET_TRENDING, payload)
}
export const actionSetTrackNews = ({commit}, payload) => {
    commit(types.SET_NEWS, payload)
}
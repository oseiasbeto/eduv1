export default {
    User: {},
    activeUsers: [],
    categories: {
        afrobeats: [],
        semba: [],
        kizomba: [],
        kuduro: [],
        afrohouse: [],
        hiphop: [],
        gospel: [],
        pop: [],
        electronica: [],
        elassica: [],
        reggae: [],
        jaz: [],
        Rock: []
    },
    track: {
        newTracks: []
    },
    token: localStorage.getItem("access_token") || null,
    disableCodeSpace: false
}
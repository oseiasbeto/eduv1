export default {
    playerbar: JSON.parse(localStorage.getItem('player')) || {},
    correntIndex: 0,
    queue: JSON.parse(localStorage.getItem('queue')) || [],
    playingTrack: JSON.parse(localStorage.getItem('playing_track')) || {
        track: {},
        index: 0,
        playing: false,
        select: "no-repeat",
        isPane: false
    }
}
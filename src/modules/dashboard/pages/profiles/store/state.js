export default {
    User: {},
    activeUsers: [],
    token: localStorage.getItem("access_token") || null,
}
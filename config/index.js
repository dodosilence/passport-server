/**
 * Created by Tristan on 16/10/15.
 */
let config = {
    server: {
        port: 3000
    },
    cookie: {
        maxAge: 36000000,
        httpOnly: true,
        path: '/'
    },
    session: {
        key: 'moondust',
        prefix: 'sess'
    },
    redis: {
        url: 'localhost',
        port: 6379
    },
    mongoUrl: 'mongodb://localhost:27017/moondust'
}
module.exports = config


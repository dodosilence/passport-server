/**
 * Created by Tristan on 16/10/15.
 */
const redis = require('redis')
const config = require('../../config')
const redisClient = redis.createClient(config.redis.port, config.redis.url, {})
redisClient.on('ready', function () {
    console.info('redis connect success','boot')
})
redisClient.on('error', function () {
    console.error('redis connect error','boot')
})
module.exports = redisClient
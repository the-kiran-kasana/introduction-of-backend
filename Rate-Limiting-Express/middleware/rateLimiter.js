const  { rateLimit } = require('express-rate-limit')

const limiter = rateLimit({
        windowMs:  60 * 1000,
        limit: 5,
        standardHeaders: 'draft-8',
        legacyHeaders: false,
        ipv6Subnet: 56,
        message: { message: "Too many requests, please try again later." },
})


module.exports = {limiter};
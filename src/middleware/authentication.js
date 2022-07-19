const authenticate=(req, res, next) => {
    console.log('Middleware for Authentication...')
    next()
}

module.exports = authenticate

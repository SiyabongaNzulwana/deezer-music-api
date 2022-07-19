const authorize=(req, res, next) => {
    console.log('Middleware for Authorization...')
    next()
}

module.exports = authorize
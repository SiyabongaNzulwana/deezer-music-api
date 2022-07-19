const authenticate=(req, res, next) => {
    console.log('Middleware for Authorization...')
    next()
}

module.exports = authenticate
const session = require('express-session')
const config = require('../../config')

const auth = session({
    secret: 'keyboard cat',
    name: config.SESSION_COOKIE_NAME,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: config.NODE_ENV === 'production',
        expires: Date.now() + parseInt(config.COOKIE_EXPIRATION_MS, 10),
        maxAge: parseInt(config.COOKIE_EXPIRATION_MS, 10),
    },
})

const error = (req, res) => {
    res.status(404)
    // respond with html page
    if (req.accepts('html')) {
        res.render('pages/pages/error', {
            url: req.url,
            layout: 'partials/maintenance/layout',
        })
        return
    }
    // respond with json
    if (req.accepts('json')) {
        res.json({ error: 'Not found' })
        return
    }
    // default to plain-text. send()
    res.type('txt').send('Not found')
}

module.exports = { error, auth }

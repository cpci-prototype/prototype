const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const config = require('./config')
const middlewares = require('./utils/middleware')
const sequelize = require('./model/index')

const app = express()

// settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(middlewares.auth)

// routes
app.use('/', routes)

/// catch 404 and forward to error handler
app.use(middlewares.error)

// port
sequelize
    .sync({ alter: true })
    .then(() => {
        app.listen(config.PORT, () => {
            console.log('Express listening on port:', config.PORT)
        })
    })
    .catch((error) => console.log(error))

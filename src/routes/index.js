const routes = require('express').Router()
const url = require('url')

const sidebar = require('../db/json/SideBar.json')
const breadcrumb = require('url-breadcrumb')
const { getFiles, filterFiles } = require('../utils/functions')

const theme = {
    company: 'Prototype',
    mode: 'light',
    typeMenu: 'normal',
}

// Middleware used for setting error and success messages as available in _ejs_ templates
routes.use((req, res, next) => {
    // extension futura para session
    const requrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl,
    })
    if (req.session) {
        req.session.theme = theme
        res.locals.theme = req.session.theme
        res.locals.sidebar = sidebar
        res.locals.activeMenu = url.parse(requrl).path
        res.locals.breadcrumbs = breadcrumb(url.parse(requrl).path)
        // console.log('/'+res.locals.activeMenu.split('/')[2])
        // res.locals.messages = req.session.messages;
        // res.locals.userInfo = req.session.userInfo;
        // req.session.messages = {};
    }
    next()
})
// importar rutas

const Folder = 'src/routes'
// insertar rutas de manera recursiva en base a los nombres de archivos que contenga la carpeta routes
// los nombrers de la ruta tomaran en base a como estan ordenados los archivos ej: /app/+subroutes  | ruta archivo ./routes/app/index.js
const array1 = filterFiles(getFiles(Folder))
console.log('ROUTES', array1)
array1.forEach((element) => {
    // ruta principal
    const link = element === 'dashboard' ? '' : element
    // const importar = element
    routes.use(`/${link}`, require('./' + element))
})
//
// //redirect
routes.get('/maintenance/redirect', (req, res, next) => {
    res.redirect('/')
})

module.exports = routes

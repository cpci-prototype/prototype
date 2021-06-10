const fs = require('fs')

const getFiles = (dir, files_) => {
    files_ = files_ || []
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
        const name = `${dir}/${file}`
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_)
        } else {
            files_.push(name)
        }
        // if (file !== 'index.js') {
        //     files_.push(file)
        // }
    })
    return files_
}

const filterFiles = (array) => {
    const result = array.filter((el) => el !== 'src/routes/index.js')
    const result2 = result.map((el) =>
        el
            .replace('/index.js', '')
            .replace('src/routes/', '')
            .replace('.js', '')
    )
    return result2
}

const filterFilesModel = (array) => {
    const filtro = array.filter(
        (el) => el !== 'src/model/index.js' && el !== 'src/model/extraSetup.js'
    )
    // console.log(filtro)
    const result = filtro.map((el) =>
        el.replace('/index.js', '').replace('src/model/', '').replace('.js', '')
    )
    return result
}
module.exports = { getFiles, filterFiles, filterFilesModel }

import fs from 'fs'
import path from 'path'

const languages = fs.readdirSync("./src/lang").filter(file => {
    return path.extname(file).toLowerCase() == ".json"
})

export function getString(string, lang) {
    if (lang == undefined) lang = Intl.DateTimeFormat().resolvedOptions().locale
    if (!languages.includes(`${lang}.json`)) lang = "en-US"

    const obj = JSON.parse(fs.readFileSync(`./src/lang/${lang}.json`))

    if (!obj[string]) string = "error/unexpected"

    return obj[string]
}

getString("error/wrong-password", "en-US")
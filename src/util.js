let langs = [
    "en-US",
]

export function getLang (lang) {
    if (lang === undefined) lang = "en-US"
    if (!langs.includes(lang)) lang = "en-US"
     
    return langs[langs.indexOf(lang)]
}

export function getString(string) {
    if (string === undefined) string = "error: getString"
    if (!)
}
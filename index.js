import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import dotenv from "dotenv"

dotenv.config()

import { authenticate } from "./src/page/account.js"

import { showHome } from './src/page/home.js'

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

authenticate(function (success) {
    console.clear()
    if (success) showHome()
    else return
})

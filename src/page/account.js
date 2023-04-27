import inquirer from "inquirer"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

import { getString } from "../lang/language.js"

export function authenticate(_callback) {
    console.clear()
    const auth = getAuth()

    inquirer
        .prompt([
            {
                type: "input",
                name: "email",
                message: getString("input/email"),
            },
            {
                type: "password",
                name: "password",
                message: getString("input/password"),
            },
        ])
        .then((answers) => {
            signInWithEmailAndPassword(auth, answers.email, answers.password)
                .then((userCredential) => {
                    console.log(`Menju: ${getString("status/success")} (${getString("success/authentication")}.)`)
                    _callback(true)
                })
                .catch((error) => {
                    if (error.isTtyError) return
                        
                    switch (error.code) {
                        case "auth/wrong-password":
                            console.log(`Menju: ${getString("status/error")} (${getString("error/wrong-password")}.)`)
                        case "auth/invalid-email":
                            console.log(`Menju: ${getString("status/error")} (${getString("error/invalid-email")}.)`)
                        case "auth/user-not-found":
                            console.log(`Menju: ${getString("status/error")} (${getString("error/user-not-found")}.)`)
                        default:
                            console.log(`Menju: ${getString("status/error")} (${getString("error/unexpected")}, ${error.code}.)`)
                    }

                    _callback(false)
                })
        })
}

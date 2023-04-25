import inquirer from "inquirer"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

import { getLang } from "../util.js"

export function authenticate(_callback) {
    console.clear()
    const auth = getAuth()
    console.log(Intl.DateTimeFormat().resolvedOptions().locale)

    inquirer
        .prompt([
            {
                type: "input",
                name: "email",
                message: getLang(Intl.DateTimeFormat().resolvedOptions().locale, "auth/email"),
            },
            {
                type: "password",
                name: "password",
                message: "Password",
            },
        ])
        .then((answers) => {
            signInWithEmailAndPassword(auth, answers.email, answers.password)
                .then((userCredential) => {
                    console.log("Menju: Success (Authenticating : Account)")
                    _callback(true)
                })
                .catch((error) => {
                    if (error.isTtyError) return
                        
                    switch (error.code) {
                        case "auth/wrong-password":
                            console.log("Menju: Error (Invalid credentials).")
                            break
                        case "auth/invalid-email":
                            console.log("Menju: Error (Invalid email).")
                            break
                        case "auth/user-not-found":
                            console.log("Menju: Error (User not found).")
                            break
                        default:
                            console.log(`Menju: Unexpected error (${error.code}).`)
                            break
                    }

                    _callback(false)
                })
        })
}

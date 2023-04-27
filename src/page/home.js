import inquirer from "inquirer"

import { getString } from "../lang/language.js"

export function showHome() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selected',
                message: getString("page/home/title"),
                choices: [
                    getString("page/home/tools"),
                    getString("page/home/games"),
                    getString("text/exit")
                ]
            }
        ])
        .then((answers) => {
            switch (answers.selected) {
                case getString("page/home/tools"):
                    
                    break
                case getString("page/home/games"):
                    break
                default:
                    break
            }
        })
        .catch((error) => {
            if (error.isTtyError) return

            switch (error.code) {
                default:
                    console.log("default error case")
                    break
            }
        })
}
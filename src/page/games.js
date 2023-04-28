import inquirer from "inquirer"
import { getString } from "../lang/language"

export function getGames() {
    console.log("getgames called")
    return ['test1', 'test2']
}

export function showGames() {
    console.log("called")
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: getString("page/games/title"),
                choices: [
                    getString("page/games/list"),
                    getString("page/games/add"),
                    getString("page/games/remove"),
                    getString("text/exit")
                ]
            }
        ])
        .then((answers) => {
            switch (answers.action) {
                case getString("page/games/add"):
                    break
                case getString("page/games/remove"):
                    break
                case getString("page/games/list"):
                    break
                default:
                    break
            }
        })
}
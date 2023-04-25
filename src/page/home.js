import inquirer from "inquirer";

export function showHome() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'selected',
                message: 'Home',
                choices: [
                    "Tools",
                    "Games",
                    "Exit"
                ]
            }
        ])
        .then((answers) => {
            switch (answers.selected) {
                case "Tools":
                    break
                case "Games":
                    break
                default:
                    //exit
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
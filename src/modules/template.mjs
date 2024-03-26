import { readFile } from "node:fs/promises"

const loadTemplate = async (name) => {
    return (await readFile(`pages/${name}`)).toString()
}

export {loadTemplate}
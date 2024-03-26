import { stat } from 'node:fs/promises'

const fileExists = async (path) => {    
    await stat(path)
    return true       
}


//-----------------------------------
const exists = await fileExists("./examples/data.txt")
console.log(exists)
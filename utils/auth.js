const bcrypt = require ('bcryptjs')
const salt=10

async function encryptPassword(password){
    try {
        const encryptPassword = await bcrypt.hash(password, salt)
        return encryptPassword
    }
    catch (e){
        throw new Error (e)
    }
}

async function checkPassword( password, encryptPassword){
    try {
        const isCorrect = await bcrypt.compare(password, encryptPassword)
        return isCorrect
    }
    catch (e){
        throw new Error (e)
    }

}

module.exports = {
    encryptPassword,
    checkPassword
}
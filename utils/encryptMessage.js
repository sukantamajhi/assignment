import CryptoJS from "crypto-js"
const KEY = "aLtAeNCrypT"

export default function encrypt(data) {
    return new Promise(async (resolve, reject) => {
        try {
            const cipherTxt = CryptoJS.AES.encrypt(JSON.stringify(data), KEY)
            return resolve(cipherTxt.toString())
        } catch (error) {
            console.error(error, "<<-- Error in exncrypting message")
            return reject(error)
        }
    })
}

export const decrypt = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const bytes = CryptoJS.AES.decrypt(data, KEY);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return resolve(decryptedData)
        } catch (error) {
            console.error(error, "<<-- Error in decrypting message")
            return reject(error)
        }
    })
}
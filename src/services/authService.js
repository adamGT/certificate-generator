import axios from 'axios';

const URL = "https://vs.bluehealthethiopia.com/register"
const LOGIN_URL = "https://vs.bluehealthethiopia.com/login"

class AuthService {
    static registerUser(user) {
        return new Promise( (resolve, reject) => {
            axios.post(URL,user).then(result => {  
                console.log(result.data)
                resolve(result.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    
    static signUpUser(email,password) {
        return new Promise( (resolve, reject) => {
            axios.post(LOGIN_URL,{"email": email, "password": password}).then(result => {  
                // console.log(result.data)
                resolve(result.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export default AuthService
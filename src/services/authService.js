import axios from 'axios';

const URL = "https://test.bluehealthethiopia.com/register"

class AuthService {
    // static registerUser(user) {
    //     const data = axios.post(URL,user)
    //     console.log(data)
    //     return data
    // }
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
}

export default AuthService
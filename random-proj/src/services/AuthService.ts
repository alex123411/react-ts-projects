import axios from "axios"
import { IUser } from "models/userModel";

const baseURL = "http://localhost:8080/api/auth/"

class AuthService {
    user: IUser | null;

    constructor(user: IUser | null) {
        this.user = user;
    }

    async register(user: IUser) {
        console.log('REGISTERING')
        await axios.post(baseURL + "register", user)
            .then(function (response: any) {
                console.log('REGISTERED')
                return response.data
            })
            .catch(function (error: any) {
                console.log(error.response.data);
                return error.response.data
            });;

    }

    login() {

    }

    changePassword() {

    }

}

export default AuthService
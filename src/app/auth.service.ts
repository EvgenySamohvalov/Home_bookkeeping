import { resolve } from "q";

export class AuthService {

    isLoggedIn = false;
//  человек ещё не зашел в систему

    isAuth() {
        return new Promise((resoive, reject) => {
            // будем тут возвращать некоторый ассинхронный код, имулируем поход к серверу
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 1000);
        });
    }

    logIn() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;
    }

}
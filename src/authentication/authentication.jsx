// authentication.js
import User from './user.jsx';

class Authentication {
    constructor() {
        this.users = [
            new User('admin', 'admin'),
        ];
        this.currentUser = null;
    }

    login(username, password) {
        const user = this.users.find((user) => user.username === username && user.password === password);

        if (user) {
            this.currentUser = user;
            return true;
        }

        return false;
    }

    logout() {
        this.currentUser = null;
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }
}

const authInstance = new Authentication();
export default authInstance;

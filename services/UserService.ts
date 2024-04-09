export default class UserService {

    static BASE_URL = 'http://localhost:8080/api/users';

    static async createUser(user) {
        const response = await fetch(UserService.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    }

    static async getUserById(userId) {
        const response = await fetch(`${UserService.BASE_URL}/${userId}`);
        if (!response.ok) {
            throw new Error(`User with ID ${userId} not found`);
        }
        return await response.json();
    }

    static async getUsers() {
        const response = await fetch(UserService.BASE_URL);
        return await response.json();
    }

    static async updateUser(userId, userDetails) {
        const response = await fetch(`${UserService.BASE_URL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        });
        return await response.json();
    }

    static async deleteUser(userId) {
        await fetch(`${UserService.BASE_URL}/${userId}`, {
            method: 'DELETE'
        });
    }
}

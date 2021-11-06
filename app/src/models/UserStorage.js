"use strict"

const first = require("ee-first");

class UserStorage {
    static #users = {
        id: ["test", "go", "back"],
        psword: ["1234", "1234", "1234"],
        name: ["우리밋", "나개발", "김팅장"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

}

module.exports = UserStorage;
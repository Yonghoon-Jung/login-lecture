"use strict"

const hello = (req, res) => {
    res.render("home/index");// 기능
};

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    hello,
    login,
}
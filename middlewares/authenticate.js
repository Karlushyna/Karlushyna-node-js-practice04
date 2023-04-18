const jwt = require("jsonwebtoken");

const {HttpError} = require("../helpers");

const {SECRET_KEY} = process.env;

const authenticate = async(req, res, next)=> {
    const {authorization} = req.body;
    const [bearer, token] = authorization.split(" ");
    

}

module.exports = authenticate;
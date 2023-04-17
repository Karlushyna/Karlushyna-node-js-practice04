const handleMongooseError = (error, data, next)=> {
    // console.log(error.name);
    // console.log(error.code);
    // error.status = 400;

    const {name, code} = error;
    error.status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    next();
};

module.exports = handleMongooseError;
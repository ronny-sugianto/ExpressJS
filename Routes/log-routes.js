const log = (req, res, next) => {
    console.log(`APP-INFO [ROUTE-TRACK] : ${req.originalUrl} was requested`);
    next();
}

module.exports = log;
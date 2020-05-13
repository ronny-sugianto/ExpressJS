const noRoute = (req, res, next) => {
    console.log(`APP-ERROR [ROUTE-FAILED] : ${req.originalUrl} was requested`);
    res.status(404);
    res.json({ message: 'Page Not Found' });
}

module.exports = noRoute;
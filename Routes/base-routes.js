import express from 'express';
import log from './log-routes';
import noRoute from './no-routes';


const router = express.Router();
router.use(log);
router.get("/", (req, res) => {
    res.status(200);
    res.json({ "status": "OK" });
});
router.use(noRoute);


module.exports = router;
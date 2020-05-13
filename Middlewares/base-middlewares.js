import express from 'express';
import appAssociation from '../Models/app-association'
const Router = express.Router();
Router.use(express.json());
Router.use((req, res, next) => {
    appAssociation();
    next();
});


module.exports = Router;
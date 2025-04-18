import express from "express";
import {info} from "../../controllers/index.js"

const v1Routes = express.Router();

v1Routes.get('/info',info);

export default v1Routes;
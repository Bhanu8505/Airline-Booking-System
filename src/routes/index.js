import express from "express";
import v1Routes from "./v1/index.js"
import v2Router from "./v2/index.js";
const apiRoutes = express.Router();

apiRoutes.use('/v1',v1Routes);
apiRoutes.use('/v2',v2Router);

export default apiRoutes;
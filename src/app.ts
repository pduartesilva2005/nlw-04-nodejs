import express from "express";
import "express-async-errors";

import createConnection from "./database/connection";
import { errorHandler } from "./errors/handler";
import { routes } from "./routes";

export const app = express();

createConnection();
app.use(express.json());
app.use(routes);
app.use(errorHandler);

import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveyController } from "./controllers/SurveyController";
import { SendMailController } from "./controllers/SendMailController";
import { AnswersController } from "./controllers/AnswersController";
import { NpsController } from "./controllers/NpsController";

export const routes = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswersController();
const npsController = new NpsController();

routes.post("/users", userController.create);

routes.get("/surveys", surveyController.index);
routes.post("/surveys", surveyController.create);

routes.post("/send", sendMailController.execute);

routes.get("/answers/:value", answerController.execute);

routes.get("/nps/:survey_id", npsController.execute);

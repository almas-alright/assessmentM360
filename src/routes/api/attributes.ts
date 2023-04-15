import { attribues } from '../urls';
import express from "express";
import * as controller from '../../controllers/AttributeController'
const attributesRouter = express.Router();

attributesRouter.post(attribues.POST_ATTRIBUTE, controller.createAttribute);
attributesRouter.put(attribues.PUT_ATTRIBUTE, controller.putAttribute);
attributesRouter.patch(attribues.PATCH_ATTRIBUTE, controller.patchAttribute);
attributesRouter.get(attribues.GET_ATTRIBUTES, controller.getAttributes);
attributesRouter.get(attribues.GET_ATTRIBUTE, controller.getAttribute);
attributesRouter.delete(attribues.DELETE_ATTRIBUTE, controller.deleteAttribute);

export default attributesRouter;
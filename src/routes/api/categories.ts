import { categories } from '../urls';
import express from "express";
import * as controller from '../../controllers/AttributeController'
const categoriesRouter = express.Router();

categoriesRouter.post(categories.POST_CATEGORY, controller.createAttribute);
categoriesRouter.put(categories.PUT_CATEGORY, controller.putAttribute);
categoriesRouter.patch(categories.PATCH_CATEGORY, controller.patchAttribute);
categoriesRouter.get(categories.GET_CATEGORIES, controller.getAttributes);
categoriesRouter.get(categories.GET_CATEGORY, controller.getAttribute);
categoriesRouter.delete(categories.DELETE_CATEGORY, controller.deleteAttribute);

export default categoriesRouter;
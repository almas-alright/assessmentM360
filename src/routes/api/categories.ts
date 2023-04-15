import { categories } from '../urls';
import express from "express";
import * as controller from '../../controllers/CategoryController'
const categoriesRouter = express.Router();

categoriesRouter.post(categories.POST_CATEGORY, controller.createCategory);
categoriesRouter.put(categories.PUT_CATEGORY, controller.putCategory);
categoriesRouter.patch(categories.PATCH_CATEGORY, controller.patchCategory);
categoriesRouter.get(categories.GET_CATEGORIES, controller.getCategories);
categoriesRouter.get(categories.GET_CATEGORY, controller.getCategory);
categoriesRouter.delete(categories.DELETE_CATEGORY, controller.deleteCategory);

export default categoriesRouter;
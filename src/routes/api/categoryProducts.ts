import { categoryProducts } from '../urls';
import express from "express";
import * as controller from '../../controllers/CategoryProductController'
const categoryProductsRouter = express.Router();

categoryProductsRouter.post(categoryProducts.POST_CATEGORY_PRODUCT, controller.createCategoryProduct);
categoryProductsRouter.put(categoryProducts.PUT_CATEGORY_PRODUCT, controller.putCategoryProduct);
categoryProductsRouter.patch(categoryProducts.PATCH_CATEGORY_PRODUCT, controller.patchCategoryProduct);
categoryProductsRouter.get(categoryProducts.GET_CATEGORY_PRODUCTS, controller.getCategoryProducts);
categoryProductsRouter.get(categoryProducts.GET_CATEGORY_PRODUCT, controller.getCategoryProduct);
categoryProductsRouter.delete(categoryProducts.DELETE_CATEGORY_PRODUCT, controller.deleteCategoryProduct);

export default categoryProductsRouter;
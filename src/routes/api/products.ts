import { products } from '../urls';
import express from "express";
import * as controller from '../../controllers/ProcuctController'
const productsRouter = express.Router();

productsRouter.post(products.POST_PRODUCT, controller.createProduct);
productsRouter.put(products.PUT_PRODUCT, controller.putProduct);
productsRouter.patch(products.PATCH_PRODUCT, controller.patchProduct);
productsRouter.get(products.GET_PRODUCTS, controller.getProducts);
productsRouter.get(products.GET_PRODUCT, controller.getProduct);
productsRouter.delete(products.DELETE_PRODUCT, controller.deleteProduct);
productsRouter.get(products.GET_SEARCH_PRODUCTS, controller.searchProducts);
productsRouter.get(products.GET_CATEGORY_PRODUCTS, controller.categoryProducts);

export default productsRouter;
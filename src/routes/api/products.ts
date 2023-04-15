import { products } from '../urls';
import express from "express";
import * as controller from '../../controllers/AttributeController'
const productsRouter = express.Router();

productsRouter.post(products.POST_PRODUCT, controller.createAttribute);
productsRouter.put(products.PUT_PRODUCT, controller.putAttribute);
productsRouter.patch(products.PATCH_PRODUCT, controller.patchAttribute);
productsRouter.get(products.GET_PRODUCTS, controller.getAttributes);
productsRouter.get(products.GET_PRODUCT, controller.getAttribute);
productsRouter.delete(products.DELETE_PRODUCT, controller.deleteAttribute);

export default productsRouter;
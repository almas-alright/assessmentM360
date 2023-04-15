import { productAttribues } from '../urls';
import express from "express";
import * as controller from '../../controllers/ProductAttributeController'
const productAttributesRouter = express.Router();

productAttributesRouter.post(productAttribues.POST_PRODUCT_ATTRIBUTE, controller.createProductAttribute);
productAttributesRouter.put(productAttribues.PUT_PRODUCT_ATTRIBUTE, controller.putProductAttribute);
productAttributesRouter.patch(productAttribues.PATCH_PRODUCT_ATTRIBUTE, controller.patchProductAttribute);
productAttributesRouter.get(productAttribues.GET_PRODUCT_ATTRIBUTES, controller.getProductAttributes);
productAttributesRouter.get(productAttribues.GET_PRODUCT_ATTRIBUTE, controller.getProductAttribute);
productAttributesRouter.delete(productAttribues.DELETE_PRODUCT_ATTRIBUTE, controller.deleteProductAttribute);

export default productAttributesRouter;
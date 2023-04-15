import { ErrorHttpResponse } from '../services/error/errorHttpResponse.service'
import { GeneralQuery } from "../queries/GeneralQuery";
import * as productQuery from "../queries/product"

export const createProduct = (req: any, res: any) => {
    return new GeneralQuery('products')
        .createItem(req)
        .then((attribute: any) => {
            res.status(200).send({
                success: true,
                message: 'Product creation succeeded.',
                data: attribute
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product creation failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const putProduct = (req: any, res: any) => {
    return new GeneralQuery('products')
        .updateItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Product reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Product update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const patchProduct = (req: any, res: any) => {
    return new GeneralQuery('products')
        .patchItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Product reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Product update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const deleteProduct = (req: any, res: any) => {
    return new GeneralQuery('products')
        .deleteItem(req)
        .then((deleted: any) => {
            if (deleted) {
                res.status(200).send({
                    success: true,
                    message: 'Product delete succeeded.'
                });
            } else {
                res.status(404).send({
                    success: false,
                    message: 'Product reference not found.'
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product delete failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getProduct = (req: any, res: any) => {
    return productQuery
        .getProduct(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Product reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Product fetch succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getProducts = (req: any, res: any) => {
    return new GeneralQuery('products')
        .getItems(req)
        .then((products: any) => {
            res.status(200).send({
                success: true,
                message: 'Products fetch succeeded.',
                data: products
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Products fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const searchProducts = (req: any, res: any) => {
    return productQuery
        .searchProduct(req)
        .then((products: any) => {
            res.status(200).send({
                success: true,
                message: 'Products search succeeded.',
                data: products
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Products search failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const categoryProducts = (req: any, res: any) => {
    return productQuery
        .categoryProducts(req)
        .then((products: any) => {
            res.status(200).send({
                success: true,
                message: 'Products of Category succeeded.',
                data: products
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Products of Category failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

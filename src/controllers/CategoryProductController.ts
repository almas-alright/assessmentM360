import { ErrorHttpResponse } from '../services/error/errorHttpResponse.service'
import { GeneralQuery } from "../queries/GeneralQuery";


export const createCategoryProduct = (req: any, res: any) => {
    return new GeneralQuery('categoryProducts')
        .createItem(req)
        .then((attribute: any) => {
            res.status(200).send({
                success: true,
                message: 'Category Product creation succeeded.',
                data: attribute
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category Product creation failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const putCategoryProduct = (req: any, res: any) => {
    return new GeneralQuery('categoryProducts')
        .updateItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Category Product reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Category Product update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category Product update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const patchCategoryProduct = (req: any, res: any) => {
    return new GeneralQuery('categoryProducts')
        .patchItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Category Product reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Category Product update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category Product update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const deleteCategoryProduct = (req: any, res: any) => {
    return new GeneralQuery('categoryProducts')
        .deleteItem(req)
        .then((deleted: any) => {
            if (deleted) {
                res.status(200).send({
                    success: true,
                    message: 'Category Product delete succeeded.'
                });
            } else {
                res.status(404).send({
                    success: false,
                    message: 'Category Product reference not found.'
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category Product delete failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getCategoryProduct = (req: any, res: any) => {
    return new GeneralQuery('categoryProducts')
        .getItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Category Product reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Category Product fetch succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category Product fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getCategoryProducts = (req: any, res: any) => {
    return new GeneralQuery('categoryProducts')
        .getItems(req)
        .then((categoryProducts: any) => {
            res.status(200).send({
                success: true,
                message: 'Category Products fetch succeeded.',
                data: categoryProducts
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category Products fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

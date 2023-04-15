import { ErrorHttpResponse } from '../services/error/errorHttpResponse.service'
import { GeneralQuery } from "../queries/GeneralQuery";


export const createCategory = (req: any, res: any) => {
    return new GeneralQuery('categories')
        .createItem(req)
        .then((attribute: any) => {
            res.status(200).send({
                success: true,
                message: 'Category creation succeeded.',
                data: attribute
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category creation failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const putCategory = (req: any, res: any) => {
    return new GeneralQuery('categories')
        .updateItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Category reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Category update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const patchCategory = (req: any, res: any) => {
    return new GeneralQuery('categories')
        .patchItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Category reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Category update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const deleteCategory = (req: any, res: any) => {
    return new GeneralQuery('categories')
        .deleteItem(req)
        .then((deleted: any) => {
            if (deleted) {
                res.status(200).send({
                    success: true,
                    message: 'Category delete succeeded.'
                });
            } else {
                res.status(404).send({
                    success: false,
                    message: 'Category reference not found.'
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category delete failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getCategory = (req: any, res: any) => {
    return new GeneralQuery('categories')
        .getItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Category reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Category fetch succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Category fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getCategories = (req: any, res: any) => {
    return new GeneralQuery('categories')
        .getItems(req)
        .then((categories: any) => {
            res.status(200).send({
                success: true,
                message: 'Categories fetch succeeded.',
                data: categories
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Categories fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

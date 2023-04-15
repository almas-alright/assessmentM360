import { ErrorHttpResponse } from '../services/error/errorHttpResponse.service'
import { GeneralQuery } from "../queries/GeneralQuery";


export const createProductAttribute = (req: any, res: any) => {
    return new GeneralQuery('productAttributes')
        .createItem(req)
        .then((productAttributes: any) => {
            res.status(200).send({
                success: true,
                message: 'Product Attribute creation succeeded.',
                data: productAttributes
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product Attribute creation failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const putProductAttribute = (req: any, res: any) => {
    return new GeneralQuery('productAttributes')
        .updateItem(req)
        .then((productAttributes: any) => {
            if (productAttributes === null) {
                res.status(404).send({
                    success: false,
                    message: 'Product Attribute reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Product Attribute update succeeded.',
                    data: productAttributes
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product Attribute update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const patchProductAttribute = (req: any, res: any) => {
    return new GeneralQuery('productAttributes')
        .patchItem(req)
        .then((productAttributes: any) => {
            if (productAttributes === null) {
                res.status(404).send({
                    success: false,
                    message: 'Product Attribute reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Product Attribute update succeeded.',
                    data: productAttributes
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product Attribute update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const deleteProductAttribute = (req: any, res: any) => {
    return new GeneralQuery('productAttributes')
        .deleteItem(req)
        .then((deleted: any) => {
            if (deleted) {
                res.status(200).send({
                    success: true,
                    message: 'Product Attribute delete succeeded.'
                });
            } else {
                res.status(404).send({
                    success: false,
                    message: 'Product Attribute reference not found.'
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product Attribute delete failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getProductAttribute = (req: any, res: any) => {
    return new GeneralQuery('productAttributes')
        .getItem(req)
        .then((productAttributes: any) => {
            if (productAttributes === null) {
                res.status(404).send({
                    success: false,
                    message: 'Product Attribute reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Product Attribute fetch succeeded.',
                    data: productAttributes
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product Attribute fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getProductAttributes = (req: any, res: any) => {
    return new GeneralQuery('productAttributes')
        .getItems(req)
        .then((productAttributes: any) => {
            res.status(200).send({
                success: true,
                message: 'Product Attribute Attributes fetch succeeded.',
                data: productAttributes
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Product Attribute Attributes fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

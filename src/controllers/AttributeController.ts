import { ErrorHttpResponse } from '../services/error/errorHttpResponse.service'
import { GeneralQuery } from "../queries/GeneralQuery";


export const createAttribute = (req: any, res: any) => {
    return new GeneralQuery('attributes')
        .createItem(req)
        .then((attribute: any) => {
            res.status(200).send({
                success: true,
                message: 'Attribute creation succeeded.',
                data: attribute
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Attribute creation failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const putAttribute = (req: any, res: any) => {
    return new GeneralQuery('attributes')
        .updateItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Attribute reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Attribute update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Attribute update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const patchAttribute = (req: any, res: any) => {
    return new GeneralQuery('attributes')
        .patchItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Attribute reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Attribute update succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Attribute update failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const deleteAttribute = (req: any, res: any) => {
    return new GeneralQuery('attributes')
        .deleteItem(req)
        .then((deleted: any) => {
            if (deleted) {
                res.status(200).send({
                    success: true,
                    message: 'Attribute delete succeeded.'
                });
            } else {
                res.status(404).send({
                    success: false,
                    message: 'Attribute reference not found.'
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Attribute delete failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getAttribute = (req: any, res: any) => {
    return new GeneralQuery('attributes')
        .getItem(req)
        .then((attribute: any) => {
            if (attribute === null) {
                res.status(404).send({
                    success: false,
                    message: 'Attribute reference not found.'
                });
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Attribute fetch succeeded.',
                    data: attribute
                });
            }
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Attribute fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

export const getAttributes = (req: any, res: any) => {
    return new GeneralQuery('attributes')
        .getItems(req)
        .then((attributes: any) => {
            res.status(200).send({
                success: true,
                message: 'Attributes fetch succeeded.',
                data: attributes
            });
        })
        .catch((errors: any) => {
            res.status(400).send({
                success: false,
                message: 'Attributes fetch failed.',
                errors: new ErrorHttpResponse(errors).generate()
            });
        });
}

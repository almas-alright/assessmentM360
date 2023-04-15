import express from "express";
import attributesRouter from "./api/attributes";
import categoriesRouter from "./api/categories";
import productsRouter from "./api/products";
const router = express.Router()

router.use(attributesRouter)
router.use(categoriesRouter)
router.use(productsRouter)

router.use(function (req, res, next) {
    res.status(404).json({
        success: false,
        message: 'API not found',
        errors: [
            {
                msg: 'Request is undefined'
            }
        ]
    });
    next();
});

export default router;
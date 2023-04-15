import db from '../db'

export const getProduct = async (req:any) => {
    let id = req?.params?.id;
    const product = await db('products').where('id', id).andWhere('status', '=', 1).first()
    if(product) {
        const attributes = await db('productAttributes')
            .join('attributes', 'productAttributes.attribute_id', '=', 'attributes.id')
            .select('attributes.name', 'productAttributes.value')
            .where('product_id', product?.id)
        const categories = await db('categoryProducts')
            .join('categories', 'categoryProducts.category_id', '=', 'categories.id')
            .select('categories.name')
            .where('product_id', product?.id)
        product.attributes = attributes
        product.categories = categories
    }


    return product
}

export const categoryProducts = async (req:any) => {
    let id = req?.params?.categoryId;
    const category = await db('categories').where('id', id).andWhere('status', '!=', 0).first();
    const products = await db('categoryProducts')
        .join('products', 'categoryProducts.product_id', '=', 'products.id')
        .select('products.*')
        .where('category_id', category?.id)
    return products
}

export const searchProduct = async (req:any) => {
    let query = req?.query?.search;
    const products = await db.raw(`select * from products where title like '%${query}%' or description like '%${query}%'`);
    return products
}
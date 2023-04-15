import {Model} from "objection";

class Product extends Model{
    id!: number;
    title!: string;
    description!: string;
    status!: boolean;
    static get tableName() {
        return 'products'
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title'],
            properties: {
                id: {type: 'integer'},
                title: {type: 'string', minLength: 1, maxLength: 255},
                description: {type: 'string'},
                status: {type: 'boolean'},
            }
        }
    }

    // static get relationMappings(){
    //     attributes:{
    //         relation:Model.has
    //     }
    // }
}

export default Product;
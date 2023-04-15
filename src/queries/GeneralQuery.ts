import db from '../db'

export class GeneralQuery {
    private tableName:string;
    constructor(table:string) {
        this.tableName = table
    }
    public async createItem(req: any) {
        const data = { ...req.body, ...req.params };
        return await db(this.tableName).insert(data);
    }

    public async updateItem(req: any) {
        const model = await this.getItem(req);
        if (model === null) return Promise.resolve(null);
        let id = req?.params?.id;
        return await db(this.tableName).update(req?.body).where('id', id);

    }

    public async patchItem(req: any) {
        const model = await this.getItem(req);
        if (model === null) return Promise.resolve(null);
        let id = req?.params?.id;
        return await db(this.tableName).update(req?.body).where('id', id);
    }

    public async getItems(req: any) {
        return await db.select().table(this.tableName);
    }

    public async getItem(req: any) {
        let id = req?.params?.id;
        return await db(this.tableName).where('id', id).first();
    }

    public async deleteItem(req: any) {
        let id = req?.params?.id;
        return await db(this.tableName).where('id', id).del();
    }
}
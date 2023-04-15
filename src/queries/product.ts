import db from '../db'

const insert = async () => { await db('products').insert({title: 'Slaughterhouse Five'})}
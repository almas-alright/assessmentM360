import db from '../db'

const insert = async (req:any) => { await db('products').insert({title: 'Slaughterhouse Five'})}
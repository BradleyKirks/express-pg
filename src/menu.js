import { client } from "./connectionDb.js"

export async function getAllMenuItems(req, res){
const result = await client.query('select * from menu')
res.send(result.rows)
}

export async function AddMenuItem(req, res){
    //const body = (req, res){
   // const id = body.id 
    //const name = body.price 
  //  const description = body.description 
  const {id, name, description, price} = body 
  
  const result = await client.query(`INSERT INTO menu, id, name , description)
  values (${id}, '${name}', '${description}', ${price}`)
  res.send(result)    
}

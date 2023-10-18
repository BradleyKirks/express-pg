import express from 'express'
import cors from 'cors'
import { getAllMenuItems } from './src/menu.js'
//import { Client } from "./src/connectionDb.js"

const PORT = 3000

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hello')
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`)
})
app.get("menu", getAllMenuItems)
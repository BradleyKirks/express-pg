import pg from 'pg'
import connectionString from './secrets.js'

const { Client } = pg 

export const client = new Client({
    connectionString
})

await client.connect()
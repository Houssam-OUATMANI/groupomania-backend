import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import sequelize from './models/connection/db.connection.mjs'
const app = express()


app.use(helmet())
app.use(cors())

app.get('/', (req, res)=> {
    res.send('Salut')
})



sequelize.sync({force : true})
.then( (a)=> console.log("azeaze" ,a))

.catch(e => console.log(e))
export default app
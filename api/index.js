import express from 'express'
import { addCity } from './handlers/city/post.js'
import { listCities } from './handlers/city/get.js'
import { createUser } from './handlers/user/post.js'
import { listUsers } from './handlers/user/list.js'
import { getUser } from './handlers/user/get.js'
import { updateUser } from './handlers/user/patch.js'
import cors  from 'cors'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PATCH"]
}))
  
const uri = 'mongodb://localhost:27017/CRUD'
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err))

app.post('/user', createUser)
app.get('/users', listUsers)
app.get('/user/:id', getUser)
app.patch('/user/:id', updateUser)
app.post('/city', addCity)
app.get('/cities', listCities)




app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
import City from '../../models/City.js'

export async function listCities(req, res){
    try{
        const data = await City.find({})
        res.send(data)  
      }
      catch (error) {
        res.status(500).send(error.message)
      }
}
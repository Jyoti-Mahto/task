import City from '../../models/City.js'

export async function addCity(req, res){
    try{
    const payload = req.body
    const { cityName } = payload
    const city = new City({ cityName })
    await city.save()
    res.status(200).send('City added successfully')
    }
    catch(err){
        res.status(300).json(err.message)
    }
}
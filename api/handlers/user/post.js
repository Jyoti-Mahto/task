import User from '../../models/User.js'

export async function createUser(req, res){
    try{
    const payload = req.body
    const { name , city , mobile , mediaUrl } = payload
    const user = new User({ name , city , mobile , mediaUrl })
    await user.save()
    res.status(200).json({ msg: 'User added successfully', user: user.toObject() });
    }
    catch(err){
        res.status(300).json(err.message)
    }
}
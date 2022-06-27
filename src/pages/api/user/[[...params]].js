import connectDB from "../../../services/db";
import User from "../../../models/User";

connectDB();

export default async function handler(req, res) {
    const { method } = req



    switch (method){
        case 'GET': 
            try {
                const users = await User.find()
                res.json(users)
            } catch (error) {
                console.log('user')
            }
        break
        case 'POST':
            try {
                
            } catch (error) {
                
            }
        break
        case 'PUT':
            try {
                
            } catch (error) {
                
            }
        break
        case 'DELETE': 
            try {
                
            } catch (error) {
                
            }
        break
    }
}
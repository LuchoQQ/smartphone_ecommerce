import User from '../../../models/User'
import connectDB from "../../../services/db";

connectDB()

export default async function handler(req, res) {
    const { method } = req;
    const { email, password } = req.body


    switch (method) {
        case "POST":
            const user = await User.findOne({ email: email })
            if (user.password === password) {
                res.json({
                    auth: 'ok',
                    user: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        city: user.city
                    }
                })
            } else {
                res.json('no ok')
            }
        break;
        
    }
}
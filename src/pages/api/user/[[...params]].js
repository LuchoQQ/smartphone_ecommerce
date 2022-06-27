import connectDB from "../../../services/db";
import User from "../../../models/User";

connectDB();

export default async function handler(req, res) {
  const { method } = req;
  const { firstName, lastName, email, role, password, city } =
    req.body;

  switch (method) {
    // get all users
    case "GET":
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.log("user");
      }
      break;
    // create a new user
    case "POST":
      try {
        const user = new User({
          firstName,
          lastName,
          email,
          password,
          role: 'user',
          city,
        });
        await user.save();
        return res.json(user);
      } catch (error) {
        res.json(error);
        console.log(error);
      }
      break;
    // update an user
    case "PUT":
      try {
        const id = req.query.params[0];
        const user = {
          firstName,
          lastName,
          email,
          password,
          role,
          city,
        };

        const updateUser = await User.findByIdAndUpdate(id, user, {
          new: true,
        });

        res.json(updateUser);
      } catch (error) {}
      break;
    // delete an user
    case "DELETE":
      try {
        const id = req.query.params[0];
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
      } catch (error) {}
      break;
  }
}

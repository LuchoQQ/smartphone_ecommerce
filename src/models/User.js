import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  address: String,
  purchases_id: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

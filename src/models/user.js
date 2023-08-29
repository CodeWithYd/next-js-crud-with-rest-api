import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
        userName: String,
    },
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
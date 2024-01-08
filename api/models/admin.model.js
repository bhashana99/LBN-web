import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg",
    },
    is_superAdmin:{
        type: Boolean,
        default: false,
    },
    is_admin:{
        type: Boolean,
        default: true,
    }
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;

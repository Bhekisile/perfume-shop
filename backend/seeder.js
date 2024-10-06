import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import perfumes from "./data/perfumes.js";
import User from "./models/userModel.js";
import Perfume from "./models/perfumeModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Perfume.deleteMany();
    await User.deleteMany();  

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const samplePerfumes = perfumes.map((perfume) => {
      return { ...perfume, user: adminUser };
    });

    await Perfume.insertMany(samplePerfumes);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Perfume.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
}

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
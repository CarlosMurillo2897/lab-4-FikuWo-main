import mongoose from 'mongoose';
import User from '../data/userModel.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    const adminUser = 'admin@admin.com';
    const clientUser = 'client@client.com';
    console.log(`Seeding DB with ${adminUser}`);
    
    await User.deleteMany();
    await createUser(adminUser);
    await createUser(clientUser, true);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

async function createUser(data, disabled = false) {
  await User.create({
    name: data,
    email: data,
    password: data,
    nickname: data,
    emailVerified: true,
    disabled
  });
}

export default { connectDB, seedDB };

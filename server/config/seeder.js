import User from '../data/userModel.js';
import users from '../seed/users.js';

const destroyData = async () => {
    try {
      console.log(`Destroying Data.`);
      await User.deleteMany();
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };
  
const seedData = async () => {
    try {
        await destroyData();
        console.log(`Seeding DB.`);
        await User.insertMany(users);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default { destroyData, seedData };
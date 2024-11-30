import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Invalid email address.'],
      maxlength: 32
    },
    password: {
      type: String,
      required: true,
      maxlength: 32
    },
    nickname: {
      type: String,
      required: true,
      unique: true,
      maxlength: 32
    },
    disabled: {
      type: Boolean
    },
    emailVerified: {
      type: Boolean
    },
    isAdmin: {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;

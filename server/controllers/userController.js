import asyncHandler from 'express-async-handler';
import User from '../data/userModel.js';
import generateToken from '../utils/generateToken.js';

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    if(user.disabled) {
      res.status(401);
      throw new Error('User disabled. Contact site administrator.');
    }

    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      nickname: user.nickname,
      disabled: user.disabled,
      emailVerified: user.emailVerified
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, nickname, disabled, isAdmin, emailVerified } = req.body;

  const userExists = await User.findOne({ $or: [ {email}, {nickname} ] });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    nickname,
    isAdmin,
    disabled,
    emailVerified
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      nickname: user.nickname,
      disabled: user.disabled,
      emailVerified: user.emailVerified
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  
  if (users) {
    res.json(users);
  } else {
    res.status(404);
    throw new Error('Users not found.');
  }
});

const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.nickname = req.body.nickname || user.nickname;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    user.disabled = req.body.disabled || user.disabled;
    user.emailVerified = req.body.emailVerified || user.emailVerified;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      nickname: user.nickname,
      isAdmin: user.isAdmin,
      disabled: user.disabled,
      emailVerified: user.emailVerified
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUsers,
  updateUserProfile,
};

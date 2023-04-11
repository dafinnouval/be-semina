const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

const createOrganizer = async (req) => {
  const { organizer, name, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Konfirmasi password tidak cocok");
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    organizer: result._id,
    name,
    email,
    password,
    role,
  });

  delete users._doc.password;

  return users;
};

const createUsers = async (req, res) => {
  const { name, password, role, confirmPassword, email } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Konfirmasi password tidak cocok");
  }

  const result = await Users.create({
    name,
    email,
    organizer: req.user.organizer,
    password,
    role,
  });

  return result;
};

const getAllUsers = async (req) => {
  const result = await Users.find();

  return result;
};

module.exports = { createOrganizer, createUsers, getAllUsers };

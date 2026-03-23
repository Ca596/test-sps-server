import userRepository from "../repositories/user.repository.js";

const getAll = async () => {
  return userRepository.getUsers();
};

const create = async (data) => {
  const exists = userRepository.findByEmail(data.email);

  if (exists) {
    throw new Error("Email already exists");
  }

  return userRepository.createUser(data);
};

const update = async (id, data) => {
  return userRepository.updateUserById(id, data);
};

const getById = async (id) => {
  const user = userRepository.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

const remove = async (id) => {
  return userRepository.deleteUserById(id);
};

export default {
  getAll,
  create,
  update,
  remove,
  getById,
};
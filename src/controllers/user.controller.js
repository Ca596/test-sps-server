import userService from "../services/user.service.js";

export const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const user = await userService.update(Number(req.params.id), req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await userService.getById(Number(req.params.id));
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await userService.remove(Number(req.params.id));
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
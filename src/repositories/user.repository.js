let users = [
  {
    id: 1,
    name: "admin",
    email: "admin@spsgroup.com.br",
    type: "admin",
    password: "1234",
  },
];

// 🔍 FIND BY EMAIL (ESSENCIAL PRO LOGIN)
const findByEmail = (email) => {
  return users.find((u) => u.email === email);
};

// GET
const getUsers = () => users;

// CREATE
const createUser = (data) => {
  const { name, email, type, password } = data;

  const emailExists = users.find((u) => u.email === email);
  if (emailExists) {
    throw new Error("Email already exists");
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    type,
    password,
  };

  users.push(newUser);

  return newUser;
};

// UPDATE
const updateUserById = (id, data) => {
  const user = users.find((u) => u.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  const { name, email, type, password } = data;

  const emailExists = users.find(
    (u) => u.email === email && u.id !== id
  );

  if (emailExists) {
    throw new Error("Email already exists");
  }

  user.name = name ?? user.name;
  user.email = email ?? user.email;
  user.type = type ?? user.type;
  user.password = password ?? user.password;

  return user;
};

// DELETE
const deleteUserById = (id) => {
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    throw new Error("User not found");
  }

  users.splice(index, 1);
};

export default {
  findByEmail,
  getUsers,
  createUser,
  updateUserById,
  deleteUserById,
};
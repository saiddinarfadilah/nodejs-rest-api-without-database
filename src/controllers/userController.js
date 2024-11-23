// Simpan data dalam array (in-memory storage)
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// Get all users
exports.getAllUsers = (req, res) => {
    res.status(200).json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find((u) => u.id === parseInt(id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
};

// Get user by email
exports.getUserByEmail = (req, res) => {
    const { email } = req.params;
    const user = users.find((u) => u.email === email);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
}

// Create new user
exports.createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user by ID
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;

    res.status(200).json(user);
};

// Delete user by ID
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === parseInt(id));

    if (userIndex === -1) return res.status(404).json({ message: "User not found" });

    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
};

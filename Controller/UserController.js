import prisma from "../DB/db.config.js";

// Fetch All Users
export const fetchUsers = async (req, res) => {
    const users = await prisma.user.findMany({});
    return res.json({ status: 200, message: "Users fetched successfully", data: users })
}


// Fetch User By Id
export const fetchUserById = async (req, res) => {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: Number(userId)
        },
    })
    return res.json({
        status: 200,
        message: "User fetched successfullt", data: user
    })
}


// Create User
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })

    if (findUser) {
        return res.json({ status: 400, message: "Email already exists. Please use another email" });
    }

    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password,
        }
    })

    return res.json({ status: 200, message: "User created successfully", data: newUser })
}


// Update Password
export const updatePassword = async (req, res) => {
    const userId = req.params.id;
    const { password } = req.body;

    const updatePassword = await prisma.user.update({
        where: {
            id: Number(userId)
        },
        data: {
            password: password,
        }
    })

    return res.json({ status: 200, message: "User updated successfully", data: updatePassword })
}

// Delete User
export const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const deleteUser = await prisma.user.delete({
        where: {
            id: Number(userId)
        }
    })
    if (!deleteUser) return res.json({ status: 400, message: "User not found" })
    return res.json({ status: 200, message: "User deleted successfully", data: deleteUser })
}

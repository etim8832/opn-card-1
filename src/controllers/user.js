const userService = require("../services/user")

const register = async (req, res) => {
    try {
        const body = req.body
        await userService.register(body)
        return res.status(201).send({ message: 'User registered successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const getUsersById = async (req, res) => {
    try {
        const {id} = req.params
        const userProfile = await userService.getUsersById(id)
        let data = {
            message: 'complete',
            user: userProfile
        }
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const editUser = async (req, res) => {
    try {
        const body = req.body
        await userService.editUser(body)
        return res.status(201).send({ message: 'User update successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        await userService.deleteUserById(id)
        return res.status(201).send({ message: 'Delete User successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

const changePassword = async (req, res) => {
    try {
        const {id} = req.params
        const body = req.body

        await userService.changePassword(id, body)
        return res.status(201).send({ message: 'Update password successfully'})
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
};

module.exports = {
    register,
    getUsersById,
    editUser,
    deleteUser,
    changePassword
};
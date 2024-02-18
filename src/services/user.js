
const bcrypt = require('bcrypt');
const MOCK_DATA = require('../config/data-mock')
const dateTime = require('./dateTime');

const register = async (body) => {
    try {
        const { email, password, name, date_of_birth, gender, address, subscriber_status } = body;
        // Hash password
        const hashedPas = await bcrypt.hash(password, 10); // 10 is the salt rounds
   
        // Save user data to database 
        const userData = {
          email,
          password: hashedPas,
          name,
          date_of_birth,
          gender,
          address,
          subscriber_status
        }
        let query = `INSERT INTO users SET ?`
        // await conn.query(query, userData); assume insert data into DB
        return true
    } catch (error) {
        return ({
        message: "insert fail",
        error,
        });
    }
};

const getUsersById = async (id) => {
    try {
        // Get user by id
        const user = MOCK_DATA.find((f) => f.id === id)
        delete user.password
        user.age = dateTime.calculateAge(user.date_of_birth)
        delete user.date_of_birth
        return user
    } catch (error) {
        return ({
            message: "select fail",
            error,
        });
    }
};

const editUser = async (body) => {
    try {
        // Get user by id
        const { date_of_birth, gender, address, subscriber_status} = body

        const userData = {
            date_of_birth,
            gender,
            address,
            subscriber_status
        }

        let query = `UPDATE users
                     SET date_of_birth = ${date_of_birth}, 
                         gender = ${gender},
                         address = ${address},
                         subscriber_status = ${subscriber_status},
                     WHERE id = ${body.id};`

        // await conn.query(query, userData); assume update data into DB
        return true
    } catch (error) {
        return ({
            message: "update fail",
            error,
        });
    }
};



const deleteUserById = async (id) => {
    try {
        let query = `DELETE FROM users WHERE id = ${id};`
        // await conn.query(query); assume delete user from DB
        return true
    } catch (error) {
        return ({
            message: "delete fail",
            error,
        });
    }
};

const changePassword = async (id, body) => {
    try {
        const [result] = await conn.query("SELECT * from users WHERE id = id");
        const user = result[0];

        // check password before update
        const match = await bcrypt.compare(body.curren_password, user.password);
        if (!match) {
          return { message: "current password is incorrect" };
        }

        // update new password
        const hashedPas = await bcrypt.hash(body.new_password, 10); // 10 is the salt rounds
        let query = `UPDATE users
                    SET password = ${hashedPas}, 
                    WHERE id = ${id};`
 
        // await conn.query(query, userData); assume update data into DB
        return true
    } catch (error) {
        return ({
            message: "delete fail",
            error,
        });
    }
};

module.exports = {
    register,
    getUsersById,
    editUser,
    deleteUserById,
    changePassword
};
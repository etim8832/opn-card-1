const userSchema = require('../model/users')

function validateRegistration(req, res, next) {
    const { error } = userSchema.userRegisterSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next(); 
}

function validateEditProfile(req, res, next) {
    const { error } = userSchema.editUserSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next(); 
}

function validateChangePasswrod(req, res, next) {
    const { error } = userSchema.changePasswordSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next(); 
}

module.exports = {
    validateRegistration,
    validateEditProfile,
    validateChangePasswrod
};
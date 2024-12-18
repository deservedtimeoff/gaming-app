const express = require('express');
const router = express.Router();

const User = require('../models/User')

// Password handler
const bcrypt = require('bcrypt')

router.post('/updateUser', (req, res) => {
    let {email, name, dateOfBirth} = req.body;
    console.log(email);
    console.log(name);
    console.log(dateOfBirth);
    name = name.trim();
    dateOfBirth = dateOfBirth.trim();
    email = email.trim();

    if (name === "" || dateOfBirth === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        });
    } else if (!/^[a-zA-Z ]*$/.test(name))
    {
        res.json({
            status: "FAILED",
            message: "Invalid name entered!"
        })
    } else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid date entered!"
        })
    } else {
        const update = {name: name, dateOfBirth: dateOfBirth};
        User.findOneAndUpdate({email}, update, {new: true}).then(result => {
            if (result)
            {
                res.json({
                    status: "SUCCESS",
                    message: "User details updated successfully!",
                    data: result
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "No user exists!"
                })
            }
        }).catch(() => {
            res.json({
                status: "FAILED",
                message: "An error occurred while updating user details!"
            })
        });
    }
})

router.post('/signup', (req, res) => {
    let {name, email, password, confirmPassword, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    confirmPassword = confirmPassword.trim();
    dateOfBirth = dateOfBirth.trim();

    if (name === "" || email === "" || password === "" || dateOfBirth === "" || confirmPassword === "") {
        res.json({
            status: "FAILED",
            message: "Empty input fields!"
        })
    } else if (!/^[a-zA-Z ]*$/.test(name))
    {
        res.json({
            status: "FAILED",
            message: "Invalid name entered!"
        })
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
    {
        res.json({
            status: "FAILED",
            message: "Invalid email entered!"
        })
    } else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid date entered!"
        })
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Password is too short!"
        })
    } else if (password !== confirmPassword) {
        res.json({
            status: "FAILED",
            message: "Passwords do not match!"
        })
    } else {
        // Check if user already exists
        User.find({email}).then(result => {
            if (result.length) {
                // A user already exists
                res.json({
                    status: "FAILED",
                    message: "User already exists with the provided email!"
                })
            } else {
                // Try to create a new user

                // Hash the password
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        name,
                        email,
                        password: hashedPassword,
                        dateOfBirth
                    });

                    newUser.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "User created successfully!",
                            data: result
                        })
                    })
                        .catch(() => {
                            res.json({
                                status: "FAILED",
                                message: "An error occurred while saving the user!"
                            })
                        })
                })
                    .catch(() => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while hashing the password!"
                        })
                    })
            }
        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user account!"
            })
        })
    }
})

router.get('/getUser/', (req, res) => {
    let {email} = req.query;
    email = email.trim();

    if (email === "") {
        res.json({
            status: "FAILED",
            message: "Empty email supplied!"
        })
    } else {
        User.find({email}).then(data => {
            if (data)
            {
                console.log(data);
                res.json({
                    status: "SUCCESS",
                    message: "User details found!",
                    data: data
                })
            } else{
                res.json({
                    status: "FAILED",
                    message: "User details not found!"
                })
            }

        }).catch((error) => {
            error.json({
                status: "FAILED",
                message: "An error occurred while fetching user details!"
            })
        })
    }
})

router.post('/signin', (req, res) => {
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if (email === "" || password === "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied!"
        })
    } else {
        User.find({email}).then(data => {
            if (data) {
                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    if (result) {
                        res.json({
                            status: "SUCCESS",
                            message: "Sign-in successful",
                            data: data
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered!"
                        })
                    }
                })
                .catch(() => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while comparing the passwords!"
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials entered!"
                })
            }
        })
            .catch(() => {
                res.json({
                    status: "FAILED",
                    message: "An error occurred while checking for existing user account!"
                })
            })
    }
})

module.exports = router;
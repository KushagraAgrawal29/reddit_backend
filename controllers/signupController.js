import jwtDecode from 'jwt-decode';

// models
import User from "../models/User.js";
import Token from "../models/VerifyToken.js";

// validator
import { body, query, param } from "express-validator";

import { hashPassword } from '../utils/passwordUtils.js';

const signupValidator = [
    body("email")
        .trim()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Please provide a valid email address'),
    body("username")
        .trim()
        .not()
        .isEmpty()
        .escape()
        .withMessage("Username cannot be empty"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 chars long"),
];

const signup = async (req,res) => {
    try{
        const { username,email,password } = req.body;
        
        const user = new User({
            username : username,
            email: email,
            password: hashPassword(password),
            createdAt: Date.now(),
        });

        await user.save();

        const result = await finalizeCreateUser(user,true);
        console.log(result);
        return res.status(200).json({
            success: true,
            message: "User created successfully",
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, Please try again",
        });
    }
};
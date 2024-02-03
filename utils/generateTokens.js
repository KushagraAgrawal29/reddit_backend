import Token from "../models/VerifyToken";
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

/**
 * This function accepts user id and return a verification token
 * that will be used later to verify email or reset password
 *
 * @param {string} userId User Id
 * @param {string} type Type of the token (verfiy email, rest password, ...etc)
 * @returns {string} Token created for that user
 */

export async function generateVerifyToken(userId,type) {
    try{
        await Token.deleteOne({ userId: userId, type: type })  // delete any existing tokens for this user & type
        const token = await new Token({
            userId: userId,
            token: crypto().randomBytes(32).toString("hex"),
            type:type,
        }).save()

        return res.status(200).json({
            success: true,
            message: "Verification Token is created",
            token: token
        })
    }
    catch(error){
        console.log('Error in generating Verification Token', error);
        return res.status(500).json({
            success: false,
            message:"Error creating verification token"
        });
    }
};

/**
 * This function accepts user object and return the JWT created for that user
 * using jwt.sign function
 *
 * @param {Object} user User object that contains userId, and username
 * @returns {string} JWT created for that user
 */

export async function generateJWT(user) {
    try{
        const token = jwt.sign(
            {
                userId: user.id,
                username: user.username
            },
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            success:true,
            message:"Token created successfully",
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Could not create a JSON Web Token."
        })
    }
}
import bcrypt from "bcryptjs"

/**
 * This function accepts a password and uses the
 * bcrypt hashSync function to hash it
 *
 * @param {string} password The password to be hashed
 * @returns {string} The hashed password
 */

export function hashPassword(password){
    const hashedPass = bcrypt.hash(
        password + process.env.BCRYPT_PASSWORD,
        parseInt(process.env.SALT_ROUNDS)
    );

    return hashedPass;
}
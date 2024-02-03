import { generateJWT, generateVerifyToken } from "./generateTokens";
import { sendVerifyEmail } from "./sendEmails";

export async function finalizeCreateUser(user,sendEmail) {
    //create verify token and send email to user
    if(sendEmail){
        const VerifyToken = await generateVerifyToken(user._id,"verifyEmail")
        const sendEmail = sendVerifyEmail(user,VerifyToken);

        if(!sendEmail){
            return res.status(401).json({
                success: false,
                message: "Error in sending verification email",
            })
        }
    }

    const token = generateJWT(user);

    return res.status(200).json({
        success: true,
        message:"Successfully created finalised User function",
        body: {
            username: user.username,
            token: token
        }
    })
}
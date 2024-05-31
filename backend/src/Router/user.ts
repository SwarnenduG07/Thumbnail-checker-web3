import { PutObjectAclCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleeare";
import { JWT_SECRET } from "..";

const s3Client = new S3Client();
const userRouter = Router();

const prismaClient = new PrismaClient();


userRouter.get("/presignedUrl", authMiddleware , async (req,res) => {
 //@ts-ignore
    const userId = req.userId;
        const command = new PutObjectAclCommand({
            Bucket: "web-fiver",
            Key: "",
        })
        const preSignedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 3600,
        })
})

userRouter.post("/signin", async (req , res) => {

    // TODO: Add signin verification login with wallat
    const hardcodedWallateAdresses = "0x82919A496F10491df5e2c98c6297Fc935BBea9e1";

    const exixtingUser = await prismaClient.user.findFirst({
        where: {
            address: hardcodedWallateAdresses
        }
    })
        if (exixtingUser) {
            const token = jwt.sign({
                userId: exixtingUser.id,
            }, JWT_SECRET)

            res.json({
                token
            })
        } else {
            const user = await prismaClient.user.create({
                data: {
                    address: hardcodedWallateAdresses
              }
         })
         const token = jwt.sign({
            userId: user.id,
        }, JWT_SECRET)
        res.json({
            token
        })
     }
})

export default userRouter;

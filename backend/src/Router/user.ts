import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import jwt from "jsonwebtoken";
const userRouter = Router();
const JWT_SECRET = "swarnenduG077";
const prismaClient = new PrismaClient();

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

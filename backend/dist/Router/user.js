"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRouter = (0, express_1.Router)();
const JWT_SECRET = "swarnenduG077";
const prismaClient = new client_1.PrismaClient();
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Add signin verification login with wallat
    const hardcodedWallateAdresses = "0x82919A496F10491df5e2c98c6297Fc935BBea9e1";
    const exixtingUser = yield prismaClient.user.findFirst({
        where: {
            address: hardcodedWallateAdresses
        }
    });
    if (exixtingUser) {
        const token = jsonwebtoken_1.default.sign({
            userId: exixtingUser.id,
        }, JWT_SECRET);
        res.json({
            token
        });
    }
    else {
        const user = yield prismaClient.user.create({
            data: {
                address: hardcodedWallateAdresses
            }
        });
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
        }, JWT_SECRET);
        res.json({
            token
        });
    }
}));
exports.default = userRouter;

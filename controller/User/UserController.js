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
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRepositories_1 = require("../../repositories/user/UserRepositories");
const token_repository_1 = require("../../repositories/token-table/token-repository");
const password_repository_1 = require("../../repositories/password-table/password-repository");
const credentail_repository_1 = require("../../repositories/credential-table/credentail-repository");
const configuration_1 = require("../../config/configuration");
class UserController {
    constructor(config) {
        this.userRepository = new UserRepositories_1.default();
        this.tokenRepository = new token_repository_1.default();
        this.passwordRepository = new password_repository_1.default();
        this.credentialRepository = new credentail_repository_1.default();
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, firstName, lastName } = req.body;
                const encryptPassword = yield bcrypt.hash(password, 10);
                const user = Object.assign({
                    email,
                    firstName,
                    lastName,
                    password: encryptPassword,
                });
                const data = yield this.userRepository.create(user);
                const { id } = data;
                delete data.password;
                yield Promise.all([
                    this.credentialRepository.create({ userId: id, passwordHash: encryptPassword, lastLogin: new Date() }),
                    this.passwordRepository.create({ userId: id, passwordHash: encryptPassword, }),
                ]);
                res.send({
                    status: 200,
                    message: "User Added Successfully",
                    data,
                });
            }
            catch (error) {
                console.log(`Error In Registeration ${error}`);
                res.send({
                    status: error.status,
                    message: error.message,
                });
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const userData = yield this.userRepository.get({ email });
                if (!userData) {
                    throw new Error('NO USER EXIST');
                }
                const match = yield bcrypt.compare(password, userData.password);
                console.log(userData, match);
                if (!match) {
                    throw new Error('Wrong Id and password');
                }
                const user = Object.assign(Object.assign({}, userData));
                const refreshToken = jwt.sign(Object.assign({ exp: Math.floor(Date.now() / 1000) + (60 * 60) }, user), this.config.PRIVATE_KEY, { algorithm: 'RS256' });
                const accessToken = jwt.sign(Object.assign({ exp: Math.floor(Date.now() / 1000) + (60 * 15) }, user), this.config.PRIVATE_KEY, { algorithm: 'RS256' });
                yield Promise.all([
                    this.tokenRepository.create({ userId: userData.id, refreshToken }),
                ]);
                const options = {
                    httpOnly: true,
                    secure: true
                };
                res.
                    cookie('accessToken', accessToken, options).
                    cookie('refreshToken', refreshToken, options).
                    send({
                    status: 200,
                    message: "User login Successfully",
                });
            }
            catch (error) {
                console.log(`Error In Registeration ${error}`);
                res.send({
                    status: error.status,
                    message: error.message,
                });
            }
        });
        this.refreshToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const accessToken = req.headers.authorization;
        });
        this.config = config;
    }
}
UserController.getInstance = () => {
    if (!UserController.instance) {
        return (UserController.instance = new UserController(configuration_1.default));
    }
    return UserController.instance;
};
exports.default = UserController.getInstance();
//# sourceMappingURL=UserController.js.map
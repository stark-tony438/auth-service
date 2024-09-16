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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepositories_1 = require("../../repositories/user/UserRepositories");
const bcrypt = require("bcrypt");
class AccountController {
    constructor() {
        this.userRepository = new UserRepositories_1.default();
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userData = __rest(req.body, []);
            const { password: loginPassword } = userData;
            const encryptPassword = yield bcrypt.hash(loginPassword, 10);
            const user = Object.assign(userData, { password: encryptPassword });
            console.log(user);
            const data = yield this.userRepository.create(user);
            console.log('data----------------', data);
            res.send(data);
        });
        this.list = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _a = req.query, { skip, limit, sortBy } = _a, query = __rest(_a, ["skip", "limit", "sortBy"]);
            const options = { skip: Number(skip), limit: Number(limit), sortBy };
            const data = yield this.userRepository.list(query, options);
            res.send(data);
        });
        this.update = (req, res) => {
            const { id, dataToUpdate } = req.body;
            const data = this.userRepository.update(id, dataToUpdate);
            res.send(data);
        };
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('------delete----------');
            const { id } = req.params;
            console.log(id);
            const data = yield this.userRepository.delete(id);
            res.send(data);
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const data = yield this.userRepository.get({ email, password });
            console.log('---------login------------', data);
            res.send(data);
        });
    }
}
AccountController.getInstance = () => {
    if (!AccountController.instance) {
        return AccountController.instance = new AccountController();
    }
    return AccountController.instance;
};
exports.default = AccountController.getInstance();
//# sourceMappingURL=controller.js.map
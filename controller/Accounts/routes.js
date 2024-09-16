"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const accHandler = (0, express_1.Router)();
accHandler.post('/', controller_1.default.create);
accHandler.get('/', controller_1.default.list);
accHandler.put('/', controller_1.default.update);
accHandler.delete('/:id', controller_1.default.delete);
accHandler.post('/login', controller_1.default.login);
exports.default = accHandler;
//# sourceMappingURL=routes.js.map